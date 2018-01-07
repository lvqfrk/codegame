/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);


H = H-1;
W = W-1;
var minW = 0;
var minH = 0;
// game loop
while (true) {
    var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    switch (bombDir !== "") {
      case bombDir[0] == "U":
        H = Y0;
        Y0 -= Math.round((H - minH)/2);
        break;
      case bombDir[0] == "D":
        minH = Y0;
        Y0 += Math.round((H - minH)/2);
        break;
      case bombDir[0] == "R":
        minW = X0;
        X0 += Math.round((W - minW)/2);
        break;
      case bombDir[0] == "L":
        W = X0;
        X0 -= Math.round((W - minW)/2);
        break;
    }

    switch (bombDir[1] !== "") {
      case bombDir[1] == "R":
        minW = X0;
        X0 += Math.round((W - minW)/2);
        break;
      case bombDir[1] == "L":
        W = X0;
        X0 -= Math.round((W - minW)/2);
        break;
    }

    print(X0+" "+Y0);









    // the location of the next window Batman should jump to.
    // print('0 0');
}
