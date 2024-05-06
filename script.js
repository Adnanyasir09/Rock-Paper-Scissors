let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const user = document.querySelector("#userscore");
const comp = document.querySelector("#compscore");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const drawgame = () =>{
    console.log("The game is draw");
    msg.innerText = "Game draw. Play Again";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You win");
        userscore++;
        user.innerText=userscore;
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green";
    } else {
        
        compscore++;
        comp.innerText=compscore;
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = 'red';

    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");        
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {     

    console.log("userchoice= ", userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice = ", compchoice);
    if(userchoice===compchoice)
        {
            drawgame();
        }
    else{
            let userwin = true;
            
        if(userchoice==="rock"){
            userwin = compchoice ==="scissors"?true:false;
        }
        else if(userchoice==="paper")
            {
                userwin=compchoice==="rock"?true:false;
            }
        else
        {
            userwin=compchoice==="paper"?true:false;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};
            






