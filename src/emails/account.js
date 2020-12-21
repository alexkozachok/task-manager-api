const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leshakozachok@gmail.com',
        subject: 'Thanks for Joining In!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the App.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leshakozachok@gmail.com',
        subject: `Good Bye, ${name}. We're sorry to see you go.`,
        text: `Hi ${name}! We're sorry you've decided to delete your account. Was there anything we couuld've done differently to keep you as a user?`
})
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}