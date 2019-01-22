import random
import urllib.request
def imgdlr(url):
	name=random.randrange(1,1000)
	flname="name"+'.jpg'
	urllib.request.urlretrieve(url,fullname)
imgdlr()