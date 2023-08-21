#include<bits/stdc++.h>
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
    if(n==0)
        return 1;
        int n1=n;
        int x=9,m=9;
        while(n1-1)
        {

            m=m*x;
            x--;
            n1--;
        }
        return(m+countNumbersWithUniqueDigits(n-1));
        }
};
