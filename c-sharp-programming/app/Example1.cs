namespace Example1;

// example of typed parameter utilization
public class Pair<TFirst, TSecond>
{
  public TFirst First { get; }
  public TSecond Second { get; }

  public Pair(TFirst first, TSecond second) =>
      (First, Second) = (first, second);
}
