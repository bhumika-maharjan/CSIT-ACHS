#include <stdio.h>
#include <string.h>

char op[2], arg1[5], arg2[5], result[5];

int main()
{
    FILE *fp1, *fp2;
    fp1 = fopen("input.txt", "r");
    fp2 = fopen("output.txt", "w");

    if (fp1 == NULL || fp2 == NULL)
    {
        printf("Error opening files.\n");
        return 1;
    }

    // Using fscanf to read until the end of file without feof()
    while (fscanf(fp1, "%s %s %s %s", op, arg1, arg2, result) == 4)
    {
        if (strcmp(op, "+") == 0)
		        {
            fprintf(fp2, "MOV R0, %s\n", arg1);
            fprintf(fp2, "ADD R0, %s\n", arg2);
            fprintf(fp2, "MOV %s, R0\n", result);
        }
        else if (strcmp(op, "*") == 0)
        {
            fprintf(fp2, "MOV R0, %s\n", arg1);
            fprintf(fp2, "MUL R0, %s\n", arg2);
            fprintf(fp2, "MOV %s, R0\n", result);
        }
        else if (strcmp(op, "-") == 0)
        {
            fprintf(fp2, "MOV R0, %s\n", arg1);
            fprintf(fp2, "SUB R0, %s\n", arg2);
            fprintf(fp2, "MOV %s, R0\n", result);
        }
        else if (strcmp(op, "/") == 0)
        {
            fprintf(fp2, "MOV R0, %s\n", arg1);
            fprintf(fp2, "DIV R0, %s\n", arg2);
            fprintf(fp2, "MOV %s, R0\n", result);
        }
        else if (strcmp(op, "=") == 0)
        {
            fprintf(fp2, "MOV R0, %s\n", arg1);
            fprintf(fp2, "MOV %s, R0\n", result);
        }
    }

    fclose(fp1);
    fclose(fp2);

    // Display success message
    printf("Assembly code successfully written into output.txt\n");

    return 0;
}

