#include <iostream>
using namespace std;

// Function to find GCD using Euclidean algorithm
int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int num1, num2;

    // Taking input from user
    cout << "Enter two integers: ";
    cin >> num1 >> num2;

    // Calculating GCD
    int result = gcd(num1, num2);

    // Output the result
    cout << "GCD of " << num1 << " and " << num2 << " is: " << result << endl;

    return 0;
}

