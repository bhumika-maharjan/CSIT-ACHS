#include <iostream>
#include <string>

using namespace std;

int main() {
    string input;
    cout << "Enter the input string (consisting of 0s and 1s): ";
    cin >> input;

    int currentState = 0; // Initial state
    for (size_t i = 0; i < input.size(); ++i) {
        char c = input[i];
        if (c == '0') {
            currentState = 0; // Stay in the same state for '0'
        } else if (c == '1') {
            currentState = 1 - currentState; // Transition to the next state for '1'
        } else {
            // Invalid input character
            cout << "Invalid input character '" << c << "'" << endl;
            return 1;
        }
    }

    // Check if the final state is accepting
    if (currentState == 1) {
        cout << "Accepted!" << endl;
    } else {
        cout << "Rejected!" << endl;
    }

    return 0;
}

