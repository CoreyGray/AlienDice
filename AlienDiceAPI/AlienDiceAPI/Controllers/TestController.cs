using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlienDiceAPI.Controllers
{
    public class TestController : ApiController
    {
        public string Get()
        {
            return "You didn't send a string";
        }

        ////     GET api/test/5
        //public string Get(string id)
        //{
        //    //just echo it back
        //    return id;
        //}

        public AlienDiceAPI.Models.AlienDiceGameTurn Get(string id)
        {
           
            AlienDiceAPI.Models.AlienDiceGameTurn ret = new AlienDiceAPI.Models.AlienDiceGameTurn();
            ret.PlayerNumber = 3;
            return ret;
        }
    }
}
