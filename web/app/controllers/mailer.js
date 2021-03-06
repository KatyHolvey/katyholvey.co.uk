const sendGrid = require('@sendgrid/mail')

const controller = (req, res) => {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
  const message = {
    to: process.env.CONTACT_EMAIL,
    from: `${req.body.name} <${req.body.email}>`,
    subject: 'Message from contact form',
    text: `${req.body.message}\n\nName: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}`,
  }

  sendGrid.send(message)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      res.sendStatus(error.code)
    })
}

module.exports = controller
