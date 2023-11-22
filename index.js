const express=require('express')
const cors=require('cors')
const cities=require('./cities-name-list.json')
const app=express()
app.use(cors())
app.get('/',(req,res)=>{
    res.json({"data":cities.data})
})
app.get('/search', (req, res) => {
    const s = req.query.data;
    const matchingCities = cities.data.filter(city => city.includes(s));

    res.json({ data:matchingCities });
});
app.listen(5000,()=>{console.log("server is running")})
