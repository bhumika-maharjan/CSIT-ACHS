using System;

class reverse
{
    static void Main(string[] args)
    {

        Console.Write("Enter the number of elements in the array: ");
        int n = Convert.ToInt32(Console.ReadLine());


        int[] array = new int[n];
        Console.WriteLine("Enter the elements of the array:");
        for (int i = 0; i < n; i++)
        {
            Console.Write($"Element {i + 1}: ");
            array[i] = Convert.ToInt32(Console.ReadLine());
        }


        Console.WriteLine("\nOriginal Array:");
        DisplayArray(array);

        ReverseArray(array);
        Console.WriteLine("\nReversed Array:");
        DisplayArray(array);
    }

    static void ReverseArray(int[] arr)
    {
        int length = arr.Length;
        for (int i = 0; i < length / 2; i++)
        {
            int temp = arr[i];
            arr[i] = arr[length - i - 1];
            arr[length - i - 1] = temp;
        }
    }
    static void DisplayArray(int[] arr)
    {
        foreach (int element in arr)
        {
            Console.Write(element + " ");
        }
        Console.WriteLine();
    }
}