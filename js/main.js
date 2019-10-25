
var render;
var pointArray;

function start(){

	let canvas = document.getElementById("drawArea");
    let context = canvas.getContext("2d");
	render = new Render(canvas, context);
	
	pointArray = [];
	pointArray.push(
		new Point(150,250), // 9
		new Point(200,380), // 8
		new Point(340,420), // 7
		new Point(460,160), // 6
		new Point(670,360), // 5
		new Point(860,390), // 4
		new Point(710,600), // 3
		new Point(495,420), // 2
		new Point(310,595), // 1
		new Point(100,400)  // 0
		);
	
	drawExample();
}

function drawExample(){
	drawExampleLines();
	drawExamplePoints();
}

function drawExampleLines() {
	// Pares de Arestas
	// 0-9, 0-1, 9-8, 8-7, 7-6, 6-5, 5-4, 4-3
	// 3-2, 2-1, 1-0
	for(let i = 0; i < pointArray.length - 1; i++){ 
		render.drawLine(pointArray[i], pointArray[i + 1], 2, "#FF0000");
	}
	render.drawLine(pointArray[0], pointArray[pointArray.length - 1], 2, "#FF0000");
}

function drawExamplePoints(){
	for(let i = 0; i < pointArray.length; i++){
		render.drawPoints( pointArray[i].x, pointArray[i].y, 5, "#000000");
	}
}