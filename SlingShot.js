class slingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options)
        World.add(world, this.Sling)
    }
    fly(){
        this.Sling.bodyA=null
    }
    display() {
        if(this.Sling.bodyA){
        
        strokeWeight(4)
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
  

}