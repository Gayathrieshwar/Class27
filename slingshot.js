class slingshot{
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.05,
        length:50
    }
this.slingshot=Constraint.create(options)
World.add(world,this.slingshot)
}
display()
{
var bodyA=this.slingshot.bodyA.position
var bodyB=this.slingshot.bodyB.position
push();
strokeWeight(4)
line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
pop();
}

}