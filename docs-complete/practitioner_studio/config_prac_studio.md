# How to configure Practitioner Studio 

Learn how to show Practitioner Studio and Woodburn Studio themes, and Administration changes in a newly created virtual Portal.

Administrator users can configure the Virtual Portal Manager portlet so Practitioner Studio and Woodburn Studio themes and Administration changes show in newly created virtual Portals.

## Configuring Virtual Portal Manager so that newly created virtual Portals contain Practitioner Studio and Woodburn Studio

Note that a prerequisite is to enable the 9.5 features on the base Portal. Optionally, you can configure the Virtual Portal Manager portlet to use a different XML file so that subsequent virtual portals will contain the new 95 UI features.

1.  From **Site Management**, navigate to **Virtual Portal** \> **Virtual Portal Manager** \> **Create New Virtual Portal**.
2.  Go to the overlay menu \(the three vertical dots\) and click **Configure**.
3.  In the field **XML script to create virtual portal content tree**, enter the appropriate value. For example:
    -   `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5.xml`
4.  Click **OK**.

Note that this does not create the two Woodburn Studio libraries in the virtual portal. You will need to syndicate these libraries to your virtual portal.

## Removing Practitioner Studio or Woodburn Studio from a virtual portal that was created by modifying the Virtual Portal Manager configuration

-   Virtual portals that were created by modifying the Virtual Portal Manager portlet configuration can not use the **disable-v95-UI-features-virtual-portal** task to disable the features. These will require a manual cleanup of the artifacts.

**Parent topic:**[Working with Practitioner Studio ](../practitioner_studio/working_prac_studio.md)

