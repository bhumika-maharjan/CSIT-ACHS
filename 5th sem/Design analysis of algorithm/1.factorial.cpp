#include <iostream>

using namespace std;

long long factorial(int n, int &steps) {
    steps = 0; // Initialize step counter
    long long result = 1;
    for (int i = 1; i <= n; ++i) {
        result *= i;
        ++steps; // Increment step counter for each multiplication
    }
    return result;
}

int main() {
    int number, steps;
    cout << "Enter a number: ";
    cin >> number;

    long long fact = factorial(number, steps);

    cout << "Factorial of " << number << " is: " << fact << endl;
    cout << "Total steps to compute the factorial: " << steps << endl;

    return 0;
}
