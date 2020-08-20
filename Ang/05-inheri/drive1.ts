import {Shape} from './Shape';
import {circle} from './Circle';
import { Rect } from './rect';

let myShape = new Shape(10,20);

let myCircle = new circle(4,5,10);

let myRect = new Rect(0,0,20,30);

console.log(myShape.getInfo());
console.log(myCircle.getInfo()); 
console.log(myRect.getInfo()); 



