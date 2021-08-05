class recipe:
    def __init__(self,rid,rname,igr,rtype,calo):
        self.rid=rid
        self.rname=rname
        self.igr=igr
        self.rtype=rtype
        self.calo=calo

class mykit:
    def __init__(self,rlist,klist):
        self.rlist=rlist
        self.klist=klist

    def getavailcount(self,rtypename):
        ll=[]

        for robj in self.rlist:
            count=0
            if robj.rtype.lower()==rtypename.lower():
                for j in robj.igr:
                    if j in self.klist:
                        count+=1
                if count>=3:
                    ll.append(robj)
        return len(ll)

    def least2calo(self):
        ll=[self.rlist[0]]
        for i in range(1,len(self.rlist)):
            if(self.rlist[i].calo<=ll[i-1].calo):
                ll.insert(0,self.rlist[i])
            else:
                ll.append(self.rlist[i])
        myans=[]
        if(len(ll)>=2):
            myans.append(ll[0])
            myans.append(ll[1])
        return myans

def main():
    rl=[]
    n=int(input())
    for i in range(n):
        rid=int(input())
        rname=input()
        rtype=input()
        ingr=[]
        for j in range(3):
            ingr.append(input())
        calo=float(input())
        rl.append(recipe(rid,rname,ingr,rtype,calo))

    kl=[]
    m=int(input())
    for i in range(m):
        kl.append(input())
    quer=input()
    ko=mykit(rl,kl)
    ans1=ko.getavailcount(quer)
    if ans1:
        print(ans1)
    else:
        print("Major ingredients for given recipe type not found")
    ans2=ko.least2calo()
    print(ans2)
main()
