let uniq = require("uniq");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];



const sendEmail = require('send-email')
 
let payload = {
    "to": "test@email.com",
    "subject": "sending emails using send-email",
    // "text": "hello world!",
    "html": "hello <b>world</b>!",
    "from": "Myself <myself@domain.com>"
}
sendEmail(payload)
    .then((res) => {
        console.log(res);
    })

    uniq(sendEmail);