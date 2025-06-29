#include <iostream>
#include <cctype>
using namespace std;

int main()
{
    char a[10];
    int flag, i = 1;
    cout << "Enter an identifier: ";
    cin >> a;

    if (isalpha(a[0]) || a[0] == '_')
        flag = 1;
    else
        flag = 0;

    while (a[i] != '\0')
    {
        if (!isdigit(a[i]) && !isalpha(a[i]) && a[i] != '_')
        {
            flag = 0;
            break;
        }
        i++;
    }

    if (flag == 1)
        cout << "Valid identifier";
    else
        cout << "Not a valid identifier";
    return 0;
}
