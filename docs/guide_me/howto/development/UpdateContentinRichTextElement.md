# How to use the WCM API sample code to update content in a rich text element

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This article provides an example of how to update content in a rich text element using the WCM API.

???+ info "DISCLAIMER OF WARRANTIES"  
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

### Sample 1

1. Use this logic to find a content item by name, retrieve its rich text component, update the text value, and save the changes:

    ```java
    //Find the document id of the content items that match by name
    DocumentIdIterator docIdIterator = ws.findByName(DocumentTypes.Content, "testcontent");
    DocumentId docId;
    Content currentContent;
   
    //loops through the document id's found in the iterator
    while(docIdIterator.hasNext())
    {
      docId = (DocumentId)docIdIterator.next();
      //get the current content item
      currentContent = (Content)ws.getById(docId);
      //standard out log message  
      System.out.println("Log: Testing WCM API: Retrieved content name = " + (String)currentContent.getName());
   
      //get the content's rich text element by name
      RichTextComponent RTECmpnt = (RichTextComponent) currentContent.getComponent("RTE");
   
      //standard out log message
      System.out.println("Log: Testing WCM API: My Rich Text = " + RTECmpnt.getRichText());
   
      //set the text for the content's rich text element
      RTECmpnt.setRichText("Testing WCM API: Setting Rich Text");
   
      //set the rich text element to persist the changes
      currentContent.setComponent("RTE",RTECmpnt);
   
      //save the content item to persist the changes
      ws.save(currentContent);
    } //end while
    ```

---

### Sample 2

The following is a slightly different approach. This code will replace all occurrences of a string in the rich text elements of WCM Content items:

1. Implement this routine within your try-catch block to iterate through all content items, check for components containing "ody" in the name, and perform a global string replacement:

    ```java
    DocumentIdIterator docIt;  
    int k;  
    int arraySize = 0;   
    String richText;   
    String newRichText;   
    ContentComponentContainer document;   
    Editable editable;   
    java.lang.String[] names;   
    ContentComponentIterator iterator;  
    RichTextComponent contentComponent;  
    
    out.println("</BR>");  
    DocumentType[] types1 = {DocumentTypes.Content};  
    k=0;  
    for(int i=0; i < types1.length; i++) {
          docIt = myworkspace.findByType(types1[i]);
          while (docIt.hasNext()) {
            DocumentId docId = docIt.nextId();
            document = (ContentComponentContainer) myworkspace.getById(docId);
            names =  document.getComponentNames();
            arraySize = names.length;
            out.println("</BR> Begin list of elements: ");
            for(k=0;k<arraySize;k++) {
              out.println("</BR> Component Name  = " + names[k] + "</BR>");
              if(names[k].indexOf("ody")>0){
                contentComponent = (RichTextComponent) document.getComponent(names[k]);
                richText = contentComponent.getRichText();
                out.println("</BR> Running find and replace on:" + richText + "</BR>" );
                if(richText.indexOf("myOldString")>0){
                  out.println("</BR> Found match </BR>" );
                  newRichText = richText.replaceAll("myOldString", "newData");
                  out.println("</BR> richText set to: " + newRichText);
                  contentComponent.setRichText(newRichText);
                  document.setComponent(names[k], (ContentComponent) contentComponent);
                  myworkspace.save(document);
                }         
              }
            }
          }
       }
       myworkspace.logout();
       }
       catch (Exception e) {
          out.println("<br/><br/>EXCEPTION : " + e.getMessage());
          e.printStackTrace();
       }
    ```  
