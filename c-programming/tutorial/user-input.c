#include <stdlib.h>
#include <stdio.h>

int main()
{
  int age;
  double number;
  char grade;
  char name[20];

  printf("Enter your name: ");
  // scanf("%s", name); -> problem with this is will only take up to space.
  fgets(name, 20, stdin); // stdin is standard input
  printf("Your name is %s", name);

  // printf("Enter your age: ");
  // scanf("%d", &age);
  // printf("You are %d years old \n", age);

  // printf("Enter a decimal number: ");
  // scanf("%lf", &number);
  // printf("This is your decimal number: %f \n", number);

  // printf("Enter your grade: ");
  // scanf("%c", &grade);
  // printf("Your grade is %c", grade);
}
