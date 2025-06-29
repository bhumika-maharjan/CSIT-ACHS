using System;

// Base Employee Class
class Employee
{
    public void AttendMeeting()
    {
        Console.WriteLine("Attending the meeting.");
    }

    public virtual void Work()
    {
        Console.WriteLine("Working on tasks.");
    }
}

// Manager Class inheriting from Employee
class Manager : Employee
{
    public void ManageTeam()
    {
        Console.WriteLine("Managing the team and resources.");
    }

    public override void Work()
    {
        Console.WriteLine("Managing projects and overseeing team performance.");
    }
}

// Developer Class inheriting from Employee
class Developer : Employee
{
    public void WriteCode()
    {
        Console.WriteLine("Writing code for the project.");
    }

    public override void Work()
    {
        Console.WriteLine("Developing software and debugging code.");
    }
}

// Intern Class inheriting from Employee
class Intern : Employee
{
    public void Learn()
    {
        Console.WriteLine("Learning new skills and assisting the team.");
    }

    public override void Work()
    {
        Console.WriteLine("Assisting with various tasks and gaining experience.");
    }
}

class Employeed
{
    static void Main(string[] args)
    {
        Manager manager = new Manager();
        Console.WriteLine("Manager:");
        manager.AttendMeeting();
        manager.ManageTeam();
        manager.Work();
        Console.WriteLine();

        Developer developer = new Developer();
        Console.WriteLine("Developer:");
        developer.AttendMeeting();
        developer.WriteCode();
        developer.Work();
        Console.WriteLine();

        Intern intern = new Intern();
        Console.WriteLine("Intern:");
        intern.AttendMeeting();
        intern.Learn();
        intern.Work();
    }
}
