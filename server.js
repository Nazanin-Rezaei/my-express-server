

const express=require ("express");

const app=express();


app.get("/", function(request, response){
  response.send("<h1>Hello, World! </h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at : nazzanin@gmail.com");
});

app.get("/about", function (req, res){
  res.send("Nazanin is an owner of this webpage. I got my degree in Engineering and then switched to become a web developer.");
});

app.get("/hobbies",  function(req, res){
  res.send("<ul><li>Coffe</li><li>Code</li><li>Wine</li></ul>");
});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
