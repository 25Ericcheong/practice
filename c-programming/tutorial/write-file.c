#include <stdio.h>
#include <stdlib.h>

int main() 
{
  FILE * fpointer = fopen("employees.txt", "w");
  
  fprintf(fpointer, "Jim, Salesman\nPam, Receptionist\nOscar, Accounting");

  fclose(fpointer);

  return 0;
}
