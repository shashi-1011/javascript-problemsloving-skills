const colors = ["green", "red", "rgba(133, 122, 220)", "#f15025", "yellow","black", "grey"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener("click", function(){
    const randomcolor = getrandcolor();
    document.body.style.backgroundColor= colors[randomcolor];
    color.textContent=colors[randomcolor];
});
function getrandcolor(){
    return Math.floor(Math.random()*colors.length);
}
