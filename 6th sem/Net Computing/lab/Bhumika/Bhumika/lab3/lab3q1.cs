using System;

using System.Linq;


namespace dotNetLab3
{
    internal class lab3q1
    {
        static void Main(string[] args)
        {
            int[] Marks= { 20, 89, 88, 34, 78, 85, 55, 90 };
            var StdMarks = Marks.Where(mark => mark > 80);
            int numCount = StdMarks.Count();
            Console.WriteLine("Number of students who scored more than 80 is " + numCount);
        }
    }
}
