using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System;
using NLog.Web;
using Microsoft.Extensions.Logging;

namespace MedcenterApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var logger = NLog.Web.NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();

            try
            {
                CreateWebHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                logger.Error(ex, "problema ao iniciar a API!");
                throw;
            }
            finally
            {
                NLog.LogManager.Shutdown();
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("http://localhost:5002", "https://localhost:5003")
                //.UseKestrel(options =>
                //{
                //    options.Listen(IPAddress.Loopback, 5002);
                //    options.Listen(IPAddress.Loopback, 5003, listenOptions =>
                //    {
                //        listenOptions.UseHttps("localhost.pfx","localhost");
                //    });
                //})
                .UseStartup<Startup>()
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.SetMinimumLevel(LogLevel.Error);
                })
                .UseNLog();  
    }
}
