using System;
namespace CookieAndDependency.Services
{
    public class MyService : IMyService
    {
        public string GetMessage()
        {
            return "This code is from MyService using Dependency Injection! from Bhumika";
        }
    }

}

