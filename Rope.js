class Rope{
	constructor(body,point)
	{
		
		var options={ bodyA:body,			 
			pointB:point, 
			stiffness:0.5, 
			length:300,
			
		}
		
		this.bodyA=body
		this.pointB=point
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}



	display()
	{
		stroke("red");
        
        
			var point1=this.bodyA.position;
			var point2=this.pointB

			strokeWeight(2);		
			line(point1.x,point1.y,point2.x,point2.y);
		
	}
}