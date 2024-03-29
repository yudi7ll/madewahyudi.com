import fetch from 'node-fetch'
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

interface ContactBody {
  name: string
  subject: string
  email: string
  message: string
}

export default async function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { name, subject, email, message } = req.body
  const url = 'https://api.sendinblue.com/v3/smtp/email'
  const payload = {
    sender: { name, email },
    subject,
    htmlContent: message,
    to: [
      {
        email: 'madewahyudi0@gmail.com',
        name: 'Yudi',
      },
    ],
  }
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.API_KEY ?? 'lol',
    },
    body: JSON.stringify(payload),
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    res.json({ success: false })
    return
  }

  res.json({ success: true })
}
