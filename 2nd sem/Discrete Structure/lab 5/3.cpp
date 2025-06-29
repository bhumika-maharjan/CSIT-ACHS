//Write a program to check whether a number is prime or not, with the help of Fermat’s little theorem.
#include <cstring>
#include <iostream>
#include <cstdlib>
#define ll long long
using namespace std;
ll modulo(ll base, ll e, ll mod) {
   ll a = 1;
   ll b = base;
   while (e > 0) {
      if (e % 2 == 1)
         a = (a * b) % mod;
         b = (b * b) % mod;
         e = e / 2;
   }
   return a % mod;
}
bool Fermat(ll m, int iterations) {
   if (m == 1) {
      return false;
   }
   for (int i = 0; i < iterations; i++) {
      ll x = rand() % (m - 1) + 1;
      if (modulo(x, m - 1, m) != 1) {
         return false;
      }
   }
   return true;
}
int main() {
   int iteration = 70;
   ll num;
   cout<<"Enter integer to test primality: ";
   cin>>num;
   if (Fermat(num, iteration))
      cout<<num<<" is prime"<<endl;
   else
      cout<<num<<" is not prime"<<endl;
   return 0;
}
