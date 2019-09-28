using MedcenterApi.Controllers.Model;
using MedcenterApi.Services;
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

        [HttpPut]
        [Route("password")]
        public IActionResult Put([FromBody] ChangePasswordRequest request)
        {
            try
            {
                _service.ChangePassword(request.CurrentPassword, request.NewPassword);
                return Ok();
            }
            catch (IncorrectOldPasswordException)
            {
                return StatusCode(StatusCodes.Status401Unauthorized);
            }
        }
    }
}