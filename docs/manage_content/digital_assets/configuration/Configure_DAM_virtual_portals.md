# Configure Digital Asset Management in virtual portals

This section provides steps to configure Digital Asset Management support in virtual portals.

Using HCL Digital Experience 9.5 CF19 and higher, DX administrators can configure Digital Asset Management services support in virtual portals. For additional information about virtual portal capabilities for HCL Digital Experience, reference the [virtual portals](../../../build_sites/virtual_portal/index.md) topic in the HCL DX Help Center documentation.

## Complete the following tasks to enable Digital Asset Management support in virtual portals.
Prerequisites:

- Install HCL Digital Experience 9.5 CF19 or higher release, including Digital Asset Management and the Experience API.
- Configure virtual portal support to the HCL DX 9.5 CF19 or higher release deployment.
- Verify access to the Practitioner Studio interface on the virtual portal. See [Enabling Practitioner Studio and Woodburn Studio in an existing virtual portal](../../../build_sites/practitioner_studio/working_with_ps/enable_prac_studio.md) for additional information.

## Installing Digital Asset Management on a virtual portal

Execute the following configuration tasks to enable Digital Asset Management on the virtual portal:

`/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-media-library-vp -Dstatic.ui.url=... -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin`

Figure: Example - Configuration task to enable Digital Asset Management in the HCL DX virtual portal

`/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh enable-media-library-vp -Dstatic.ui.url=https://myhost.com/dx/ui/dam/static -DVirtualPortalContext=dam -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin`

Verify access to the Practitioner Studio and Digital Asset Management features from the HCL DX virtual portal. See the [Practitioner Studio](../../../build_sites/practitioner_studio/index.md) and [Digital Asset Management](../../digital_assets/index.md) topics for additional information.

## Remove Digital Asset Management from a virtual portal

To optionally remove support for Digital Asset Management in an HCL DX virtual portal, execute the following configuration task:

`/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-media-library-vp -DVirtualPortalContext=... -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin`

Figure: Example: - Configuration task to enable Digital Asset Management in the HCL DX virtual portal

`/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh disable-media-library-vp -DVirtualPortalContext=dam -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin`

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course.

To learn how to manage multiple DX sites, go to [Multi-Site Management](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"}. In this course, you will learn when and how to create and manage base, true, and virtual portals in which you may run one or more DX sites. You can also try it out using the [Multi-Site Management Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Multi-Site_Management_Lab.pdf){target="_blank"}.
