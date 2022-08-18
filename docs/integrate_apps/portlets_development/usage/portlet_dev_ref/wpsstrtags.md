# Detailed descriptions of the Struts WML tags

Learn about the WML tags used by the portlets within the Struts Application Framework.

The following tags are used by portlets within the Struts Application Framework. For a brief description of WML support in the Struts Application Framework, see [Using the WML tags](wpstrjsps.md).

-   **<wml:cancel/\>**

    Renders a WML <postfield\> element with a value of `cancel`. This tag is only valid when nested inside a form tag body. Posting this element causes the `Action` servlet to bypass calling the associated form bean validate\(\) method.

    |Attribute name|Description|
    |--------------|-----------|
    |property|The parameter name with the specified value that is set in the request object. **Note:** If the property attribute is set, then the application will have to handle cancel detection.

\[Runtime expression\]

|
    |value|The value of the request parameter. \[Runtime expression\]

|

-   **<wml:card/\>**

    This tag renders a card element. This element is not rendered when the tag is executed in HCL Portal. This allows writing JSPs that can be used in both the servlet and portlet environments.

    |Attribute name|Description|
    |--------------|-----------|
    |id|This attribute is the card unique identifier. \[Runtime expression\]

|
    |newcontext|This is a flag to indicate that context should be reinitialized when loaded. \[Runtime expression\]

|
    |onenterbackward|Load URL when accessed through `<prev>` task. \[Runtime expression\]

|
    |onenterforward|Load URL when accessed through `<go>` task. \[Runtime expression\]

|
    |ontimer|Load URL when timer expires. \[Runtime expression\]

|
    |ordered|This is the flag to indicate that content is ordered. \[Runtime expression\]

|
    |title|This tag indicates the title of the card. \[Runtime expression\]

|
    |titleKey|Key to look up title in resource bundle, titleKey is only used if title attribute is null. \[Runtime expression\]

|

-   **<wml:errors/\>**

    Retrieves the set of error messages from the request object with the default key of `Action.ERROR_KEY` or the value specified by attribute name. If `ActionErrors` are found then the errors are displayed. This tag also requires the following two message keys in the application scope MessageResources.

    -   `errors.header` - header that is displayed before the error messages list.
    -   `errors.footer` - header that is displayed after the error messages list.
    |Attribute name|Description|
    |--------------|-----------|
    |bundle|This is the servlet context attribute key for the MessageResources instance to use. If not specified, defaults to the application resources configured for the Strut `Action` servlet. \[Runtime expression\]

|
    |locale|The session attribute key for the Locale used to select messages to be displayed. If not specified, defaults to the Struts standard value. \[Runtime expression\]

|
    |name|Name of the request scope bean under which our error messages have been stored. If not present, the name specified by the `Action.ERROR_KEY` constant string will be used. \[Runtime expression\]

|
    |property|Name of the property for which error messages should be displayed. If not specified, all error messages, regardless of property, are displayed. \[Runtime expression\]

|

-   **<wml:form/\>**

    This tag does not render any markup, but it is used to scope beans and transactions. The tags used with the body of the form tag can use the form bean to populate the input fields.

    |Attribute name|Description|
    |--------------|-----------|
    |action|The action is the URL that is used for the form submission. The action will be picked up by a nested tag, and postfield tags are used to submit the data. For additional information on specifying the action, see the Struts `html:form` documentation. \[Required\] \[Runtime expression\]

|
    |name|This attribute is the name of the bean. The scope attribute is used to determine where the bean can be located. The tags that are contained in the body of the form tag can use the form bean for populating the input field. For additional information on specifying the name, see the Struts `html:form` documentation. \[Runtime expression\]

|
    |scope|Specifies the scope of the form bean associated with this form. For additional information on the scope attribute, see the Struts `html:form` documentation.

\[Runtime expression\]

|
    |type|The fully qualified class name of the form bean. For additional information on the type attribute, see the Struts `html:form` documentation.

\[Runtime expression\]

|

-   **<wml:go/\>**

    This tag renders a WML <go\> element. If the go tag is used in the body of a form tag, the form's action is used as a hyperlink. If the form's action attribute is set, then the `forward`, `href`, and `page` attributes are ignored.

    |Attribute name|Description|
    |--------------|-----------|
    |accept-charset|This attribute allows specifying the character encodings that the application can handle. \[Runtime expression\]

|
    |action|The action is the URL that is used for the form submission. The action will be picked up by a nested tag, and postfield tags are used to submit the data. \[Runtime expression\]

|
    |forward|The name of the global `ActionForward` to be used to create the URL for the go element. **Note:** This attribute is ignored if this tag is specified in the body of a form tag that specifies the action attribute. For addition information on the forward attribute, see the Struts `html:link` documentation.

\[Runtime expression\]

