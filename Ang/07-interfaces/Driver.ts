import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GoalfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();


// decalre an array for coaches .... initaillt emoty

let theCoachArray : Coach [] = [];

theCoachArray.push(myCricketCoach);
theCoachArray.push(myGolfCoach);

for (let temp of theCoachArray){
    console.log(temp.getDailyWorkouts());
    
}