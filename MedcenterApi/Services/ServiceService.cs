﻿using AutoMapper;
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

        public PagedResult<ServiceDTO> GetByName(int page, ServiceType type, string name)
        {
            return _context.Services
               .Where(s => s.Type == type && s.Name.StartsWith(name))
               .GetPaged<ServiceEntity, ServiceDTO>(page, 10, _mapper);
        }

        public PagedResult<ServiceDTO> GetByType(int page, ServiceType type)
        {
            return _context.Services
                .Where(s => s.Type == type)
                .GetPaged<ServiceEntity, ServiceDTO>(page, 10, _mapper);
        }

        
    }
}