|
    |href|This attribute specifies the URL for the go element. **Note:** This attribute is ignored if this tag is specified in the body of a form tag that specifies the action attribute. For addition information on the href attribute, see the Struts `html:link` documentation.

\[Runtime expression\]

|
    |method|Allows specifying the HTTP submission method, get or post \[Runtime expression\]

|
    |page|The context relative path to the URL that will be used as the href for the go element. **Note:** This attribute is ignored if this tag is specified in the body of a form tag that specifies the action attribute. For addition information on the page attribute, see the Struts `html:link` documentation.

\[Runtime expression\]

|
    |sendreferer|This attribute allows specifying that the deck URL should be included the request \[Runtime expression\]

|
    |transaction|A postfield element will be created so that the current transaction control token can be sent if this attribute is `true`. For addition information on the transaction attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |urlType|The type of portlet URL to create. If not specified URL type is standard. Supported values: return, standard \[Runtime expression\]

|

-   **<wml:head/\>**

    Renders a WML <head\> element with language attributes extracted from the user's current Locale object, if there is one. This element is not rendered when the tag is executed in HCL Portal. This allows writing JSPs that can be used in both the servlet and portlet environments.

-   **<wml:link/\>**

    Renders a WML <a\> element as a hyperlink to the specified URL. URL rewriting will be applied automatically to maintain session state in the absence of cookies. The tag's body is displayed as the name of the link. The base URL for this hyperlink is calculated based on which of the following attributes you specify:

    -   forward
    -   href
    -   page
    **Note:** One and only one of the `forward`, `href`, or `page` attributes can be specified.

    |Attribute name|Description|
    |--------------|-----------|
    |accesskey|A number 0 through 9 that is displayed that indicates to a user which keypad number is required to select this element. \[Runtime expression\]

|
    |forward|The name of the global `ActionForward` to be used to create the URL. For addition information on the forward attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |href|This attribute specifies the hyperlink to be unchanged as the URL. For addition information on the href attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |indexed|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |indexId|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |name|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |page|The context relative path to the URL that will be used as the href. For addition information on the page attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |paramId|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |paramName|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |paramProperty|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |paramScope|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |property|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |scope|For information on this attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |rel|This attribute allows specifying the relationship \[Runtime expression\]

|
    |sendreferer|This attribute allows specifying that the deck URL should be included in the request \[Runtime expression\]

|
    |transaction|A postfield element will be created so that the current transaction control token can be sent if this attribute is true. For addition information on the transaction attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |urlType|The type of portlet URL to create. If not specified URL type is standard. Supported values: return, standard \[Runtime expression\]

|

-   **<wml:option/\>**

    Renders a WML <option\> element, representing one of the choices for an enclosing <select\> element. The text displayed to the user comes from either the body of this tag, or from a message string looked up based on the bundle, locale, and key attributes. If the value of the corresponding bean property matches the specified value, this option will be marked selected. This tag is only valid when nested inside a <wml:select\> tag body.

    |Attribute name|Description|
    |--------------|-----------|
    |bundle|This attribute allows specifying the key for the MessageResources stored in the servlet context. \[Runtime expression\]

|
    |key|This attribute specifies the key to the text that is contained in the bundled, determined from the bundle attribute. If this attribute is not specified, then the text from the tag's body is used. \[Runtime expression\]

|
    |locale|The locale to use for looking up messages in the resource bundle. \[Runtime expression\]

|
    |onpick|The URL to navigate when a selection is made. \[Runtime expression\]

|
    |title|Brief field title \[Runtime expression\]

|
    |titleKey|Key to look up title in resource bundle, titleKey is only used if title attribute is null. \[Runtime expression\]

|
    |value|If the user selects this option, then this is the value that is submitted. \[Required\] \[Runtime expression\]

|

-   **<wml:options/\>**

    Renders a set of WML <option\> elements, representing possible choices for a <select\> element. This tag can be used multiple times within a single <wml:select\> element, either in conjunction with or instead of one or more <wml:option\> elements. The use of the collection attribute is documented in the HTML version of the `options` tag.

    |Attribute name|Description|
    |--------------|-----------|
    |collection|Name of the bean used to build the selection options. For addition information on the collection attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |labelName|For addition information on the labelName attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |labelProperty|For addition information on the labelProperty attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |name|For addition information on the href attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |property|For addition information on the href attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|

-   **<wml:password/\>**

    Renders a WML <input\> element of type password, populated from the specified value or the specified property of the bean associated with our current form. This tag is only valid when nested inside a form tag body.

    |Attribute name|Description|
    |--------------|-----------|
    |accesskey|A number 0 through 9 that is displayed that indicates to a user which keypad number is required to select this element. \[Runtime expression\]

|
    |emptyok|Flag to indicate that this field can remain blank. \[Runtime expression\]

|
    |format|Format mask for the input field \[Runtime expression\]

|
    |maxlength|Maximum number of input characters to accept. \[No limit\] \[Runtime expression\]

