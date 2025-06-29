#include<iostream>
using namespace std;

class powerclass {
    public:
        double power(int x, int n) {
            if (n < 0) {
                return power(x, n+1)/x;
            } else {
                if (n==0)
                    return 1;
                else
                    return x * power(x, n-1);
            }
        }
};

int main() {
    powerclass pc;
	int a,n;
	cout<<"enter a and n;
	cin>>a>>n;
    cout << pc.power(a, n);

    return 0;
}
