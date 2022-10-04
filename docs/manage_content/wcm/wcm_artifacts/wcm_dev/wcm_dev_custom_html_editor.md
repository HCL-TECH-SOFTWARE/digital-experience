# How to create a custom HTML editor integration

You can use custom HTML editors in all HTML fields of the authoring interface or specific HTML elements that are defined in an authoring template. Custom HTML fields are used to integrate third-party editors into the authoring interface.

A custom HTML field is JSP that is rendered in place of the standard HTML field of the authoring interface. The custom field is composed of a number of pieces that together work to identify the field that is being modified, register the customization with the authoring interface, access standard HTML field dialogs, and update values when the time comes to commit changes. The `com.ibm.workplace.wcm.api.authoring.HTMLEditorBean`, that is available in the JSP, provides basic field metadata such as the name and whether the field is editable. The `ibm.wcm.ui.html.HTMLEditor` JavaScript library defines the client-side framework that integrates the custom field on the authoring interface. Each integration must implement its own HTMLEditor.

**Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

**Reloading JSP files:**

JSP files that are stored in the PA\_WCM\_Authoring\_UI application are not reloaded, even if they are updated. You must restart the server, or put the JSP in a separate web application that is configured to reload JSP files, in order for changes you make to the JSP to be displayed.

## An example integration

This is a simple example of a basic integration that shows all necessary steps to render and register a custom field with the authoring interface. In this example, the text area that is used to edit HTML is extended by using the Dojo Text Area dijit.

The JSP is broken up into three distinct parts. The first is a simple code snippet to extract the name of the editor field. The next part of the JSP defines the implementation of the custom `ibm.wcm.ui.html.HTMLEditor` object. The `ibm.sample.Editor` defines a constructor to capture the dijit to manage and implement the necessary methods to integrate with the Authoring interface.

!!! note
   It also chooses to show the HTML field toolbar by calling `this.showToolbar(true)` that starts the method on `ibm.wcm.ui.html.HTMLEditor` that controls the visibility of the toolbar.

Finally the dijit is defined, and an instance of the `ibm.sample.Editor` created.

!!! note
   While this sample defines `ibm.sample.Editor` within the JSP, it would be more efficient to load this by using the static JavaScript library. This is important because if you have more than one editor on the page, the JavaScript definition of `ibm.sample.Editor` is loaded each time, but only the last one is loaded and used.

```
<%--
/* Sample HTML Editor */
--%>
 
<%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.HTMLEditorBean" %><portletAPI:init /><%
    HTMLEditorBean editor = (HTMLEditorBean) request.getAttribute("EditorBean");    

    // The name of the editor corresponds to the ID of the text area field that will be rendered within the authoring form
    String docId = editor.getName();   
%>

<script>
   dojo.declare("ibm.sample.Editor", [ibm.wcm.ui.html.HTMLEditor], {

      /** Hold a reference to the text area we enriched. */
      theTextArea: null,

      /** Simple overloaded constructor that will dynamically enrich the target text area with a dojo dijit text area. */
      constructor: function(editorId, textArea) {
         this.inherited(arguments);                
         this.theTextArea = textArea;

         textArea.startup();         

         this.showToolbar(true);
      },

      /** This method is called by the HTML/RTF field dialogs. For example when the user has selected a tag to insert into the field. */
      insertMarkupAtCursor: function(markup){ 
         // Do cross browser text insertion
         if (document.selection && (!this.theTextArea.textbox.selectionStart || this.theTextArea.textbox.selectionStart === null))
         {
            // Handle IE, which defines document.selection
            this.theTextArea.focus();
            var textRange = document.selection.createRange();
            textRange.text = markup;
         }
         else if (this.theTextArea.textbox.selectionStart || this.theTextArea.textbox.selectionStart == '0')
         {
            // Handle Mozilla, Opera, which define document.selectionStart
            // Create the new text for the text field. createRange() isn't supported by these browsers
            var startPos = this.theTextArea.textbox.selectionStart;
            var endPos = this.theTextArea.textbox.selectionEnd;
            var scrollTop = this.theTextArea.textbox.scrollTop;
            this.setMarkup(this.theTextArea.value.substring(0, startPos) + markup + this.theTextArea.value.substring(endPos, this.theTextArea.value.length));
            
            // Restore the cursor and scroll position which were lost by replacing the text field's text
            this.theTextArea.focus();
         }
      },

      /** This method is called when a user triggers the import markup action of the field. */
      setMarkup: function(markup){ 
         this.theTextArea.set("value", markup);
      },

      /** This method is called whenever the authoring interface requires the current value of the field such as when the export markup button is clicked in edit mode. */
      getMarkup: function(){ 
         return this.theTextArea.value;
      },
      
      /** This method will be called when the user submits the form to the server. This gives the integration an opportunity to update the text area field with the value that should be committed on the server. */
      notifySubmit: function() {         
         // As we are enriching the text area being submitted, the value
         // is already up to date and we do not need to do anything
      }
   });

   require(["dijit/form/Textarea", "dojo/domReady!"], function(Textarea){
      var textArea = new Textarea({name: '<%= docId %>', style: "width:100%;max-width:910px;min-height:200px;_height:200px;"}, '<%= docId %>');    
      new ibm.sample.Editor('<%= docId %>', textArea);   
   });

</script>
```

## Helper methods

The `ibm.wcm.ui.html.HTMLEditor` includes a number of helper methods to make it possible to start the standard set of HTML field dialogs programmatically. Meaning it would be possible to keep the HTML editor toolbar hidden and still provide all the functionality that it exposes.

The available methods are:

-   `launchInsertImageDialog()`
-   `launchInsertLinkDialog(/* String */ linkText, /* String */ linkHref, /* String */ linkTarget, /* String */ linkDescription, /* String */ linkAttributes)`
-   `launchInsertTagDialog(/* boolean */ includeConsumableTags){`


