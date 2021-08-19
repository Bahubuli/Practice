#include<bits/stdc++.h>
using namespace std;

void displayfl(forward_list<int> fl)
{
    for(auto it=fl.begin();it!=fl.end();it++)
    {
        cout << *it << " ";
    }
    cout << endl;
}

int main()
{
    //1. basic
    forward_list<int> l;
    l.assign({
        12,
        3,
        5,
        6,
        7,
        8,
        8,
        32,
    });
    l.remove(8);
    for(auto it=l.begin();it!=l.end();it++)
    {
        //cout << *it << " ";
    }

    //2.
    forward_list<int> l2;
    l2.assign(l.begin(), l.end());

    for (auto it = l2.begin(); it != l2.end(); it++)
    {
        //cout << *it << " ";
    }

    //3.

    forward_list<int> l3;
    l3.assign(5, 10);
    for (auto it = l3.begin(); it != l3.end(); it++)
    {
        //cout << *it << " ";
    }

    //4.

    forward_list<int> l4 = {12, 13, 14};
    auto it = l4.insert_after(l4.begin(), 5);
    //displayfl(l4);
    it = l4.insert_after(it, {1, 2, 3});
    //displayfl(l4);

    //it = l4.emplace_after(it, 77);
    //displayfl(l4);

    //it = l4.erase_after(it);
    displayfl(l4);

    it = l4.erase_after(it,l4.end());
    displayfl(l4);

    //5.

    //clear()
    //empty()
    //reverse()
    //merge() - merge two sorted list into first;
    //sort() - sort list;
    //we can also pass customized function to it for reverse or custom sorting
    //erase_after()
    //push_front()
    //pop_front()
    

}
