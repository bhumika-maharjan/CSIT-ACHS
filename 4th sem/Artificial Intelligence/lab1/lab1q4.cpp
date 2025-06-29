 // Write a recursive program to find the factorial of a number.
 
 #include <iostream>
 using namespace std;
 
 int factorial(int n){
 	if(n>1){
 		return n * factorial(n - 1);
	 }
 	else
    return 1;
 }
 
 int main(){
 	int num;
  cout<< "enter a number to find its factorial"<<endl;
  cin>> num;
  cout<<" the factorial of given number is"<<factorial(num);
  return 0;
 }
 	
