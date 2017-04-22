using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Abc.DAL.Entities;

namespace Abc.WebAPI.Controllers
{
    public class ProductsController : ApiController
    {
        private xyzEntities entities = new xyzEntities();

        //Create
        public HttpResponseMessage Post([FromBody] Product product)
        {
            try
            {
                entities.Products.Add(product);
                entities.SaveChanges();

                var message = Request.CreateResponse(HttpStatusCode.Created, product);
                message.Headers.Location = new Uri(Request.RequestUri +
                product.ProductID.ToString());
                return message;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        //Update
        public HttpResponseMessage Put(int id, [FromBody]Product product)
        {
            try
            {
                var entity = entities.Products.FirstOrDefault(e => e.ProductID == id);
                if (entity == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                        "Product with Id " + id.ToString() + " not found to update");
                }
                else
                {
                    entity.ProductName = product.ProductName;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        //Read 
        [HttpGet]
        public IEnumerable<Product> LoadProducts()
        {
            entities.Configuration.ProxyCreationEnabled = false;
            return entities.Products.ToList();
        }
        //get by id 
        public HttpResponseMessage LoadProductById(int id)
        {

            var entity = entities.Products.FirstOrDefault(e => e.ProductID == id);
            if (entity != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                    "Product ID " + id.ToString() + " not found");
            }
        }
        //Delete
        public HttpResponseMessage Delete(int id)
        {
            try
            {

                var entity = entities.Products.FirstOrDefault(e => e.ProductID == id);
                if (entity == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound,
                        "Product ID = " + id.ToString() + " not found to delete");
                }
                else
                {
                    entities.Products.Remove(entity);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}
