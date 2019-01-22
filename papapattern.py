x=int(input('enter no of lines'))
i=x
k=1
while i>0:
	j=1
	while j<=i:
		print(' ',end='')
		j=j+1
	
	s=0
	while s!=(2*k-1):
		print('*',end='')
		s=s+1	
	i=i-1
	k=k+1
	
	print('\n')