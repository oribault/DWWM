using System;

namespace Exercice1_8
{
    class Program
    {
        static bool Main(string[] args)
        {
            Console.WriteLine("Année bisextile");
            int a;

            Console.WriteLine("Entrer a");
            a = int.Parse(Console.ReadLine());
            if(a % 4 ==0)
            {
                if(a % 100 == 0)
                {
                    if(a % 400 == 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false
                    }
                }
            }
        }

    }
}
