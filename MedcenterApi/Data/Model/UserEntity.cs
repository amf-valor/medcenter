using System.ComponentModel.DataAnnotations;

namespace MedcenterApi.Data.Model
{
    public class UserEntity
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Login { get; set; }
        [StringLength(50)]
        public string Password { get; set; }
    }
}
