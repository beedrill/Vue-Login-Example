const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors')
const port = 3000

// use cookie parser to save login information on frontend
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser())

//this is just enable CORS for the server
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors({credentials: true, origin: true}))
app.post('/login', function(req, res, next) {
 // Handle the post for this route
 info = req.body;
 //doing a fake varification here
 if(info.email==="123@123.com" && info.password ==="123")
 {
   //set cookie that expire for 7 days
   //res.cookie('username', '123', {expire : new Date() + 7 * 24 * 60 * 60 * 1000}).json({status:'success'});
   res.cookie('username', '123').json({status:'success'});
 }
 else
 {
   res.send(403).json({status:'fail'});
 }
 //fake verification done

 next();
});
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}
app.get('/home', function(req, res, next){
  console.log(req.cookies)
  if(isEmptyObject(req.cookies))
  {
    console.log('unauthorized user!')
    res.send('unauthorized user')
  }
  else
  {
    console.log('authorized user!')
    res.send(req.cookies['username'])
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
