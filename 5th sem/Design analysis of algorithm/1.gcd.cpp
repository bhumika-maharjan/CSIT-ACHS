#include <iostream>

using namespace std;

int gcd(int a, int b, int &steps) {
    steps = 0; // Initialize step counter
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
        ++steps; // Increment step counter for each iteration
    }
    return a;
}

int main() {
    int a, b, steps;
    cout << "Enter two numbers: ";
    cin >> a >> b;

    int result = gcd(a, b, steps);

    cout << "GCD of " << a << " and " << b << " is: " << result << endl;
    cout << "Total steps to compute the GCD: " << steps << endl;

    return 0;
}
