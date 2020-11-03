// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  fill(0, 51, 160);
  noStroke();
  triangle(0, 0, 30, 5, 30, 15);
  balloon("I love football");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(0, 51, 160);
  rect(30, 0, w + p * 2, h + p * 2);
  fill(255, 255, 0);
  text(t, p + 30, h);
}
