#include <stdio.h>
#include <stdlib.h>

int main() 
{
  // FILE * fpointer = fopen("employees.txt", "w");
  
  // fprintf(fpointer, "Jim, Salesman\nPam, Receptionist\nOscar, Accounting");

  // FILE * fpointer = fopen("employees.txt", "a");
  
  // fprintf(fpointer, "\nKelly, Customer Service");

  char line[255];
  FILE * fpointer = fopen("employees.txt", "r");

  fgets(line, 255, fpointer);
  printf("%s", line);

  fclose(fpointer);

  return 0;
}
