using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TabPanel_Display_long_titles.Models;

namespace TabPanel_Display_long_titles.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View();
        }

        [HttpGet]
        public ActionResult GetTabPanelItems(DataSourceLoadOptions loadOptions)
        {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(TabPanelData.TabPanelItems, loadOptions)), "application/json");
        }
    }
}
