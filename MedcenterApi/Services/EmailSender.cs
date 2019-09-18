using MailKit.Net.Smtp;
using MedcenterApi.Controllers.Model;
using MedcenterApi.Data.Model;
using MedcenterApi.Services.Contract;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Threading.Tasks;

namespace MedcenterApi.Services
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailSettings _emailSettings;

        public EmailSender(
            IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public void SendEmail(Contact contact)
        {
            try
            {
                var mimeMessage = new MimeMessage();
                mimeMessage.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.Sender));
                mimeMessage.To.Add(new MailboxAddress(_emailSettings.Sender));
                mimeMessage.Subject = "Novo contato do website medcenter";

                mimeMessage.Body = new TextPart("html")
                {
                    Text = buildMessage(contact.From, contact.Email , contact.Phone, contact.Message)
                };

                using (var client = new SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                    client.Connect(_emailSettings.MailServer, _emailSettings.MailPort);
                    client.Authenticate(_emailSettings.Sender, _emailSettings.Password);
                    client.Send(mimeMessage);
                    client.Disconnect(true);
                }

            }
            catch (Exception ex)
            {
                // TODO: handle exception
                Console.WriteLine(ex.Message);
                throw;
            }
        }

        private string buildMessage(string from, string email, string phone, string message)
        {
            return $@"<strong>Nome:</strong> {from}<br/>
                      <strong>E-mail:</strong> {email}<br/>
                      <strong>Telefone:</strong> {phone}<br/><br/>
                      {message}";
        }
    }
}
