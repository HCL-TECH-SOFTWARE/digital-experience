# Setting the list-rendering context


Learn about how you set the list-rendering context in Digital Data Connector \(DDC\) for HCL Portal.

To establish the list-rendering context, you add the following tag to your presentation template:

```
[Plugin:ListRenderingContext action="set" 
                             extension-id="bean list provider id" 
                             profile="profile name"]
```

Replace the `bean list provider id` variable by the ID that identifies the DDC plug-in instance through which you want to render this list. If the addressed DDC plug-in is the generic XML DDC plug-in or a DDC plug-in that delegates its requests to that provider, you must identify the list-rendering profile. The XML DDC plug-in uses the identified profile to transform the XML data into bean list objects. Custom DDC plug-ins might or might not require this profile parameter.

To address one of the two DDC plug-ins that are provided with HCL Digital Experience Version 8.5, use one of the following values for the `extension-id` parameter:

-   **ibm.portal.ddc.xml**

    Use this value for addressing the generic XML DDC plug-in.

-   **ibm.portal.ddc.sr**

    Use this value for addressing the DDC plug-in that is used by the social lists feature.


If you use one of the providers, you must set the profile parameter.

Depending on your choice, the addressed DDC plug-in can support or even require that you pass extra information through the `attribute` parameters. For details about which information is supported or required with the DDC plug-ins, read the documentation about the DDC plug-in that you use.

Here is an example of how to set a list-rendering context that uses the generic Atom list-rendering profile to retrieve the list of public IBM communities:

```
[Plugin:ListRenderingContext action=”set” extension-id=”ibm.portal.ddc.xml” 
     profile=”ibm.portal.atom” 
     attribute=”source=https://www.ibm.com/connections/communities/service/atom/catalog/public” 
     compute=“always“]

```

!!! note
    If you want to test this example, you might have to adjust your proxy configuration to allow your portal to access the source URL. For more information, read the information about proxy configuration in the HCL Digital Experience documentation.

!!! note
    If you want to test this example, you probably must adjust your outbound HTTP connection to allow your portal to access the source URL. For more information, read *Outbound HTTP connection*.

-   **[Nesting lists](plrf_nest_list_rendr_context.md)**  
You can render nested lists by nesting list-rendering contexts. Nested lists can be useful if the individual entries in your list contain associated information in the form of a list as well. For example, you might want to show a list of communities, including all the community members for each community. In this case, you can retrieve the individual lists of community members by rendering nested lists from within the individual items of the community list.

