namespace Example4;

using eg3 = Example3;

class EventExample
{
  static int s_changeCount;

  static void ListChanged(object sender, EventArgs e)
  {
    s_changeCount++;
  }

  // The MyList<T> class declares a single event member called Changed, which indicates that a new item has been added to the list.The Changed event is raised by the OnChanged virtual method, which first checks whether the event is null (meaning that no handlers are present). The notion of raising an event is precisely equivalent to invoking the delegate represented by the event. There are no special language constructs for raising events.
  // Clients react to events through event handlers.Event handlers are attached using the += operator and removed using the -= operator. The following example attaches an event handler to the Changed event of a MyList<string>.
  public static void Usage()
  {
    var names = new eg3.MyList<string>();
    names.Changed += new EventHandler(ListChanged);
    names.Add("Liz");
    names.Add("Martha");
    names.Add("Beth");
    Console.WriteLine(s_changeCount); // "3"
  }
}
