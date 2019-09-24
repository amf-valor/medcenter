using System;
using System.ComponentModel.DataAnnotations;

namespace MedcenterApi.Data.Model
{
    public class ServiceEntity
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }
        public decimal Price { get; set; }
        public bool IsSchedulable{ get; set; }
        public ServiceType Type { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
