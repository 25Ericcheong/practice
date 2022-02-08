using con = System.Console;
using Example0;

namespace Hello;
class Hello
{
  static void Main(string[] args)
  {
    Console.WriteLine("Hello, World!");
    con.WriteLine("Printed with alias!");

    Object1 obj = new Object1();
    String temp = obj.ToString();
    Console.WriteLine(temp);

    int i = 1, j = 2;
    Object1.Swap(ref i, ref j);
    con.WriteLine($"{i} {j}");
  }
}
