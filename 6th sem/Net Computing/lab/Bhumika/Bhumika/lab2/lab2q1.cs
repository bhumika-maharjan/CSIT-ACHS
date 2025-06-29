using System;



namespace ConsoleApp1
{
    internal class immutablestr
    {
        static void Main(string[] args)
        {
            string original = "Hello";
            string copy = original;

            original += "World";
            Console.WriteLine(original);
            Console.WriteLine(copy);

            copy = original.Replace("World", "C#");


            Console.WriteLine($"original: {original}");
            Console.WriteLine($"copy: {copy}");

        }

    }
}
