using System;
using System.IO;
using System.Text;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace ComponentFrameworkDotNet.Runtime.MvcResults
{
    public class NewtonsoftJsonResult : ActionResult
    {
        public object Data { get; set; }
        public Encoding ContentEncoding { get; set; }
        public int? StatusCode { get; set; }
        public string StatusDescription { get; set; }

        public NewtonsoftJsonResult()
        {
        }

        public NewtonsoftJsonResult(object data)
        {
            Data = data;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            var response = context.HttpContext.Response;

            response.ContentType = "application/json";
            if (ContentEncoding != null)
            {
                response.ContentEncoding = ContentEncoding;
            }

            if (StatusCode.HasValue)
            {
                response.StatusCode = StatusCode.Value;
            }
            if (StatusDescription != null)
            {
                response.StatusDescription = StatusDescription;
            }

            if (Data == null)
            {
                return;
            }

            var serializer = new JsonSerializer
            {
                TypeNameHandling = TypeNameHandling.None,
                ContractResolver =  new CamelCasePropertyNamesContractResolver()
            };
            using (var writer = new StreamWriter(response.OutputStream))
            {
                serializer.Serialize(writer, Data);
            }
        }
    }
}
