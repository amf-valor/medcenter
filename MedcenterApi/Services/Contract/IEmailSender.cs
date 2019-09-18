using MedcenterApi.Controllers.Model;
using System.Threading.Tasks;

namespace MedcenterApi.Services.Contract
{
    public interface IEmailSender
    {
        void SendEmail(Contact contact);
    }
}
