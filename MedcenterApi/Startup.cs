using AutoMapper;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Data;
using MedcenterApi.Data.Model;
using MedcenterApi.Services;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
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
            var logger = NLog.Web.NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHttpsRedirection();
            }

            app.UseExceptionHandler(a => a.Run(async context =>
            {
                var ex = context.Features.Get<IExceptionHandlerPathFeature>().Error;
                logger.Error(ex, "houve um problema!");
            }));

            app.UseCors(corsPolicyName);
            app.UseMvc();
        }
    }
}
