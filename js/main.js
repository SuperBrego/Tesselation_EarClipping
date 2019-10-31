
var render;
var pointArray;
var convexPoints, concavePoints;
var grahamScan;

function start(){

	let canvas = document.getElementById("drawArea");
    let context = canvas.getContext("2d");
	render = new Render(canvas, context);
	
	pointArray = [];
	pointArray.push(
		new Point(250,150, "9"), // 9
		new Point(200,380, "8"), // 8
		new Point(340,420, "7"), // 7
		new Point(460,160, "6"), // 6
		new Point(670,360, "5"), // 5
		new Point(860,390, "4"), // 4
		new Point(710,600, "3"), // 3
		new Point(495,420, "2"), // 2
		new Point(310,595, "1"), // 1
		new Point(100,400, "0")  // 0
		);
	
	drawExample();
	
	grahamScan = new GrahamScan();
	grahamScan.addPoints(pointArray);
	convexPoints = grahamScan.getHull();
	console.log("São " + convexPoints.length + " pontos convexos");
	console.log(convexPoints);
	findConcavePoints();
	console.log("São " + concavePoints.length + " pontos côncavos");
	console.log(concavePoints);
	findEarPoints();
}

function findConcavePoints(){
	concavePoints = [];
	for(let i = 0; i < pointArray.length; i++){
		if(!convexPoints.includes(pointArray[i])){
			concavePoints.push(pointArray[i]);
		}
	}
}

function findEarPoints() {
	
}