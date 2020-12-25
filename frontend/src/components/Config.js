import React, { Component } from 'react'




export default class Config extends Component {


    

    render() {
        return (
            <div><h2>REACT - EXPRESS</h2>
            <br />
            <p><b>BACKEND(EXPRESS)</b></p>
            <p>สร้างไฟล์ app.js เพื่อสร้าง server และกำหนด PORT ให้ server เช่น กำหนดไว้ที่ PORT:5000</p>
            <img src="/pic01/7.jpg" width="500" height="300" />
            <br /><br />
            <p>ติดตั้ง body-parser เพื่อเพิ่ม middleware ไว้กรอง request</p>
            <p> คำสั่ง npm install body-parser</p>
            <p><b>ลองทดสอบ server</b></p>
            <img src="/pic01/9.jpg" width="500" height="195" />
            <br /><br />
            <p>เชื่อมต่อกับ server สำเร็จแล้ว</p>

            <br /><br />
            <p><b>FRONTEND(REACT)</b></p>
            <img src="/pic01/8.jpg" width="500" height="250" />
            <br /><br/>
            <p>กำหนดค่า proxy เพิ่มใน package.json ของส่วน Frontend <br />เพื่อไว้ติดต่อกับ Express โดยเลข PORT ต้องตรงกับที่กำหนดไว้ในส่วน Backend</p>
            <img src="/pic01/10.jpg" width="570" height="350" />
            <p>สร้าง component ใหม่ เพื่อเป็นการดึงข้อมูลมาจาก express </p>
            <p>หลังจากเชื่อมต่อ server แล้ว ให้ใช้คำสั่ง npm start ที่ส่วนของ Frontend เพื่อทดสอบ </p>
            <img src="/pic01/11.jpg" width="570" height="350" />
            
           




            
            
            
            
            
            
            </div>

        );
    }
}