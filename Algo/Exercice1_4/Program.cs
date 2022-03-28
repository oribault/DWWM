using System;

namespace Exercice1_4
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            int b;
            int temp;

            Console.WriteLine("Entrer la valeur de a");
            a = int.Parse(Console.ReadLine());

            Console.WriteLine("Entrer la valeur de b");
            b = int.Parse(Console.ReadLine());

            temp = a;
            a = b;
            b = temp;

            Console.WriteLine("La valeur de a est " + a);
            Console.WriteLine("La valeur de b est " + b);
        }
    }
}
