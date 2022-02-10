namespace Example0

// example of one liner ToString method
{
  // example of using ref parameter
  public class Object1
  {
    public static void Swap(ref int x, ref int y)
    {
      int temp = x;
      x = y;
      y = temp;
    }

    // example of using out parameter
    static void Divide(int x, int y, out int result, out int remainder)
    {
      result = x / y;
      remainder = x % y;
    }

    public static void OutUsage()
    {
      Divide(10, 3, out int res, out int rem);
      Console.WriteLine($"{res} {rem}");  // "3 1"
    }

    public override string ToString() => "This is an object";
  }
}
