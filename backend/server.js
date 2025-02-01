import express from "express";
import cors from "cors";
import axios from 'axios';
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Server is ready');
});
app.use(express.json()); // Parse JSON request bodies
const port = process.env.PORT || 3000;
app.post('/api/signup', (req, res) => {
    // Add your database logic here
    console.log(req.body);
    res.status(201).json({ message: "User created successfully" });
  });
  

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});