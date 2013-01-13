using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlienDiceAPI.Models
{
    public class AlienDiceGameState
    {
        public System.Guid ID
        {
            get;
            set;
        }
        public int PlayersTurn
        {
            get;
            set;
        }
    }

    

    public class AlienDiceGameMove
    {
        public System.Guid ID { get; set; }
        public int MoveOrder { get; set; }
    }

    /// <summary>
    /// GamePlayer maps players to games.  It has the game id, the player id and the position the player occupies
    /// </summary>
    public class GamePlayer
    {
        public System.Guid Id { get; set; }
        public System.Guid GameID { get; set; }
        public System.Guid PlayerID { get; set; }
        public int PlayerNumber { get; set; }
    }

    public class Game
    {
        public System.Guid Id { get; set; }
        public System.Guid GameID { get; set; }
        public int GameStatus { get; set; } //finished, open etc.


    }
}