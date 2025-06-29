using System;
using System.Linq;

class lab3q4
{
    static void Main()
    {
        // Prompt the user to enter a string
        Console.Write("Enter a string: ");
        string input = Console.ReadLine();

        // Use LINQ to calculate the frequency of each character
        var characterFrequency = input
            .Distinct() // Get distinct characters
            .Select(ch => new { Character = ch, Frequency = input.Count(c => c == ch) });

        // Display the result
        Console.WriteLine("\nCharacters and their frequencies:");
        foreach (var item in characterFrequency)
        {
            Console.WriteLine($"Character '{item.Character}' appears {item.Frequency} time(s).");
        }
    }
}
