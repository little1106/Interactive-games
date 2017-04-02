//将图片作为背景
var img

function preload(){
  createCanvas(800,500);
  img = loadImage("image/name.jpg");
  frameRate(100);
}


var up
var upR
var right
var downR
var down
var downL
var left
var upL

//武
var DragSpeed;
var rSlider;
var gSlider;
var bSlider;
var aSlider;
var Rotation;
var Scale;
var Radius;
var mouseButton = 0;
var addButton = false;
var randomButton = false;

function setup(){
  
  /*
  //绘制按键
  up = createButton('▲')
  upR = createButton('')
  right = createButton('►')
  downR = createButton('')
  down = createButton('▼')
  downL = createButton('')
  left = createButton('◄')
  upL = createButton('')

  up.position()
  upR.position()
  right.position()
  downR.position()
  down.position()
  downL.position()
  left.position()
  upL.position()*/


  //武
    //创建滑块

    AddBrush = createCheckbox('AddBrush', false);
    AddBrush.changed(myCheckedEvent1);
    RandomBrushProps = createCheckbox('RandomBrushProps', false);
    RandomBrushProps.changed(myCheckedEvent2);
    DragSpeed = createSlider(0.5, 20, 5);
    rSlider = createSlider(0.00, 255.00, 0.00);
    gSlider = createSlider(0, 255, 0);
    bSlider = createSlider(0, 255, 0);
    aSlider = createSlider(0, 255, 155);
    Rotation = createSlider(-180, 180, 100);
    Scale = createSlider(-5, 5, 1);
    Radius = createSlider(10, 50, 20);

    AddBrush.position(820, 20);
    RandomBrushProps.position(820, 50);
    DragSpeed.position(820, 120);
    rSlider.position(820, 150);
    gSlider.position(820, 180);
    bSlider.position(820, 210);
    aSlider.position(820, 240);
    Rotation.position(820, 290);
    Scale.position(820, 330);
    Radius.position(820, 370);

    //text("DragSpeed", 750, 115);
    Speed = createElement('p', 'DragSpeed');
    Speed.position(850,85);
    rT = createElement('p', 'r');
    rT.position(810, 135);
    gT = createElement('p', 'g');
    gT.position(810, 165)
    bT = createElement('p', 'b');
    bT.position(810, 195)
    aT = createElement('p', 'a')
    aT.position(810, 225)
    roT = createElement('p', 'Rotation')
    roT.position(850, 255)
    scT = createElement('p', 'Scale')
    scT.position(850, 295)
    raT = createElement('p', 'Radius')
    raT.position(850, 335)
    /*
    text("r", 710, 165);
    text("g", 710, 195);
    text("b", 710, 225);
    text("a", 710, 255);
    text("Rotation", 750, 285);
    text("Scale", 750, 325);
    text("Radius", 750, 365);
*/
    Drag = createElement('p', '5');
    Drag.position(965, 107);
    rE = createElement('p', '0');
    rE.position(965, 137);
    gE = createElement('p', '0');
    gE.position(965, 167);
    bE = createElement('p', '0');
    bE.position(965, 197);
    aE = createElement('p', '155');
    aE.position(965, 227);
    roE = createElement('p', '100');
    roE.position(965, 277);
    scE = createElement('p', '1');
    scE.position(965, 317);
    raE = createElement('p', '5');
    raE.position(965, 357);
}




//武
var brush = []

//绘制图像
var Q = 0

function draw(){
     img.resize(800, 500)
     background(img)
     //image(img,0,0)

     //图片变色
     img.loadPixels()
     var d = pixelDensity()
     var num = 4*width*d*height*d
     for(var m = 0; m < num; m+=4){
        //img.pixels[m] = img.pixels[m]-20*cos(Q*PI);
        img.pixels[m+1] = img.pixels[m+1]-10*sin(Q*PI)
        img.pixels[m+2] = img.pixels[m+2]-10*cos(Q*PI)
        //img.pixels[m+3] = img.pixels[m+3]-10*cos(Q*PI);
        }
     img.updatePixels()
     Q = Q + 0.01


    //武
     //跟随运动
 var addOther
 if(mouseButton == 1){
   if(brush.length !== 0 && addButton == false){
     for(var i = 0; i < brush.length; i++){
     if(randomButton == false){
      addOther = createVector(brush[i].Scale*(addDis.x * cos(brush[i].Rotation * 2 /PI)), brush[i].Scale*(addDis.y * sin(brush[i].Rotation * 2 /PI)))
     
      drawLine(brush[i].x, brush[i].y, brush[i].x + brush[i].DragSpeed / 2 * addOther.x, brush[i].y + brush[i].DragSpeed / 2 * addOther.y, brush[i].r, brush[i].g, brush[i].b, brush[i].a, brush[i].Radius)
      brush[i].x = brush[i].x + brush[i].DragSpeed / 2 * addOther.x
      brush[i].y = brush[i].y + brush[i].DragSpeed / 2 * addOther.y
      drawPen(brush[i].x + brush[i].DragSpeed / 2 * addOther.x + addOther.x, brush[i].y + brush[i].DragSpeed / 2 * addOther.y, brush[i].r, brush[i].g, brush[i].b, brush[i].a, brush[i].Radius)
        }
    else{
      addOther = createVector(addDis.x * cos(brush[i].Rotation/PI), addDis.y * sin(brush[i].Rotation/PI))
      drawLine(brush[i].x, brush[i].y, brush[i].x + brush[i].DragSpeed / 2  * addOther.x, brush[i].y + brush[i].DragSpeed / 2 * addOther.y, brush[i].r, brush[i].g, brush[i].b, brush[i].a, brush[i].Radius)
      brush[i].x = brush[i].x + brush[i].DragSpeed / 2 * addOther.x
      brush[i].y = brush[i].y + brush[i].DragSpeed / 2 * addOther.y
     // drawPen(brush[i].x, brush[i].y, brush[i].r, brush[i].g, brush[i].b, brush[i].a, brush[i].Radius)
    }
  }
  }
 }

 //添加画刷时绘制小球
 if(addButton == true){
    for(var m = 0; m < brush.length; m++){
      brush[m].drawCr()
 }
 }
 
/*
 //小球按照图像色度移动
 if(addButton == false){
   for(var n = 0; n < brush.length; n++){
   brush[n].pixMove()
    }
 }
 */
}


