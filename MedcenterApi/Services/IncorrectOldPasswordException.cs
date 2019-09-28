using System;
using System.Runtime.Serialization;

namespace MedcenterApi.Services
{
    [Serializable]
    internal class IncorrectOldPasswordException : ApplicationException
    {
        public IncorrectOldPasswordException()
        {
        }

        public IncorrectOldPasswordException(string message) : base(message)
        {
        }

        public IncorrectOldPasswordException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected IncorrectOldPasswordException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}