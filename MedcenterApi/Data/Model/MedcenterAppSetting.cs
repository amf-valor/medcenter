using System.ComponentModel.DataAnnotations;

namespace MedcenterApi.Data.Model
{
    public class MedcenterAppSetting
    {
        [Key]
        [StringLength(50)]
        public string Name { get; set; }
        [StringLength(100)]
        public string Value { get; set; }
    }
}
