function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

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
        this.savePoses = options.saveVertPR;

        this.verticies = [];
        this.poses = [];
        this.normals = [];
        this.normalBuffers = [];
        this.texture = [];
        this.textures = [];
        this.textureBuffers = [];
        this.buffers = [];
        this.rotations = [];
        this.colorBuffers = [];
        this.colors = [];
        this.mvMatrixStack = [];
        this.fov = options.fov || 90;
        this.pMatrix = mat4.create();
        this.mvMatrix = mat4.create();
        this.gl = this.canvas.getContext("webgl");
        this.gl.viewportWidth = this.canvas.width;
        this.gl.viewportHeight = this.canvas.height;
    }

    addVerticies(verticies) {
        let pos = this.verticies.length;
        this.verticies[pos] = verticies.verticies;
        this.colors[pos] = verticies.color;
        this.poses[pos] = verticies.poses;
        this.rotations[pos] = verticies.rotations;
        this.texture[pos] = verticies.texture;
        //this.normals[pos] = verticies.normals;
        
        this.buffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.verticies[pos]), this.gl.STATIC_DRAW);
        this.buffers[pos].itemSize = 3;
        this.buffers[pos].numItems = this.verticies[pos].length / 3;
        
        this.colorBuffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.colors[pos]), this.gl.STATIC_DRAW);
        this.colorBuffers[pos].itemSize = 4;
        this.colorBuffers[pos].numItems = 4;

        this.textureBuffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.texture[pos]), this.gl.STATIC_DRAW);
        this.textureBuffers[pos].itemSize = 2;
        this.textureBuffers[pos].numItems = this.texture[pos].length / 2;

        // this.normalBuffers[pos] = this.gl.createBuffer();
        // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffers[pos]);

        // this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.normals[pos]), t);
        // this.normalBuffers[pos].itemSize = 3;
        // this.normalBuffers[pos].numItems = this.normals[pos].length / 3;
        // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffers[pos]);
    }

    _drawScene() {
        this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);

        mat4.perspective(this.fov, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 400.0, this.pMatrix);
        mat4.identity(this.mvMatrix);
        for(let i = 0; i < this.poses.length; i++) {
            this._mvPushMatrix();
            mat4.translate(this.mvMatrix, this.poses[i]);
            mat4.rotate(this.mvMatrix, degToRad(this.rotations[i][0]), [1, 0, 0]);
            mat4.rotate(this.mvMatrix, degToRad(this.rotations[i][1]), [0, 1, 0]);
            mat4.rotate(this.mvMatrix, degToRad(this.rotations[i][2]), [0, 0, 1]);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[i]);
            this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, this.buffers[i].itemSize, this.gl.FLOAT, false, 0, 0);

            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffers[i]);
            this.gl.vertexAttribPointer(this.shaderProgram.vertexColorAttribute, this.colorBuffers[i].itemSize, this.gl.FLOAT, false, 0, 0);
            // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffers[i]);
            // this.gl.vertexAttribPointer(this.shaderProgram.textureCoordAttribute, this.textureBuffers[i].itemSize, this.gl.FLOAT, false, 0, 0);

            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[0]);
            this.gl.uniform1i(this.shaderProgram.samplerUniform, 0);

            this._setMatrixUniforms();
            this.gl.drawArrays(this.gl.TRIANGLES, 0, this.buffers[i].numItems);

            if(!this.savePoses) {
                let aPoses = this.poses[i];
                let aRotations = this.rotations[i];
                aPoses[0] = -aPoses[0];
                aPoses[1] = -aPoses[1];
                aPoses[2] = -aPoses[2];
                aRotations[0] = -aRotations[0];
                aRotations[1] = -aRotations[1];
                aRotations[2] = -aRotations[2];
                mat4.translate(this.mvMatrix, aPoses);
                mat4.rotate(this.mvMatrix, degToRad(aRotations[0]), [1, 0, 0]);
                mat4.rotate(this.mvMatrix, degToRad(aRotations[1]), [0, 1, 0]);
                mat4.rotate(this.mvMatrix, degToRad(aRotations[2]), [0, 0, 1]);
            }

            this._mvPopMatrix();
        }
    }

    _getShader(id) {
        let shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }
  
        let str = "";
        let k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3)
                str += k.textContent;
            k = k.nextSibling;
        }
  
        let shader;
        if (shaderScript.type == "x-shader/x-fragment") {
            shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        } else {
            return null;
        }
  
        this.gl.shaderSource(shader, str);
        this.gl.compileShader(shader);
  
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(shader));
            return null;
        }
  
        return shader;
    }

    _setMatrixUniforms() {
        this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.pMatrix);
        this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.mvMatrix);
    }

    _initShaders() {
        let fragmentShader = this._getShader("shader-fs");
        let vertexShader = this._getShader("shader-vs");

        this.shaderProgram = this.gl.createProgram();
        this.gl.attachShader(this.shaderProgram, vertexShader);
        this.gl.attachShader(this.shaderProgram, fragmentShader);
        this.gl.linkProgram(this.shaderProgram);

        this.gl.useProgram(this.shaderProgram);

        this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);

        this.shaderProgram.vertexColorAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexColor");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexColorAttribute);

        this.shaderProgram.pMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");

    }

    _reInitBuffers() {
        let pos = this.verticies.length;
        this.verticies[pos] = verticies.verticies;
        this.colors[pos] = verticies.color;
        this.poses[pos] = verticies.poses;
        this.rotations[pos] = verticies.rotations;
        this.texture[pos] = verticies.texture;
        //this.normals[pos] = verticies.normals;
        
        this.buffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.verticies[pos]), this.gl.STATIC_DRAW);
        this.buffers[pos].itemSize = 3;
        this.buffers[pos].numItems = this.verticies[pos].length / 3;
        
        this.colorBuffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.colors[pos]), this.gl.STATIC_DRAW);
        this.colorBuffers[pos].itemSize = 4;
        this.colorBuffers[pos].numItems = 4;

        this.textureBuffers[pos] = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffers[pos]);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.texture[pos]), this.gl.STATIC_DRAW);
        this.textureBuffers[pos].itemSize = 2;
        this.textureBuffers[pos].numItems = this.texture[pos].length / 2;

        // this.normalBuffers[pos] = this.gl.createBuffer();
        // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffers[pos]);

        // this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.normals[pos]), t);
        // this.normalBuffers[pos].itemSize = 3;
        // this.normalBuffers[pos].numItems = this.normals[pos].length / 3;
        // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffers[pos]);
    }

    _initTextures() {
        this._addTexture(this.textures[0], {
            src: "borders.tga",
            filtration: this.gl.NEAREST
        });
        this._addTexture(this.textures[1], {
            src: "none.tga",
            filtration: this.gl.NEAREST
        });
    }

    _addTexture(texture, options) {
        texture = this.gl.createTexture();
        texture.image = new Image();
        texture.image.onload = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, texture.image);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, options.filtration || this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, options.filtration || this.gl.LINEAR);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        }

        texture.image.src = options.src || "none.tga";
    }

    _addShader(id) {
        let shader = this._getShader(id);

        this.gl.attachShader(this.shaderProgram, shader);
    }

    _webGLStart() {
        this._initShaders();

        this.gl.clearColor(0.0, 0.0, 0.0, 1);
        this.gl.enable(this.gl.DEPTH_TEST);

        this._drawScene();
    }

    _mvPushMatrix() {
        let copy = mat4.create();
        mat4.set(this.mvMatrix, copy);
        this.mvMatrixStack.push(copy);
    }

    _mvPopMatrix() {
        this.mvMatrix = this.mvMatrixStack.pop();
    }
}