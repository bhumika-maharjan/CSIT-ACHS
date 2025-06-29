#include <iostream>
using namespace std;

int main()
{
    char com[30];
    int i = 2, a = 0;

    cout << "Enter comment: ";
    cin >> com;

    if (com[0] == '/')
    {
        if (com[1] == '/')
            cout << "It is a comment";
        else if (com[1] == '*')
        {
            for (i = 2; i <= 30; i++)
            {
                if (com[i] == '*' && com[i + 1] == '/')
                {
                    cout << "It is a comment";
                    a = 1;
                    break;
                }
            }
            if (a == 0)
                cout << "It is not a comment";
        }
        else
            cout << "It is not a comment";
    }
    else
        cout << "It is not a comment";

    return 0;
}
