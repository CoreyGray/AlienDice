using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlienDiceAPI.Models
{
    public class AlienDiceGameTurn
    {
        private int intPlayerNumber;
        public int PlayerNumber
        {
            get {return intPlayerNumber; }
            set {intPlayerNumber = value;}
        }
    }
}