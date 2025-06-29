using System;
using System.Linq;


namespace dotNetLab3
{
    internal class lab3q2
    {
        static void Main(string[] args)
        {
            string input = "Hello World";
            var UpperCaseLetters = input.Where(char.IsUpper);
            Console.WriteLine("Uppercase letters in the string are: ");
            foreach (var letter in UpperCaseLetters) {
                Console.WriteLine(letter);
            }
        }
    }
}
