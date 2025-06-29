#include <iostream>

using namespace std;

void bubbleSort(int arr[], int n, int &steps) {
    steps = 0; // Initialize step counter
    bool swapped;
    
    for (int i = 0; i < n - 1; ++i) {
        swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            ++steps; // Increment step counter for each comparison
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                ++steps; // Increment step counter for each swap
            }
        }
        // If no two elements were swapped by the inner loop, then break
        if (!swapped) break;
    }
}

int main() {
    int n, steps;
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    int arr[n];
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    bubbleSort(arr, n, steps);

    cout << "Sorted array: ";
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Total steps to compute the sort: " << steps << endl;

    return 0;
}
