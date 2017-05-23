using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using ComponentFrameworkDotNet.DataServices;
using ComponentFrameworkDotNet.DataServices.Models;
using ComponentFrameworkDotNet.Runtime.MvcResults;
using Glass.Mapper.Sc;

namespace ComponentFrameworkDotNet.Runtime.Controllers
{
    [RoutePrefix("api/dataservice")]
    public class DataServiceController : Controller
    {
        private readonly IDataServiceMap _map;
        private readonly ISitecoreService _sitecoreService;

        public DataServiceController(IDataServiceMap map, ISitecoreService sitecoreService)
        {
            _map = map;
            _sitecoreService = sitecoreService;
        }

        [Route("{id}")]
        public async Task<ActionResult> Execute(string id, PagingModel paging)
        {
            var dataSourceItem = _sitecoreService.GetItem<object>(id, inferType: true);
            if (dataSourceItem == null)
            {
                return HttpNotFound($"No datasource '{id}' available");
            }

            var factory = _map[dataSourceItem.GetType()];
            if (factory == null)
            {
                return new NewtonsoftJsonResult
                {
                    StatusCode = (int)HttpStatusCode.BadRequest,
                    StatusDescription = $"No IDataService available for {dataSourceItem.GetType().FullName}"
                };
            }

            var dataservice = factory();
            var result = await dataservice.Create(dataSourceItem, paging);

            return new NewtonsoftJsonResult(result);
        }
    }
}
