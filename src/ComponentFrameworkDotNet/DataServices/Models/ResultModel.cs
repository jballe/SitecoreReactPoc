using System.Collections.Generic;
using ComponentFrameworkDotNet.Entities;

namespace ComponentFrameworkDotNet.DataServices.Models
{
    public class ResultModel
    {
        public IEnumerable<IResultItem> Items { get; set; }
        public long TotalCount { get; set; }
        public string ErrorMessage { get; set; }
    }
}
