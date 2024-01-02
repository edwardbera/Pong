//Getting the canvas
const canvas = document.getElementById("myCanvas");
const window_width = canvas.width;
const window_height = canvas.height;

//creating paddles
var paddle_left_yposition = 0
var paddle_right_yposition = window_height - 55
const paddle_left = canvas.getContext("2d");
paddle_left.fillStyle = "#FF0000";
paddle_left.fillRect(0, paddle_left_yposition, 15, 55);
const paddle_right = canvas.getContext("2d");
paddle_right.fillStyle = "#FF0000";
paddle_right.fillRect((window_width-15), paddle_right_yposition , 15, 55);

//Updating paddle position
function MovePaddle(){
    
    paddle_left.fillRect(0, paddle_left_yposition, 15, 55);

}

//creating ball
const ball = canvas.getContext("2d");
var ball_xposition = (window_width/2)-(7.5);
var ball_yposition = (window_height/2) - (22.5);
ball.fillStyle = "#FF0000";
ball.fillRect(ball_xposition, ball_yposition, 20, 20);


//Paddle controls
document.onkeydown = (evt) => {
    if (evt.key =="s"){
        paddle_left_yposition += 10
        MovePaddle();
    }else if (evt.key =="w" && paddle_left_yposition >0){
        paddle_left_yposition -= 10
    }
    console.log(paddle_left_yposition)
}