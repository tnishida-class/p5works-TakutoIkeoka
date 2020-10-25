// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
   for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 1){
        fill(196);
        rect(size * i, size * j, size, size);
        if(j == 1){
          fill(255, 0, 0)
          ellipse((size*i)+(size/2) ,(size*j)+(size/2) , size)
        }
        else if(j == 5 || j == 7){
          fill(0);
          ellipse((size*i)+(size/2) ,(size*j)+(size/2) , size)
        }
        }
      else if(i % 2 == 1 && j % 2 == 0){
        fill(196);
        rect(size * i, size * j, size, size);
        if(j == 0 || j == 2){
          fill(255, 0, 0)
          ellipse((size*i)+(size/2) ,(size*j)+(size/2) , size)
        }
        else if(j == 6){
          fill(0)
          ellipse((size*i)+(size/2) ,(size*j)+(size/2) , size)
        }
        }
      }
    }
}
