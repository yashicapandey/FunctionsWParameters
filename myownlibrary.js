function isTouching(object1,object2){// object1 - movingRect & object2 = rect1
    // when one sprite touches another one then :- 
    // if it is touching from the left or right side, distance between their x positions is less than equal to addition of half of their widths
    // {considering you keep the right rectangles x position first, so that you don't get a negative number when you subtact them} 
    // if it is touching from the top or bottom side, distance between their y positions is less than equal to additition of half of their heights 
    // {considering you keep the bottom rectangles y position first, so that you don't get a negative number when you subtact them} 
    if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
      object2.x - object1.x < object1.width/2 + object2.width/2 && 
      object1.y - object2.y < object1.height/2 + object2.height/2 && 
      object2.y - object1.y < object2.height/2 + object1.height/2){
          return true;
    }
    else{
          return false;
    }
    // return statement -> it will return a value whether its yes/no
    //yes/no values are called boolean values
    // Boolean is a data type that has only 2 values- true or false
}