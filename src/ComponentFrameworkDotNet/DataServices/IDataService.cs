using System.Threading.Tasks;
using ComponentFrameworkDotNet.DataServices.Models;

namespace ComponentFrameworkDotNet.DataServices
{
    public interface IDataService
    {
        Task<ResultModel> Create(object datasource, PagingModel paging);
    }
}