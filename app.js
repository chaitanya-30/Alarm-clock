let secletsec=document.querySelectorAll("select");
let displaytime=document.querySelector("h1");
let setalarm=document.querySelector("button");
let columnselect=document.querySelector(".column")

var selectedtime;
var isalarmset=false;
var ringtone=new Audio("tic-tac-27828.mp3");
for(i=12;i>0;i--){
    i=i<10?"0"+i:i;

    let option=`<option value="${i}">${i}</option>`;
    secletsec[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
for(i=60;i>=0;i--){
    i=i<10?"0"+i:i;
  
    let option=`<option value="${i}">${i}</option>`;
    secletsec[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
for(i=60;i>=0;i--){
    i=i<10?"0"+i:i;
  
    let option=`<option value="${i}">${i}</option>`;
    secletsec[2].firstElementChild.insertAdjacentHTML('afterend',option);
}
for(i=2;i>0;i--){
    i=i==1?"AM":"PM"
  var ampm=i;
    let option=`<option value="${i}">${i}</option>`;
    secletsec[3].firstElementChild.insertAdjacentHTML('afterend',option);
}
setInterval(()=>{
    let date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    ampm="AM";
    if(h>=12){
        h=h-12;
        ampm="PM";
        h=h==0?12:h;
        h=h<10?"0"+h:h;
        m=m<10?"0"+m:m;
        s=s<10?"0"+s:s;}
displaytime.innerText=`${h}:${m}:${s} ${ampm}`;

if(selectedtime==displaytime.innerText){
    console.log("hello");
    ringtone.play();
    ringtone.loop="true";
    columnselect.classList.remove("disable");
        setalarm.classList.remove("disable");
}
    
},1000);

setalarm.addEventListener("click",setalarmfun);
function setalarmfun(){
    if(isalarmset){
        selectedtime='';
        ringtone.pause();
        setalarm.innerText="Set alarm";
       
        return isalarmset=false;
    }
    console.log(displaytime.innerText);
    selectedtime=`${secletsec[0].value}:${secletsec[1].value}:${secletsec[2].value} ${ampm}`;
   if( (selectedtime.includes("Hour")) || (selectedtime.includes("Minutes"))){
       return alert("please select valid time");
   
   }else{
    isalarmset=true;
       columnselect.classList.add("disable");
       setalarm.classList.add("disable");
       setalarm.innerText="Clear alarm"
       
       console.log(selectedtime);
   console.log(displaytime);
  
}

}