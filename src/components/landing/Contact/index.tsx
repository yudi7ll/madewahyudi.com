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
    <>
      <p className="contact__header">Like my work? please let me know.</p>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            className="form-control rounded-0"
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
            aria-describedby="emailHelp"
            className="form-control rounded-0"
            disabled={isLoading}
            id="email-input"
            placeholder="Email"
            ref={email}
            required
            type="email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control rounded-0"
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
          className="text__sm btn bg--purple text-white py-2 px-3 rounded-0 fw-bold rounded-0"
        >
          {isLoading ? 'Sending ...' : 'SEND MESSAGE'}
        </button>
      </form>
    </>
  )
}

const Contact = () => (
  <div className="contact" id="contact">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <ContactForm />
        </div>
        <div className="col-lg-7">
          <ContactIllustration className="w-100" />
        </div>
      </div>
    </div>
  </div>
)

export default Contact
