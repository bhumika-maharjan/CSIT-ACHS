using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class AddTwoDigits
    {
        private int num1, num2, sum;
        public AddTwoDigits(int number1, int number2)
        {
            num1 = number1;
            num2 = number2;
            sum = num1 + num2;
        }
        public int GetSum()
        {
            return sum;
        }


        static void Main(string[] args)
        {
            Console.WriteLine("Enter first number:");
            int number1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter second number:");
            int number2 = int.Parse(Console.ReadLine());

            AddTwoDigits sum = new AddTwoDigits(number1, number2);
            Console.WriteLine($"The sum of {number1} and {number2} is: {sum.GetSum()}");

            Console.ReadKey();
        }
    }
}
