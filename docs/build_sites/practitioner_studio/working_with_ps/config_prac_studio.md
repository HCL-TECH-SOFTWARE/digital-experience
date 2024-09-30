# Configuring Practitioner Studio

Learn how to show Practitioner Studio and Woodburn Studio themes, and administration changes in a newly created virtual Portal.

Administrators can configure the Virtual Portal Manager portlet so Practitioner Studio and Woodburn Studio themes and administration changes show in newly created virtual Portals. For more information, see [Configuring Virtual Portal Manager for newly created virtual Portals](#configuring-virtual-portal-manager-for-newly-created-virtual-portals).

The Virtual Portal Manager is configured to use the file `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml` on newly deployed containers so newly created virtual Portals contain Practitioner Studio. For upgrades from older versions, the default is not changed to allow the continued use of virtual Portals as configured previously.

## Configuring Virtual Portal Manager for newly created virtual Portals 

### Prerequisite

Enable the HCL DX 9.5 features on the base Portal. Optionally, you can configure the Virtual Portal Manager portlet to use a different XML file so that subsequent virtual Portals will contain the HCL DX 9.5 UI features.

### Steps

To configure Virtual Portal Manager for newly created virtual Portals to contain Practitioner Studio and Woodburn Studio, refer to the following steps.

1. From **Site Management**, navigate to **Virtual Portal > Virtual Portal Manager > Create New Virtual Portal**.

2. Go to the overlay menu and click **Configure**.

3. In the **XML script to create virtual portal content tree** field, enter the appropriate value. 

    For example, `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5.xml`.

4. Click **OK**.

5. Syndicate the two Woodburn Studio libraries from the base Portal to your virtual Portal.

Alternatively, you can use the file `WebSphere:assetname=VirtualPortal.zip:InitVirtualContentPortalV9.5NoWoodburn.xml` to skip Woodburn Studio.

## Removing Practitioner Studio or Woodburn Studio from a virtual Portal

Virtual portals that were created by modifying the Virtual Portal Manager portlet configuration cannot use the **disable-v95-UI-features-virtual-portal** task to disable the features. These will require a manual cleanup of the artifacts.