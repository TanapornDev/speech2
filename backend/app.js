const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 5000 //กำหนด PORT ให้ SERVER



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/Testapi', (req, res) => { //สร้าง Route-API สำหรับขอข้อมูล โดยใช้ HTTP METHOD "GET"
  res.send({ express: ' I am NAMFON from EXPRESS. ' });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`) 
})


