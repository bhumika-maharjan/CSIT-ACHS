/*2. Write a program to solve non-linear equation using Newton’s method. Your program should read an initial guess from keyboard and display the followings if the solution is obtained: a. Estimated root of the equation 
b. Functional value at calculated root 
c. Required number of iterations 
*/
#include <iostream>
#include <cmath>

using namespace std;

double func(double x)
{
    return cos(x) + 5 * x - 6;
}

double derivative(double x)
{
    return -sin(x) + 5;
}

double newtonMethod(double x, double error)
{
    double x_old = x;
    double x_new;
    double new_error = 1.0;
    int iterations = 0;

    while (new_error > error)
    {
        x_new = x_old - (func(x_old) / derivative(x_old));
        new_error = abs((x_new - x_old) / x_new);
        x_old = x_new;
        iterations++;
    }

    cout << "Estimated Root: " << x_new << endl;
    cout << "Functional Value at Root: " << func(x_new) << endl;
    cout << "Number of Iterations: " << iterations << endl;

    return x_new;
}

int main()
{
    double initial_guess, error;

    cout << "Enter the initial guess: ";
    cin >> initial_guess;
    cout << "Enter the expected error: ";
    cin >> error;

    double root = newtonMethod(initial_guess, error);

    return 0;
}
