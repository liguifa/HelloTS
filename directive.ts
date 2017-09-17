abstract class directive{
    public abstract tag : string;

    public abstract template : string;

    public abstract controller(element:Element) : void;

    public abstract create() : directive;

    public init(element:Element) : void{
        element.innerHTML = this.template;
    }
}