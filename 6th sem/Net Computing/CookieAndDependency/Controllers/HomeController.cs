using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;

public class HomeController : Controller
{
    // Set Cookie
    public void SetCookie(string key, string value, int? expireTime)
    {
        CookieOptions option = new CookieOptions();

        if (expireTime.HasValue)
            option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
        else
            option.Expires = DateTime.Now.AddMilliseconds(10); // Short life cookie

        Response.Cookies.Append(key, value, option);
    }

    // Get Cookie
    public string GetCookie(string key)
    {
        return Request.Cookies[key] ?? "No Cookie Found";
    }

    // Delete Cookie
    public void DeleteCookie(string key)
    {
        Response.Cookies.Delete(key);
    }

    // Example Action to Set Cookie
    public IActionResult Set(string key, string value, int? minutes)
    {
        SetCookie(key, value, minutes);
        return Content($"Cookie Set: {key} = {value}");
    }

    // Example Action to Read Cookie
    public IActionResult Get()
    {
        string user = GetCookie("user");
        return Content($"Cookie Value: {user}");
    }

    // 👉 Delete cookie via query: /home/delete?key=user
    public IActionResult Delete(string key)
    {
        DeleteCookie(key);
        return Content($"Cookie '{key}' deleted.");
    }
}
