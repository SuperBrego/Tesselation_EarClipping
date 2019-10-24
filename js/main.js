
var render;

function start(){

	let canvas = document.getElementById("drawArea");
    let context = canvas.getContext("2d");
	render = new Render(canvas, context);
	
	let array = [];
	array.push(
		new Point(250,250),
		new Point(300,350), 
		new Point(380,280),
		new Point(320,130),
		new Point(180,370),
		new Point(120,200),
		new Point(120,350)
		);
	
	for(let i = 0; i < array.length; i++){
		render.drawPoints( array[i].x, array[i].y, 5, "#FFFFF");
	}
}