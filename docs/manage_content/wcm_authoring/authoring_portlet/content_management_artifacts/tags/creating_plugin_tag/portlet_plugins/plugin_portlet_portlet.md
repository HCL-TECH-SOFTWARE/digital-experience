---
id: plugin_portlet_portlet
title: The portlet plug-in
---




Use the `Portlet` rendering plug-in to add portlet information to your web content. This plug-in provides access to the instance of the Web Content Viewer portlet that renders the plug-in. The `Portlet` rendering plug-in uses the following attributes:

- **key**

    Use this attribute to specify portlet information that you want to insert into your web content. You can select one of the following values for each portlet plug-in tag:

    - **namespace**

        If you specify this value, the plug-in renders the namespace of the portlet window of the Web Content Viewer portlet instance.

    - **portletMode**

        If you specify this value, the plug-in renders the current portlet mode of the Web Content Viewer portlet instance.

    - **preferences**

        If you specify this value, the plug-in accesses the portlet preferences of the Web Content Viewer portlet instance. If you use this value, you must also specify the additional `preference` attribute that is listed later to identify the specific portlet preference that you want to render.

    - **windowID**

        If you specify this value, the plug-in renders the portlet window ID of the Web Content Viewer portlet instance.

    - **windowState**

        If you specify this value, the plug-in renders the current portlet window state of the Web Content Viewer portlet instance.

- **preference**

    Use this attribute to identify the portlet preference of the Web Content Viewer portlet instance to render. If you use the `preferences` value that is listed earlier, you must specify this attribute.

- **separator**

    This attribute is optional. Use this attribute to specify the delimiter that you want to use when you render portlet preferences that have more than one value. If you do not set this attribute, the portal places a comma between the individual preference values when it renders them.

!!! note
    The Portlet rendering plug-in does not render the content that you can specify between the start and end tags.

Examples:

- To add the ID of the portlet window that renders the Portlet rendering plug-in to your web content, use the following plug-in tag:

    ```
    [Plugin:Portlet key="windowID"]
    ```

- To add the values of the portlet preference with the name `xyz` to your web content, use the following plug-in tag:

    ```
    [Plugin:Portlet key="preferences" preference="xyz" separator=";"]
    ```

## HCLSoftware U learning materials

To learn about Script Applications, go to [Script Application](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
