const express = require("express")

// Create App 
const app = express();

//produckts
const products = [{id:1,turu:"Selam"},{id:2,turu:"Selamin Aleyküm"},{id:3,turu:"Merhaba"}]


//endpoint
app.get("/",(req,res)=>{
    res.send("Turan Mete Güzel!")
})

app.get("/selamver", (req,res)=>{
    res.json(products)
})

app.get("/Dogumyeri",(req,res)=>{
    res.send("Antalya")
})
app.get("/yas",(req,res)=>{
    res.send("20")
})

app.get("/soyad",(req,res)=>{
    res.send("Güzel")
})

app.get("/selamver/:id", (req,res)=>{
    const producktid = req.params.id
    console.log("pro id:",producktid);
    res.json(products.filter((product)=>{
        return product.id == producktid
    }))
})

//Listen PORT
app.listen(2023,()=>{
    console.log("PORT 2023 is dinleniyor...");
})