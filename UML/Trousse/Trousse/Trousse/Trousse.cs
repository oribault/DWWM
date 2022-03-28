using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trousse
{
    public abstract class Trousse
    {

        private int _volume;
        private bool _estOuverte;
        private string _matiere;
        private string _color;
        private string _marque;

        //Constructeur 
        public Trousse(int volume, bool estOuverte)
        {
            Volume = volume;
            EstOuverte = estOuverte;
        }
        public int Volume
        {
            get { return _volume; }
            private set { _volume = value; }
        }
        public bool EstOuverte
        {
            get { return _estOuverte; }
            private set { _estOuverte = value; }
        }

        public bool Ouvrir()
        {
           if(this.EstOuverte)
           {
               EstOuverte = false;
           }

        } 




        //Constructeur
        public Trousse()
        {
            Volume = 0;
            EstOuverte = false;
        }

    }
}
