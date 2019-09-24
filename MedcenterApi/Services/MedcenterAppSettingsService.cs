using AutoMapper;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Data;
using MedcenterApi.Services.Contract;
using System.Collections.Generic;
using System.Linq;

namespace MedcenterApi.Services
{
    public class MedcenterAppSettingsService : IMedcenterAppSettingsService
    {
        private readonly MedcenterDbContext _context;
        private readonly IMapper _mapper;
        public MedcenterAppSettingsService(MedcenterDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public ICollection<SettingDTO> GetAll()
        {
            return _mapper.Map<List<SettingDTO>>(_context.MedcenterAppSettings.ToList());
        }

        public void Update(SettingDTO newSetting)
        {
            var setting = _context.MedcenterAppSettings.Where(s => s.Name.Equals(newSetting.Name)).FirstOrDefault();

            if (setting is null)
            {
                throw new MedcenterAppSettingsNotFoundException();
            }

            setting.Value = newSetting.Value;
            _context.SaveChanges();
        }
    }
}
