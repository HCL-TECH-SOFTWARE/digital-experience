# Configuring Practitioner Studio

Learn how to show Practitioner Studio and Woodburn Studio themes, and Administration changes in a newly created virtual Portal.

Administrator users can configure the Virtual Portal Manager portlet so Practitioner Studio and Woodburn Studio themes and Administration changes show in newly created virtual Portals.

Starting CF221, the Virtual Portal Manager is configured to use the file `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml` on newly deployed containers so that newly created virtual Portals contain Practitioner Studio. For upgrades from older versions, the default is not changed to allow continued use of virtual Portals as configured previously.

## Configuring Virtual Portal Manager for newly created virtual Portals to contain Practitioner Studio and Woodburn Studio

### Prerequisite

Enable the HCL DX 9.5 features on the base Portal. Optionally, you can configure the Virtual Portal Manager portlet to use a different XML file so that subsequent virtual Portals will contain the HCL DX 9.5 UI features.

### Steps

1.  From **Site Management**, navigate to **Virtual Portal > Virtual Portal Manager > **Create New Virtual Portal**.

2.  Go to the overlay menu and click **Configure**.

3.  In the **XML script to create virtual portal content tree** field, enter the appropriate value. 

    For example, `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5.xml`.

4.  Click **OK**.

!!! note
    This does not create the two Woodburn Studio libraries in the virtual Portal. You have to syndicate these libraries to your virtual Portal.

Alternatively, to skip Woodburn Studio, you can use the file `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml` starting CF221.

## Removing Practitioner Studio or Woodburn Studio from a virtual portal that was created by modifying the Virtual Portal Manager configuration

-   Virtual portals that were created by modifying the Virtual Portal Manager portlet configuration cannot use the **disable-v95-UI-features-virtual-portal** task to disable the features. These will require a manual cleanup of the artifacts.


