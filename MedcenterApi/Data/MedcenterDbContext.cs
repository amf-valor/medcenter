using MedcenterApi.Data.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.Collections.Generic;

namespace MedcenterApi.Data
{
    public class MedcenterDbContext : DbContext
    {
        public DbSet<ServiceEntity> Services { get; set;}
        public DbSet<UserEntity> Users { get; set; }
        public MedcenterDbContext() { }
        public MedcenterDbContext(DbContextOptions<MedcenterDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            List<ServiceEntity> data = new List<ServiceEntity>();

            for (int i = 1; i < 31; i++)
            {
                ServiceEntity service = new ServiceEntity()
                {
                    Id = i,
                    Name = "acupuntura",
                    IsSchedulable = true,
                    Price = 90.00m,
                    Type = ServiceType.Specialty
                };

                data.Add(service);
            }

            builder.Entity<ServiceEntity>().HasData(data);
            var converter = new EnumToStringConverter<ServiceType>();

            builder
                .Entity<ServiceEntity>()
                .Property(e => e.Type)
                .HasConversion(converter);
                
            builder.Entity<ServiceEntity>()
                .Property(t => t.CreatedAt)
                .HasColumnType("timestamp")
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            UserEntity admin = new UserEntity()
            {
                Id = 1,
                Login = "admin.medcenter",
                Password = "Medcenter@dmin"
            };

            builder.Entity<UserEntity>().HasData(admin);
        }
    }
}
