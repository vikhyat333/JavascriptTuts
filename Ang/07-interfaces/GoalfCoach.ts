import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkouts(): string {
        return("golf batting");
    }
    
}