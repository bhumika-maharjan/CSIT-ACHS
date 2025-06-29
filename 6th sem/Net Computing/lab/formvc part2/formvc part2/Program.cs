using formvc_part2.Services; //import this 
using formvc_part2.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection")); //our application context is registered now to inject got to controller
});
builder.Services.AddTransient<ILog, temp>();//registered service

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection(); //this and below are middleware
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"); //this is route, here there are 3segments divided
                                                        //by / first segment shows which cntroller is used second shows action thrird is optional so it shown with question mark

app.Run();
