class bubble
{
    constructor()
    {
        // Create a new ball with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random (5,60);
        this.speed = 2;
        this.bubbleAlpha = random(0,255);
    }

    move()
    {
        // Move right based on the speed
        this.y = this.y - this.speed;
        if(this.y < -30){
            this.y = height;
        }
    }
    
    
    display()
    {
        push();
        fill(50,20,275,this.bubbleAlpha);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
}
