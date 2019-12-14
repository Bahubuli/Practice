#include<iostream>
using namespace std;

int main()
{
  //first way totaly in stack
  int a[3][3]={{2,3,4},{5,4,3},{5,7,5}};
  //second way partially in stack(pointer array  b) and partially in heap
  int *b[3];
  b[0]=new int[3];
  b[1]=new int[3];
  b[2]=new int[3];



  //third way completely in heap

  int **c;
  c=new int* [3];
  c[1]=new int[3];
  c[2]=new int[3];
  c[0]=new int[3];

//initializing part
  for(int i=0;i<3;i++)
  {
    for(int j=0;j<3;j++)
    {
      b[i][j]=i+j*2;
    }
  }
for(int i=0;i<3;i++)
  {
    for(int j=0;j<3;j++)
    {
      c[i][j]=i*5+j;
    }
  }

  //printing part
  for(int i=0;i<3;i++)
  {
    for(int j=0;j<3;j++)
    {
      cout<<a[i][j];
    }
  }

  cout<<"\n";

  for(int i=0;i<3;i++)
  {
    for(int j=0;j<3;j++)
    {
      cout<<b[i][j];
    }
  }

  cout<<"\n";

 for(int i=0;i<3;i++)
  {
    for(int j=0;j<3;j++)
    {
      cout<<c[i][j];
    }
  }


}
