def pal(n):
	m=0
	r=n
	while n>0:
		o=n%10
		m=m*10+o
		n=n//10
	if(m==r):
		return m
lis=[]
for i in range(100000,999999):
	if i==pal(i):
		lis.append(i)
lis.reverse()
for it in lis:
	for i in range(100,999):
		if(it%i==0):
			j=it//i
			if len(j)==3:
				print(it)
	
	

	
