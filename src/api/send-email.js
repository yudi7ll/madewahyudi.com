import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const {
    name, email, subject, message,
  } = req.body;
  const url = 'https://api.sendinblue.com/v3/smtp/email';
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
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.API_KEY,
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    res.json({ success: false });
  }

  res.json({ success: true });
}
