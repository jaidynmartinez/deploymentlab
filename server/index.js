const express = require('express')
const path = require('path')

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '8377fb9c15484c01be51b1bd642759af',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hewwo, wowld!");

const app = express()

app.use(express.json())

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.get('/styles.css',function(req,res) {
    res.sendFile(path.join(__dirname, '../client/styles.css'));
});

// try {
//   nonExistentFunction();
// } catch (error) {
//   console.error(error);
// };

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


