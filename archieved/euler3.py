for x in range(2,13195):
	if(13195%x==0):
		fac=x
		for y in range(2,x):
			if(x%y!=0):
				print(y)
		