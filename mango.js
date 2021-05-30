class Mango{
    constructor(x,y,diameter){
        var options= {
            isStatic:true,
            restitution:0.5,
            friction:1.0,
        }
        this.body=bodies.circle(x,y,diameter ,options);
        this.diameter=diameter;
        this.image=loadImag("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter);
        pop();
    }

        
    }