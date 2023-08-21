#include<bits/stdc++.h>
using namespace std;

void displayl(list<int> fl)
{
    for(auto it=fl.begin();it!=fl.end();it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
   //list is dll and contains all function of forward_list

   list<int> l = {12, 13, 14};
   auto it = l.begin();
   it++;
   it = l.insert(it, 99);
   displayl(l);
   it++;
   it++;
   it = l.insert(it, 5, 9);
   displayl(l);

   //l.front()
   //l.back()
   //l.size()
   //l.erase(it)
   //l.remove(9)
   //merge(l1,l2) ----- l2 becomes empty()
   //unique()--------- will remove consecutive duplicates
   


}
