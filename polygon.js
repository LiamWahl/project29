class Polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.polygon = Bodies.polygon(100,200,20,options);
		World.add(world,this.polygon);

	
    
    }
	display()
	{
			
			push()
			translate(polygonpos.x, polygonpos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			image(polygon_img, polygon.position.x,polygon.position.y,40,40);
			pop()
			
	}

}