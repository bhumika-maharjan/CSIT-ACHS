using System;
using System.Collections.Generic;
using System.Linq;

class Students
{
    public int StudentId { get; set; }
    public string Name { get; set; }
}

class Mark
{
    public int StudentId { get; set; }
    public string Subject { get; set; }
    public int Score { get; set; }
}

class lab3q6
{
    static void Main()
    {
        // List of students
        var students = new List<Students>
        {
            new Students { StudentId = 1, Name = "Tina" },
            new Students { StudentId = 2, Name = "Mina" },
            new Students { StudentId = 3, Name = "Keena" }
        };

        // List of marks
        var markings = new List<Mark>
        {
            new Mark { StudentId = 1, Subject = "Math", Score = 94 },
            new Mark { StudentId = 2, Subject = "Science", Score = 80 },
            new Mark { StudentId = 1, Subject = "Science", Score = 82 },
            new Mark { StudentId = 3, Subject = "Math", Score = 77 }
        };

        // Perform a join operation on StudentId
        var studentMarks = from std in students
                           join marking in markings
                           on std.StudentId equals marking.StudentId
                           select new
                           {
                               std.Name,
                               marking.Subject,
                               marking.Score
                           };

        // Display the results
        Console.WriteLine("Student Marks:");
        foreach (var item in studentMarks)
        {
            Console.WriteLine($"Name: {item.Name}, Subject: {item.Subject}, Score: {item.Score}");
        }
    }
}
