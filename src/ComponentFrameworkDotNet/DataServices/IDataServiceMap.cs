using System;

namespace ComponentFrameworkDotNet.DataServices
{
    public interface IDataServiceMap
    {
        Func<IDataService> this[Type datasourceItemType] { get; set; }
    }
}