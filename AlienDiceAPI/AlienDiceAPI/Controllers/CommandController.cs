using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlienDiceAPI.Controllers
{
    public class CommandController : ApiController
    {
        //sends back a list of supported commands
        public string[] Get()
        {
            
            return new string[]  {"New","Quit"};
        }

        //api/Command/Quit
        [HttpPost] // Post in the name should get it right but lets be explicit and not force the name
        public void Quit(string id)
        {
            //quit from the game with given id
        }

        //api/Command/New
        [HttpPost]
        public string New()
        {
            return ""; //return the id of the new game
        }

        //api/Command/Move
        [HttpPost]
        public void Move()
        {
        }

    }
}
