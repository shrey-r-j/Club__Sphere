import express from "express";
import cors from "cors";
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Server is ready');
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});