#include <stdio.h>
#include <stdlib.h>

int main() 
{
  int age = 30;
  double gpa = 3.4;
  char grade = 'A';

  // %p stands for pointer
  printf(" age: %p\n grade: %p\n gpa: %p\n", &age, &grade, &gpa);

  return 0;
}
