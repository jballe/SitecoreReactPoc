using System;
using System.Collections.Generic;
using ComponentFrameworkDotNet.Entities;
using Glass.Mapper.Sc.Configuration.Attributes;

namespace BackendComponents.SitecoreItems
{
    [SitecoreType(TemplateId = "{ACB7FA8F-A89D-49A3-90CB-F49E869BD58C}", AutoMap = true)]
    public class SelectedSitecoreItemsDataSource : Entity
    {
        public ICollection<Guid> Items { get; set; }
    }
}
