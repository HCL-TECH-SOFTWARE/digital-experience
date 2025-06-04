# WCM API sample code to count WCM items and versions

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This document shows the WCM API sample code to count WCM items and versions in HCL Digital Experience (DX).

## Instructions

!!!Important
    **DISCLAIMER OF WARRANTIES:**
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

```java

   DocumentIdIterator docIt;
   int total = 0;
   int k;
 
   out.println("</BR>");
   DocumentType[] types1 = {DocumentTypes.Content};
   k=0;
   for(int i=0; i < types1.length; i++) {
      docIt = myworkspace.findByType(types1[i]);
      while (docIt.hasNext()) {
        k++;
        DocumentId docId = docIt.nextId();
        out.println("Content item  = " + docId.getName());
        //Count versions
        document = myworkspace.getById(docId);
        versionCatalog = document.getVersionCatalog();
        if(versionCatalog.hasVersions()) {
          versionCounter = 0;
          versionIt = versionCatalog.all();
          while (versionIt.hasNext() && (versionCounter<1000) ) {
          versionIt.next();
          versionCounter++;
          }
          versionTotal+=versionCounter;
          out.println(" --This item has " + versionCounter + " versions" + "</BR>");
        }
        else {
         out.println("</BR>");
        }
      }
      out.println("</BR>" + "Total Content Items  = " + k + "</BR>");
      total+=k;
   }
```

For more information, refer to the Javadoc for [Interface `DocumentType<T extends WCMApiObject>`](https://help.hcl-software.com/digital-experience/9.5/dev/javadoc/vrm/850/spi_docs/com/ibm/workplace/wcm/api/DocumentType.html){target="_blank"} to see a list of all available `DocumentTypes` that could be counted in this manner.
