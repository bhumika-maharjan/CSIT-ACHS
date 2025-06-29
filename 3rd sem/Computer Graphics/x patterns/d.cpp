#include<iostream>
using namespace std;

int main()
{
    for(int i=1;i<=4;i++)
    {
        for(int j=1;j<=7;j++)
        {
            if(i==1 && j==4 )
            {
                cout<<"*";
            }
            else if(i==2 &&(j==3 || j==4 || j==5))
            {
                cout<<"*";
            }
            else if (i==3 && (j==2 || j==3 || j==4 || j==5 || j==6))
            {
                cout<<"*";
            }
            else if (i==4)
            {
                cout<<"*";
            }
            else 
                cout<<" ";
        }
    cout<<endl;
    }
    return 0;
}
