using AutoMapper;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Data;
using MedcenterApi.Data.Model;
using MedcenterApi.Helpers;
using MedcenterApi.Services.Contract;
using System.Linq;

namespace MedcenterApi.Services
{
    public class ServiceService : IServiceService
    {
        private readonly MedcenterDbContext _context;
        private readonly IMapper _mapper;
        public ServiceService(IMapper mapper, MedcenterDbContext context)
        {
            _context = context;
            _mapper = mapper;
        }

        public PagedResult<ServiceDTO> GetSpecialties(int page)
        {
            return _context.Services
                .Where(s => s.Type == ServiceType.Specialty)
                .GetPaged<ServiceEntity, ServiceDTO>(page, 10, _mapper);
        }
    }
}
