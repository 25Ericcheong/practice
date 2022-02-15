using con = System.Console;
using eg0 = Example0;
using eg1 = Example1;
using eg2 = Example2;
using eg3 = Example3;
using eg4 = Example4;
using eg5 = Example5;
using eg6 = Example6;
using System.Text;

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



    // example of virtual, override, abstract methods
    PrintFormat("Virtual, override, abstract method example");
    eg2.Expression e = new eg2.Operation(
    new eg2.VariableReference("x"),
    '+',
    new eg2.Constant(3));

    Dictionary<string, object> vars = new();
    vars["x"] = 3;
    con.WriteLine(e.Evaluate(vars));

    PrintFormat("A more extensive use of the expression class created");
    eg2.Expression e0 = new eg2.Operation(
      new eg2.VariableReference("x"),
      '*',
      new eg2.Operation(
        new eg2.VariableReference("y"),
        '+',
        new eg2.Constant(2)
      )
    );

    Dictionary<string, object> diffVars = new();
    diffVars["x"] = 3;
    diffVars["y"] = 5;
    Console.WriteLine(e0.Evaluate(diffVars)); // "21"
    diffVars["x"] = 1.5;
    diffVars["y"] = 9;
    Console.WriteLine(e0.Evaluate(diffVars)); // "16.5"



    // example of other function members
    PrintFormat("Function members example");
    eg3.MyList<string> names = new();
    names.Capacity = 100;   // Invokes set accessor
    int ii = names.Count;    // Invokes get accessor
    int jj = names.Capacity; // Invokes get accessor
    con.WriteLine(ii);



    // example of array in general and jagged array 
    PrintFormat("Array usage example");
    int[][] a = new int[3][];
    a[0] = new int[10];
    a[1] = new int[5];
    a[2] = new int[20];

    // following allocates and initializes an int[] with three elements
    int[] b = new int[] { 1, 2, 3 };

    // shortened version
    int[] c = { 1, 2, 3 };

    // also equivalent to
    int[] t = new int[3];
    t[0] = 1;
    t[1] = 2;
    t[2] = 3;



    // foreach usage
    PrintFormat("Foreach usage example");
    foreach (int item in b)
    {
      Console.WriteLine(item);
    }



    // example of using, using directive
    PrintFormat("Printing a string builder");
    StringBuilder builder = new();
    builder.AppendLine("Hello");
    builder.AppendLine("World!");

    Console.WriteLine(builder.ToString());



    // example of using auto implemented method
    PrintFormat("Classes with auto implemented");
    eg5.Person person = new eg5.Person("Eric Cheong");
    con.WriteLine(person.Name);



    // example of displaying diff between class and struct instance
    PrintFormat("Showcasing differences between class and struct instance");
    // for class instance
    eg6.Person person1 = new eg6.Person("Leopold", 6);
    Console.WriteLine("person1 Name = {0} Age = {1}", person1.Name, person1.Age);

    // Declare new person, assign person1 to it.
    eg6.Person person2 = person1;

    // Change the name of person2, and person1 also changes.
    person2.Name = "Molly";
    person2.Age = 16;

    Console.WriteLine("person2 Name = {0} Age = {1}", person2.Name, person2.Age);
    Console.WriteLine("person1 Name = {0} Age = {1}", person1.Name, person1.Age);

    // for struct instance
    // Create  struct instance and initialize by using "new".
    // Memory is allocated on thread stack.
    eg6.OtherPerson p1 = new eg6.OtherPerson("Alex", 9);
    Console.WriteLine("p1 Name = {0} Age = {1}", p1.Name, p1.Age);

    // Create  new struct object. Note that  struct can be initialized
    // without using "new".
    eg6.OtherPerson p2 = p1;

    // Assign values to p2 members.
    p2.Name = "Spencer";
    p2.Age = 7;
    Console.WriteLine("p2 Name = {0} Age = {1}", p2.Name, p2.Age);

    // p1 values remain unchanged because p2 is  copy.
    Console.WriteLine("p1 Name = {0} Age = {1}", p1.Name, p1.Age);

    // testing ValueType.Equals method
    p1.Name = "Spencer";
    p1.Age = 7;
    if (p2.Equals(p1))
      Console.WriteLine("p2 and p1 have the same values.");
  }

  // used to print formatted examples to some extend
  public static void PrintFormat(String input)
  {
    Console.WriteLine(" ");
    Console.WriteLine(input);
  }
}
