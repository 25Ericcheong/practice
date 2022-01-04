#include <stdio.h>
#include <stdlib.h>

struct Student {
  char name[50];
  char major[50];
  int age;
  double gpa;
};

int main() 
{
  struct Student student1;
  student1.age = 22;
  student1.gpa = 3.2;
  strcpy(student1.name, "Jim"); // because a string is an array of char, cannot do the same as what we did as before when assigning numbered values
  strcpy(student1.major, "Business");

  printf("%f", student1.gpa);

  struct Student student2;
  student2.age = 15;
  student2.gpa = 6.2;
  strcpy(student2.name, "Eric"); // because a string is an array of char, cannot do the same as what we did as before when assigning numbered values
  strcpy(student2.major, "Engineering");

  printf("%f", student2.gpa);

  return 0;
}
