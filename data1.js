
<html>
<center>
 
<body bgColor="white">


<h1> Helper </h1>
     <input id="searchbox"></input>
     <button onClick="search()">Search</button><br><br>
     <div id="bdata">
     <text id="bodydata"></text>
     <text id="notes"></text>
    
    </div>      

<style>
#bdata{
  background-color:white;
  display:flex;
  flex-direction:row;
  overflow:scroll;
  height:70vh;
    box-shadow:2px 2px 10px #ccc;
   
}
#bodydata{
    overflow:scroll;
    text-align:left;
    width:80vh;
      box-shadow:2px 2px 10px #ccc;
      padding:10px;
     
}

input{
   border:0;
   border-radius:5px;
   padding:5px;
  box-shadow:2px 2px 10px #ccc;
  width:20vh;
}
button{
    background-color:#5cccfc;
    border:0;
    border-radius:5px;
    padding:5px;
    margin-left:5px;
    box-shadow:2px 2px 10px #ccc;
    width:10vh;
}

#notes{
   
     background-color:#ccc;
     width:30vh;
     padding:15px;
       box-shadow:2px 2px 10px #ccc;
     
 }
 
 body{
     width:100%;
     height:100%;
  position:fixed;
     
 } 
</style>
   </body>
    


</html>
