using MedcenterApi.Data.Model;

namespace MedcenterApi.Controllers.Model
{
    public class ServiceDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public ServiceType Type { get; set; }
        public bool IsSchedulable { get; set; }
    }
}
