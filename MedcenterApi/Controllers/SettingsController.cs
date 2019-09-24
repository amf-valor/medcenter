using MedcenterApi.Controllers.Model;
using MedcenterApi.Services;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Mvc;

namespace MedcenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        private readonly IMedcenterAppSettingsService _service;
        public SettingsController(IMedcenterAppSettingsService service)
        {
            _service = service;
        }

        [HttpPut]
        public IActionResult Put(SettingDTO setting)
        {
            try
            {
                _service.Update(setting);
            }
            catch (MedcenterAppSettingsNotFoundException)
            {
                return NotFound();
            }
            
            return Ok();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_service.GetAll());
        }
    }
}