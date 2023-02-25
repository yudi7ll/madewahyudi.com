import React, { FormEvent, useRef, useState } from 'react'
import { ContactIllustration } from '../../../components/svg'
import './styles.scss'

const ContactForm = () => {
  const name = useRef(null)
  const email = useRef(null)
  const message = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setIsLoading(true)

      const body = {
        name: name.current,
        email: email.current,
        subject: `New message from ${document.location.host}`,
        message: message.current,
      }
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        throw new Error()
      }

      const result = await res.json()
      if (!result.success) {
        throw new Error()
      }

      alert({ message: 'Your message has been sent.' })
      name.current = null
      email.current = null
      message.current = null
    } catch (_) {
      alert('Failed to send your message. Try again later')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="px-4 mt-8 lg:mt-40">
      <p className="text-2xl font-bold mb-2">
        Like my work? please let me know.
      </p>
      <form onSubmit={submitHandler}>
        <div className="mb-3 w-full">
          <input
            className="form-input"
            disabled={isLoading}
            id="name-input"
            placeholder="Full Name"
            ref={name}
            type="text"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-input"
            disabled={isLoading}
            id="email-input"
            placeholder="Email"
            ref={email}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-input"
            disabled={isLoading}
            id="message-input"
            placeholder="Say hi..."
            ref={message}
            required
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="text-sm rounded bg-[#2D2647] text-white py-2 px-3 font-bold hover:opacity-80 transition duration-300 ease-in-out"
        >
          {isLoading ? 'Sending ...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  )
}

const Contact = () => (
  <div className="pt-40" id="contact">
    <div className="container">
      <div className="flex flex-wrap justify-center items-center xl:space-x-12">
        <ContactForm />
        <ContactIllustration className="w-100" />
      </div>
    </div>
  </div>
)

export default Contact
