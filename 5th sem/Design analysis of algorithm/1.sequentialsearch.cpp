#include <iostream>

using namespace std;

int sequentialSearch(int arr[], int n, int target, int &steps) {
    steps = 0; // Initialize step counter

    for (int i = 0; i < n; ++i) {
        ++steps; // Increment step counter for each comparison
        if (arr[i] == target) {
            return i; // Return the index if the target is found
        }
    }

    return -1; // Return -1 if the target is not found
}

int main() {
    int n, target, steps;
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    int arr[n];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    cout << "Enter the target element to search for: ";
    cin >> target;

    int index = sequentialSearch(arr, n, target, steps);

    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }

    cout << "Total steps to compute the search: " << steps << endl;

    return 0;
}
