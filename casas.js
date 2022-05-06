//jshint esversion:6
//Inicializo los modulos que instalé con npm

//1.Express

const express=require("express");
const app=express();
app.use(express.static("public"));

//2.Body-parser
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//Rutas
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  
});



//Pongo a escuchar al servidor
app.listen(3000,function(){
  console.log("Te estoy escuchando...");
});
