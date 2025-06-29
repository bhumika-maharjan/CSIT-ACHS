//Write a program to generate the next r combination in lexicographic order
#include <iostream>
#include <algorithm>
using namespace std;

void nextCombination(int arr[], int n, int r) {
    int i = r - 1;
    while (i >= 0 && arr[i] == n - r + i + 1) {
        i--;
    }
    if (i < 0) {
        return;
    }
    arr[i]++;
    for (int j = i + 1; j < r; j++) {
        arr[j] = arr[i] + j - i;
    }
}

int main() {
    int arr[] = {1, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    int r = 2;
    nextCombination(arr, n, r);
    for (int i = 0; i < r; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
