using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ComponentFrameworkDotNet.DataServices;
using ComponentFrameworkDotNet.DataServices.Models;
using ComponentFrameworkDotNet.Entities;
using Glass.Mapper.Sc;

namespace BackendComponents.SitecoreItems
{
    public class SelectedSitecoreItemsDataService : IDataService
    {
        private readonly ISitecoreService _sitecore;

        public SelectedSitecoreItemsDataService() : this(new SitecoreContext())
        {
        }


        public SelectedSitecoreItemsDataService(ISitecoreService sitecore)
        {
            _sitecore = sitecore;
        }

        public async Task<ResultModel> Create(object datasource, PagingModel paging)
        {
            var ds = datasource as SelectedSitecoreItemsDataSource;
            if (ds?.Items == null)
            {
                return new ResultModel
                {
                    ErrorMessage = "No SelectedSitecoreItemsDataSource received"
                };
            }

            var ids = (IEnumerable<Guid>) ds.Items;
            if (paging.From.HasValue && paging.From.Value > 0)
            {
                ids = ids.Skip(paging.From.Value);
            }

            var rows = paging.Rows ?? 100;
            ids = ids.Take(rows);

            var items = ids.Select(id => _sitecore.GetItem<object>(id, inferType: true)).ToList();
            var resultitems = items.OfType<IResultItem>().ToList();

            return new ResultModel
            {
                Items = resultitems,
                TotalCount = ds.Items.Count
            };
        }
    }
}
