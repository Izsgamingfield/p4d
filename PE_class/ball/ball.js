class ball
{
    constructor()
    {
        // Create a new ball with a default
        // x, y, size, and speed
        this.x = 0;
        this.y = 150;
        this.size = 50;
        this.speed = 5;
    }

    move()
    {
        // Move right based on the speed
        this.x = this.x + this.speed;
    }
    
    bounce()
{
      if(this.x > 380 || this.x <0){
      this.speed = - this.speed;
      }
}
    
    display()
    {
        push();
        fill(35, 80, 78);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
}
