#include<iostream>
using namespace std;
int main()
{
double x;
int n;
cin>>x>>n;
double s=1;

for(int i=n;i>=1;i--)
{
if(i==1)
{
s=s*x;
continue;
}
s=1-x*x*s/((2*i-1)*(2*i-2));

}

cout<<s;

}
