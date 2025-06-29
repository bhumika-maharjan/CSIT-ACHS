#include <iostream>
#include <cstring>
#include <string>
using namespace std;

char ip_sym[15], stack[15];
int ip_ptr = 0, st_ptr = 0, len, i;
char temp[2], temp2[2];
char act[15];

void check();

int main()
{
    cout << "GRAMMAR:";
    cout << "\nE -> E + E\nE -> E / E";
    cout << "\nE -> E * E\nE -> a / b";
    cout << "\nEnter the input symbol: ";
    cin >> ip_sym;

    cout << "\n\t Stack implementation table\n";
    cout << "\nStack\t\t Input symbol\t\t Action";
    cout << "\n______\t\t ____________\t\t ______\n";
    cout << "\n $\t\t" << ip_sym << "$\t\t\t--";

    strcpy(act, "Shift ");
    temp[0] = ip_sym[ip_ptr];
    temp[1] = '\0';
    strcat(act, temp);
    len = strlen(ip_sym);

    for (i = 0; i <= len - 1; i++)
    {
        stack[st_ptr] = ip_sym[ip_ptr];
        stack[st_ptr + 1] = '\0';
        ip_sym[ip_ptr] = ' ';
        ip_ptr++;
        cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\t" << act;
        strcpy(act, "shift ");
        temp[0] = ip_sym[ip_ptr];
        temp[1] = '\0';  
        strcat(act, temp);
        check();
        st_ptr++;
    }
    return 0;
}

void check()
{
    int flag = 0;
    temp2[0] = stack[st_ptr];
    temp2[1] = '\0';

    // Use case-insensitive comparison (strcasecmp is standard in POSIX systems)
    if (strcasecmp(temp2, "a") == 0 || strcasecmp(temp2, "b") == 0)
    {
        stack[st_ptr] = 'E';
        if (strcasecmp(temp2, "a") == 0)
            cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\tE->a";
        else
            cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\tE->b";
        flag = 1;
    }

    if (strcasecmp(temp2, "+") == 0 || strcasecmp(temp2, "*") == 0 || strcasecmp(temp2, "/") == 0)
    {
        flag = 1;
    }

    if (strcasecmp(stack, "E+E") == 0 || strcasecmp(stack, "E/E") == 0 || strcasecmp(stack, "E*E") == 0)
    {
        strcpy(stack, "E");
        st_ptr = 0;
        if (strcasecmp(stack, "E+E") == 0)
            cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\tE->E+E";
        else if (strcasecmp(stack, "E/E") == 0)
            cout << "\n $" << stack << "\t\t " << ip_sym << "$\t\t\tE->E/E";
        else
            cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\tE->E*E";
        flag = 1;
    }

    if (strcasecmp(stack, "E") == 0 && ip_ptr == len)
    {
        cout << "\n $" << stack << "\t\t" << ip_sym << "$\t\t\tACCEPT";
        return;
    }

    if (flag == 0)
    {
        cout << "\n"
             << stack << "\t\t\t" << ip_sym << "\t\t REJECT";
        return;
    }
    return;
}
