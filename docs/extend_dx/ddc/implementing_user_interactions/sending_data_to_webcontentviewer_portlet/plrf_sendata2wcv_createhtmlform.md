# Creating the HTML form

You can use HCL Web Content Manager design components to generate the HTML forms for the user interfaces that provide the user interactions.

To generate the HTML form markup by using Digital Data Connector \(DDC\) for HCL Portal design components, perform the following tasks:

1.  Set the form `method` attribute to the value `post`.

2.  Set the form `enctype` attribute to the value `multipart/form-data`.

3.  Set the form `action` attribute to a portlet action URL that addresses the web content viewer and triggers its `post` portlet action.

4.  Add a hidden input field with the name `_charset_` as the first input field to the form. This input field defines the character set that the browser uses to encode the form data. Initialize it with the character encoding of the page.

    To do so, use the following HTML code:

    ```
    <input type="hidden" name="_charset_" 
           value="[Plugin:EvaluateEL 
           value="${pageContext.response.characterEncoding}" 
           compute="once"]"/>
    ```

5.  To specify the target URI for the interaction, use a second hidden input field named `action.uri`. The target URI identifies the actual recipient of the data that is posted by this form, which must be a data sink.

    To do so, use the following HTML code:

    ```
    <input type="hidden" name="action.uri" value="..."/>
    ```

6.  Add more hidden or visible form input fields to the form. Use these input fields to assemble all the information that is necessary for the recipient of this form post. You can use the `action.uri` parameter to specify the recipient of this form post operation.

    Example: To trigger the creation of a forum topic reply, proceed as follows:

    1.  Define text input fields for gathering the title and body information from the user.

    2.  Add further hidden input fields for identifying the target forum topic.

        These input fields are typically filled by using a corresponding `[AttributeResource]` tags.


The target URI needs to identify a data sink that accepts multipart data requests. You can use data sinks of the following types:

-   You can use a data sink that HCL Digital Experience provides
-   You can use a custom implementation of the `com.ibm.portal.resolver.data.FormDataDataSink` interface. This interface is defined in the public POC resolution framework API. For more detailed information, refer to the *Package `com.ibm.portal.resolver.data` summary*.

Here is an example of an HTML form for sending data to the Web Content Viewer portlet:

```
<form method="post" enctype="multipart/form-data" 
      action="[Plugin:ActionURL action="post" copyCurrentParams="true" 
      param="resultSessionAttribute=myResult" compute="always"]">
     <input type="hidden" name="_charset_" value="[Plugin:EvaluateEL 
            value="${pageContext.response.characterEncoding}" compute="once"]"/>
     <input type="hidden" name="action.uri" value="$DATA_SINK_URI"/>
     <input type="hidden" name="myAction" value="createComment"/>
     <input type="hidden" name="myResourceId" 
            value="[AttributeResource attributename="id"]"/>
     My Text: <input type="text" name="myTextField"/><br/>
     <input type="submit" value="Submit"/>
</form>
```

Replace the variable `$DATA_SINK_URI` by the appropriate value for your environment.


???+ info "Related information:"
    - [Using the list-rendering cache](../../../../manage_content/wcm/wcm_artifacts/tags/creating_web_content_tags/creating_plugin_tag/connector_plugins/plrf_tune_markup_chache.md)
    - [The generic XML Digital Data Connector data sink](../../../../extend_dx/ddc/implementing_user_interactions/sending_data_to_webcontentviewer_portlet/generic_xml_ddc_sink/index.md)

