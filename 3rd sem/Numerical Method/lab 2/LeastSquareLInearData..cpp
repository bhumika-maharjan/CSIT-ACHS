#include<iostream>
#include<cmath>
using namespace std;

int main() {
    int x[10], y[10],  n;
    double A, B, yEq, xEq,sum[4] = {0};
    cout << "Enter the number of x: ";
    cin >> n;
    cout << "Enter the value of x: \n";
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }
    cout << "Enter the value of y: \n";
    for (int i = 0; i < n; i++) {
        cin >> y[i];
    }

    for (int i = 0; i < n; i++) {
        sum[0] += x[i];
        sum[1] += y[i];
        sum[2] += x[i] * x[i];
        sum[3] += x[i] * y[i];
    }

    B = (n * sum[3] - sum[0] * sum[1]) / (n * sum[2] - sum[0] * sum[0]);
    A = (sum[1] - B * sum[0]) / n;

    cout << "A: " << A << " B: " << B << endl;

    cout << "Enter the value of x for which y is to be calculated: ";
    cin >> xEq;

    yEq = A + B * xEq;

    cout << "The value of y is: " << yEq;

    return 0;
}
