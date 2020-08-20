"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var rect_1 = require("./rect");
var myShape = new Shape_1.Shape(10, 20);
var myCircle = new Circle_1.circle(4, 5, 10);
var myRect = new rect_1.Rect(0, 0, 20, 30);
console.log(myShape.getInfo());
console.log(myCircle.getInfo());
console.log(myRect.getInfo());