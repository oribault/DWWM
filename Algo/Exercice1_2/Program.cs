using System;

namespace Exercice1_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calcul de l'aire et du volume d'une sphère");
            double r;
            double aire;
            double volume;

            Console.WriteLine("Entrer la valeur de r");
            r = double.Parse(Console.ReadLine());
            aire = 4 * Math.PI * r * r;
            Console.WriteLine("La valeur de aire est de " + aire);
            volume = 4 / 3 * Math.PI * r * r * r;
            Console.WriteLine("La valeur du volume est de " + volume);
           


            
        }
    }
}
