import os
filelist=os.listdir("D:\downloads\prank\prank")
print(filelist)
for  file in filelist:
    os.rename(file,file.strip("0987654321"))
