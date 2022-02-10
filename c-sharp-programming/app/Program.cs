using con = System.Console;
using eg0 = Example0;
using eg1 = Example1;

namespace Hello;
class Hello
{
  static void Main(string[] args)
  {
    Console.WriteLine("Hello, World!");
    con.WriteLine("Printed with alias!");

    eg0.Object1 obj = new eg0.Object1();
    String temp = obj.ToString();
    Console.WriteLine(temp);

    // example of using reference parameter
    int i = 1, j = 2;
    eg0.Object1.Swap(ref i, ref j);
    con.WriteLine($"{i} {j}");

    // example of using out parameter
    eg0.Object1.OutUsage();


    // example of utilizing type parameters
    var pair = new eg1.Pair<int, string>(1, "two");
    int firstPair = pair.First;
    string secondPair = pair.Second;

    var diffPair = new eg1.Pair<string, string>("one", "two");
    string diffFirstPair = diffPair.First;
    string diffSecondPair = diffPair.Second;




  }
}
