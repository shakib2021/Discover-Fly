






var plusBtn=document.getElementById("plus-btn");
plusBtn.addEventListener("click",function(){

    firstClassPlus("input1","firstClassCurrent","vat","total")
});
var minusBtn=document.getElementById("minus-btn");
minusBtn.addEventListener("click",function(){

    firstClassMinus("input1","firstClassCurrent","vat","total")
});
///////
function firstClassPlus(firstClassIdMoney,subtotal,vatId,total){
   var firstClassValue=document.getElementById(firstClassIdMoney).value;
   var firstClassValueToNumber=parseFloat(firstClassValue);
   var firstClassValueIncrease=firstClassValueToNumber+1;
   

   document.getElementById(firstClassIdMoney).value=firstClassValueIncrease;
  
   //subtotal
   var firstClassCurrent=document.getElementById(subtotal).innerText;
   var firstClassCurrentToNumber=parseFloat(firstClassCurrent);
   var subtotalIncrease=firstClassCurrentToNumber+150;

   document.getElementById(subtotal).innerText=subtotalIncrease;
//vat
var vat=document.getElementById(vatId).innerText;
var vatToNumber=parseFloat(vat);
var vatIncrease=vatToNumber+15;
document.getElementById(vatId).innerText=vatIncrease;
//Total
   var totalIs=document.getElementById(total).innerText;
   var totalNumber=parseFloat(totalIs);
   var nowTotalIs=totalNumber+ subtotalIncrease+vatIncrease-totalNumber;
     document.getElementById(total).innerText=nowTotalIs;
};
////////first-class-minus////////////////////////

function firstClassMinus(firstClassIdMoney,subtotal,vatId,total){
    if(document.getElementById(firstClassIdMoney).value<2){
        alert("You Should Buy at Least 1 Ticket")
    }
    else{
        var firstClassValue=document.getElementById(firstClassIdMoney).value;
        var firstClassValueToNumber=parseFloat(firstClassValue);
        var firstClassValueIncrease=firstClassValueToNumber-1;
        document.getElementById(firstClassIdMoney).value=firstClassValueIncrease;
         
        //subtotal
        var firstClassCurrent=document.getElementById(subtotal).innerText;
        var firstClassCurrentToNumber=parseFloat(firstClassCurrent);
        var subtotalIncrease=firstClassCurrentToNumber-150;
     
        document.getElementById(subtotal).innerText=subtotalIncrease;
        //vat
   var vat=document.getElementById(vatId).innerText;
   var vatToNumber=parseFloat(vat);
   var vatIncrease=vatToNumber-15;
   document.getElementById(vatId).innerText=vatIncrease;
 //Total

var totalIs=document.getElementById(total).innerText;
var totalNumber=parseFloat(totalIs);
var nowTotalIs=totalNumber+subtotalIncrease+vatIncrease-totalNumber;
  document.getElementById(total).innerText=nowTotalIs;
 };
};

 //this is for Economy class ticket

 var plusBtn2=document.getElementById("plus-btn2");
 plusBtn2.addEventListener("click",function(){
 
     firstClassPlus2("input2","firstClassCurrent","vat","total")
 });
 var minusBtn2=document.getElementById("minus-btn2");
 minusBtn2.addEventListener("click",function(){
 
     firstClassMinus2("input2","firstClassCurrent","vat","total")
 });
 ///////
 function firstClassPlus2(firstClassIdMoney,subtotal,vatId,total){
    var firstClassValue=document.getElementById(firstClassIdMoney).value;
    var firstClassValueToNumber=parseFloat(firstClassValue);
    var firstClassValueIncrease=firstClassValueToNumber+1;
    
 
    document.getElementById(firstClassIdMoney).value=firstClassValueIncrease;
   
    //subtotal
    var firstClassCurrent=document.getElementById(subtotal).innerText;
    var firstClassCurrentToNumber=parseFloat(firstClassCurrent);
    var subtotalIncrease=firstClassCurrentToNumber+100;
 
    document.getElementById(subtotal).innerText=subtotalIncrease;
 //vat
 var vat=document.getElementById(vatId).innerText;
 var vatToNumber=parseFloat(vat);
 var vatIncrease=vatToNumber+10;
 document.getElementById(vatId).innerText=vatIncrease;
 //Total
    var totalIs=document.getElementById(total).innerText;
    var totalNumber=parseFloat(totalIs);
    var nowTotalIs=totalNumber+ subtotalIncrease+vatIncrease-totalNumber;
      document.getElementById(total).innerText=nowTotalIs;
 };
 ////////first-class-minus////////////////////////
 
 function firstClassMinus2(firstClassIdMoney,subtotal,vatId,total){
     if(document.getElementById(firstClassIdMoney).value<2){
         alert("You Should Buy At Least 1 Ticket")
     }
     else{
         var firstClassValue=document.getElementById(firstClassIdMoney).value;
         var firstClassValueToNumber=parseFloat(firstClassValue);
         var firstClassValueIncrease=firstClassValueToNumber-1;
         document.getElementById(firstClassIdMoney).value=firstClassValueIncrease;
          
         //subtotal
         var firstClassCurrent=document.getElementById(subtotal).innerText;
         var firstClassCurrentToNumber=parseFloat(firstClassCurrent);
         var subtotalIncrease=firstClassCurrentToNumber-100;
      
         document.getElementById(subtotal).innerText=subtotalIncrease;
         //vat
    var vat=document.getElementById(vatId).innerText;
    var vatToNumber=parseFloat(vat);
    var vatIncrease=vatToNumber-10;
    document.getElementById(vatId).innerText=vatIncrease;
  //Total
 
 var totalIs=document.getElementById(total).innerText;
 var totalNumber=parseFloat(totalIs);
 var nowTotalIs=totalNumber+subtotalIncrease+vatIncrease-totalNumber;
   document.getElementById(total).innerText=nowTotalIs;
  };
 };
 
