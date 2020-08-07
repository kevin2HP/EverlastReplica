const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get('/',function (req,res) {
    res.render('home');
  })
  app.get('/services',function (req,res) {
    res.render('services');
  })

app.listen(3000,function () {
    console.log('Server started on port 3000');
    
  })
