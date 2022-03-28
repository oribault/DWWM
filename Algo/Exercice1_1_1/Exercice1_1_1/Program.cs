using System;

namespace Exercice1_1_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calcul de moyenne");

            int nb1;
            int nb2;
            double result;

            Console.WriteLine("Entrer le premier nombre");
            nb1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Entrer un second nombre");
            nb2 = int.Parse(Console.ReadLine());

            result = (nb1 + nb2) / 2;
            Console.WriteLine("Le resultat est de " + result);
        }
    }
}
