#include <iostream>
using namespace std;

int Recursive(int arr[], int size) 
{
    if (size == 0) 
    {
        return 0;  
    } 
    else 
    {
        return arr[size - 1] + Recursive(arr, size - 1);

    }
}

int main() 
{
    int arr[] = {1,2,3,4,5,3,2,0};
    int size = sizeof(arr) / sizeof(arr[0]);

    int sum = Recursive(arr, size);

    cout << "Sum of the array elements: " << sum << endl;

    return 0;
}
