using System;

namespace Exercice1_3
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine(" Calcul de la surface d’un secteur circulaire ");

            double r;
            double a;

            Console.WriteLine("Entrer la valeur de r");
            r = double.Parse(Console.ReadLine());
            Console.WriteLine("Entrer la valeur de a");
            a = double.Parse(Console.ReadLine());

            a = Math.PI * r * r * a / 360;

            Console.WriteLine("La valeur de a est de : " + a);

        }
    }
}
