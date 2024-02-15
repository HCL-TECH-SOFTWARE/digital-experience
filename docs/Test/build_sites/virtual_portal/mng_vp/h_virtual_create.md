---
id: h_virtual_create
title: Creating a virtual portal
---




Create a new virtual portal. This includes providing the title, description, and URL context for the new virtual portal, and selecting the initial administrative user group, default theme, and user realm \(if applicable\) for the new virtual portal.

To create a new virtual portal, perform the following steps:

1.  Click the **New Virtual Portal** button.

    The **Create New Virtual Portal** panel appears.

2.  Provide the following information:

    -   **Virtual portal title:** Enter the title of the virtual portal. This field is limited to 255 characters.
    -   **Virtual portal description:** Enter the description of the virtual portal. This field is limited to 255 characters.
    -   **URL Context** or **Virtual portal hostname**:

        -   **URL Context:** Enter the URL context. This is the last part of the URL of the virtual portal and will be preceded by `http://www.yourco.com/wps/portal/`.

            !!! note
                All virtual portal URL contexts must be built from the root context for the portal server and must be unique. You cannot use sub-contexts. For example, this URL is invalid: `http://www.yourco.com/wps/portal/vp1/vp2`. This is the correct format: `http://www.yourco.com/wps/portal/vp2`.

        -   **Virtual portal hostname:** Enter the host name for the virtual portal.

            -   This URL is used internally to access the virtual portal instance, even if you specify a context URL that is easy to use. Make sure that the host name that you specify here is accessible.
            -   You cannot use the same virtual portal host name twice in the same portal installation. The host name must be unique for the portal installation. Host names must be valid host names that are either registered on your local DNS, or internally using the "hosts" file. Host names must be registered on your system before creating a virtual portal.
            -   After you create the virtual portal, you cannot change the host name that you specify for the virtual portal. If you must use a different host name for a virtual portal, see the topic about *Using a new host name for an existing virtual portal*.
            -   If you use web content libraries, do not specify a context URL for the new virtual portal that matches the name of a library on your server. If the name of a library and the URL context of a virtual portal have the same value, incorrect rendering of web content can result.
            -   If you use a host name for creating the virtual portal, you need to update the global web server plug-in configuration in the WebSphere® Integrated Solutions Console and restart the web server. If you have more than one virtual portal, you need to do this only once. For more information about updating the global web server plug-in configuration, read *Creating or updating a global web server plug-in configuration file* in the IBM® WebSphere Application Server product documentation.

        -   You must specify either a host name or a context.
        -   If you specify both a host name and a context, the host name takes precedence and the context is ignored.
        -   There are some strings that you cannot use as URL mappings for virtual portals, for example `vp`. These strings are reserved names and correspond with URL codec names. For a list of these reserved strings, see *Shaping the user experience*.
        -   Use only ASCII characters for the URL Context. For example, you cannot use a URL Context such as språk. If you use non-ASCII characters, the portal shows an error message such as the following EJPAH2009E: Invalid characters were found in a context name or label. Similarly, you cannot use escaped URL encoding either. For example, a URL Context such as spr%E5k.
    -   **User realm:** Select a realm from the list. This pulldown appears only if realms are enabled on your environment. The default realm is `portal`. You can select other realms that you might have created. If you have realms enabled, but you do not want to use them for your virtual portals, you can deselect realms by selecting the blank option line from the pulldown list.
    -   **Initial administrative user group:** Enter the name of an administrative user group, or search for a group. To search for a group, follow these steps:
        1.  Click the **Search** icon.
        2.  Select the search type from the **Search by:** drop-down menu. The **Search:** field appears.
        3.  Enter the search parameters in the **Search:** field.
        4.  Click **Search**.
        5.  Select the appropriate user group and click **OK** to continue.

    -   **Default theme:** Select the default theme for the virtual portal from the drop down list. Select the **Preview** icon to see a preview of the selected theme.

3.  After you have provided all the information, click **OK** to create the virtual portal.

    Completing the steps to create a virtual portal also creates the virtual portal entity and calls the XML configuration interface script that creates the initial content tree.

4.  If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix and you use Site Builder or the Script Application, add the appropriate library or libraries to each new virtual portal.

    For more detailed information, read *Adding the Site Builder and Script Application libraries*.


!!! note
    -   **For advanced administrators:**

        If you want to use a custom XML script to create the content of your virtual portal, you can create an XML script file that specifies the initial content for virtual portals. Before you create the new virtual portal, add the XML file with your custom XML script to a WebSphere® Application Server asset and then specify the asset and file name in the Configure mode of this portlet. By alternative, you can also copy the asset VirtualPortal.zip provided with the portal under a different name and modify it as required. For details about customizing the initial content of virtual portals refer to the portal Help Center section about virtual portals. 
        !!! note
            Do not modify the asset VirtualPortal.zip provided with the portal.

    -   **For JCR search collections**

        When you create a virtual portal, the creation of the JCR search collection depends on whether you create the virtual portal with or without content:

        -   If you create the virtual portal with content, the portal creates the JCR collection by default.
        -   If you create only the virtual portal and add no content to it, the portal creates no JCR collection with it. It will get created only when content is added to the virtual portal.
        You can view the URL of the JCR collection in the virtual portal administration portlet. The URL looks as follows: `http://host_name:port_number/seedlist/server?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=**wsid**@ootb_crawler**wsid**`where `wsid` is the actual workspace ID of the virtual portal. The workspace ID is the identifier of the workspace in which the content item is created, stored and maintained. For example, if the workspace ID of the virtual portal is 10, then the URL looks as follows:`http://host_name:port_number/seedlist/server?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=**10**@ootb_crawler**10**`



???+ info "Related information"
    - [Creating or updating a global web server plug-in configuration file](http://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/twsv_plugin_regen.html)

