//intalizing the count by 0

let count = 0;

//slecting all buttons and values

const value = document.querySelector("#value");
const buttons = document.querySelectorAll('.btn');
//console.log(buttons);

buttons.forEach(function(btn){
btn.addEventListener("click",function(e){
    //console.log(e.currentTarget.classList);
    const btninfo = e.currentTarget.classList;
    if(btninfo.contains('decrease')){
        count--;
        
    }else if(btninfo.contains('increase')){
        count++;
    }else{
        count=0;
    }
        //adding colours

    if(count>0){
        value.style.color = 'green';
    }
    if(count===0){
        value.style.color = 'red';
    }
    if(count<0){
        value.style.color = 'darkred';
    }
    value.textContent = count;

    
});
});
