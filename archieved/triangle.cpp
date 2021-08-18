   #include<bits/stdc++.h>
   using namespace std;
   int main()
   {
       int s = 9;

       for (int i = 1; i <= s; i++)
       {
           for (int j = 1; j <= i; j++)
           {
               if (i == s)
                   cout << "*";
               else if (j == 1 || j == i)
                   cout << "*";
               else
                   cout << " ";
           }
           cout << endl;
    }
   }
