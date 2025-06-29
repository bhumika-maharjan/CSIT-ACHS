using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using SessionLab.Models;
using System;
using System.Collections.Generic;


namespace SessionLab.Controllers
{
    public class StudentController : Controller
    {
            private readonly IMemoryCache _memoryCache;

            public StudentController(IMemoryCache memoryCache)
            {
                _memoryCache = memoryCache;
            }

            public IActionResult CacheDemo()
            {
                var student1 = new StudentViewModel
                {
                    Name = "Bhumika",
                    Email = "bhumika20@gmail.com",
                    PhoneNumber = "9868000001"
                };

                var student2 = new StudentViewModel
                {
                    Name = "Sana",
                    Email = "sana@gmail.com",
                    PhoneNumber = "9806800001"
                };

                var student3 = new StudentViewModel
                {
                    Name = "Maya",
                    Email = "MayaMaya1@gmail.com",
                    PhoneNumber = "9988776655"
                };

                List<StudentViewModel> students = new List<StudentViewModel> { student1, student2, student3 };

                TempData["UserId"] = 101;

                var cacheData = _memoryCache.Get<IEnumerable<StudentViewModel>>("student");

                if (cacheData != null)
                {
                    ViewBag.Message = "Loaded from Cache!";
                    return View(cacheData);
                }

                var expirationTime = DateTimeOffset.Now.AddMinutes(5.0);
                _memoryCache.Set("student", students, expirationTime);

                ViewBag.Message = "Loaded First";
                return View(students);
            }
    }
}
