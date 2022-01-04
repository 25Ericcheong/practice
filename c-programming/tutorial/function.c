#include <stdio.h>
#include <stdlib.h>

double cube(double num) {
  double result = num * num * num;
  return result;
}

int main() 
{
  printf("Answer: %f \n", cube(3.0));

  sayHi("Mike", 22);
  return 0;
}

void sayHi(char name[], int age) {
  printf("Hello %s, you are %d\n", name, age);
}
