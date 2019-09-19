using MedcenterApi.Data.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MedcenterApi.Data
{
    public class MedcenterDbContext : DbContext
    {
        DbSet<ServiceEntity> Services { get; set;}
        public MedcenterDbContext() { }
        public MedcenterDbContext(DbContextOptions<MedcenterDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            var converter = new EnumToStringConverter<ServiceType>();

            builder
                .Entity<ServiceEntity>()
                .Property(e => e.Type)
                .HasConversion(converter);
        }
    }
}