//鼠标控制

//武
var reM
var newM
var dis
var addDis

function mousePressed(){
  //武
    mouseButton = 1

  //获得鼠标点击的初始位置
  reM = createVector(mouseX, mouseY)
  //fill(0, 0, 0)
  //ellipse(mouseX, mouseY, 10, 10)
  //drawLine(mouseX, mouseY, mouseX, mouseY)

  //添加画刷
  if(addButton == true){
    var newBrush = new brushBox(mouseX, mouseY)
    fill(newBrush.r, newBrush.g, newBrush.b, newBrush.a)
    ellipse(newBrush.x, newBrush.y, newBrush.Radius, newBrush.Radius)        
    brush.push(newBrush)
  }
  else{
    fill(0, 0, 0)
    ellipse(mouseX, mouseY, 15, 15)
  }
}

function mouseReleased(){
  //武
  mouseButton = 0
}

function mouseDragged(){
  //武
  mouseButton = 1
  newM = createVector(mouseX, mouseY)
  
  dis = p5.Vector.sub(newM, reM)
  addDis = createVector(dis.x / 20, dis.y / 20)
  if(addButton == false){
    drawLine(reM.x, reM.y, reM.x + addDis.x, reM.y + addDis.y, 0, 0, 0, 255, 15)
  }
  reM = reM.add(addDis)
}

//武
function myCheckedEvent1() {
  if (this.checked()) {
    addButton = true;
  } else {
    addButton = false;
  }
}

function myCheckedEvent2() {
  if (this.checked()) {
    randomButton = true;
  } else {
    randomButton = false;
  }
}

//武
//绘制圆
function drawPen(x1, y1, r, g, b, a, Radius){
  //stroke(0, 0, 0, a/2)
  //strokeWeight(1)
 // ellipseMode(CORNERS);
  fill(r , g , b, a)
  ellipse(x1, y1, Radius, Radius);
  
}


//绘制线条
function drawLine(x1, y1, x2, y2, r, g, b, a, Radius){
  stroke(r, g, b, a)
  //stroke(0, 0, 0, 255)
  strokeWeight(Radius);
  //strokeWeight(15)
  strokeCap(ROUND);
  //line(x1,y1,x2,y2)

  x1 = x1%800
  y1 = y1%500
  x2 = x2%800
  y2 = y2%500

  //解决边界问题
  if(((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)) <= 100000){
    if(x2==0 && x1>=0){
      //x2 = x2 % 700
      //x1 = x1 % 700
      line(x1, y1, x2, y2)
    
  }else if(x2 >= 800 && x1 <= 800){
    line(x1, y1, 800, y2)
    x2 = x2%800
    x1 = x1%800
  }else if(y2 <= 0 && y1 >= 0){
    line(x2, 0, x1, y1)
    //y2 = y2%500
    y1 = y1%500
  }else if(y2 >= 500 && y1 <= 500){
    line(x2, 500, x1, y1)
    y2 = y2%500
    y1 = y1%500
  }else{
    x1 = x1%800
    y1 = y1%500
    x2 = x2%800
    y2 = y2%500
    line(x1%800, y1%500, x2%800, y2%500)
  }
  }
  
  strokeWeight(1);
}

var brushBox = function(x, y){
  this.x = x
  this.y = y
  if(randomButton == true){
    this.r = random(0, 255)
    this.g = random(0, 255)
    this.b = random(0, 255)
    this.a = random(0, 255)
    this.Rotation = random(-180, 180)
    this.Scale = random(-5, 5)
    this.Radius = random(10, 50)
    this.DragSpeed = random(0.5, 20)
  }
  else{
    this.r = rSlider.value()
    this.g = gSlider.value()
    this.b = bSlider.value()
    this.a = aSlider.value()
    this.Rotation = Rotation.value()
    this.Scale = Scale.value()
    this.Radius = Radius.value()
    this.DragSpeed = DragSpeed.value()
  }
  this.drawCr = function(){
    fill(this.r, this.g, this.b, this.a)
    ellipse(this.x, this.y, this.Radius, this.Radius)    
  }
  this.pixMove = function(){
    //var pixR = pixels[4*(this.x)*d*(this.y-1)*d+4*this.x*d]
    var pixG = pixels[4*(this.x)*d*(this.y-1)*d+4*this.x*d+1]
    var pixB = pixels[4*(this.x)*d*(this.y-1)*d+4*this.x*d+2]
    //var pixGray = pixR*0.299 + pixG*0.587 + pixB*0.114
    this.x = this.x + pixB/200
    this.y = this.y + pixG/200
    fill(this.r, this.g, this.b, this.a)
    ellipse(this.x, this.y, this.Radius, this.Radius)
  }
}


//求距离函数
function distance(x1, y1, x2, y2){
  var calX = x2 - x1;        
  var calY = y2 - y1;
  var value = Math.pow((calX * calX + calY * calY), 0.5);
  return value;
}