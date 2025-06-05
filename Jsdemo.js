console.log("Dharmik Barot");
console.log(10+20);




function add(num1,num2)
{
    
   result=num1+num2;
    return  result;
}
console.log(add(100,200));


var car={
    prop:this,
    color: "Red",
    speed:200,
    driver_name:function(){return this;}
  
};
console.log(car.color);         // Output: Red
console.log(car.speed);         // Output: 200
console.log(car.driver_name()); // Output: 
