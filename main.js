function setup(){
    canvas=createCanvas(640,400)
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video, 230, 100, 220, 200);

    fill("red");
    stroke("pink");
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 350, 80);
    circle(590, 350, 80);
    
  
    
    fill("orange");
    stroke("yellow");
    rect(90,40,460,20);
    
    rect(90,340,460,20);

    rect(40, 90, 20, 220);
    rect(580, 90, 20, 220);

    
}
function take_snapshot(){
save("you.png");

}






