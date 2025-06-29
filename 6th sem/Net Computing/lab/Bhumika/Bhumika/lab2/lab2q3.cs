using System;

namespace asmd
{
    interface ICalc
    {
        void Addnum(int a, int b);
        void Subnum(int a, int b);
        void Mulnum(int a, int b);
        void Divnum(int a, int b);
    }

    class Calculator : ICalc
    {
        public void Addnum(int a, int b)
        {
            Console.WriteLine("Sum: " + (a + b));
        }
        public void Subnum(int a, int b)
        {
            Console.WriteLine("Sub: " + (a - b));
        }
        public void Mulnum(int a, int b)
        {
            Console.WriteLine("Mul: " + (a * b));
        }
        public void Divnum(int a, int b)
        {
            if (b != 0)
            {
                Console.WriteLine("Quotient: " + (a / b));
            }
            else
            {
                Console.WriteLine("Cannot divide by zero.");
            }
        }
    }

    internal class Program
    {
        static void Main()
        {
            Calculator calc = new Calculator();
            calc.Addnum(15, 23);
            calc.Subnum(30, 6);
            calc.Mulnum(5, 8);
            calc.Divnum(35, 5);
        }
    }
}
