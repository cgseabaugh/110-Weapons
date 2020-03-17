using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;
using System.Linq;

namespace Rental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext context){
            this.dbContext = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]

        public IActionResult SaveWeapon([FromBody] Weapon theWeapon){
            Console.WriteLine("User is saving a weapon");

            dbContext.Weapons.Add(theWeapon);
            dbContext.SaveChanges();
            
            return Json(theWeapon);
        }

        [HttpGet]
        public IActionResult GetCatalog(){
            /* Weapon w1 = new Weapon();
            w1.Name = "";
            w1.Price = ;
            w1.Type = "";
            w1.Damage = ;
            w1.Requirement = "";
            w1.ImageUrl = "";
            w1.Description = ""; */

            var list = dbContext.Weapons.ToList();
            return Json(list);
        }
    }
}