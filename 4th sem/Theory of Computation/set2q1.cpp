#include <iostream>
#include <string>

using namespace std;

int main() {
    string input;
    cout << "Enter the input string (consisting of 0s and 1s): ";
    cin >> input;

    // Check if the string is not empty and if the last character is '1'
    if (!input.empty() && input[input.size() - 1] == '1') {
        cout << "Accepted!" << endl;
    } else {
        cout << "Rejected!" << endl;
    }

    return 0;
}

