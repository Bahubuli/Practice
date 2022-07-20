#include<iostream>
using namespace std;

double e(int x,int n)
{
  static double  p=1, d=1;
  double r;

  if(n==0)
{
  return 1;
}
else
{
  r=e(x,n-1);
  p=p*x;
  d=d*n;

  return r +p/d;

}

}
int main()
{
  cout<<e(1,10);
}
