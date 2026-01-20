# How to use the WCM API to render a WCM component in HCL DX

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This guide demonstrates how to use the WCM API to programmatically render a component. While most components are rendered through the WCM delivery engine automatically, using the Java API allows you to inject WCM content into custom JSPs, portlets, or external applications.

By creating a RenderingContext, you can force a component to render using a specific site path and library, regardless of the user's current location on the site.

???+ info "DISCLAIMER OF WARRANTIES"
    The following enclosed code is sample code created by HCL Corporation.
    This sample code is provided to you solely for the purpose of assisting you in the development of your applications.
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Instructions

```java
//Code to lookup a PZN Component and create Rendering Context then render the component in that context
 
//Find component that matches by name
DocumentIdIterator componentIdIterator = workspace.findComponentByName("PZNCMPT");
DocumentId docId;
LibraryComponent component;
String componentName = "";
String libraryPath = "/MyLibrary";
String sitePath = "/site/sitearea";
 
//Create the rendering context
RenderingContext context = workspace.createRenderingContext(pageContext.getRequest(),pageContext.getResponse(), new java.util.HashMap(), "http://localhost:10039/wps/wcm", "/connect");
 
//Set the path (Context) to the for the site area where the component will be rendered
context.setRenderedContent(libraryPath + sitePath);
 
//standard out log message to browser
out.println("Log: Testing WCM API: Context Path = " + context.getPath() + "");
 
//loops through the component id's found in the iterator
while(componentIdIterator.hasNext())
{
    docId = (DocumentId)componentIdIterator.next();
    component = (LibraryComponent) workspace.getById(docId);
    componentName= (String)component.getName();
 
    out.println("Log: Testing WCM API: Component name = " + componentName + "");
 
    //Get the rendered string
    if (component instanceof LibraryComponent)
    {
        standard out log message to browser
        out.println("Log: Testing WCM API: " + componentName + " is an instance of LibraryComponent");
 
        String renderedContent = workspace.render(context, component); 
        out.println("Log: Testing WCM API:: Passed workspace.render(context, component)");
 
        //Render the PZN Component
        out.println("Render PZN Component: Test Result follows:" + renderedContent + "");
    }
    //end if statement
}
//end while
```  
