//dependecy creation
namespace formvc_part2.Services
{
    public interface ILog
    {
        void info(string message);
    }
    public class temp: ILog
    {
        public void info(string message) { }
    }
}
