// 最終課題を制作しよう
let x, y, a, b, c, d, e, l, f, g;
let angle, m, n, o;
let vc, vd, vf, vg, vp, vq;
let count, cycle, size;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = 0
  y = height/4
  angle = 10
  m = 10
  n = 10
  o = 10
  a = 0
  b = height/2
  c = 0
  d = 0
  e = height
  l = height
  f = 0
  g = 0
  p = 0
  q = 0
  vc = 5
  vd = 1
  ve = 4
  vl = 0.8
  vf = 0
  vg = 0
  vp = 300
  vq = height
  count = 0;
  cycle = 300;
  size = 0;
}

function draw(){
  background(160, 192, 255);
  face(x, y, 30, 255, 255, 0);
  push();
  fill(0, 0, 0);
  rect(400, 0, 500, 150)
  rect(0, height/2 - 10, width - 50, 20);
  pop();
  push();
  fill(192, 192, 192)
  star(400, 300, 150, angle);
  star(600, height - 50, 150, angle);
   angle += 0.01;
  star(650, 300, 100, m);
   m += 0.02;
  pop();
  push();
  noFill();
  for(let j = 0; j <4; j++){
  star(vf + 220*j, vg, 20, n);
   n += 50;
   vf += 1;
   vg += 1;
   if(vg > height){vf = 0, vg = 0};
  }
  for(let k = 0; k <4; k++){
  star(vp + 220*k, vq, 20, o);
   o += 10
   vp += 1;
   vq -= 1;
   if(vq < 0){vp = 400, vq = height};
  }
  pop();
  push();
  fill(128, 128, 128);
  ellipse(300, a, 50);
   a += 4;
   if(a > height){ a = 0; }
  ellipse(300, b, 50,);
   b += 4;
   if(b > height){ b = 0; }
  ellipse(150, c, 50);
   c += vc
   if(c < 0 || c > height){ vc = -1 * vc; } ;
   c = constrain(c, 0, height);
  pop();
  push();
  fill(200, 200, 200);
  for(let i = 1; i <4; i++){
  rect(i * 110 + 700, d, 50, 50);
   d += vd
   if(d < 0 || d > 250){ vd = -1 * vd; }
   d = constrain(d, 0, 250);
  }
  pop();
  push();
  fill(128, 128, 128);
  ellipse(150, e, 50);
   e -= ve
   if(e < 340 || e > height){ ve = -1 * ve; }
   e = constrain(e, 340, height);
  ellipse(225, l, 50);
   l -= vl
   if(l < 340 || l > height - 10){ vl = -1 * vl; }
   l = constrain(l, 340, height - 10);
  ellipse(1000, 430, size + 50);
   count = (count + 1) % cycle;
   if (count <= 150){
    size = count
   }
   else {
    size = 300 - count
   }
   pop();
   flag("START", 30, 30, 0, 51, 160)
   flag("GOAL", 30, 350, 0, 51, 160)
}

  function star(zs, zt, r, angle){
      beginShape();
      for(var i = 0; i < 20; i++){
        var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
        var s = zs + cos(theta) * r;
        var t = zt + sin(theta) * r;
        vertex(s,t);
      }
      endShape(CLOSE);
}
 function face(x, y, size, A, B, C){
     push();
     fill(A, B, C);
     ellipse(x, y, size)
     rect(x - 5, y - 5, 1, 1);
     rect(x + 5, y - 5, 1, 1);
     rect(x - 5, y + 5, 10, 1);
     pop();
  }
  function flag(t, S, T, P, Q, R){
    let w = textWidth(t);
    let h = textAscent() + textDescent();
    let e = S;
    fill(P, Q, R)
    rect(S, T, w, h + 15);
    fill(255);
    text(t, S, T + h);
  }

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){ x -= 15; }
  else if(keyCode == RIGHT_ARROW){ x += 15; }
  else if(keyCode == DOWN_ARROW){ y += 15; }
  else if(keyCode == UP_ARROW){ y -= 15; }
  else if(key == " "){ x = 0, y = height/3}
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
