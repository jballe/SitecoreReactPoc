using Sitecore;
using Sitecore.Pipelines.HttpRequest;

namespace SitecoreSite.Processors
{
    [UsedImplicitly]
    public class IgnoreUrls : HttpRequestProcessor
    {
        public override void Process(HttpRequestArgs args)
        {
            if (Context.GetSiteName() == "website" && args.LocalPath.TrimStart('/').StartsWith("api/"))
            {
                args.AbortPipeline();
            }
        }
    }
}