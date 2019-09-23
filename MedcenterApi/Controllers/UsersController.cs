using MedcenterApi.Controllers.Model;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MedcenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;

        public UsersController(IUserService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("authenticate")]
        public IActionResult Post([FromBody] CredentialsDTO credentials)
        {
            if (_service.Authenticate(credentials.Login, credentials.Password))
            {
                return Ok();
            }
            else
            {
                return StatusCode(StatusCodes.Status401Unauthorized);
            }
        }
    }
}