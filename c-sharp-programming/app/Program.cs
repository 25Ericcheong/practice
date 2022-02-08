using con = System.Console;
using Example0;

class Hello
{
  static void Main()
  {
    Console.WriteLine("Hello, World!");
    con.WriteLine("Printed with alias!");

    Object1 obj = new Object1();
    String temp = obj.ToString();
    Console.WriteLine(temp);
  }
}
