# Special configuration data entries

Additional to the tags that represent portal resources as listed in the preceding section, XML provides the following tags or attributes for special purposes.

-   **localedata**

    Describes locale specific data associated with portal resources. The localedata element allows a number of child elements (title, description and keywords), but not all of them are supported for all portal resources. Unsupported child elements are ignored. The charset attribute is only used in markup elements.

    When you create XML files that contain lots of translated texts in different languages, it is sometimes more convenient to specify those texts in properties files instead of including them in the XML script. Therefore you can alternatively use a URL to specify a properties file. XML will then read the title, description, and keyword texts from that file.

-   **parameter**

    Describes name-value pairs associated with portal resources. The parameter element supports a type attribute, but for all elements except portlet instances, the type must be string. Portlet instances additionally support the binary type which treats the parameter contents as Base 64 encoded binary data. User definitions support setting multiple values for the same parameter name. With all other resources, setting a parameter overwrites any previous value stored under the same parameter name.

    If the WSRP Producer requires a registration of the WSRP Consumer with certain registration properties, you must specify these properties as parameters.

-   **preferences**

    This is a derivation from the name/value pair. It relates to the parameter element. It describes name/multivalue combinations, that is, combinations of a name and one or more value child elements that are associated with the portal resources wsrp-producer, portlet, and portlet-instance.

    !!!note
        1.  The value elements support only string type attributes, no binary type attributes.
        
        2.  Setting a preferences value overwrites all values that were previously stored under the same preferences name.
        
        3.  portlet and portlet-instance can only have the preferences element if they comply with the standard portlet API. For all other portlets, use the parameter element.
    
        4.  If the WSRP Producer requires a registration of the WSRP Consumer with certain registration properties, you must specify these properties with the parameter tag.
    
    Optionally, you can use the preferences element to define which user attributes you want to have transferred in the WSRP communication with the Producer. These user attributes are the user attributes that are defined in LDAP.

-   **access-control**

    Describes the access permissions associated with portal resources. By specifying access-control subsections for resources in the XML, you can, for example, define which users or groups are allowed to manage a resource. The access control definition for a resource includes all of the following information:

    -   The owner of the resource
    -   The roles defined on that resource
    -   The mapping of users or groups to a role
    -   Whether inheritance of a role or from the parent resource or to child resources is blocked.
    
    Alternatively, a resource can be a private resource of a specific owner, or it can be managed externally.

    When you specify users or groups in the access-control section of a resource, you can either use the full DN as in uid=wpsadmin,cn=users,... , or the short ID as it is used for portal login, for example wpsadmin. An XML response file from a portal export request always contains full DNs.

    !!!note
        When you change the access control state of a resource from public to private or vice versa, this also affects all the resources that inherit access control from this resource. You can never have a public resource that inherits access control from a private resource.

-   **objectid**

    Almost all resources in the portal have an object ID, which identifies the resource. The object ID allows addressing the resource unambiguously. It is also used to express references from one resource to another. For example, when a theme is assigned to a page, the configuration of the page includes the object ID of the theme. For more information about object ID handling in XML scripts see the topic about *Object IDs in XML scripts*.

-   **uniquename**

    A resource that has an object ID can optionally also have a unique name. The unique name can then also be used to identify the resource unambiguously, because a unique name can be used only once in a portal installation.

    If you run an XML update that assigns a unique name which is already used on the system, the execution will fail. You can delete the unique name for a resource by setting it to the value undefined. When you create unique names in XML scripts that you run on many different portal installations, for example to install add-on portlets and pages, you should use a specific prefix for any unique names that you assign, to minimize the chances that they clash with existing unique names on the system. For example, the prefix wps. is used for all unique names that are created as part of the portal installation.

    !!!note
        When you create a nested element, for example a component, with a uniquename attribute, the whole hierarchy upward from that element must also have uniquename attributes. Example XML export request snippet:

    ```
    
         <content-node ...
              <component uniquename="component_1"...
                   <component uniquename"component_2"...
                        <component uniquename"component_3"...
                             . . . . .
                        </component>
                   </component>
              </component>                       
         </content-node>
    
    ```

    Failing to do so might result in the following error message:

    ```
            XMLC0142E: Unique name unique\_name is already used in the portal.
    ```

-   **ordinal**

    The client and component resources take an ordinal attribute which represents the sorting order. (In the case of client resources, if more than one client entry matches a connecting device, the entry with the higher ordinal takes precedence.)

    When ordinals for resources are set in an XML script, you have the following options for specifying them:

    -   As a plain integer value. In this case, the value is written to the database. The resource is sorted into the position that this ordinal value has relative to the ordinals of existing siblings. For example, if you create a new page with ordinal="350" under an existing label, and there are already other pages under that label with the ordinals 100, 300 and 500, the new created page will appear in the third position. If you specify an ordinal which has already been assigned to an existing resource, the order of the two resources cannot be predicted.
    -   As a position indicator. Specify with a hash mark ( #), followed by an integer value. In this case the resource is inserted in the sequence of resources at the position indicated by the specified value. For example, when you create a new page with ordinal="#2", it appears in the second position in its content parent.
    -   The special values first and last. In this case, a value is chosen so that the resource is sorted at the first or last position in its content parent.
    An XML export response file always contains the literal ordinal values as they are stored in the portal database. Note that specifying a position indicator or special value will not necessarily produce the required effect if you are working with derived pages, because in these cases the order of elements depends on the individual user viewing the portal.

-   **domain**

    Use this attribute to specify in which database domain a specific resource should be stored. You can also use the domain attribute to export release data from the portal database by specifying domain="rel" to later feed that data it into the staging process. Use one of the following values with the domain attribute:

    -   **rel**

        This value exports only the release data.

    -   **cust**

        This value exports the release data with the customization data. This includes all referenced release data as `locate` statements.

-   **export-release**

    This attribute is for use with the request tag. Do not use this attribute any more. Instead, use the preceding attribute domain by specifying domain="rel".


The following two attributes have been added for the `portletinstance` tag. Use them for personalized content, where only portlet parameters are changed, but not the page structure.

-   **owner**

    Use this attribute to define the owner of the portlet instance.

-   **parentref**

    Use this attribute to define the parent of the portlet instance.

-   **global-target-settings**

    Contains those property broker actions that are defined as global targets. By using this tag, portlet instances can make Communication Targets available to Click-To-Action menus or for cross-page wiring. A `portletinstance` tag section can contain `target` elements that define a Communication Target that has been defined as global. The `target` definition specifies the communication target that is to be exported. Example:

    ```
    <portletinstance ...>
       <global-target-settings> 
          <target actionref="orderDetails" update="set"/>
       </global-target-settings>
    </portletinstance>
    ```


You can find additional information on the meaning and possible values for configuration elements and attributes in the schema annotations.


???+ info "Related information"  
    -   [Object IDs in XML scripts](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/objectid_xml_script/adxmlref_objct_ids.md)

