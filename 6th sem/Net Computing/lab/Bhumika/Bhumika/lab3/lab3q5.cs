using System;
using System.Linq;

class lab3q5
{
    static void Main()
    {
        // List of cities
        string[] cities = {
            "ROME", "LONDON", "NAIROBI", "CALIFORNIA",
            "ZURICH", "NEWDELHI", "AMSTERDAM", "ABUDHABI", "PARIS"
        };

        // Prompt the user to enter the specific starting and ending character
        Console.Write("Enter the starting character: ");
        char startChar = char.ToUpper(Console.ReadKey().KeyChar); // Convert to uppercase
        Console.WriteLine();

        Console.Write("Enter the ending character: ");
        char endChar = char.ToUpper(Console.ReadKey().KeyChar); // Convert to uppercase
        Console.WriteLine();

        // Convert char inputs to string
        string startString = startChar.ToString();
        string endString = endChar.ToString();

        // Find cities that start and end with the specified characters
        var result = cities.Where(city => city.StartsWith(startString) && city.EndsWith(endString));

        // Display the result
        Console.WriteLine("\nCities that start with '{0}' and end with '{1}':", startChar, endChar);
        if (result.Any())
        {
            foreach (var city in result)
            {
                Console.WriteLine(city);
            }
        }
        else
        {
            Console.WriteLine("No cities match the criteria.");
        }
    }
}
