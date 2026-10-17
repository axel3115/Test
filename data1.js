dat2= data1.split("\n")
dat3=""
dat5=""
dat41=""
cdate=""
adate=""
function searching(){
for(i=0;i<dat2.length;i++){
        
     if( dat2[i].includes(searchbox.value.toUpperCase())){
          dat3=dat3+"<br><br>"+dat2[i]
         
          
          if (dat2[i].includes("1710 1022")){
          dat4=dat2[i].split("1710 1022")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"<br>"+dat331+" Show Room<br>"+dat33+" Pcs<br><br><br><br>"+dat41
           }
               if (dat2[i].includes("1710 1030")){
          dat4=dat2[i].split("1710 1030")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            dat41=dat4[0]+"<br>"+dat331+" Warehouse <br>"+dat33+" Pcs <br><br><br><br>"+dat41
  
          }
          
               if (dat2[i].includes("1662 1010")){
          dat4=dat2[i].split("1662 1010")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
    
               
            dat41=dat4[0]+"<br>"+dat331+"<br>"+dat33+" Pcs<br>TG LeadTime "+adate+"<br><br><br><br>"+dat41
  
          }
               if (dat2[i].includes("1180 1010")){
          dat4=dat2[i].split("1180 1010")
               dat33=dat4[1].split(" ")[2]
                    dat331=dat4[1].split(" ")[6]
            
               
            dat41=dat4[0]+"<br>"+dat331+"<br>"+dat33+" Pcs <br>TG Lead Time "+cdate+"<br><br><br><br>"+dat41
    
          }
             
             
   
       //   dat41=dat4[1].split(searchbox.value)
     //    dat5=dat5+"n<br>"+dat41[1]
     }else{
}
}
}
cday=""
function caintaDate(){

                   now1= new Date()
                    now1.setDate(now1.getDate()+7)
                    cday=now1.getDay()
                    if(cday==0){
                         now1.setDate(now1.getDate()+2)
                                      cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                      }  
                        if(cday==1){
                         now1.setDate(now1.getDate()+1)
                                     cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                      }  
                           if(cday==2){
                         now1.setDate(now1.getDate()+2)
                                       cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                       }  
                              if(cday==3){
                         now1.setDate(now1.getDate()+1)
                                      cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                      }  
                      
                             if(cday==4){
                         now1.setDate(now1.getDate()+3)
                                 cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                      }  
                             if(cday==5){
                         now1.setDate(now1.getDate()+2)
                        cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
     
                      }  
                             if(cday==6){
                         now1.setDate(now1.getDate()+1)
                          cdate=now1.getMonth()+"/"+now1.getDate()+"/"+now1.getFullYear()
                      }  
                      
                    
                    
                    
       
}
aday=""
function alaminosDate(){

                  now= new Date()
                    now.setDate(now.getDate()+3)
                    aday=now.getDay()
                    if(aday==0){
                         now.setDate(now.getDate()+2)
                          adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()
                      }  
                        if(aday==1){
                         now.setDate(now.getDate()+1)
                  adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()
                      }  
                           if(aday==2){
                         now.setDate(now.getDate()+2)
                     adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()

                       }  
                              if(aday==3){
                         now.setDate(now.getDate()+1)
                         adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()

                      }  
                      
                             if(aday==4){
                         now.setDate(now.getDate()+3)
                          adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()

                      }  
                             if(aday==5){
                         now.setDate(now.getDate()+2)
                           adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()

                      }  
                             if(aday==6){
                         now.setDate(now.getDate()+1)
                          adate=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()

                      }  
                      
                                              
                    
                      
               
}
function search(){
//window.open("http://www.google.com")
caintaDate()
alaminosDate()
searching()
//alert(dat3)
dat3=""
//alert(dat5)
dat5=""
         bodydata.innerHTML=""
         bodydata.innerHTML=dat41
         dat41=""
         searchbox.value=""
alert("upadate")
              }
