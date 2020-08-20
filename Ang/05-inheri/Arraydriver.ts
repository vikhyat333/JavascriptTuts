import {Shape} from './Shape';
import {circle} from './Circle';
import { Rect } from './rect';

let myShape = new Shape(10,20);

let myCircle = new circle(4,5,10);

let myRect = new Rect(0,0,20,30);

// Decalre array of 'shapes' ..... empty init

let theShapearray : Shape [] = [];

// add the shapes to the array

theShapearray.push(myShape);
theShapearray.push(myCircle);
theShapearray.push(myRect);
//theShapearray.push(1235); -------------> can only push of types shap or else declare as empty


for(let tempShape of theShapearray){
    console.log(tempShape.getInfo());
}


