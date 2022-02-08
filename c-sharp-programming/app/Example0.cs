namespace Example0
{
  public class Object1
  {
    public static void Swap(ref int x, ref int y)
    {
      int temp = x;
      x = y;
      y = temp;
    }

    public override string ToString() => "This is an object";
  }
}
