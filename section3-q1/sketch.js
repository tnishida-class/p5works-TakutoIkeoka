// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love football", 30, 30, 0, 51, 160, 10, 10);
}

function balloon(t, a, b, c, d, e, f, g){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = a;
  fill(c, d, e);
  rect(a, b, w, h + 15);
  triangle(f, g, a, b + (h + 15)/3, a, b + (h + 15) * 2/3)
  fill(255);
  text(t, a, h + a);
}
