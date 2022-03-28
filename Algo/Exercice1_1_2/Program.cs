using System;

namespace Exercice1_1_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Calcul de moyenne");

            double nb1;
            double nb2;
            double q = 0;
            double result;

            do
            {
                Console.WriteLine("Entrer le premier nombre");
                nb1 = double.Parse(Console.ReadLine());

                Console.WriteLine("Entrer un second nombre");
                nb2 = double.Parse(Console.ReadLine());

                result = (nb1 + nb2) / 2;
                Console.WriteLine("Le resultat est de " + result);

                Console.WriteLine("Souhaitez vous faire un nouveau calcul");
                q = double.Parse(Console.ReadLine());
            } while (q == 1);



        }
    }
}
