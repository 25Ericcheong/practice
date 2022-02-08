using System;

class Hello
{
  static void Main()
  {
    Console.WriteLine("Hello, World!");

    int i = 123;
    object o = i;    // Boxing
    int j = (int)o;  // Unboxing
  }
}
