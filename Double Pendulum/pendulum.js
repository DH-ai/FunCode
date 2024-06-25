let r1 = 150;
let r2 = 100;
let m1 = 10;
let m2 = 10;
let a1 =Math.PI/2;
let a2 = Math.PI/4;
let fps = 60
let interval =1000/fps
let g = 1;
let w1=0;
let w2=0;
let aplha1 = 0;
let alpha2 = 0;
var canvas = document.getElementById('mycanvas');

var ctx = canvas.getContext('2d');
ctx.translate(canvas.width/2,canvas.height/2-100)
// var drawing = false;
// ctx.fillStyle("#FF0000")
function draw(){
    w1+=aplha1;
    w2+=alpha2;
    a1+=w1;
    a2+=w2;
    x1=r1*Math.sin(a1);
    y1=r1*Math.cos(a1);
    x2=x1+r2*Math.sin(a2);
    y2=y1+r2*Math.cos(a2);
    ctx.moveTo(0,0);
    ctx.lineTo(x1,y1);
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x1,y1,m1,0,2*Math.PI)
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke()
    ctx.closePath() 
    

    ctx.beginPath()
    ctx.arc(x2,y2,m2,0,2*Math.PI)
    ctx.fill()
}

// draw();

function update(){
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height+100);
    draw();
    let num1 = -g*(2*m1+m2)*Math.sin(a1);
    num1+=-m2*g*Math.sin(a1-2*a2)-2*Math.sin(a1-a2)*m2*(w1*w1*r2+w2*w2*r1*Math.cos(a1-a2));
    let den1= r1*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
    aplha1 = num1/den1;
    let num2=2*Math.sin(a1-a2)*(w1*w1*r1*(m1+m2)+g*(m1+m2)*Math.cos(a1)+w2*w2*r2*m2*Math.cos(a1-a2));
    let den2 = r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));
    alpha2 = num2/den2;

}
function engine (){
    setTimeout(function(){
        requestAnimationFrame(engine);
        ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height+100);
        update();
        let Energy = 0.5()
        console.log(`Energy of the system ${1}`)
    },interval);
}

//start the animation 
engine();

