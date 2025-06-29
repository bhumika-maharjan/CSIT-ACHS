using System.ComponentModel.DataAnnotations;

namespace formvc_part2.Models
{
    public class Employees
    {
        [Key] //data annotation makes id as primary key
        public int ID { get; set; }
        [Required] 
        public string Name { get; set; }
        [Required]
        public int Salary { get; set; }

    }
}
