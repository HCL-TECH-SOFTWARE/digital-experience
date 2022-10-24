# WSDL reference for cooperative portlets

WSDL is often used in the context of web services, in order to define interfaces implemented by a web service. The elements in the WSDL used by click-to-action are described, along with extensions to the <binding\> element and the WSDL Extensions schema.

Usually, a SOAP binding is used to specify the concrete realization of the interface by a web service which supports the SOAP protocol. The following shows how Click-to-Action uses some of the elements in the WSDL document. The [extensions to the <binding\> element](wpsc2awsdl.md#bind_ext) are described and the complete [schema for WSDL Extensions](wpsc2awsdl.md#wsdl_ext_schema) is provided.

-   <types\>

    For cooperative portlets, this declares the data type of the data to be transferred. The data type is declared using XML Schema Datatypes \(XSD, see the [XSD specification](http://www.w3.org/TR/xmlschema-2/)\). There may be multiple types defined in the document.

    The following shows a declaration for the TrackingIDType:

    ```
    
        <types>
          <xsd:simpleType name="TrackingIDType">
            <xsd:restriction base="xsd:string">
            </xsd:restriction>
          </xsd:simpleType>
        </types>
       
    ```

-   <message\>

    Input messages can contain only one part.

-   <operation\>

    Provides an abstract definition of a Click-to-Action operation. Note the restriction on input messages mentioned previously.

-   <portType\>

    Defines an abstract collection of operations. The operations must be defined in the document. One operation corresponds to each action on the Click-to-Action enabled portlet. Only actions that are to be enabled for Click-to-Action should be declared.

-   <binding\>

    The binding element is extended to associate portlet actions with operations. For each operation, the portlet action name must be provided. The portlet action name may be specified using the name attribute of the action tag in the binding section of the WSDL file. If it is omitted, the name attribute from the operation tag is used as the portlet action name.

    For each operation parameter, the action parameter name must be provided. The portlet parameter name may be specified using the name attribute of the parameter tag in the binding section of the WSDL file. If it is omitted, the name attribute of the part tag associated with the param tag is used as the portlet parameter name.

    Further, the boundTo attribute may be used to specify where the parameter will be bound. Choices are request-parameter, request-attribute, session-attribute, or action-attribute.

    The <binding\> element includes cooperative portlet extensions, which are described in [Extensions to the <binding\> element](wpsc2awsdl.md#bind_ext).


If you are familiar with WSDL, you might notice that the service section \(enclosed by the <service\> element in WSDL\) is not used in the C2A action declaration file. This is because the file is associated with a specific portlet implementing the operations defined in the file through external means \(an entry in the portlet.xml file associated with the portlet\).

## Extensions to the <binding\> element

The <binding\> element has been extended to support cooperative portlets. Each extension element is prefixed with `portlet:`, which refers to the C2A namespace, `http://www.ibm.com/wps/c2a`. The `portlet:` prefix is used to identify the extension elements in this section, but a different name may be used for the prefix as long as it refers to the C2A namespace. See [WSDL Extension Schema](wpsc2awsdl.md#wsdl_ext_schema).

-   <portlet:binding\>

    This must be the first child element of the WSDL <binding\> element. Its presence identifies the section as a C2A binding extension for portlet action invocation. The element has the following attribute.

    -   style

        Deprecated. Specifying `style="struts"` indicates that Struts actions are being declared. Instead, you should use `type=struts` on the <portlet:action\> element for this purpose.

-   <portlet:action\>

    This must be the first child element of any WSDL <operation\> element in the binding section. It contains the following attributes:

    -   name

        the portlet action name. If this is omitted, the name of the associated operation element is used as the portlet action name.

    -   caption

        a short string about the action suitable for displaying in the portlet user interface. For translated captions, indicate in dotted format the name of the key in the resource bundles from which the caption is to be obtained.

    -   type

        Indicates one of the following values:

        -   default indicates a DefaultPortletAction object is used. This object is deprecated but still supported for migration purposes.
        -   simple indicates a simple portlet action String is used.
        -   struts indicates a Struts action is used.
        -   standard indicates a standard \(JSR\) portlet action is used.
        -   standard-struts indicates a struts action is used with a standard \(JSR\) portlet.
    -   actionNameParameter

        \(Standard only\) The name of the request parameter which will be used to supply the action name.

    -   description

        a text description of the action. For translated descriptions, indicate in dotted format the name of the key in the resource bundles from which the description is to be obtained.

    -   activeOnStartup

        Indicate either "true" or "false". If false, the action must be programmatically activated in each session. If true \(default\), the action is active as soon as the portlet is initialized.

    -   selectOnMultipleMatch

        In the case that multiple actions match based on the data type for the portlet, this attribute can be used to indicate which action to trigger. Multiple matching actions can occur when a user broadcasts an action on a source. If not specified, the default is false. In the case where no single action is set to true, the data is not delivered to the target.

        In the following example from `TrackingC2A.wsdl`, There are two actions declared: trackingDetails and routingDetails. selectOnMultipleMatch is used to indicate that the trackingDetails should be used in the case of a multiple match.

        ```xmp
        
        <binding name="TrackingBinding" type="tns:Tracking_Service">
           <portlet:binding/>
           <operation name="trackingDetails">
              <portlet:action caption="Tracking Details"
                       description="Get tracking details for specified tracking id"
                       selectOnMultipleMatch="true"/>
              <input>
                  <portlet:param name="trackingId" partname="trackingId"/>
              </input>
              <output>
                  <portlet:param name="customerName" partname="custName" 
                                 boundTo="session"/>
              </output>
           </operation>
           <operation name="routingDetails">
              <portlet:action caption="Routing Details"
                       description="Get routing details for specified tracking id"/>
              <input>
                  <portlet:param name="trackingId" partname="trackingId"/>
              </input>
           </operation>
        </binding>
        
        ```

-   <constant:param\>

    This is used to set the value returned by the getConstantParameters method of the action. Each constant parameter will be bound as a request parameter with the specified name and value when the action is invoked. More than one constant parameter can be specified.

    -   name

        the name of the parameter.

    -   value

        specifies the parameter value.

    The following shows an example for using the constant parameter.

    ```
    
    	  <portlet:constant-params>
            <portlet:constant-param name="defaultMonth" value="January"/>
          </portlet:constant-params> 
    
    ```

-   <portlet:param\>

    This must appear as a child element in the <input\> or <output\> subelements of the <operation\> element in the binding. It specifies the parameters consumed \(if enclosed in the <input\> element\) or produced \(if enclosed in the <output\> element\) by the portlet action. At present, we restrict the number of parameters consumed to at most one. The number of parameters produced can be any number. It has the following attributes:

    -   name

        the name of the parameter. If omitted, the name attribute value of the part element is used as the parameter name.

    -   partname

        refers to a part element of the input or output for the operation. It may be omitted if the input or output has a single part.

    -   boundTo

        specifies where the parameter value is bound. Currently, this attribute can specify one of the following values only:

        -   `request-parameter` : This specifies that the value is bound as a parameter in the PortletRequest object. This is the default value if the boundTo attribute is omitted. Note that for output parameters, a different value should usually be specified as the default PortletRequest implementation provided by HCL Portal does not allow parameters to be set during action processing.
        -   `request-attribute` : This specifies that the value is bound as an attribute in the PortletRequest object.
        -   `session` : This specifies that the value is bound to the PortletSession object.
        -   `action` : This specifies that the value is bound to a portlet action.
        -   `render-parameter:` \(JSR only\) This specifies that the value is bound as a render parameter in the ActionResponse \(output parameters only\).
    -   presentIfNullValue

        specifies is null values for the parameter are significant for the purposes of wired action invocation. Value can be either "true" or "false", with "false" being the default. If "true", the presence of the parameter will cause the wired action to be invoked even if the value of the parameter is null. If "false", the presence of the parameter will cause the wired action to be invoked only if the parameter value is not null. Can be specified for either input or output parameters \(i.e, the treatment of null parameter values can be controlled at either the source or the target\).


## WSDL Extension Schema

The following is the schema for the extensibility elements introduced for the portlet action invocation using Click-to-Action. Lines have been broken to allow viewing on the printed page.

```xmp

<?xml version="1.0" encoding="UTF-8" ?>
<xsd:schema xmlns="http://www.w3.org/2001/XMLSchema"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               targetNamespace="http://www.ibm.com/wps/c2a"
               xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" 
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
               xsi:schemaLocation="http://schemas.xmlsoap.org/wsdl/ 
                                   http://schemas.xmlsoap.org/wsdl/ 
                                   http://www.w3.org/2001/XMLSchema 
                                   http://www.w3.org/2001/XMLSchema.xsd" 
               xmlns:portlet="http://www.ibm.com/wps/c2a">
   <!-- The binding  element indicates that the binding section 
       contains custom extensions describing a mapping of operations to 
       portlet actions. This must be placed within a WSDL 
       binding element. -->
<element name="binding" type="portlet:bindingType"/>
<complexType name="bindingType">
   <!-- DEPRECATED, retained for compatibility with version 4. Use the
   type attribute with the action element instead. Set value to be 
   "struts" for a portlet implemented using the struts framework. -->
   <attribute name="style" type="string" use="optional"/>
</complexType>
<!-- The action element is used to provide all the information 
  about the portlet action necessary for the property broker to
  invoke it. This must be placed within an wsdl:operation element 
  in the wsdl:binding section. -->
<element name="action" type="portlet:actionType"/>
<complexType name="actionType">
    <sequence>
        <!-- The constant-params element is used to provide constant
             parameters associated with the action. These are bound
             as request parameters when the action is invoked -->
        <element name="constant-params" type="portlet:constantParamsType"
             minOccurs="0" maxOccurs="1"/>
        </sequence>
         <!-- The name of the action. 
              Will be set as the portlet action name.  
              If omitted, the name of the corresponding operation 
              element will be used as the action name. -->
        <attribute name="name" type="string" use="optional"/>
        <!-- The type of the action. Currently recognized values
             are default, simple, struts, and standard, 
             with default being the default. 
             The values specify whether the legacy DefaultPortletAction,
             legacy simple portlet action, legacy portlet
             struts action, or standard (JSR-168) portlet 
             action mechanism is used to invoke the portlet action. 
             The use of DefaultPortletAction is 
             deprecated, and the default is set to this 
             value for backwards compatibility.-->
        <attribute name="type" type="string" use="optional" 
           default="default"/>
        <!-- A short name for  the action which is displayed to the 
          user.If a message resource file is 
          provided for the portlet,
          the value is used as a key to retrieve a translated string -->
        <attribute name="caption" type="string" use="optional"/>
        <!-- A description for  the action which is
             displayed to the user. 
             If a message resource file is provided for the portlet, the
             value is used as a key to retrieve a translated string -->
        <attribute name="description" type="string" use="optional"/>
        <!-- If more than one portlet action can simultaneously process 
             a property value, only those with the 
             invokeOnMultipleMatch attribute
             set to true will be invoked -->
        <attribute name="selectOnMultipleMatch" type="boolean" 
           use="optional" default="false"/>
        <!-- If the activeOnStartup attribute is true, 
             the action may be selected for invocation 
             at any time unless  programmatically
             deactivated on a per-session basis. 
             If the activeOnStartup is false, the action may not be 
             selected for invocation, unless
             programmatically activated on a per-session basis -->
        <attribute name="activeOnStartup" type="boolean" 
           use="optional" default="true"/>
        <!-- The actionNameParameter attribute is used to specify
             the name of a request parameter whose value will carry
             the action name. It is recommended that all actions of
             a portlet use the same value of this parameter. This is
             used to identify the specific action which is being executed
             on the portlet, as the processAction method in JSR 168
             does not explicitly pass any information identifying the
             action. If this attribute is omitted, the
             actionNameParameter value defaults to 
             com.ibm.portal.propertybroker.action -->
        <attribute name="actionNameParameter" type="string" 
           use="optional" 
           default="com.ibm.portal.propertybroker.action"/>
    </complexType>
    <complexType name="constantParamsType">
        <!-- The constant-params element is used to provide constant
             parameters associated with the action. These are bound
             as request parameters when the action is invoked -->
        <sequence>
        <!-- The constant-param element is used to provide a name
             and a value which will be bound as a request parameter
             when the portlet's action is invoked -->
        <element name="constant-param" type="portlet:constantParamType" 
         minOccurs="0" maxOccurs="unbounded"/>
        </sequence>
    </complexType>
    <complexType name="constantParamType">
        <!-- The constant-param element is used to provide a name
             and a value which will be bound as a request parameter
             when the portlet's action is invoked -->
        <!-- The name of the constant-parameter -->
        <attribute name="name" type="string" use="required"/>
        <!-- The value of the constant-parameter -->
        <attribute name="value" type="string" use="required"/>
    </complexType>
    <!-- The param element is used to indicate information 
             about the input or output property associated with the 
             action and the mechanism for passing parameters to or from
             the action. It must be placed within a
             wsdl:input or wsdl:output element. -->
    <element name="param" type="portlet:paramType"/>
    <complexType name="paramType">
    <!-- The param element indicates how the parameter is to be 
         delivered to the portlet action or retrieved from 
         it once the action has executed -->
        <!-- The name of the parameter which will be used on 
         action invocation. If omitted, the partname is used. 
         This name will also be set as the name of the 
         corresponding property. -->
        <attribute name="name" type="string" use="optional"/>
        <!-- The name of the corresponding part. May be omitted only if 
             there is a single parameter for the action, 
             in which case it will be inferred from
             the associated operation definition -->
        <attribute name="partname" type="string" use="optional"/>
        <!-- Where to place the parameter prior to invoking the action 
             (in case of in parameters), or where to look for it 
             after invoking the action (in case of out parameters).
             request-attribute, request-parameter, session are
             allowed for both standard and legacy portlets. A value of
             action is allowed for legacy portlets only, and a value
             of render-parameter is allowed for standard portlets only 
        -->
        <attribute name="boundTo" type="string" 
         default="request-parameter"/>
        <!-- If the parameter is found but its value is null, this attribute
        determines if the parameter is deemed to be present for brokered
        communication purposes. If the value is set to true, the parameter
        is deemed to be present and the null value will be propagated. The
        default is false. 
        -->
        <attribute name="presentIfNullValue" type="string" 
         default="false" use="optional"/>
        <!-- The java class for the parameter. 
             The default is java.lang.String. 
             If a non-default value is provided, it will be
             used in conjunction with type and namespace to 
             restrict matches
        -->
        <attribute name="class" type="string" 
         default="java.lang.String"/>
        <!-- A short name for the parameter which is displayed 
             to the user. If a message resource file is 
             provided for the portlet,
             the value is used as a key to retrieve a 
             translated string -->
        <attribute name="caption" type="string" use="optional"/>
        <!-- A description for  the parameter which is displayed to the 
             user. If a message resource file is provided for the 
             portlet, the value is used as a key to retrieve a 
             translated string -->
        <attribute name="description" type="string" use="optional"/>
    </complexType>
</xsd:schema>

```


