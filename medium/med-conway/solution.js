/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var R = parseInt(readline());
var L = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');
var a = [R];
var b = [];
var count = 1;
var answer;

if(a.length === 1){
  b.push(1);
  b.push(a[0]);
  a = b;
  b = [];
}


for(var i = 0; i < L-2; i++){
  for(var j = 0; j < a.length; j++){
    if(a[j] === a[j+1] && a[j] < a.length){
      count++;
    }else{
      b.push(count);
      b.push(a[j]);
      count = 1;
    }
  }

  j=0;
  a = b;
  b = [];

}

if(L === 1){
  print(R);
}else{
answer = a.toString();
answer = answer.replace(/,/g, ' ');
print(answer);
}
