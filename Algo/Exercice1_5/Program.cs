using System;

namespace Exercice1_5
{
    class Program
    {
        static void Main(string[] args)
        {
           Console.WriteLine("Calcul d'intérêt");

            Console.WriteLine("Calcul d'intérêt");

            int s;
            int i;
            int n;
            int IS;
            int IC;

            Console.WriteLine("Entrer la somme");
            s = int.Parse(Console.ReadLine());

            Console.WriteLine("Entrer les intérêts");
            i = int.Parse(Console.ReadLine());

            Console.WriteLine("Entrer le nombre d'année");
            n = int.Parse(Console.ReadLine());

            IS = s * (1 + n * i) -s;
            IC = s * (1 + n^ i);
        }
        
    }
}
