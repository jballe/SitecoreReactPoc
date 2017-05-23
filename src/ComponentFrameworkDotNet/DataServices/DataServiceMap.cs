using System;
using System.Collections.Concurrent;

namespace ComponentFrameworkDotNet.DataServices
{
    public class DataServiceMap : IDataServiceMap
    {
        public static readonly DataServiceMap Instance = new DataServiceMap();

        private readonly ConcurrentDictionary<Type, Func<IDataService>> _dictionary = new ConcurrentDictionary<Type, Func<IDataService>>();

        public Func<IDataService> this[Type datasourceItemType]
        {
            get => _dictionary[datasourceItemType];
            set { _dictionary.AddOrUpdate(datasourceItemType, value, (key, oldValue) => value); }
        }
    }
}
