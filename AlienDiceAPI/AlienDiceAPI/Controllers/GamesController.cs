using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlienDiceAPI.Controllers
{
    public class GamesController : ApiController
    {
        // get api/games
        //public string Get()
        //{ //return a list of games for this user
        //    return "";
        //}

        //// GET api/games/id
        //public AlienDiceAPI.Models.AlienDiceGameState Get(string id)
        //{
        //    return new AlienDiceAPI.Models.AlienDiceGameState();
        //}

        // api/games/new
        [HttpPost]
        public string New()
        {
            return ""; //return the id of the new game
        }

        //api/games/Quit
        //should quit be a type of move instead?
        [HttpPost] // Post in the name should get it right but lets be explicit and not force the name. PostQuit sounds stupid
        public void Quit(string id)
        {
            //quit from the game with given id
        }

        [HttpGet]
        public string Version()
        { //version of the game interface
            return "0.0.0.1";
        }

        // api/games/commands
        [HttpGet]
        public IEnumerable<string> Commands()
        { // gets a list of supported commands
            return new string[] { "New", "Quit", "Version", "Moves" };
        }

        [HttpGet]
        public IEnumerable<string> Moves()
        { // gets a list of supported moves
            return new string[] { "Roll", "Bank" };
        }

        [HttpGet]
        public IEnumerable<string> Moves(string id)
        {
            //gets a list of moves available to the logged in player for the given game
            return new string[] {"Roll" };
        }

        [HttpPost]
        public void Moves(string id)
        {
            //send the next move for the given game
        }
    }
}
