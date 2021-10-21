//1a
const jPDinos = [`Velociraptors`, `Tyrannosaurus Rex`,`Dilophosaurus`]

//1b using spread and rest
function seeDinos (a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

//2a 
const jPCharacters ={
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}
//2b
seeCharacters = ({ellieSattler}) => ellieSattler;
console.log(seeCharacters(jPCharacters));

//3a  BONUS
const jurassicParkMovies = [{
    one: "Jurassic Park", 
    two: "The Lost World: Jurassic Park", 
    three: "Jurassic Park III"}]
    [{four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom",
    six: "Jurassic World: Dominion"
}]
seeJPMovies = [{one, two, three}] [{four, five, six} ]=> {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
};

seeJPMovies(jurassicParkMovies);