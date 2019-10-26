
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