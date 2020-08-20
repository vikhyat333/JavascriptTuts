"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
var Shape_1 = require("./Shape");
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(theX, theY, _width, _height) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._height = _height;
        return _this;
    }
    Rect.prototype.calculateArea = function () {
        return this._height * this.width;
    };
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", width=" + this._width + ", height=" + this._height);
    };
    return Rect;
}(Shape_1.Shape));
exports.Rect = Rect;
