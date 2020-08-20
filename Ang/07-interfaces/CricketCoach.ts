import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkouts(): string {
        return ("spin bownling");
    }
    
}