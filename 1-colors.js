
const colors = ["#18FA2C", "#7C0A02", "#F7A008", "#0D38D1"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

btn.addEventListener('click',function(){
    console.log("Button Clicked");
    let randomHex = "#" + getRandomHexValue() + getRandomHexValue() + getRandomHexValue();
    infoSection.style.backgroundColor = randomHex;
    colorTxt.textContent = randomHex;
})

function getRandomHexValue()
{
    let hexChars = "0123456789ABCDEF";
    let randomIndex = Math.floor(Math.random()*hexChars.length);
    return hexChars[randomIndex];
}
