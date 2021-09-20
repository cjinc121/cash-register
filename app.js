var bill=document.querySelector(".inp-bill");
var cash=document.querySelector(".inp-cash");
var button=document.querySelector(".btn");
var message=document.querySelector(".comments");
var notes=document.querySelectorAll(".note");
button.addEventListener("click",()=>{
  hide();
  if(bill.value>0)
  {var bal=cash.value-bill.value;
    if(bal>0)
    {
      
      var arr=[2000,500,100,20,10,5,1];
      var t=0;
      arr.map((i)=>{
          notes[t].innerText=Math.floor(bal/i); 
            bal=bal%i;
            t++;
      });
    
  }
    else
    {
show("CALL YOUR PARENTS");
    }
  }
  else
  {
show("INVALID AMOUNT !!");
  }  });
function hide()
{
  message.style.display="none";
}
function show(msg)
{
  message.style.display="block";
  message.innerText=msg;
}