#include<iostream>
using namespace std;


/* iterative solution for sin series
int main()
 {

   int x,n;

   cin>>x>>n;

   double s;
double u=x;
double d=1;
for(int i=1;i<=n;i++)
{
if(i==1)
{
  s=x;
  continue;
}
else
{
d=d*(2*i-1)*(2*i-2);
u=u*x*x;
}
if (i%2==0)
s=s-u/d;

else
s=s+u/d;
   }
   cout<<"\n"<<s;
 }
*/
/* recurive solution unoptimized
double sin(int x, int n)
{
  double s = x,r;
  static double u=x;
  static double d=1;
  if(n==1)
  return s;
  s=sin(x,n-1);
  d=d*(2*n-1)*(2*n-2);
  u=u*x*x;
  if(n%2==0)
  return s-u/d;
  else
  return s+u/d;

}

int main()
{

  cout<<sin(2,5);
}
*/
