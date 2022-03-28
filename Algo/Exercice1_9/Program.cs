using System;

namespace Exercice1_9
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Recherche des diviseurs d’un nombre ");
            int number;
            int i;
            Console.WriteLine("Entrer un nombre");
            number = int.Parse(Console.ReadLine());

            for (i = 2; i < number; i++) ;
            {
                if(number % i == 0)
                {
                    Console.WriteLine(i);
                }
            }


    }
}
