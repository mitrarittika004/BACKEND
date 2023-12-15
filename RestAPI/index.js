const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8002;

app.get("/users",function(req,res){
  const html =`
  <ul>
  ${users.map((user)=> `<li>${user.first_name}</li>`).join('')}
  </ul>
  `;
  res.send(html)
})

//routes
app.get("/api/users", function (req, res) {
  return res.json(users);
})

//had the same path for get patch and delete requests , so we grouped it
app
.route("/api/users/:id") 
.get( function(req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})
.patch(function(req,res){
  //edit user with id
   return res.json({ status: "pending"})
})
.delete(function(req,res){
  //delete user with id 
  return res.json({ status:"pending"})
})
app.post('/api/users', function(req,res){
  //TODO : CREATE NEW USERS
  return req.json({ status:"pending"})
})




app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
