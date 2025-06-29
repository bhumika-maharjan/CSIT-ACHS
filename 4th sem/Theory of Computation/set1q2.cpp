#include <iostream>
#include <string>

using namespace std;

class TuringMachine {
private:
    string tape;
    int headPosition;

public:
    TuringMachine(string input) {
        tape = "_" + input + "_"; // Add blanks at both ends of the tape
        headPosition = 1; // Start reading from the first symbol
    }

    void run() {
        while (true) {
            char currentSymbol = tape[headPosition];
            if (currentSymbol == '0') {
                tape[headPosition] = 'x'; // Mark '0' as visited
                moveRight();
            } else if (currentSymbol == '1') {
                if (eraseZero()) { // Erase a visited '0'
                    moveLeft();
                } else {
                    cout << "Rejected!" << endl;
                    return;
                }
            } else if (currentSymbol == '_') {
                if (eraseZero()) { // Erase a visited '0'
                    cout << "Accepted!" << endl;
                    return;
                } else {
                    cout << "Rejected!" << endl;
                    return;
                }
            } else {
                cout << "Rejected!" << endl;
                return;
            }
        }
    }

private:
    void moveRight() {
        headPosition++;
    }

    void moveLeft() {
        headPosition--;
    }

    bool eraseZero() {
        int pos = headPosition;
        while (tape[pos] != 'x') { // Move left until find 'x' (visited '0')
            if (pos == 0) {
                return false; // No '0' to erase
            }
            pos--;
        }
        tape[headPosition] = '_'; // Erase '1'
        return true;
    }
};

int main() {
    string input;
    cout << "Enter the input string (consisting of 0s and 1s): ";
    cin >> input;

    TuringMachine tm(input);
    tm.run();

    return 0;
}


