// C program to reverse a string
// using recursion
# include <stdio.h>

// Function to print reverse of
// the passed string
void reverse(char *str)
{
if (*str)
{
	reverse(str + 1);
	printf("%c", *str);
}
}

// Driver code
int main()
{
char a[] = "Geeks for Geeks";
reverse(a);
return 0;
}

