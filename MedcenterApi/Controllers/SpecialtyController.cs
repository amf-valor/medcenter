using MedcenterApi.Controllers.Model;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Mvc;

namespace MedcenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialtyController : ControllerBase
    {
        private readonly IServiceService _service;
        public SpecialtyController(IServiceService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get([FromQuery(Name = "page")] int page)
        {
            var specialties = _service.GetSpecialties(page);
            return Ok(specialties);
        }
    }
}
