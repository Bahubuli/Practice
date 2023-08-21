def pn(n):
	c=0
	d=int(n**(1/2))
	for i in range(2,d):
		if (n%i==0):
			c=c+1
	if(c==0):
		print(n)
			
		
	
for k in range(2,600851475143):
	if(k<=775146):
		if(600851475143%k==0):
			pn(k)
