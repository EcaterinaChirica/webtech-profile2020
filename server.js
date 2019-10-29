const express = require('express')
const app = express()

app.use('/', express.static('frontend'))
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.get('/messages', function(request, response)
{
    var messages = []
    var message = {
        name: "Ecaterina",
        message: "Hello from the web"
        
    }
    messages.push(message)
    response.status(200).send(messages);
})
 
app.listen(8080)