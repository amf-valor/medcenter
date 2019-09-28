using MedcenterApi.Controllers.Model;
using MedcenterApi.Data.Model;
using MedcenterApi.Helpers;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Mvc;

namespace MedcenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly IServiceService _service;
        public ServicesController(IServiceService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get(
            [FromQuery(Name = "page")] int page, 
            [FromQuery(Name = "type")] ServiceType type,
            [FromQuery(Name = "name")] string name)
        {

            PagedResult<ServiceDTO> services;

            if (string.IsNullOrEmpty(name))
            {
                services = _service.GetByType(page, type);
            }
            else
            {
                services = _service.GetByName(page, type, name);
            }

            return Ok(services);
        }

        [HttpPost]
        public IActionResult Post(ServiceDTO serviceRequest)
        {
            serviceRequest.Id = _service.Create(serviceRequest);
            return Ok(serviceRequest);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
