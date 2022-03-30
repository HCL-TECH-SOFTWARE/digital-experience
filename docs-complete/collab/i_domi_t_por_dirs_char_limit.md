# Changing the minimum number of characters in names for searching 

By default, Member Manager requires users to enter a minimum of two characters when they use the Directory Search window to search the organization directory for names. This limit is not appropriate for all languages. By modifying the pickersettings.properties file, you can reduce the limit to one character.

1.  Edit the `pickersettings.properties` file in the following location:

    -   Windows™: wp\_profile\\PortalServer\\config\\lotusworkplacelib\\pickersettings.properties
    -   AIX®HP-UXLinux™ Solaris: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
    -   IBM® i: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
    -   z/OS®: wp\_profile/PortalServer/config/lotusworkplacelib/pickersettings.properties
2.  Change the 2 at the end of the following content to a 1:

    `people.view.1  
     =WMM.1,com.ibm.workplace.people.picker.data.value.service,str.directory.name.wmm,com.ibm.wkplc.people.picker.workspace.WmmPickerAdapterFactory,50,2`

3.  Save the properties file.

4.  Restart the HCL Digital Experience server.


**Parent topic:**[Directory Search ](../collab/i_coll_r_por_dirs.md)

