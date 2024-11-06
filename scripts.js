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

// let N = parseInt(prompt("saisie un nombre"));
// let somme = 0;

// for (let i = 0; i > -N; i--) {
//     console.log(i);
//     somme += i;
// }
// console.log("la somme des nombres inférieur à " + -N + "est" + somme);


//////////SOMME D'UN INTERVALLE////////////////////


// let Nombre1 = (parseInt(prompt("saisissez un nombres")));
// let Nombre2 = (parseInt(prompt("saisissez un autre nombre")));
// let somme = 0;


// if (Nombre1 <= Nombre2) {

//     for (let i = Nombre1; i < Nombre2; i++) {
//         somme += i;
//     }
// }
//     else {
//         console.log("le premier doit etre inférieur ou egal au deuxieme ")
//     }


// console.log("la somme des entiers de " + Nombre1 + " à " + Nombre2 + " et " + somme)


////// MOYENNE//////////




let somme = 0;
let comptage = 0;


if (Nombre <= Nombre2) {

for (let i = Nombre; i <= Nombre2; i++) {
    let Nombre = parseInt(prompt("Saisissez un Nombre"));
    somme += i;
    comptage++;
} 
} else {
    console.log("Le premier nombre doit être inférieur ou égal au deuxième nombre.");
}
let moyenne = somme / comptage;

console.log("la somme de " + Nombre + " et de "  + Nombre2 + " est " + somme);
console.log("la moyenne de" + somme + " est " + moyenne);