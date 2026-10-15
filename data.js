dat2= data1.split("\n")
dat3=""
dat5=""
dat41=""
function searching(){
for(i=0;i<dat2.length;i++){
        
     if( dat2[i].includes(searchbox.value.toUpperCase())){
          dat3=dat3+"\n\n"+dat2[i]
         
          
          if (dat2[i].includes("1710 1022")){
          dat4=dat2[i].split("1710 1022")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"\n\n"+dat331+"\n\n"+dat33+"\n\n\n\n"+dat41
           }
               if (dat2[i].includes("1710 1030")){
          dat4=dat2[i].split("1710 1030")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"\n\n"+dat331+"\n\n"+dat33+"\n\n\n\n"+dat41
  
          }
          
               if (dat2[i].includes("1662 1010")){
          dat4=dat2[i].split("1662 1010")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"\n\n"+dat331+"\n\n"+dat33+"\n\n\n\n"+dat41
  
          }
               if (dat2[i].includes("1180 1010")){
          dat4=dat2[i].split("1180 1010")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"\n\n"+dat331+"\n\n"+dat33+"\n\n\n\n"+dat41
  
          }
             
             
   
       //   dat41=dat4[1].split(searchbox.value)
     //    dat5=dat5+"n\n"+dat41[1]
     }else{
       
     }
}
}




function search(){
searching()
//alert(dat3)
dat3=""
//alert(dat5)
dat5=""
      
          alert(dat41)
          dat41=""
}
   function alaminos(){
    now= new Date()
    now.setDate(now.getDate()+3)
    alert(now.getDay())
  
 
    }
    alert("ready12")
