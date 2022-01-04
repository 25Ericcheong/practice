#include <stdio.h>
#include <stdlib.h>

int main() 
{
  sayHi("Mike");
  return 0;
}

void sayHi(char name[]) {
  printf("Hello %s", name);
}
