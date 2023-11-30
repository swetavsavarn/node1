const app=require('express')()
app.use('/',((req,res)=>{
    res.status(200).json({"message":1})
}))
app.listen('5001')