# Configure Digital Asset Management in virtual portals

This section provides steps to configure Digital Asset Management support in virtual portals.

Using HCL Digital Experience 9.5 CF19 and higher, DX administrators can configure Digital Asset Management services support in virtual portals. For additional information about virtual portal capabilities for HCL Digital Experience, reference the [virtual portals](../../9.5/admin-system/ad_vp.md) topic in the HCL DX Help Center documentation.

## Complete the following tasks to enable Digital Asset Management support in virtual portals.

**Prerequisites**:

-   Install HCL Digital Experience 9.5 CF19 or higher release, including Digital Asset Management and the Experience API.
-   Configure virtual portal support to the HCL DX 9.5 CF19 or higher release deployment.
-   Verify access to the Practitioner Studio interface on the virtual portal. See [Enabling Practitioner Studio and Woodburn Studio in an existing virtual portal](../../9.5/practitioner_studio/enable_prac_studio.md) for additional information.

## Installing Digital Asset Management on a virtual portal

Execute the following configuration tasks to enable Digital Asset Management on the virtual portal:

```
/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-media-library-vp -Dstatic.ui.url=... -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

```
/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-media-library-vp -Dstatic.ui.url=https://myhost.com/dx/ui/dam/static -DVirtualPortalContext=dam -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

Verify access to the Practitioner Studio and Digital Asset Management features from the HCL DX virtual portal. See the [Practitioner Studio](../../9.5/practitioner_studio/practitionerstudio_overview.md) and [Digital Asset Management](../../9.5/digital_asset_mgmt/digital_asset_mgmt_overview.md) topics for additional information.

## Remove Digital Asset Management from a virtual portal

To optionally remove support for Digital Asset Management in an HCL DX virtual portal, execute the following configuration task:

```
/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-media-library-vp -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

```
/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-media-library-vp -DVirtualPortalContext=dam -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
```

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

