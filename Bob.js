class Bob

{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:1.5,
		}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill("blue");
			//imageMode(CENTER);
			fill("pink");
			ellipseMode(RADIUS);
			ellipse( 0,0,this.r, this.r);

			pop()
			
	}

}
