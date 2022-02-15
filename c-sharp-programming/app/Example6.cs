namespace Example6;

public class Person
{
  public string Name { get; set; }
  public int Age { get; set; }
  public Person(string name, int age)
  {
    Name = name;
    Age = age;
  }
}

public struct OtherPerson
{
  public string Name;
  public int Age;
  public OtherPerson(string name, int age)
  {
    Name = name;
    Age = age;
  }
}
