using System;

namespace Exercice1_6
{
    class Program
    {
        static bool Main(string[] args)
        {
            Console.WriteLine("Nombre premier");

            int number;
            int divider;
            bool isPrime;

            isPrime = true;
            Console.WriteLine("Entrer un nombre");
            number = int.Parse(Console.ReadLine());

            for ( int i = 2; i < number; i++)
            {
                if (number % i == 0 && i != number)
                {
                    return false;

                }
            } return true;
        }
    }
}
