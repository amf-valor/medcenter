using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Mvc;

namespace MedcenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IEmailSender _emailSender;

        public ContactController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Contact contact)
        {
            _emailSender.SendEmail(contact);
            return Ok();
        }
    }
}
