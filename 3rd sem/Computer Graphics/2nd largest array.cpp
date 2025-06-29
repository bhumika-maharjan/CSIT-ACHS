#include<iostream>

using namespace std;

int main()
{
    int arr[]={24,-43,5,2,56,2,12,47};
    int largest=0;
    int seclargest=0;
    for(int i=0; i<10;i++)
    {
        if(arr[i] > largest)
        {
            seclargest=largest;
            largest= arr[i];
        }
        else if (arr[i] > seclargest && arr[i] != largest) 
        {
            seclargest=arr[i];
        }
    }
    cout<<"The secondlargest number in the given arr of string is :"<<seclargest<<endl;
    return 0;
}
