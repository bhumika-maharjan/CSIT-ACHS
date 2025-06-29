using System;

public class Student
{
    
    public int StudentId { get; set; }
    public string Name { get; set; }

    public void DisplayDetails()
    {
        Console.WriteLine($"Student ID: {StudentId}");
        Console.WriteLine($"Student Name: {Name}");
    }
}

class automatic
{
    static void Main(string[] args)
    {
        Student student = new Student();


        Console.Write("Enter Student ID: ");
        student.StudentId = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter Student Name: ");
        student.Name = Console.ReadLine();

        Console.WriteLine("\nStudent Details:");
        student.DisplayDetails();
    }
}