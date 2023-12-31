const express= require('express');

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/user",require("./routes/user"));
app.use("/chatroom",require("./routes/chatroom"));

module.exports=app;