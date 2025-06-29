#include <iostream>
#include <cstring>
using namespace std;

int count_operators(const char *expression)
{
    int count = 0;
    for (int i = 0; expression[i] != '\0'; i++)
    {
        switch (expression[i])
        {
        case '+':
        case '-':
        case '*':
        case '/':
            count++;
            break;
        default:
            break;
        }
    }
    return count;
}

int main()
{
    char expression[100];
    cout << "Enter an expression: ";
    cin.getline(expression, 100);
    int count = count_operators(expression);
    cout << "The number of operators in the expression is " << count << endl;
    return 0;
}
