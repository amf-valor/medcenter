using MedcenterApi.Controllers.Model;
using MedcenterApi.Helpers;
using System.Collections.Generic;

namespace MedcenterApi.Services.Contract
{
    public interface IServiceService
    {
        PagedResult<ServiceDTO> GetSpecialties(int page);
    }
}
