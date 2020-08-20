"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var rect_1 = require("./rect");
//Cannot create an instance of abstract class
//let myShape = new Shape(10,20);
var myCircle = new Circle_1.circle(4, 5, 10);
var myRect = new rect_1.Rect(0, 0, 20, 30);
// Decalre array of 'shapes' ..... empty init
var theShapearray = [];
// add the shapes to the array
//theShapearray.push(myShape);
theShapearray.push(myCircle);
theShapearray.push(myRect);
//theShapearray.push(1235); -------------> can only push of types shap or else declare as empty
for (var _i = 0, theShapearray_1 = theShapearray; _i < theShapearray_1.length; _i++) {
    var tempShape = theShapearray_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
