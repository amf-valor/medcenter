using MedcenterApi.Controllers.Model;
using MedcenterApi.Data.Model;
using MedcenterApi.Helpers;
using System.Collections.Generic;

namespace MedcenterApi.Services.Contract
{
    public interface IServiceService
    {
        PagedResult<ServiceDTO> GetByType(int page, ServiceType type);
        PagedResult<ServiceDTO> GetByName(int page, ServiceType type, string name);
        int Create(ServiceDTO newService);
        void Delete(int id);
    }
}
