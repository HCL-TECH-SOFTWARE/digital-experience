# Parameters that the generic XML data sink supports

The generic XML Digital Data Connector \(DDC\) for HCL Portal data sink supports the parameters that are listed here.

-   **ddc.method**

    Use this parameter to identify the HTTP method that you want to be used for sending the data to the outbound target. Supported values are `put`, `post`, and `delete`.

-   **ddc.uri.target**

    Use this parameter to specify a URI that identifies the target of the outbound request. The target can be an HTTP or HTTPs URL, for example, to a remote REST service.

-   **ddc.uri.template**

    Use this parameter to specify a URI that identifies the template XML document that is required for `set`, `addChild`, `addPredecessor`, and `addSuccessor` actions. This document is the starting point for creating the final XML document that is sent to the target service. You can modify the template for starting a specific operation by using form post parameters. The URI used in this parameter needs to identify a well-formed XML document.

-   **ddc.profile.in**

    Use this parameter to define the name of the list-rendering profile that you want to apply to the template XML document. You can use the item attribute definitions and corresponding XPath statements of this profile to modify specific fragments of the template XML document. This modification is done before the resulting XML document is sent to the target service.

-   **ddc.profile.out**

    Use this parameter to define the name of the list-rendering profile that you want to apply to the data returned by the target service. You can use the item attribute definitions and corresponding XPath statements of this profile to extract specific XML fragments of XML documents that are served in response to the update operation. If you do not set this parameter, the data sink uses the same profile as the one that the `ddc.profile.in` parameter references.

-   **ddc.itemattribute.value.suffix**

    Use this parameter to specify the value that you want to use for modifying the template XML document that is required for `set`, `addChild`, `addPredecessor`, and `addSuccessor` actions. The value can come from user input or can be specified through hidden form input field that is filled by HCL Web Content Manager tags. For example, such a tag can be the `[AttributeResource]` tag.

    Depending on the value of the `valueType` definition of the related operation, specify one of the following values:

    -   A URI that identifies the item attribute value for the operation. This URI must be a URI that the POC resolver framework can resolve.
    -   Plain text that represents the item attribute value for the operation.
    The `suffix` value does not imply any semantics. Use it to correlate this attribute value specification with an item attribute operation specification. Both specifications must be represented by a `ddc.itemattribute.value.suffix` and `ddc.itemattribute.operation.suffix` parameter, respectively. For example, the following attribute value specification is correlated with the following item attribute operation specification by using the common suffix `xyz`: `addc.itemattribute.value.xyz` and `ddc.itemattribute.operation.xyz`.

-   **ddc.itemattribute.template.suffix**

    Use this parameter to specify an optional item attribute value template. The generic XML DDC data sink data sink replaces all occurrences of the `${value}` string in the template with the value of the related `ddc.itemattribute.value.suffix` parameter. This step creates the final value to use for modifying the template XML document that is used for `set`, `addChild`, `addPredecessor`, and `addSuccessor` actions.

    If the related `ddc.itemattribute.value.suffix` defines more than one value by using a separator specified by the `valueSeparator` parameter, the generic data sink applies each individual value to the template.

    Depending on the value of the `templateType` definition of the related operation, specify one of the following values:

    -   A URI that identifies the item attribute value template for the operation. This URI must be a URI that the POC resolver framework can resolve.
    -   Plain text that represents the template for the operation.
    The `suffix` value does not imply any semantics. Use it to correlate this attribute value with a corresponding item attribute value specification and item attribute operation specification. Both specifications must be represented by a `ddc.itemattribute.value.suffix` and `ddc.itemattribute.operation.suffix` parameter, respectively. For example, the following attribute value specification is correlated with the following item attribute operation specification by using the common suffix `xyz`: `addc.itemattribute.value.xyz` and `ddc.itemattribute.operation.xyz`.

