#include <stdio.h>
#include <stdlib.h>

int main() 
{
  double num1;
  double num2;
  char op;

  printf("Enter first number: ");
  scanf("%lf", &num1);

  printf("Enter operator: ");
  scanf(" %c", &op);

  printf("Enter second number: ");
  scanf("%lf", &num2);

  double result;
  if (op == '+') {
    result = num1 + num2;
  } else if (op == '-') {
    result = num1 - num2;
  } else if (op == '/') {
    result = num1 / num2;
  } else if (op == '*') {
    result = num1 * num2;
  } else {
    printf("Invalid operator \n");
  }

  printf("Answer: %f", result);
  return 0;
}
