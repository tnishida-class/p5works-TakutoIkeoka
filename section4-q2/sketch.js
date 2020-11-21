// テキスト「アニメーション」
let x, y, vx, vy;
//let angle

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  angle = 10
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
 star(vx, vy, 50, angle);
  angle += 20
  vx += 5
  vy += 5
  // 端の処理パターン (1) 反対側から出てくる
  if(vx > width){ vx = 0; }
  else if(vx < 0){ vx = width; }
  if(vy > height){ vy = 0; }
  if(vy < 0){ vy = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
