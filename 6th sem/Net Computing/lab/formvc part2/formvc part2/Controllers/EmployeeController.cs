using System.Reflection.Metadata.Ecma335;
using formvc_part2.Data;
using formvc_part2.Models;
using Microsoft.AspNetCore.Mvc;

namespace formvc_part2.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly ApplicationContext context;

        public EmployeeController(ApplicationContext context)//dependency injected
        {
            this.context = context;
        }
        public IActionResult Index() //add view
        {
            var data = context.Employees.ToList();
            return View(data);
        }
        [HttpGet]

        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(Employees model)
        {
            if (ModelState.IsValid)
            {
                var data = new Employees
                {
                    Name = model.Name,
                    Salary = model.Salary,

                };
                context.Employees.Add(data);
                context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View(model);
            }

            //var data = new Employees
            //{
            //    Name = "John",
            //    Salary = 12000,

            //};
            //context.Employees.Add(data);
            //context.SaveChanges();
            //return RedirectToAction("Index")

        }
        public IActionResult Delete(int id)
        {
            var emp = context.Employees.SingleOrDefault(x => x.ID == id);
            context.Employees.Remove(emp);
            context.SaveChanges();
            return RedirectToAction("Index");
        }
        public IActionResult Edit(int id)
        {
            var emp = context.Employees.SingleOrDefault(x => x.ID == id);
            var result = new Employees()
            {
                Name = emp.Name,
                Salary = emp.Salary
            };
            
            return View(result);
        }
        [HttpPost]
        public IActionResult Edit(Employees model)
        {
            //var emp = context.Employees.SingleOrDefault(x => x.ID == id);
            //var result = new Employees()
            //{
            //    Name = emp.Name,
            //    Salary = emp.Salary
            //};

            if (ModelState.IsValid)
            {
                var data = new Employees
                {
                    Name = model.Name,
                    Salary = model.Salary,

                };
                context.Employees.Add(data);
                context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View(model);
            }
        }
    }
}
