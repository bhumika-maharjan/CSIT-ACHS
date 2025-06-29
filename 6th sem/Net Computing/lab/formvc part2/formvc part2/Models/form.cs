using System.ComponentModel.DataAnnotations;

namespace formvc_part2.Models
{
    public class form
    {
        [Required] //for model validation one type of data annotation in serverside
        [StringLength(100, MinimumLength = 6)] //another annotation
        public string Name { get; set; }
    }
}
