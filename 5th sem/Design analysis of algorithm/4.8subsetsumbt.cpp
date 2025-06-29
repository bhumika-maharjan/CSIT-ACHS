#include <iostream>
using namespace std;

bool subsetSum(int set[], int n, int sum) {
    // Base Cases
    if (sum == 0)
        return true;
    if (n == 0 && sum != 0)
        return false;

    // If the last element is greater than the sum, ignore it
    if (set[n - 1] > sum)
        return subsetSum(set, n - 1, sum);

    // Check if the sum can be obtained by any of the following:
    // (a) including the last element
    // (b) excluding the last element
    return subsetSum(set, n - 1, sum) || 
           subsetSum(set, n - 1, sum - set[n - 1]);
}

int main() {
    int set[] = {3, 34, 4, 12, 5, 2}; // Example set
    int sum = 9;  // Example sum
    int n = sizeof(set) / sizeof(set[0]);

    if (subsetSum(set, n, sum))
        cout << "Found a subset with given sum" << endl;
    else
        cout << "No subset with given sum" << endl;

    return 0;
}

