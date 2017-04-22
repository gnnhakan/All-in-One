using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Abc.DAL.Entities;

namespace Abc.WebAPI.Controllers
{
    public class CategoriesController : ApiController
    {
        private xyzEntities entities = new xyzEntities();
        [HttpGet]
        public IEnumerable<Category> LoadCategories()
        {
            entities.Configuration.ProxyCreationEnabled = false;
            return entities.Categories.ToList();
        }
    }
}
