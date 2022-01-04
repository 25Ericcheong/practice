#include <stdio.h>
#include <stdlib.h>

int main() 
{
  int luckyNumbers[] = {4, 8, 12, 23, 40};
  luckyNumbers[0] = 200;
  printf("%d \n", luckyNumbers[0]);

  int moreNumbers[10];
  moreNumbers[1] = 80;
  printf("%d", moreNumbers[0]);

  return 0;
}
