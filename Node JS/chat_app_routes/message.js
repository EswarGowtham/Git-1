const express =require('express')
const fs = require('fs');
const router =express.Router()

router.get('/add-message',(req,res,next)=>{
    const username = req.query.username
    res.send(`<form action="/message/add-message?username=${username}" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form>`);
});
  
router.post('/add-message',(req,res,next)=>{
    const { message } = req.body;
    const username = req.query.username 
    saveToFile(username, message);
    DisplayUsername()
    res.redirect(`/message/add-message?username=${username}`);
})
function saveToFile(username, message) {
    const data = `${username}: ${message}\n`;
    fs.appendFile('messages.txt', data, (err) => {
      if (err) throw err;
      console.log('Message saved to file!');
    });
    //fs.writeFile('messages.txt',data)
}

// function saveToLocalStorage(username, message) {
//     const messages = JSON.parse(localStorage.getItem('messages'))
//     messages.push({ username, message });
//     localStorage.setItem('messages', JSON.stringify(messages));
//     console.log(messages)
// }
function DisplayUsername() {
  fs.readFile('messages.txt', 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data)
    const messages = data.split('\n').filter((line) => line.trim() !== '');
    const lastMessage = messages[messages.length - 1];
    console.log(messages)
    if (lastMessage) {
      const lastUsername = lastMessage.split(':')[0].trim();
      console.log('Last username:', lastUsername);
    }
  });
}
module.exports=router