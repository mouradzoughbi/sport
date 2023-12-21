//  import app
const app =require("./backend/app");
// app is listening to reqs on PORT 3000
//  http:// localhost:3000
app.listen(3000,()=>{
    console.log("APP is listening on PORT 3000...");
});