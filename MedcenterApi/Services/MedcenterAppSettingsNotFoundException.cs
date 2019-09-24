using System;
using System.Runtime.Serialization;

namespace MedcenterApi.Services
{
    [Serializable]
    internal class MedcenterAppSettingsNotFoundException : ApplicationException
    {
        public MedcenterAppSettingsNotFoundException()
        {
        }

        public MedcenterAppSettingsNotFoundException(string message) : base(message)
        {
        }

        public MedcenterAppSettingsNotFoundException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected MedcenterAppSettingsNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}