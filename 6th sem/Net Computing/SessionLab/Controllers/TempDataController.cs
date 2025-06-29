using Microsoft.AspNetCore.Mvc;

namespace SessionLab.Controllers
{
    public class TempDataController : Controller
    {
        public IActionResult First()
        {
            TempData["UserName"] = "Bhumika";
            return RedirectToAction("Second");
        }

        public IActionResult Second()
        {
            // Automatically removes "UserName" unless you Keep or Peek
            var userName = TempData.Peek("UserName")?.ToString();
            TempData.Keep("UserName"); // Optional: Keeps "UserName" for next request

            ViewBag.Name = userName;
            return View(); // Create Second.cshtml if you want to display it
        }

        public IActionResult Third()
        {
            var userName = TempData["UserName"]?.ToString(); // Will be null unless Keep was used before
            ViewBag.Name = userName;
            return View(); // Create Third.cshtml to display if needed
        }
    }
}
