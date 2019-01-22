samn={'arrow':23,'gold coin':34,'torch':2,'rope':3,'dagger':1}

def game(ion):
	t=0
	print('inventory')
	for k,v in ion.items():
		
		print(str(v)+' '+str(k))
		t=t+v
	print('total no of items  '+str(t))
lot=['ruby','chumi','ghodi','msn','ruby','ghodi']

def addin(smn,loot):
	for m in loot:
		if m in smn.keys():
			smn[m]=smn[m]+1
			
		else:
			smn.setdefault(m,1)
	print(smn)
addin(samn,lot)

	#game inventory sample