|
    |name|The attribute name of the bean whose properties are consulted when rendering the current value of this input field. If not specified, the bean associated with the form tag we are nested within is utilized. \[Runtime expression\]

|
    |property|Name of the request parameter that will be included with this submission, set to the specified value. \[Required\] \[Runtime expression\]

|
    |size|Number of character positions to allocate. \[Runtime expression\]

|
    |tabindex|The tab order in a card. \[Runtime expression\]

|
    |title|Brief field title \[Runtime expression\]

|
    |titleKey|Key to look up title in resource bundle, titleKey is only used if title attribute is null. \[Runtime expression\]

|
    |value|Value of the label to be placed on this button. This value will also be submitted as the value of the specified request parameter. \[Runtime expression\]

|

-   **<wml:postfield/\>**

    Renders a WML <postfield\> element. This tag is only valid when nested inside a form tag body.

    |Attribute name|Description|
    |--------------|-----------|
    |name|The attribute name of the bean whose properties are consulted when rendering the current value of this input field. If not specified, the bean associated with the form tag we are nested within is utilized. \[Runtime expression\]

|
    |property|The corresponding bean property. \[Required\] \[Runtime expression\]

|
    |value|The value of the postfield tag. \[Runtime expression\]

|

-   **<wml:rewrite/\>**

    Renders a request URI based on exactly the same rules as the link tag does, but without creating the <a\> hyperlink. The base URI for this hyperlink is calculated based on which of the following attributes you specify:

    -   forward
    -   href
    -   page
    **Note:** One and only one of the `forward`, `href`, or `page` attributes can be specified.

    |Attribute name|Description|
    |--------------|-----------|
    |forward|The name of the global `ActionForward` to be used to create the URL. For addition information on the forward attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |href|This attribute specifies the hyperlink to be unchanged as the URL. For addition information on the href attribute, see the Struts `html:link` documentation. \[Runtime expression\]

|
    |indexed|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |indexId|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |name|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |page|The context relative path to the URL that will be used as the href. For addition information on the page attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |paramId|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |paramName|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |paramProperty|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |paramScope|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |property|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |scope|For information on this attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|
    |transaction|A postfield element will be created so that the current transaction control token can be sent if this attribute is `true`. For addition information on the transaction attribute, see the Struts `html:rewrite` documentation. \[Runtime expression\]

|

-   **<wml:select/\>**

    Renders a WML <select\> element, associated with a bean property specified by our attributes. This tag is only valid when nested inside a form tag body. See the `html:select` for additional information on usage.

    |Attribute name|Description|
    |--------------|-----------|
    |iname|Index number of default option\( base 1 \) \[Runtime expression\]

|
    |ivalue|Default value \[Runtime expression\]

|
    |multiple|Set to support multiple selections. \[Runtime expression\]

|
    |name|The name of the bean used to determine the pre-selected options. \[Runtime expression\]

|
    |property|The attribute sets the name of the request parameter used for the value submission. \[Required\] \[Runtime expression\]

|
    |tabindex|The tab order in a card. \[Runtime expression\]

|
    |title|Brief field title. \[Runtime expression\]

|
    |titleKey|Key to look up title in resource bundle. `titleKey` is only used if the title is `null`. \[Runtime expression\]

|
    |value|The value for determining if an option has been selected. \[Runtime expression\]

|

-   **<wml:text/\>**

    Renders a WML <input\> element of type text, populated from the specified value or the specified property of the bean associated with our current form. This tag is only valid when specified in the body of a form tag.

    |Attribute name|Description|
    |--------------|-----------|
    |accesskey|A number 0 through 9 that is displayed that indicates to a user which keypad number is required to select input. \[Runtime expression\]

|
    |emptyok|Flag to indicate that this field can remain blank.|
    |format|Format mask for input field. \[Runtime expression\]

|
    |maxlength|Maximum number of input characters to accept. \[No limit\] \[Runtime expression\]

|
    |name|The attribute name of the bean whose properties are consulted when rendering the current value of this input field. If not specified, the bean associated with the form tag we are nested within is utilized. \[Runtime expression\]

|
    |property|Name of this input field, and the name of the corresponding bean property if value is not specified. The corresponding bean property \(if any\) must be of type String. \[Required\] \[Runtime expression\]

|
    |size|Number of character positions to allocate. \[Runtime expression\]

|
    |tabindex|The tab order in a card. \[Runtime expression\]

|
    |title|Brief field title. \[Runtime expression\]

|
    |titleKey|Key to look up title in resource bundle. Title must be null. \[Runtime expression\]

|
    |value|Value to which this field should be initialized. \[Use the corresponding bean property value\] \[Runtime expression\]

|

-   **<wml:wml/\>**

    Renders a <wml/\> element. In the HCL Portal environment, the element is not rendered.


**Parent topic:**[Portlet development reference](../dev-portlet/wpsdevref.md)

