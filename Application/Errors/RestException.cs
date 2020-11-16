using System;
using System.Net;
using System.Runtime.Serialization;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public RestException(HttpStatusCode code, object error) 
        {
            Code = code;
            Error = error;
        }

        public HttpStatusCode Code { get; }
        public object Error { get; }
    }
}