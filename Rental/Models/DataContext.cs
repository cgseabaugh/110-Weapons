

using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

    /*
        this class will handle the connection to DB
        and helps to retrueve/store/update data

        if something changes on the models/tables, exec:
        -dotnet ef migrations add <someName>
        -dotner ef database update
    */

    public class DataContext: DbContext {

        public DataContext( DbContextOptions<DataContext> options ) : base(options) {

        }

        public DbSet<Weapon> Weapons {get; set;}

    }
}