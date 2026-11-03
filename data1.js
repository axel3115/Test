
<html>
<center>
 
<body bgColor="white">


<h1> Helper </h1>
     <input id="searchbox"></input>
     <button onClick="search()">Search</button><br><br>
     <div id="bdata">
     <div id="bodydata"></div>
    <div id="notes"></div>
    
    </div>      

<style>
#bdata{
  background-color:white;
  display:flex;
  flex-direction:row;
  overflow:scroll;
  height:70%;
    box-shadow:2px 2px 10px #ccc;
   
}
#bodydata{
    overflow:scroll;
    text-align:left;
    width:80%;
      box-shadow:2px 2px 10px #ccc;
      padding:10px;
     
}

input{
   border:0;
   border-radius:5px;
   padding:5px;
  box-shadow:2px 2px 10px #ccc;
}
button{
    background-color:#5cccfc;
    border:0;
    border-radius:5px;
    padding:5px;
    margin-left:5px;
    box-shadow:2px 2px 10px #ccc;
    width:30%;
}

#notes{
   
     background-color:#ccc;
     width:30%;
     padding:15px;
       box-shadow:2px 2px 10px #ccc;
     
 }
</style>
   </body>
    <script src="Html/data.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/axel3115/Test@main/data.js"></script>



</html>
