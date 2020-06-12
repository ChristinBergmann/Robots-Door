let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start')
let botDoorPath = "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
let beachDoorPath = "https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
let spaceDoorPath = "https://images.pexels.com/photos/39698/space-shuttle-atlantis-liftoff-mission-rocket-39698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
let closedDoorPath = "https://images.pexels.com/photos/2940371/pexels-photo-2940371.jpeg?cs=srgb&dl=alte-tur-antik-antiquitat-griff-2940371.jpg&fm=jpg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score');
currentStreak.innerHTML = score;
let bestStreak = document.getElementById('high-score');
bestStreak.innerHTML = highScore;


const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose');
    }
};

// randomChoreDoorGenerator = () => {
//     let choreDoor = Math.floor(Math.random() * numClosedDoors);
//     if (choreDoor === 0) {
//         openDoor1 = botDoorPath;
//         openDoor2 = spaceDoorPath;
//         openDoor3 = beachDoorPath;
//     } else if (choreDoor === 1) {
//         openDoor2 = botDoorPath;
//         openDoor1 = beachDoorPath;
//         openDoor3 = spaceDoorPath;
//     } else {
//         (choreDoor === 2)
//         openDoor3 = botDoorPath;
//         openDoor1 = beachDoorPath;
//         openDoor3 = spaceDoorPath;
//     }
// };

const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * 6);
    switch (choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor1 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 2:
            openDoor2 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 3:
            openDoor2 = botDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 4:
            openDoor3 = botDoorPath;
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            break;
        case 5:
            openDoor3 = botDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor2 = beachDoorPath;
            break;
    }
}

door1.onclick = () => {
    if (currentlyPlaying && !isClicked(door1)) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
};

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
};

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
};

startButton.onclick = () => {
    startRound();
};

//resets all doors to be closed again
const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Good Luck!';
    randomChoreDoorGenerator();
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
        getScore();
    } else {
        startButton.innerHTML = 'Game over.. you lost! Play again?'
        score = 0;
        currentStreak.innerHTML = score;
    }
    currentlyPlaying = false;
};

const getScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
        highScore = score;
        bestStreak.innerHTML = highScore;
    }
};

startRound();