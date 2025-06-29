using System;
using System.Collections.Generic;

namespace Customer
{
    class Dictionary
    {
        static void Main(string[] args)
        {
            // Create a dictionary to store customer information
            Dictionary<int, string> customers = new Dictionary<int, string>();

            // Add customer data to the dictionary
            customers.Add(101, "Isha");
            customers.Add(102, "Tisa");
            customers.Add(103, "Misa");

            // Print the customer information
            Console.WriteLine("Customer List:");
            foreach (KeyValuePair<int, string> customer in customers)
            {
                Console.WriteLine($"CustomerId: {customer.Key}, CustomerName: {customer.Value}");
            }
        }
    }
}
