import os
filelist=os.listdir("D:\downloads\prank\prank")
print(filelist)
for  file in filelist:
    os.rename(file,file.strip("0987654321"))
    
#os.chdir()= will change current working directory
#os.getcwd()=will give current working directory
