# Changing the number of search results found 

By default, Member Manager limits the number of entries that are returned to 50 when you use the Directory Search window to search the organization directory for names. By modifying the pickersettings.properties file, you can change the number of search results returned.

1.  Edit the `pickersettings.properties` file in the following location:

    -   Windows™: `wp\_profile\\PortalServer\\config\\lotusworkplacelib\\pickersettings.properties`
    -   AIX®HP-UXLinux™ Solaris: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
    -   IBM® i: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
    -   z/OS®: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
2.  Change the 50 at the end of the following content to the number of search results you want to display:

    `people.view.1  
     =WMM.1,com.ibm.workplace.people.picker.data.value.service,str.directory.name.wmm,com.ibm.wkplc.people.picker.workspace.WmmPickerAdapterFactory,50,2`

3.  Save the properties file.

4.  Restart the HCL Digital Experience server.


**Parent topic:**[Directory Search ](../collab/i_coll_r_por_dirs.md)

