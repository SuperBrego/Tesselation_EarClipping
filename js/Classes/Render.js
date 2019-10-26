class Render{

	constructor(_canvas, _context){
        this.canvas = _canvas;
        this.context = _context;
		return this;
	}

	drawPoints(x, y, raio, color)  {
        var ctx = this.context;
        ctx.save();

        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.arc(x, y, raio, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }


    drawLine(p1, p2, width, color)  {
        var ctx = this.context;
        ctx.save();

        ctx.strokeStyle = color;

        ctx.lineWidth = parseInt(width);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        ctx.restore();
    }


    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    

};