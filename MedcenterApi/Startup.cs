using AutoMapper;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Data;
using MedcenterApi.Data.Model;
using MedcenterApi.Services;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MedcenterApi
{
    public class Startup
    {
        private readonly string corsPolicyName = "medcenterApiCorsPolicy";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration["ConnectionStrings:Medcenter"];
            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
            services.AddSingleton<IEmailSender, EmailSender>();
            services.AddTransient<IServiceService, ServiceService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IMedcenterAppSettingsService, MedcenterAppSettingsService>();
            services.AddDbContext<MedcenterDbContext>(options => options.UseMySql(connectionString));
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ServiceEntity, ServiceDTO>();
                cfg.CreateMap<MedcenterAppSetting, SettingDTO>();
                cfg.CreateMap<ServiceDTO, ServiceEntity>();
            });

            services.AddSingleton(config.CreateMapper());

            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicyName, builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(corsPolicyName);
            //app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
