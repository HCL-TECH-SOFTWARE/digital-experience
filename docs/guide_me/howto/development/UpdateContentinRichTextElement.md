# How to update content in a rich text element using the WCM API

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Updating rich text elements programmatically allows developers and administrators to automate content modifications across Web Content Manager (WCM) items in HCL Digital Experience (DX). The sample code provided in this guide uses the server-side Java WCM API and must be executed within an HCL DX Java context (such as a Custom Workflow Action, JSP file, or custom Portlet) where an active WCM Workspace instance is available. This article explains how to update content in a rich text element using the WCM API.

## Instructions

To update content in a rich text element using the WCM API, perform the following steps:

???+ info "Disclaimer of warranties"
    The following enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

1. Deploy the Java logic within a Custom Workflow Action, JSP, or Portlet that initializes an active WCM `Workspace` session object.
2. To query content items by name, retrieve the rich text component, update the string value, and save the content item, use the following code:

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

3. To iterate through content items by document type, filter for components containing "ody" in the name, and replace string occurrences within rich text components, use the following code:

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
