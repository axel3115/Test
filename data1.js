<html>
<center>
 


<div id="bbbb">
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
  width:15vh;
  height:3vh;
  font-size:1vh;
}
  h1{
    font-size:3vh; 
  }
button{
    background-color:#5cccfc;
    border:0;
    border-radius:5px;
    padding:5px;
    margin-left:5px;
    box-shadow:2px 2px 10px #ccc;
    width:10vh;
    height:3vh;
    font-size:1vh;
}

#notes{
   
     background-color:#ccc;
     width:30vh;
     padding:15px;
       box-shadow:2px 2px 10px #ccc;
     
 }
  #bbbb{
   width:100%;
    height:100%;
    overflow:hidden;
    position:fixed;
    top:0;
  }
  iframe{
   display:none; 
  }
  body{
    position:fixed;
    width:100%;
    height:100%;
  }
</style>
  </div>


</html>
