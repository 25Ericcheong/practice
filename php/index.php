<html>
  <!-- ran with WAMP - directory is WAMP/www and use localhost to run script -->
  <head>
    <title>Hello World</title>
  </head>
  <body>

    Hello, World!

    <?php
      $myvar = "This is my variable" . "<br>";
      $number = 5;
      $name = "Eric";

      echo $myvar;
      echo "Hello, World!" . "<br>";
      echo "Hello, " . $name . "<br>";

      $loggedIn = true;

      if ($loggedIn == true) {
        echo "You are logged in" . "<br><br>";
      } else {
        echo "Please log in";
      }

      $people = array("Eric", "Bob", "More");

      // prints Array([0] => Eric and so on ...)
      print_r($people) . "<br>";
      echo "<br>" . $people[0] . "<br>";

      // loop through array and treat each item as $person
      foreach ($people as $person) {
        echo $person . ' ';
      }

      $numbers = array(5, 3, 7);
      $sum = 0;

      foreach ($numbers as $number) {
        $sum = $sum + $number;
      }

      echo $sum;
    ?>

    <!-- sends information from form to file called process.php -->
    <!-- without post, when submit is clicked, page will go to process.php - we just want to send information to process.php - which is why we use post and clicking submit will take you to process.php file -->
    <form action="process.php" method="post">
      Enter your name:<input name="username" type="text">
      <input type="submit">
    </form>

  </body>
</html>