-   **ddc.itemattribute.operation.suffix**

    Use this parameter to specify a modification of the template document. The value for this parameter is comma-separated list of name-value pairs. You can specify the following keys:

    -   **action**

        Use this key to identify the action that you want to be completed on the template document. The data sink completes the following actions on the template XML document. The node selection is based on the `itemAttribtueName` value and the list-rendering profile that is attached through the `ddc.profile.in` parameter. You can specify the following values:

        -   **set**

            Use this value to modify the node selected by the `itemAttributeName` value.

        -   **addChild**

            Use this value to add a child node selected by the `itemAttributeName` value.

        -   **addPredecessor**

            Use this value to add a predecessor sibling to the node selected by the `itemAttributeName` value.

        -   **addSuccessor**

            Use this value to add a successor sibling to the node selected by the `itemAttributeName` value.

        -   **remove**

            Use this value to remove the selected node.

        In contrast to the actions listed previously, the `get` action is not performed on the template document, but on the resulting XML document that the addressed service returns. If you use this action, the node selection is based on the `itemAttribtueName` value and the list-rendering profile that is attached through the `ddc.profile.out` parameter.

        -   **get**

            Use this value to add a corresponding entry to the result JSON object that the data sink generates. The entry holds the string value of the selected node in the result XML document.

    -   **itemAttributeName**

        Use this key to reference an individual item attribute definition in the associated list-rendering profile. The XPath that is associated with this item attribute definition is used to select the target node for this operation. In this context, you can use only `ItemAttribute` definitions. The following definitions are not supported: `AssociatedItemAttribute`, `ComputeItemAttribute`, `ConstructedItemAttributes`.

    -   **templateType**

        Use this key to specify the type of the value of the `ddc.uri.template` parameter that was listed earlier. You can specify the following values:

        -   **text**

            If you specify the value `text`, the value of the `ddc.itemattribute.template.suffix` parameter is used as a normal string that represents the item attribute template. This is the default template type.

        -   **uri**

            If you specify the value `uri`, the data sink parses the value of the `ddc.itemattribute.template.suffix` parameter as a URI. The data sink determines the actual value by reading the data that is served from this URI. The URI needs to be a URI that the POC resolver framework can resolve.

    -   **valueType**

        Use this key to specify the type of the value of the `ddc.itemattribute.value.suffix` parameter that is related to the operation. You can specify one of the following values:

        -   **text**

            If you specify the value text, the value of the `ddc.itemattribute.value.suffix` parameter is used as a normal string. This is the default value type.

        -   **uri**

            If you specify the value `uri`, the data sink parses value of the `ddc.itemattribute.value.suffix`  parameter as a URI. The data sink determines the actual value by reading the data that is served from this URI. The URI must be a URI that the POC resolver framework can resolve.

    -   **valueSeparator**

        Use this key to enable the operation to support multiple values. The generic data sink computes the individual values by splitting the correlated parameter value using the separator that this key specifies. If the separator consists of multiple characters, each character is treated as a separate separator. Example: To split an input value on all occurrences of commas \(`,`\) and semicolons \(`;`\), you combine both separators in the value for this parameter as follows: `;,`. The data sink completes the operation for each fragment of the separated value. Use this parameter only for the following actions: `addChild`, `addPredecessor`, `addSuccessor`.

-   **ddc.state.operation.suffix**

    Use this parameter to specify a modification of the portlet render state. The value for this parameter is comma-separated list of name-value pairs. You can specify the following keys:

    -   **action**

        Use this key to identify the action that you want to be completed on the portlet render state. You can use the following values:

        -   **set**

            Use this value to set a private render parameter.

        -   **add**

            Use this value to add a private render parameter.

        -   **remove**

            Use this value to remove a private render parameter.

    -   **renderParameterName**

        Use this key to specify the name of the private render parameter that you want to modify.

    -   **condition**

        Use this key to specify the condition under which you want this operation to be performed. You can use the following values:

        -   **success**

            If you specify this value, the modification to the portlet render state is performed only if the overall data sink operation succeeded.

        -   **error**

            If you specify this value, the modification to the portlet render state is performed only if the overall data sink operation resulted in an error.

        -   **always**

            If you specify this value, the modification to the portlet render state is performed independent of whether the overall data sink result succeeded or resulted in an error.

-   **ddc.state.value.suffix**

    Use this parameter to specify the value for the state operation as described in the corresponding `ddc.state.operation` parameter.

-   **ddc.passback.name**

    Use this parameter to specify custom pass-back parameters. The generic XML DDC data sink does not analyze these parameters. It only adds them to the interaction result JSON object as a `passbackData` member using `name` as an identifier. This parameter can be useful for retaining specific state information after the operation is completed, for example when you create a new resource.

-   **ddc.resultheaders**

    Use this parameter to specify the names of HTTP response header fields that you want to be included in the result object. The HTTP response header fields refer to the outbound call of the generic XML DDC data sink. To specify more than one header field, use multiple `ddc.resultheaders` parameters. After processing the response from the remote REST service, the data sink adds the specified header fields from the response to the interaction result JSON object as a `resultHeaderData` member. You can use this parameter to access information from the outbound call that the data sink makes.


## Example: Creating a resource

Typical XML REST services support the creation of new resources by sending a corresponding resource XML document to the service. To do so, the client typically uses an HTTP POST request. The following HTML fragment shows an HTML form that you can use to create a comment on a HCL Connections blog post:

