using BackendComponents.SitecoreItems;
using ComponentFrameworkDotNet.DataServices;
using ComponentFrameworkDotNet.Runtime.Controllers;
using Glass.Mapper.Sc;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using SitecoreSite.Controllers;

namespace SitecoreSite
{
    public class ComponentsStart : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<ISitecoreContext>(provider => new SitecoreContext(Glass.Mapper.Context.Default));
            serviceCollection.AddScoped<ISitecoreService, ISitecoreContext>();
            serviceCollection.AddTransient<SelectedSitecoreItemsDataService>();

            serviceCollection.AddTransient<DataServiceController>();
            serviceCollection.AddTransient<ComponentController>();

            DataServiceMap.Instance.Register<SelectedSitecoreItemsDataSource, SelectedSitecoreItemsDataService>();
        }
    }

    public static class Registrations
    {
        public static void Register<TDataSource, TService>(this IDataServiceMap map) where TService : IDataService
        {
            map[typeof(TDataSource)] = () => ServiceLocator.ServiceProvider.GetService<TService>();
        }
    }
}
