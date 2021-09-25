document.querySelector("button").addEventListener("click",saySound);
document.querySelectorAll("button")[1].addEventListener("click",saySound);
document.querySelectorAll("button")[2].addEventListener("click",saySound);
document.querySelectorAll("button")[3].addEventListener("click",saySound);
document.querySelectorAll("button")[4].addEventListener("click",saySound);
document.querySelectorAll("button")[5].addEventListener("click",saySound);
document.querySelectorAll("button")[6].addEventListener("click",saySound);



function saySound(innerHTML)
{
    
     innerHTML = this.innerHTML;
     buttonAnimation(innerHTML);

    switch(innerHTML)
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();  
            break;  
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(innerHTML);
    }

}


document.addEventListener("keypress",makeSound)

function makeSound()
{
    var x = event.key;
    buttonAnimation(x);
    switch(x)
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();  
            break;  
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(innerHTML);
    }
}


function buttonAnimation(currentKey)
{   
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);

}





