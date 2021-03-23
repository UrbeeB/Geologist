class Stone {
	constructor(x, y, width, height) {
	  var options = {
		  'restitution':0.8,
		  'friction':3,
		  'density':30
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  
	  World.add(world, this.body);
	}
	display(){

	  var stonepos =this.body.position;
	  
	  push();
	  translate(stonepos.x, stonepos.y);
	  rectMode(CENTER);
	  strokeWeight(3);
	  stroke("grey");
	  fill("black");

	  rect(0, 0, this.width, this.height);
	  pop();
	}
  };
  