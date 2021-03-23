class Iron {
	constructor(x, y, width, height) {
	  var options = {
		  'restitution':0.8,
		  'friction':1,
		  'density':60
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  
	  World.add(world, this.body);
	}
	display(){

	  var ironpos =this.body.position;
	  
	  push();
	  translate(ironpos.x, ironpos.y);
	  rectMode(CENTER);
	  strokeWeight(3);
	  stroke("black");
	  fill("grey");

	  rect(0, 0, this.width, this.height);
	  pop();
	}
  };
  