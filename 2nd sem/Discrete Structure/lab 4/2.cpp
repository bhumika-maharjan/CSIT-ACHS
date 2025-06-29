#include <iostream>
#include <cmath>

using namespace std;

int power(int b, int n, int m) {
    int result = 1;
    for (int i = 0; i < n; i++) {
        result = (result * b) % m;
    }
    return result;
}

int main() {
    int b, n, m;
    cout << "Enter the value of b: ";
    cin >> b;
    cout << "Enter the value of n: ";
    cin >> n;
    cout << "Enter the value of m: ";
    cin >> m;

    cout << "The result of " << b << "^" << n << " mod " << m << " is " << power(b, n, m) << endl;

    return 0;
}
