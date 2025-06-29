#include <iostream>

using namespace std;

void fibonacci(int n, int &steps) {
    steps = 0; // Initialize step counter
    long long a = 0, b = 1;

    if (n > 0) {
        cout << a << " ";
        ++steps; // One step for printing
    }
    if (n > 1) {
        cout << b << " ";
        ++steps; // One step for printing
    }

    for (int i = 2; i < n; ++i) {
        long long c = a + b;
        cout << c << " ";
        a = b;
        b = c;
        ++steps; // Increment step counter for each addition
    }
}

int main() {
    int n, steps;
    cout << "Enter the number of terms in the Fibonacci series: ";
    cin >> n;

    cout << "Fibonacci series up to " << n << " terms: ";
    fibonacci(n, steps);
    cout << endl;

    cout << "Total steps to compute the Fibonacci series: " << steps << endl;

    return 0;
}

