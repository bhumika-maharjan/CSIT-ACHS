using System;

using System.Linq;


namespace dotNetLab3
{
    internal class lab3q3
    {
        static void Main(string[] args)
        {
            int[] num = { 1, 2, 3, 4, 5, 6 };
            var squares = num.Select(number => new { Number = number, Square = number * number });
            foreach (var item in squares)
            {
                Console.WriteLine($"Square of {item.Number} is {item.Square}");
            }
        }
    }
}