```
<form id="[AttributeResource attributeName='id']CreateBlogPostComment" 
      method="POST" enctype="multipart/form-data" 
      action="[Plugin:ActionURL copyCurrentParams="true" 
      param="resultSessionAttribute=myResult" compute="always"]">
  <input type="hidden" name="_charset_" value="[Plugin:EvaluateEL
         value="${pageContext.response.characterEncoding}" compute="once"]"/>
  <input type="hidden" name="action.uri" value="ddc:operation:blp:ibm.portal.ddc.xml"/>
  <input type="hidden" name="ddc.uri.template" 
         value="wcmrest:LibraryHTMLComponent/[Component 
         name="yourLibrary/interaction 
         templates/create comment" format="id"]"/>          
  <input type="hidden" name="ddc.profile.in" 
         value="ibm.portal.sr.blogs.post.comments"/>
  <input type="hidden" name="ddc.itemattribute.operation.addComment" 
         value="action=set,itemAttributeName=body"/>
  <textarea title="Content" name="ddc.itemattribute.value.addComment" 
            placeholder=" "></textarea>
  <input type="hidden" name="ddc.uri.target" value="[AttributeResource 
         attributeName="rawCommentsEditLink"]"/>
  <input type="hidden" name="ddc.method" value="post"/>
  <input type="submit" class="lotusBtn" value="Submit" name="submitButton"/>
</form>
```

The form sets the `action`, `method`, and `enctype` parameters. The form also specifies the `_charset_` and `action.uri` input fields. For more information about these fields, read *Creating the HTML form*. Additionally, the form specifies the following behavior:

-   The form sets the `action.uri` parameter to the value `ddc:operation:blp:ibm.portal.ddc.xml`. As a result, the generic XML Digital Data Connector data sink processes the form.
-   The template document that represents the blog post comment XML entry is referenced by using the `ddc.uri.template` parameter. In this example, the template document is served from a Web Content Manager HTML component that is referenced by a corresponding `wcmrest` URI. For more information about the Web Content Manager REST URI format, read *REST service for Web Content Manager*in the Web Content Manager documentation. In this example, the referenced HTML component contains the following XML fragment:

    ```
    <?xml version='1.0' encoding='UTF-8'?>
    <entry xmlns='http://www.w3.org/2005/Atom'
    xmlns:thr="http://purl.org/syndication/thread/1.0">
       <content type='html'>
       </content>
    </entry>
    ```

-   The profile for this template document is identified by using the `ddc.profile.in` parameter. As the example posts a blog post comment document, the profile `ibm.portal.sr.blogs.post.comments` is used.
-   The parameters `ddc.itemattribute.operation.addComment` and `ddc.itemattribute.value.addComment` define the update of the `<content>` element in the template document. The operation parameter is set to the value `action=set,itemAttributeName=body`. As a result, the value that the user entered in the `ddc.itemattribute.value.addComment` text area is used to update the XML node that the item attribute named `body` selected. The referenced profile holds the information about where to locate the `<content>` element in the template.
-   To create the blog post comment, the modified template document needs to be sent to the blog post edit link. To do so, set the `ddc.method` parameter to the value `post`. To extract the blog post edit link from the current DDC list-rendering context, use the tag `[AttributeResource attributeName="rawCommentsEditLink"]`.

## Example: Deleting an existing resource

Typical XML REST services support the deletion of existing resources by sending a corresponding an HTTP DELETE request to the resource URL. The following HTML fragment shows an HTML form that you can use to delete a comment from an HCL Connections blog post:

```
<form id="[AttributeResource attributeName="id" 
      separator=","]DeleteBlogComment" method="POST" 
      enctype="multipart/form-data" action="[Plugin:ActionURL 
      action="post" copyCurrentParams="true" 
      param="resultSessionAttribute=myResult" compute="always"]">
    <input type="hidden" name="_charset_" value="[Plugin:EvaluateEL 
           value="${pageContext.response.characterEncoding}" compute="once"]"/>
    <input type="hidden" name="action.uri" 
           value="ddc:operation:blp:ibm.portal.ddc.xml"/>
    <input type="hidden" name="ddc.method" value="delete"/>
    <input type="hidden" name="ddc.uri.target" 
           value="[AttributeResource attributeName="rawEditLink" 
                   separator=","]" />
</form>
```

The form specifies the following behavior:

-   The form sets the `uri` parameter to the value `ddc:operation:blp:ibm.portal.ddc.xml`. As a result, the generic XML Digital Data Connector \(DDC\) for HCL Portal data sink processes the form.
-   To delete the resource, you do not need to send XML data to the data sink. Therefore, the form does not specify the parameters `ddc.uri.template` or `ddc.profile.in` or any of the `ddc.itemattribute` parameters.
-   To delete the blog post comment, you need to send an HTTP delete request to the blog post edit link. To do so, set the `ddc.method` parameter to the value `delete`. To extract the blog post edit link from the current DDC list-rendering context, use the tag `[AttributeResource attributeName="rawCommentsEditLink"]`.


