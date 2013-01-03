using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AlienDiceAPI.Models
{
    public class AlienDiceGameState
    {
        private System.Guid gID;
	    public System.Guid ID
	    {
		    get { return gID;}
		    set { gID = value;}
	    }
        private int intPlayersTurn;
        public int PlayersTurn
        {
            get { return intPlayersTurn; }
            set { intPlayersTurn = value; }
        }
        
    }
}