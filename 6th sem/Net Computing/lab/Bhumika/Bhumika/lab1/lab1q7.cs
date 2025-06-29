using System;

// Parent class
class Vehicle
{
    // Virtual method that can be overridden in a child class
    public virtual void Move()
    {
        Console.WriteLine("The vehicle is moving...");
    }
}

// Child class 1
class Car : Vehicle
{
    public override void Move()
    {
        Console.WriteLine("The car is driving on the road...");
    }
}

// Child class 2
class Bicycle : Vehicle
{
    public override void Move()
    {
        Console.WriteLine("The bicycle is pedaling down the path...");
    }
}

// Child class 3
class Airplane : Vehicle
{
    public override void Move()
    {
        Console.WriteLine("The airplane is flying through the sky...");
    }
}

// Child class 4
class Boat : Vehicle
{
    public override void Move()
    {
        Console.WriteLine("The boat is sailing on the water...");
    }
}

class Polymorphism
{
    static void Main(string[] args)
    {
        Vehicle myVehicle;

        myVehicle = new Car();
        myVehicle.Move();  // Outputs: The car is driving on the road...

        myVehicle = new Bicycle();
        myVehicle.Move();  // Outputs: The bicycle is pedaling down the path...

        myVehicle = new Airplane();
        myVehicle.Move();  // Outputs: The airplane is flying through the sky...

        myVehicle = new Boat();
        myVehicle.Move();  // Outputs: The boat is sailing on the water...

        Console.ReadLine();
    }
}
