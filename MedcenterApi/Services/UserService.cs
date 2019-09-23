using MedcenterApi.Data;
using MedcenterApi.Data.Model;
using MedcenterApi.Services.Contract;
using System.Linq;

namespace MedcenterApi.Services
{
    public class UserService : IUserService
    {
        private readonly MedcenterDbContext _context;
        public UserService(MedcenterDbContext context)
        {
            _context = context;
        }
        public bool Authenticate(string login, string password)
        {
            UserEntity user = _context.Users.Where(u => u.Login.Equals(login)).FirstOrDefault();

            if(user is null)
            {
                return false;
            }

            return password.Equals(user.Password);
        }
    }
}
