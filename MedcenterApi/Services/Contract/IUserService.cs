namespace MedcenterApi.Services.Contract
{
    public interface IUserService
    {
        bool Authenticate(string login, string password);
    }
}
