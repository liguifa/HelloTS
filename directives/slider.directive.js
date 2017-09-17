var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sliderDirective = /** @class */ (function (_super) {
    __extends(sliderDirective, _super);
    function sliderDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tag = "slider";
        _this.template = "<div class='slider'><div class='slider-line'></div><div class='slider-dot'></div></div>";
        _this.mIsStartSetValue = false;
        _this.mStartMoveValue = 0;
        return _this;
    }
    sliderDirective.prototype.controller = function (element) {
        var _this = this;
        var self = this;
        element.getElementsByClassName("slider-dot")[0].addEventListener("mousedown", function (event) { return _this.StartSetValue(event, self); });
        document.addEventListener("mouseup", function (event) { return _this.EndSetValue(self); });
        document.addEventListener("mousemove", function (event) { return _this.SetValue(event, self); });
    };
    sliderDirective.prototype.StartSetValue = function (event, self) {
        self.mIsStartSetValue = true;
        self.mStartMoveValue = event.clientX;
    };
    sliderDirective.prototype.EndSetValue = function (self) {
        self.mIsStartSetValue = false;
    };
    sliderDirective.prototype.SetValue = function (event, self) {
        if (self.mIsStartSetValue) {
            var element = event.srcElement;
            var addValue = event.clientX - this.mStartMoveValue;
            //let totalWidth = element.clientWidth;
            //let percent = addValue * (1/totalWidth) * 100; 
            var line = element.getElementsByClassName("slider-line")[0];
            var newValue = line.clientWidth + addValue;
            if (newValue > element.clientWidth) {
                newValue = element.clientWidth;
            }
            else if (newValue < 0) {
                newValue = 0;
            }
            line.style.width = newValue + "px";
            self.mStartMoveValue = event.clientX;
        }
    };
    sliderDirective.prototype.create = function () {
        return new sliderDirective();
    };
    return sliderDirective;
}(directive));
//# sourceMappingURL=slider.directive.js.map