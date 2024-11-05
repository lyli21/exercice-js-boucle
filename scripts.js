// let i = 1;
// let prenom;
// let nprenom;

// while (prenom != "") {
//     prenom = prompt("saisissez prenom " + i)
//     i++;

//     console.log(prenom);
// }

// console.log(i + -2)


/////////////////////// ENTIERS  Inferieur //////////////////////////////




// let N = 10; 

// for (let i = 0; i >= -10; i--) { // jai passer bcp de temps parce que jai pas mis un - à ma variable N dans mon instruction et aussi pour safficher jusqua 10 c'est inferieur egal à -10//
//     console.log(i);
// }



//Somme des entiers inférieurs à N//

let N = 10; 
let somme= 0;

for (let i = 0; i >= -10; i--) {
    console.log(i);
    somme +=i;
    }
    console.log("la somme des nombres inférieur à " + -N + "est" + somme);