using System;

namespace CustomerApp
{
    // Custom exception for insufficient balance
    public class BalanceExcept : Exception
    {
        public BalanceExcept(string message) : base(message)
        {
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Read balance and withdraw amount from user
                Console.Write("Enter current balance: ");
                decimal balance = Convert.ToDecimal(Console.ReadLine());

                Console.Write("Enter withdraw amount: ");
                decimal withdrawAmount = Convert.ToDecimal(Console.ReadLine());

                // Perform withdrawal or throw exception
                if (withdrawAmount <= balance)
                {
                    balance -= withdrawAmount;
                    Console.WriteLine($"Withdrawal successful. Remaining balance: {balance}");
                }
                else
                {
                    throw new BalanceExcept("Withdrawal amount exceeds current balance.");
                }
            }
            catch (BalanceExcept ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid input. Please enter numeric values.");
            }
        }
    }
}
