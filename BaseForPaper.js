class BaseClassForPaper{
    constructor(x, y,r) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y, this.r/2, options);
        this.image = loadImage("paper.png");
       
        World.add(world,this.body);
    }    
    display(){
        var pp = this.body.position;

        push();
        translate(pp.x,pp.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(0,0,0)
        ellipse(0,0,this.r,this.r);
        pop()
    }

    }