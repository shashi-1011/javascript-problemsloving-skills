const hexcolors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", function(){
    let hexcolor="#";
    for(let i=0; i<6; i++){
        hexcolor+= hexcolors[getrandcolor()];
    }
    document.body.style.backgroundColor= hexcolor;
   color.innerHTML=hexcolor;//color.textcontent=hexcolor works same as the innerHTML

});
function getrandcolor(){
    return Math.floor(Math.random()*hexcolors.length);
}