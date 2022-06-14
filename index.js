// const config = require("./config.js");
const app = require('express')();
const bodyParser = require('body-parser');
const { getBanks, checkBank } = require('./core/main.js');
// const axios = require('axios').default;
const coreOps = require('./core/main.js');
app.use(bodyParser.json());


process.on('unhandledRejection', err => {
    console.log(err)
});	

app.get('/', async function (req, res) {
   
  res.status(200).json({ ok: "Testing Loan-App" })  

}); 	

app.post('/send-otp', async function (req, res) {

  // console.log("send otp")
  
  const data = req.body;

  let sendOtpresponse = await coreOps.sendOtp(data);

  res.json(sendOtpresponse);
    
});



app.post('/get-vendors', async function (req, res) {
  const data = req.body;
  
  let getVendorResponse = await coreOps.getVendors(data);

  res.json(getVendorResponse)
  
});



app.post('/check-vendor', async function (req, res) {
  const data = req.body;
  
  let checkVendorResp = await coreOps.checkVendor(data);

  res.json(checkVendorResp)  
  
});

app.post('/bot-request', async function (req, res) {
  
  const data = req.body;
  
  let processRequestResp = await coreOps.handleRequest(data);

  res.json(processRequestResp)
});



app.post('/get-banks', async function (req, res) {
  
  const data = req.body;
  let resp_data = await getBanks(data);
  
  res.json(resp_data);
    
});


app.post('/check-bank', async function (req, res) {
  
  const data = req.body;
  
  let resp_data = await checkBank(data)
  
  
  res.json(resp_data);


});


module.exports = app;


// app.listen(process.env.PORT || 5000, function () {
//     console.log('Listening on port 80..');
// });

