"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GoalfCoach_1 = require("./GoalfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GoalfCoach_1.GolfCoach();
// decalre an array for coaches .... initaillt emoty
var theCoachArray = [];
theCoachArray.push(myCricketCoach);
theCoachArray.push(myGolfCoach);
for (var _i = 0, theCoachArray_1 = theCoachArray; _i < theCoachArray_1.length; _i++) {
    var temp = theCoachArray_1[_i];
    console.log(temp.getDailyWorkouts());
}
