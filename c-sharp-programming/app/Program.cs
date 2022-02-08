using System;
using Example0;

class Hello
{
  static void Main()
  {
    Console.WriteLine("Hello, World!");

    int i = 123;
    object o = i;    // Boxing
    int j = (int)o;  // Unboxing

    Object1 obj = new Object1();
    String temp = obj.ToString();
    Console.WriteLine(temp);
  }
}
