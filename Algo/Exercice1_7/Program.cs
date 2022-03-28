using System;

namespace Exercice_1è7
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Tri de nombre");

            int a;
            int b;
            int c;

            Console.WriteLine("nombre a");
            a = int.Parse(Console.ReadLine());

            Console.WriteLine("nombre b");
            b = int.Parse(Console.ReadLine());

            Console.WriteLine("nombre c");
            c = int.Parse(Console.ReadLine());

            if(a< b)
            {
                Console.WriteLine(c + "<" + a + "<" + b);
            }
            else
            {
                if (c < b)
                {
                    Console.WriteLine(a + "<" + c + "<" + b);
                }
                else
                {
                    Console.WriteLine(a + "<" + b + "<" + c);
                }
                if (c < a)
                {
                    Console.WriteLine(b+ "<" + a + "<" + c);
                }
            }
            
        }
    }
}
