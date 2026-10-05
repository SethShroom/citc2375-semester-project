const projectTitle = "SILLY GAMES I HAVE";
const amountOfSampleItems = 3;
const maxRating = 10;
const gameHasBeenBeaten = true;
var scores = [8,9,8];
var sumscores = 0;
scores.forEach((Number) => {
   sumscores = sumscores + Number;
});

sumscores 
const averageScore =  sumscores / amountOfSampleItems;

console.log(averageScore)

const introSentace = "My project is titled " + projectTitle;

console.log(introSentace);

if(gameHasBeenBeaten) {
    console.log("I have completed this game")
} else {
    console.log("I have not completed this game")
}


