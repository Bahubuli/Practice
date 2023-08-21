#include<iostream>
using namespace std;
/* iterative solution
int main()
{
  static double s=1;
  double x=1,n=5;
  while (n>0)
  {
    s=1+s*x/n;
    n--;
  }
cout<<s;
}
*/

/*recursive solution
double hs(int x,int n)
{
  static double s;
  if(n==0)
    return s;
  s=1+x*s/n;
  return hs(x,n-1);
}

int main()
{
  cout<<hs(1,10);
}
*/
