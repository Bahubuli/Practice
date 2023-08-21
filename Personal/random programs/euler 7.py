def pn2(m):
	k=0
	n=int(m**(1/2))
	for i in range(2,n+2):
		if (m%i==0):
			k=k+1
	if(k==0):
		return(m)
	else:
		return 0
j=0
k=0
while j<=10001:
	if pn2(k)>0:
		print(pn2(k))
		j=j+1
	k=k+1
	
		
	
	

	
	
	