//////book now
var bookNow=document.getElementById("bookNow");
bookNow.addEventListener("click",function(){
  var  from2=document.getElementById("from").value;
  
if( from2===""){
    
    alert("plz fill the form");
}
var  to2=document.getElementById("to").value;

if( to2===""){
    
    alert("plz fill the form");
}
var  departure2=document.getElementById("depar").value;

if( departure2===""){
    
  alert("plz fill the form");
}


var  return2=document.getElementById("return").value;

if( return2===""){
    
  alert("plz fill the form");
}

 else{
    var bookingSection=document.getElementById("booking section");
    bookingSection.style.display="none";
    
    var completeSection=document.getElementById("complete");
    completeSection.style.display="block";

   //from
    var from=document.getElementById("from").value;
    var fromToUppercase=from.toUpperCase();
    var from2=document.getElementById("from2");
    from2.innerText=fromToUppercase;
  //to
    
  var to=document.getElementById("to").value;
  var toToUppercase=to.toUpperCase();
  var to2=document.getElementById("too");
  to2.innerText=toToUppercase;
 /// departure
 var departure=document.getElementById("depar").value;
   var departureLocation=document.getElementById("departure");
  departureLocation.innerText=departure;
//return
var returnTo =document.getElementById("return").value;
var return2reLocation=document.getElementById("return2");
return2reLocation.innerText=returnTo;
//first class ticket
var firstClassTicket =document.getElementById("input1").value;
var firstClassLocation=document.getElementById("firstClassTicket");
firstClassLocation.innerText=firstClassTicket;
//economic
var ecoClassTicket =document.getElementById("input2").value;
var ecoClassLocation=document.getElementById("econoClassTicket");
ecoClassLocation.innerText=ecoClassTicket;

//total ticket
var totalTicket =firstClassTicket+"+"+ecoClassTicket;
var totalTicketLocation=document.getElementById("totalTicket2");
totalTicketLocation.innerText=totalTicket;
//totalCost
var totalCost2 =document.getElementById("total").innerText;
var totalTicketCost=document.getElementById("cost");
totalTicketCost.innerText=totalCost2+"$";

}


    


});
