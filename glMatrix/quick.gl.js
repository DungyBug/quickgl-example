class QuickGL {
    constructor(options) {
        if(!options.canvas) {
            options.canvas = document.createElement("canvas");
            options.canvas.width = options.width || window.screen.width;
            options.canvas.height = options.height || window.screen.height;
            document.body.appendChild(options.canvas);
        }

        options.canvas.width = options.width || window.screen.width;
        options.canvas.height = options.height || window.screen.height;

        this.canvas = options.canvas;

        this.verticities = [];
        this.buffers = []
        this.gl = this.canvas.getContext("webgl");
    }

    addVerticities(verticities) {
        let pos = this.verticities.length;
        this.verticities[pos] = verticities;
        
        this.buffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.verticities[pos]), this.gl.STATIC_DRAW);
        this.buffers[pos].itemSize = 3;
        this.buffers[pos].numItems = this.verticities[pos].length / 3;
    }

    _drwaScene() {
        this.gl.viewport(0, 0, this.width, this.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);

        mat4
    }

    _webGLStart() {
        this._initShaders();

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST);

        this._drawScene();
    }
}