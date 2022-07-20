x=0
y=1
z=0
sum=0
for x in  range(50):
	x=y
	y=z
	z=x+y
	if(z%2==0):
		if(z<4000000):
			sum+=z
		
		
print(sum)