using Microsoft.EntityFrameworkCore;
using formvc_part2.Models;

namespace formvc_part2.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }//making a constructor
        public DbSet<Employees> Employees { get; set; }
            
    }
}
