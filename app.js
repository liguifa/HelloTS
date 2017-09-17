var directiveFactory = /** @class */ (function () {
    function directiveFactory() {
        this.directives = new Array();
    }
    directiveFactory.prototype.Register = function (directive) {
        this.directives.push(directive);
    };
    directiveFactory.prototype.init = function () {
        this.directives.forEach(function (directive) {
            var elements = document.getElementsByTagName(directive.tag);
            for (var i = 0; i < elements.length; i++) {
                var directiveElement = directive.create();
                directiveElement.init(elements[i]);
                directiveElement.controller(elements[i]);
            }
        });
    };
    return directiveFactory;
}());
var df = new directiveFactory();
df.Register(new sliderDirective());
df.init();
//# sourceMappingURL=app.js.map