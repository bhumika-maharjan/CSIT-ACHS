using System;

// Interface for length
interface ILength
{
    double Length { get; set; }
}

// Interface for width
interface IWidth
{
    double Width { get; set; }
}

// Rectangle class implementing both interfaces
class Rectangle : ILength, IWidth
{
    public double Length { get; set; }
    public double Width { get; set; }

    // Method to calculate area
    public double CalculateArea()
    {
        return Length * Width;
    }
}

class area
{
    static void Main(string[] args)
    {
        // Create a new rectangle instance
        Rectangle rect = new Rectangle();

        // Set the length and width
        Console.Write("Enter the length of the rectangle: ");
        rect.Length = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter the width of the rectangle: ");
        rect.Width = Convert.ToDouble(Console.ReadLine());

        // Calculate and display the area
        double area = rect.CalculateArea();
        Console.WriteLine($"\nThe area of the rectangle is: {area}");
    }
}