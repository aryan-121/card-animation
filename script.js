let redCard = document.getElementById("redCard");
let blueCard = document.getElementById("blueCard");
let container = document.getElementById("container");

let blueOpen = () => {
    blueCard.style.color="rgba(0, 0, 0, 0)";
    blueCard.classList.add('cardMover');   
    container.classList.add('containerMoveBlue');
    setTimeout(()=>{
        redCard.style.color="#fffdfa";
    }, 3600)
}

let redOpen = () => {
    redCard.style.color="rgba(0, 0, 0, 0)";
    redCard.style.zIndex="1";
    redCard.classList.add('cardMover');   
    container.classList.add('containerMoveRed');
}

blueCard.addEventListener("click", blueOpen);
redCard.addEventListener("click", redOpen);