class directiveFactory {
    private directives : Array<directive> = new Array<directive>();

    public Register(directive:directive):void{
        this.directives.push(directive);
    }

    public init() : void{
        this.directives.forEach(directive => {
            let elements = document.getElementsByTagName(directive.tag);
            for(let i=0; i<elements.length; i++){
                let directiveElement = directive.create();
                directiveElement.init(elements[i]);
                directiveElement.controller(elements[i]);
            }
            
        });
    }
}

    let df = new directiveFactory();
    df.Register(new sliderDirective());
    df.init();