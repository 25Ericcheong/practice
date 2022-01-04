#include <stdio.h>
#include <stdlib.h>

int main() 
{
  char color[20];
  char pluralNoun[20];
  char celebrityF[20];
  char celebrityL[20];

  printf("Enter a color: ");
  scanf("%s", color); // no need & with multiple char
  printf("Enter a plural noun: ");
  scanf("%s", pluralNoun); // no need & with multiple char
  printf("Enter a celebrity: ");
  scanf("%s%s", celebrityF, celebrityL); // to be able to acquire 2 strings separated by space but user will need to type in 2 separate strings then

  printf("Roses are %s\n", color);
  printf("%s are blue\n", pluralNoun);
  printf("I love %s %s\n", celebrityF, celebrityL);

  return 0;
}
