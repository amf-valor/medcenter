using MedcenterApi.Controllers.Model;
using System.Collections.Generic;

namespace MedcenterApi.Services.Contract
{
    public interface IMedcenterAppSettingsService
    {
        void Update(SettingDTO newSetting);
        ICollection<SettingDTO> GetAll();
    }
}
