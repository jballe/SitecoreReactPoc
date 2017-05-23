using System;
using System.Web.Mvc;
using Sitecore.Js.Presentation.Enum;
using Sitecore.Js.Presentation.Mvc;
using Sitecore.Mvc.Presentation;

namespace SitecoreSite.Controllers
{
    public class ComponentController : JsController
    {
        public Func<RenderingContext> RenderingContext { get; set; } = () => Sitecore.Mvc.Presentation.RenderingContext.CurrentOrNull;

        public ActionResult ClientAndServer()
        {
            return Render(RenderingOptions.ClientAndServer);
        }

        public ActionResult ClientOnly()
        {
            return Render(RenderingOptions.ClientOnly);
        }

        public ActionResult ServerOnly()
        {
            return Render(RenderingOptions.ServerOnly);
        }

        private ActionResult Render(RenderingOptions renderingOptions)
        {
            var context = RenderingContext();
            var componentName = context.Rendering.Item.Name;
            var datasourceid = context.ContextItem.ID.Guid;
            var setupid = context.Rendering.Parameters["Setup"];

            var javascriptComponentName = componentName;
            var props = new
            {
                datasource = new { id = datasourceid },
                setup = new { id = setupid }
            };

            return JsComponent(javascriptComponentName, props, renderingOptions);
        }
    }
}