const marsRover = {
    direction: 'N',
    x: 5,
    y: 5,
};

const marsLimits = {
    minX: 0,
    minY: 0,
    maxX: 9,
    maxY: 9,
};

const forwardError = 'You cannot move further forwards in this direction...';
const backwardError = 'You cannot move further backwards in this direction...';

const travelLog = [];

function putLogs() {
    const newMsg = 'The Mars Rover is facing ' + marsRover.direction + ', standing in: [' + marsRover.x + ', ' + marsRover.y + ']';
    travelLog.push(newMsg); 
}

function getLogs() {
    console.log(travelLog);
}

function turnRight() { 
    switch(marsRover.direction) {
        case 'N':
            marsRover.direction = 'E';
            break;
        case 'E':
            marsRover.direction = 'S';
            break;
        case 'S':
            marsRover.direction = 'W';
            break;
        case 'W':
            marsRover.direction = 'N';
            break;
        default: 
            break;
    }

    console.log(marsRover.direction);

    putLogs()
}

function turnLeft() { 
    switch(marsRover.direction) {
        case 'N':
            marsRover.direction = 'W';
            break;
        case 'W':
            marsRover.direction = 'S';
            break;
        case 'S':
            marsRover.direction = 'E';
            break;
        case 'E':
            marsRover.direction = 'N';
            break;
        default: 
            break;
    }

    console.log(marsRover.direction);

    putLogs()
}

function moveForward() {
    switch(marsRover.direction) {
        case 'N':
            if (marsRover.y > marsLimits.minY) {
            marsRover.y -= 1;
            } else {
                console.log(forwardError);
            }
            break;
        case 'S':
            if (marsRover.y < marsLimits.maxY) {
            marsRover.y += 1;
            } else {
                console.log(forwardError);
            }
            break;
        case 'E':
            if (marsRover.x < marsLimits.maxX) {
            marsRover.x += 1;
            } else {
                console.log(forwardError);
            }
            break;
        case 'W':
            if (marsRover.x > marsLimits.minX) {
            marsRover.x -= 1;
            } else {
                console.log(forwardError);
            }
            break;
        default:
            break;
    }

    console.log(marsRover.x, marsRover.y);

    putLogs()
}

function moveBackward() {
    switch(marsRover.direction) {
        case 'N':
            if (marsRover.y < marsLimits.maxY) {
            marsRover.y += 1;
            } else {
                console.log(backwardError);
            }
            break;
        case 'S':
            if (marsRover.y > marsLimits.minY) {
            marsRover.y -= 1;
            } else {
                console.log(backwardError);
            }
            break;
        case 'E':
            if (marsRover.x > marsLimits.minX) {
            marsRover.x -= 1;
            } else {
               console.log(backwardError);
            }
            break;
        case 'W':
            if (marsRover.x < marsLimits.maxX) {
            marsRover.x += 1;
            } else {
                console.log(backwardError);
            }
            break;
        default:
            break;
    }

    console.log(marsRover.x, marsRover.y);

    putLogs()
}

function move(str) {
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === 'r') {
            turnRight();
        } else if (str[i] === 'l') {
            turnLeft();
        } else if (str[i] === 'f') {
            moveForward();
        } else if (str[i] === 'b') {
            moveBackward();
        }
    }

    console.log(marsRover);
}

// Instructions:
const instructions = 
`
Welcome to Mars Rovers, here you have a list of basic commands to move it from Earth!:

* Mars Rover will firstly rotate in two possible directions, right (r) or left (l), and it will rotate in the same spot according to the four cardinal points. (it's facing North in the begining by default, and it is placed in the middle of the terrain)

* Secondly, it will move forward (f), or backward (b), in the direction where it faces. (if it's facing East, and moves forward, it will take a step to this way).

* You will have to insert a string with the previous letters in the following function "move('here goes the string')" 
    example: move('rfflffrb') 
    - Mars Rovers will turn to it's right (facing East), move forward two times, turn left (facing North again), it will make another two steps forward, turn around right (to the East), and move a step backwards.

* Every move will be printed on console while it is doing them, showing you it's direction and position, but you can get a full log by calling the function "getLogs()".

`
console.log(instructions);
