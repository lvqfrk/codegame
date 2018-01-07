/**
 * Don't let the machines win. You are humanity's last hope...
 **/



var nodeY;
var nodeX;
var rightY;
var rightX;
var bottomY;
var bottomX;
var arr = [];
var result ="";



var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis

for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    arr.push(line);      
}

for(nodeY = 0; nodeY < height; nodeY++){
    for(nodeX = 0; nodeX < width; nodeX++){
        if(arr[nodeY][nodeX] === "0"){                  //vérifie si la case contient un noeud,
            
            rightX = rightY = bottomX = bottomY = "-1";//déclaration a -1, sera changer si un voisin est trouvé
            
            for(var a = nodeX+1; a < width; a++){
                if(arr[nodeY][a] === "0"){             //vérifie si un noeud est present à droite
                    rightX = a;                     
                    rightY = nodeY;
                break;                                  //puis casse la boucle si un voisin est trouvé
                    }                               //mon premier essai avec une boucle while, n'étais pass assez performant.
                } 
                
            for(var b = nodeY+1; b < height; b++){
                if(arr[b][nodeX] === "0"){
                    bottomX = nodeX;
                    bottomY = b;
                break;
                    }
                }
            
            print(nodeX+" "+nodeY+" "+rightX+" "+rightY+" "+bottomX+" "+bottomY);
            
            }
            
        }
        
    }

 

// Write an action using print()
// To debug: printErr('Debug messages...');


// Three coordinates: a node, its right neighbor, its bottom neighbor
//print('0 0 1 0 0 1');
