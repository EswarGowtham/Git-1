const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/add-message', (req, res, next) => {
    const username = req.query.username;
    res.send(`<form action="/message/add-message?username=${username}" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form>`);
});

router.post('/add-message', (req, res, next) => {
    const { message } = req.body;
    const username = req.query.username;

    saveToFile(username, message, (err) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        displayMessages(res, username);
    });
});

function saveToFile(username, message, callback) {
    const data = `${username}: ${message}\n`;
    fs.appendFile('messages.txt', data, (err) => {
        if (err) {
            console.error('Error saving message to file:', err);
            callback(err);
        } else {
            console.log('Message saved to file!');
            callback(null);
        }
    });
}

function displayMessages(res, username) {
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const form = `<form action="/message/add-message?username=${username}" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form>`;
        const messages = `<p>${data}</p>`;
    
        res.send(form + messages);
    });
}

module.exports = router;
