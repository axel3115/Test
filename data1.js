
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
  width:70%;
}
button{
    background-color:#5cccfc;
    border:0;
    border-radius:5px;
    padding:5px;
    margin-left:5px;
    box-shadow:2px 2px 10px #ccc;
    width:20%;
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
