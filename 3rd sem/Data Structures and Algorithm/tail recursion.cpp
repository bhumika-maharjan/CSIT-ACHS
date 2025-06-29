#include <stdio.h>
#include <conio.h>
int fun(int n){
	if (n>0){
		printf("%d",&n);
		fun(n-1);
	
	}
}
int main(){
	fun(3);
	getch();
	return 0;
}
