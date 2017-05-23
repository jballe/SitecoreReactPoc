using ComponentFrameworkDotNet.Entities;
using Glass.Mapper.Sc.Configuration.Attributes;

namespace BackendComponents.Entities
{
    [SitecoreType(TemplateId = "{0DC8C496-1791-47AF-B7F1-69F0A6BE2633}", AutoMap = true)]
    public class DummyItem : Entity
    {
        public virtual string Title { get; set; }
        public virtual string Url { get; set; }
    }
}
