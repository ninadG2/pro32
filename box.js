class Box
{
    constructor(x, y, width, height)
    {
       var option ={ 
                     'restitution':0.5,
                   }
        this.body = Bodies.rectangle(x, y, width, height, option)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 225;
        this.visible = true;
    }   
    
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      

      if(this.body.speed>3 && this.visible)
    {
      console.log("Remove", this.visibility)
      World.remove(world,this.body)
      score++;
      this.visible = false;
      // push()
      // this.visibility -= 5;
      // console.log("visibility",this.visibility)
      // pop();
    }

    if(this.visible === true)
    {
      rectMode(CENTER); 
      fill("red"); 
      rect(pos.x, pos.y, this.width, this.height);
    }
     
    

      }

    Score(){
      // if(this.visibility <225 ){
      //   console.log("Score", score)
      //   score++;
      // }
    }

    };






