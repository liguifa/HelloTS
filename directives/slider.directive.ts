class sliderDirective extends directive{
    public tag : string = "slider";
    public template : string = "<div class='slider'><div class='slider-line'></div><div class='slider-dot'></div></div>";
    
    private mIsStartSetValue : boolean = false;
    private mStartMoveValue : number = 0;

    public controller(element:Element) : void{
        let self = this;
        (<HTMLElement>element.getElementsByClassName("slider-dot")[0]).addEventListener("mousedown",(event:MouseEvent)=>this.StartSetValue(event,self));
        document.addEventListener("mouseup",(event:MouseEvent)=>this.EndSetValue(self));
        document.addEventListener("mousemove",(event:MouseEvent)=>this.SetValue(event,self));
    }

    private StartSetValue(event:MouseEvent,self:sliderDirective) : void{
        self.mIsStartSetValue = true;
        self.mStartMoveValue = event.clientX;
    }

    private EndSetValue(self:sliderDirective) : void{
        self.mIsStartSetValue = false;
    } 

    private SetValue(event:MouseEvent,self:sliderDirective) : void{
        if(self.mIsStartSetValue){
            let element : Element = event.srcElement;
            let addValue = event.clientX - this.mStartMoveValue;
            //let totalWidth = element.clientWidth;
            //let percent = addValue * (1/totalWidth) * 100; 
            let line = <HTMLElement>element.getElementsByClassName("slider-line")[0];
            let newValue =  line.clientWidth + addValue;
            if(newValue > element.clientWidth){
                newValue = element.clientWidth;
            } else if (newValue < 0){
                newValue = 0;
            }
            line.style.width = newValue + "px";
            self.mStartMoveValue = event.clientX;
        }
    }
    
    public create() : directive{
        return new sliderDirective();
    }
}