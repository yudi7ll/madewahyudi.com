import React, { FormEvent, useState } from 'react'
import { ContactIllustration } from '../../../components/svg'
import './styles.scss'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setIsLoading(true)
      console.log(name, email, message)

      const body = {
        name,
        email,
        subject: `New message from ${document.location.host}`,
        message,
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

      alert('Your message has been sent.')
      resetForm()
    } catch (e) {
      console.error(e)
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-input"
            disabled={isLoading}
            id="message-input"
            placeholder="Say hi..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
