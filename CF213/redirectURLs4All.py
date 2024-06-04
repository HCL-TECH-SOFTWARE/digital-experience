import os
import re
import regex as re
from pathlib import Path


#langTrans = input("Enter the language:\nFor English: en\nFor French: fr\nFor Japanese: ja\n");
#prodshortname = input("Enter product short name (Ex: rft, rpt, rpts, rstfsq)\n")
#prodversion = input("Enter product version \n")
#prodtaxonamy = input("Enter product taxonamy in uppercase (Ex: SSJMXE, SSMMM5, SSBLUB)\n")
UserURL = input("Enter your URL to be redirected\n")


print("Processing .... ")

for root, dirnames, filenames in os.walk(os.getcwd()):
        
    for filename in filenames:
                    
        if filename.endswith('.html'):
            fname = os.path.join(root, filename)
            #print('Filename: {}'.format(fname))
            path = os.path.dirname(fname)
            #drive, tail = os.path.splitroot(path)
            Dir_name = os.path.basename(path)
            file_name = os.path.basename(fname)
            relative_path = os.path.relpath(fname)
            #print(relative_path)
            
            #print(file_name)
            with open(fname, 'r', encoding='utf-8') as out_data:
                textcont = out_data.read()
                dirstrct = "/docs/topics/"
                
                redir_url = "<meta http-equiv=\"Refresh\" content=\"0; URL="+UserURL+""
                
                #if(file_name == "index.html"):
                path_with_forwardslash = relative_path.replace("\\", "/")
                #print(redir_url+"/"+path_with_forwardslash) 
                    #textcont = re.sub("<head>", "<head>\n"+"\t"+redir_url+"/"+file_name+"\"/>", textcont)
                
                if(file_name != "search.html" and file_name != "indexTerms.html" and file_name != "cshelp.html"):
                    
                    if redir_url not in textcont:
                                        
                        textcont = re.sub(r"<head>", r"<head>\n"+"\t"+redir_url+path_with_forwardslash+'"/>', textcont)
                        textcont = re.sub(r'<body (.*?)>(.*?)</body>|<body>(.*?)</body>', r'<body></body>', textcont, re.MULTILINE, re.DOTALL)
                                        
            with open(fname, 'w', encoding='utf-8') as data:

                data.write(textcont)


