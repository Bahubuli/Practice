def fn(list):
	st=''
	n=len(list)
	if n==2:
		k=list[0]+ ' and ' + list[1]
		print(k)
	elif n==1:
		print(list[0])
	elif n==0:
		return ''
	
	else:
		for i in list:
			if list.index(i)<=len(list)-3:
				st=str(i)+', '+st
		st=st+list[len(list)-2]+' and '+list[len(list)-1]
		print(st)
k=['ed','dhf','jdd']
fn(k)

			
				
