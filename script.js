let timestamp = Date.now()
console.log(timestamp)

//Getting the canvas
const containerDiv = document.getElementById("myCanvas");
const canvas = containerDiv.getBoundingClientRect();
const window_width = canvas.width;
const window_height = canvas.height;

//creating paddles
var paddle_left_yposition = 0
var paddle_right_yposition = window_height - 55
const paddle_left = document.getElementById("paddle-left")

const paddle_right = document.getElementById("paddle-right")

const ball = document.getElementById("ball")



//Updating paddle position


//creating ball
function drawBall(dt){
     let x = 0
     let y = 0
     x += dt;
     y +=dt;
    
        if ( y < (window_height - 20) ){
      
            ball.style.top =  y + "px"
            ball.style.left = x + "px"
          
        }else if ( y => (window_height - 20) ){

            ball.style.top =  (960 - y) + "px"
            ball.style.left = x + "px"

        }
           
}

temp = 0
//Paddle controls
document.onkeydown = (evt) => {
    if (evt.key =="s"){
       
        if (paddle_left.style.top.replace("px","") < (window_height - 40)){
            temp = temp + 20
            paddle_left.style.top = (temp) + "px"
        }
        
        
        
    }else if (evt.key =="w"){
        if (paddle_left.style.top.replace("px","") > 0){
            temp = temp - 20
            paddle_left.style.top = (temp) + "px"
        }
    }
    
}
let x = 0
    let y = 0
//Game loop

let dt = 0
setInterval(() => {
    
    drawBall(dt)

  
    dt +=2;
}, 50);
