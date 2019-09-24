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
        public DbSet<MedcenterAppSetting> MedcenterAppSettings { get; set; }
        public MedcenterDbContext() { }
        public MedcenterDbContext(DbContextOptions<MedcenterDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder)
        {          
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

            List<MedcenterAppSetting> settings = new List<MedcenterAppSetting>();
            settings.Add(new MedcenterAppSetting() { Name = "WhatsApp", Value = "" });
            settings.Add(new MedcenterAppSetting() { Name = "Phone", Value = "" });
            settings.Add(new MedcenterAppSetting() { Name = "Address", Value = "" });
            settings.Add(new MedcenterAppSetting() { Name = "CNPJ", Value = "" });
            settings.Add(new MedcenterAppSetting() { Name = "CompanyName", Value = "" });
            settings.Add(new MedcenterAppSetting() { Name = "TechinicalManager", Value = "" });

            builder.Entity<MedcenterAppSetting>().HasData(settings);

        }
    }
}
