var express = require('express')
const { listen } = require('express/lib/application')
var router = express.Router()
var list = require('./list');

router.get('/bmi', async (req, res) => {
    //BMI = Body Mass Index
    let {name = '', weight = 0, height = 0} = req.query
    weight = parseFloat(weight)
    height = parseFloat(height)
    if (isNaN(weight)||isNaN(height)) { //NaN = Not a Number
        res.json({
            result: "failed",
            message: "Bạn phải nhập chiều cao và cân nặng"
        })
        return
    }
    if (name === "") {
        res.json({
            result: "ok",
            message: "Bạn phải nhập tên người"
        })
        return
    }
    debugger
    let bmi = Math.round(weight / (height * height), 2)
    let message = ""
    if (bmi < 15) {
        message = "Quá gầy"
    } else if(bmi >= 15 && bmi < 18.5) {
        message = "Hơi gầy"
    } else if(bmi >= 18.5 && bmi < 25) {
        message = "Thể trạng bình thường"
    } else if(bmi >= 25 && bmi < 30) {
        message = "Hơi mập"
    } else if(bmi >= 30 && bmi < 40) {
        message = "Mập"
    } else if(bmi >= 40) {
        message = "Quá mập"
    }
    res.json({
        result: "ok",
        data: bmi,
        message: `Chỉ số BMI của bạn: ${name} là: ${bmi} => ${message}`
    })
})

router.get('/bmiPage',async (req,res)=>{
    res.render('bmiPage')
})
    
router.post('/add',async(req,res)=>{
    let {id,name} = req.body;
    list.push({id: parseInt(id),
               name: JSON.stringify(name) });
    res.JSON(list);
})

module.exports = router