#include <stdio.h>
#include <stdlib.h>

int main() 
{
  int age = 30;
  int *pAge = &age;

  printf("%p\n", pAge);
  printf("%d\n", *pAge); // same thing can be done with the next line
  printf("%d", *&age);

  return 0;
}
