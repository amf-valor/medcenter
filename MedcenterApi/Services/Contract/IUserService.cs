namespace MedcenterApi.Services.Contract
{
    public interface IUserService
    {
        bool Authenticate(string login, string password);
        void ChangePassword(string current, string @new);
    }
}
