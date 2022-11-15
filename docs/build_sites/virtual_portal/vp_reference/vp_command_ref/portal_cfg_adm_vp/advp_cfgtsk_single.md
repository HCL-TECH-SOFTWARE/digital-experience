# Using a single configuration task to administer multiple virtual portals

You can administer multiple virtual portals by running a single configuration command. The following configuration tasks support working with multiple virtual portals: create-virtual-portal, delete-virtual-portal, and modify-virtual-portal. Use the -DvirtualPortalList parameter with task to create, delete, or modify multiple virtual portals at the same time.

Specify the virtual portal property sets in the file wkplc.properties that is used with the configuration tasks. When you run the configuration task, you pass the list of virtual portals by using the parameter -DvirtualPortalList.

Here is an example for creating two virtual portals:

1.  Specify the two virtual portal property sets in the file wkplc.properties as follows:

    ```
    vp1.VirtualPortalTitle=**vp1**
    vp1.VirtualPortalRealm=
    vp1.VirtualPortalHostName=
    vp1.VirtualPortalContext=**vp1**
    vp1.VirtualPortalNlsFile=
    
    vp2.VirtualPortalTitle=**vp2**
    vp2.VirtualPortalRealm=
    vp2.VirtualPortalHostName=
    vp2.VirtualPortalContext=**vp2**
    vp2.VirtualPortalNlsFile=
    
    ```

    Specify the realms and host names only if your portal has multiple realms.

2.  To create both virtual portals by using a single configuration command, use the parameter -DvirtualPortalList to specify the two portals vp1 and vp2:

    ```
    ConfigEngine create-virtual-portal -DvirtualPortalList=vp1,vp2
    ```

    -   For Linux™: `ConfigEngine.sh create-virtual-portal -DvirtualPortalList=vp1,vp2`
    -   For Windows™: `ConfigEngine.bat create-virtual-portal -DvirtualPortalList=vp1,vp2`

