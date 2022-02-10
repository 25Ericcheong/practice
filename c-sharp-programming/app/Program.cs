using con = System.Console;
using eg0 = Example0;
using eg1 = Example1;

namespace Hello;
class Hello
{
  static void Main(string[] args)
  {
    PrintFormat("Simple console print example");
    Console.WriteLine("Hello, World!");
    con.WriteLine("Printed with alias!");

    eg0.Object1 obj = new eg0.Object1();
    String temp = obj.ToString();
    Console.WriteLine(temp);

    // example of using reference parameter
    PrintFormat("Reference parameter example");
    int i = 1, j = 2;
    eg0.Object1.Swap(ref i, ref j);
    con.WriteLine($"{i} {j}");

    // example of using out parameter
    PrintFormat("Out parameter example");
    eg0.Object1.OutUsage();


    // example of utilizing type parameters
    PrintFormat("Type parameter example");
    var pair = new eg1.Pair<int, string>(1, "two");
    int firstPair = pair.First;
    string secondPair = pair.Second;

    var diffPair = new eg1.Pair<string, string>("one", "two");
    string diffFirstPair = diffPair.First;
    string diffSecondPair = diffPair.Second;



    // example of using parameter array
    PrintFormat("Example of parameter array");
    int x, y, z;
    x = 3;
    y = 4;
    z = 5;
    Console.WriteLine("x={0} y={1} z={2}", x, y, z);

    // equivalent to
    int x1 = 3, y1 = 4, z1 = 5;

    string s = "x={0} y={1} z={2}";
    object[] args1 = new object[3];
    args1[0] = x1;
    args1[1] = y1;
    args1[2] = z1;
    Console.WriteLine(s, args1);
  }

  public static void PrintFormat(String input)
  {
    Console.WriteLine(" ");
    Console.WriteLine(input);
  }
}
