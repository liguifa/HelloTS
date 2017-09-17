var directive = /** @class */ (function () {
    function directive() {
    }
    directive.prototype.init = function (element) {
        element.innerHTML = this.template;
    };
    return directive;
}());
//# sourceMappingURL=directive.js.map