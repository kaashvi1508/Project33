class Snow{
    constructor(x,y){
        var options = {
            'restitution' : 0.9,
            'friction' : 0.9,
            
        }
    this.image= loadImage("snow5.webp");
    this.body = Bodies.circle(x,y,40,40,20,options);
    
    this.radius = 45;
    this.lifetime=100;
    World.add (world,this.body);
    }
    
    changePosition(){
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    }
}