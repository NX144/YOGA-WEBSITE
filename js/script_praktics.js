class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDivInHtml() {
        let divy = document.createElement('div');
        document.body.appendChild(divy);
        let edit = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        divy.style.cssText = edit;
    }
}

const opt = new Options(300,350,"red", 14, "center");

opt.newDivInHtml();