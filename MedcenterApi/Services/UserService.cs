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

        public void ChangePassword(string current, string @new)
        {
            var user = _context.Users.Where(u => u.Login.Equals("admin.medcenter")).First();

            if (!user.Password.Equals(current))
            {
                throw new IncorrectOldPasswordException("senha atual incorreta");
            }

            user.Password = @new;
            _context.SaveChanges();
        }
    }
}
