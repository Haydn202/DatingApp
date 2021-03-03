using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    //gives dbcontext allowing for database connections.
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //use AppUser models with entity framework.
        public DbSet<AppUser> Users { get; set; }
    }
}