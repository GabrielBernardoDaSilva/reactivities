using System;
using System.Net;
using System.Runtime.Serialization;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public object Error { get; }
        public HttpStatusCode Code { get; }

        public RestException(HttpStatusCode code, object error = null) 
        {
            Code = code;
            Error = error;
        }

    }
}