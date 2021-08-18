#include<bits/stdc++.h>
using namespace std;

void dispaly(vector<int> arr)
{
    for(auto it = arr.begin();it!=arr.end();it++)
        cout << *it << " ";
}

int main()
{
    //1.
    vector<int> v1 = {1, 2, 3, 4, 5, 6, 7, 8};

    vector<int> v2= {100,200,300,400,500,600};
    v2.insert(v2.begin(), 55);
    //dispaly(v2);

    //2. front act as reference
    v2.front() = 88;
    //dispaly(v2);

    //3. more on insert
    v2.insert(v2.begin()+3, 3, 33);
    //dispaly(v2);

    //4. inserting from other container first 3 from v1
    vector<int> v3;
    v3.insert(v3.begin(), v1.begin(), v1.begin() + 3);
    //dispaly(v3);

    //5. erase
    //v3.erase(v3.begin()) only first element will be removed
    v3.erase(v3.begin(), v3.end());
    dispaly(v3);

    //v.clear()
    //v.empty()

    //v.resize(5);

    //.5 resizeing and adding 100 to remaining empty spaces
    v2.resize(15, 100);
    dispaly(v2);
}
