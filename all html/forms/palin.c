#include<stdio.h>
int main()
{
    int num,palin=0,tem,palin1,hold;
    printf("Enter the number to check palin");
    scanf("%d",&num);
    hold=num;

   while (num!=0)
   {
        tem=num%10; 
        palin=(palin*10)+tem;
        num=num/10;
   }
   
    if(palin==hold)
    {
        printf("Num is palindrome");
    }
    else
    {
        printf("Num is not palin");
    }
}