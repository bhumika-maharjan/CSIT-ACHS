using System;

namespace delegates
{
    class Sum
    {
        public delegate void addnum(int a, int b);

        public void sum(int a, int b)
        {
            Console.WriteLine("({0} + {1}) = {2}", a, b, a + b);
        }

        public static void Main(String[] args)
        {
            Sum obj = new Sum();

            addnum del_obj1 = new addnum(obj.sum);

            del_obj1(156, 200);
        }
    }
}
