// 小手調べ
function setup(){
  createCanvas(100,100);
  for(let i = 0; i < 10; i++){
  if(i < 5){
    noFill()
    stroke(0, 0, 255);
  }
  else {
    stroke(255, 0, 0);
  }
    // BLANK[1]
let x = 10*i + 10
  ellipse(50,50,x)}
}
