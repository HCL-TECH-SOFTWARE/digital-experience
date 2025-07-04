# Sample integrations of HCL Leap with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL Leap and HCL Digital Experience (DX). Follow the [Installation](./installation.md) and [Configuration](./configuration.md) steps before following the example guide.

## Showing HCL Leap data on HCL DX pages

In this example, you can integrate data from HCL Leap to your HCL DX pages using the Digital Data Connector. For more information, see [Digital Data Connector](../../ddc/index.md).

## Integrating the HCL Leap application in HCL DX

You can integrate HCL Leap applications into HCL DX in two ways:

- [Using the embedded JavaScript API](#integrating-hcl-leap-applications-using-the-embedded-javascript-api)
- [Using the Web Application Bridge (WAB)](#integrating-hcl-leap-applications-with-web-application-bridge)

!!!note
    To property integrate Leap into DX, it is recommended that you familiarize yourself with the following topics:

    - [HCL Digital Experience Introduction course](https://hclsoftwareu.hcltechsw.com/courses/course/hcl-digital-experience-introduction){target="_blank"} and [HCL Digital Experience for Business Users (Beginners)](https://hclsoftwareu.hcltechsw.com/component/splms/course/hdx-bu-100-dx-business-user-beginner){target="_blank"}
    - [Web Content Development](https://hclsoftwareu.hcltechsw.com/component/splms/lesson/?id=414){target="_blank"}
    - [Building Simple Forms](https://hclsoftwareu.hcltechsw.com/component/splms/lesson/?id=1821){target="_blank"}

### Integrating HCL Leap applications using the embedded JavaScript API

Refer to the following steps to embed a Leap application onto a DX site using Leap's [Embedding API](https://opensource.hcltechsw.com/leap-doc/latest/ref_embedding_api.html?h=embedding){target="_blank"}.

1. Create the Leap application that you plan to integrate, if you haven't done so.

2. Ensure that you can [access Leap and DX from the same domain name](./installation.md) and [Single Sign-On (SSO) is enabled](./configuration.md#enabling-ltpa-sso-between-hcl-leap-and-hcl-dx-in-kubernetes).

3. Create a **Library** in DX.

    1. Log in to Practitioner Studio as an administrator.
    2. Click **Applications Menu > Web Content > Web Content Libraries > Create New Library**.
    3. Under **\*Web content library name**, enter your library name, then click **OK**.
    4. Click **Authoring > Preferences > Edit Shared Settings > Library Selection**.
    5. Select the library you created, click **Add >** to move it to the **Selected Libraries**, then click **OK**.

4. Create a new **Presentation Template** in the new library.

    1. In the **Library Explorer**, click your new library.
    2. Click **New > Presentation Template**.
    3. Under **Name**, enter the name of your presentation template.
    4. Under **Presentation Template Options**, enter the following code:

        ```
        [Element context="current" type="content" key="html"]
        ```

    5. Click **Save and Close**.

5. Create a **Content Template**.

    1. In your library, click **New > Authoring Template > Content Template**.
    2. Under **Name**, enter the name of your content template.
    3. Click **Manage Elements**.
    4. Under **Element type**, select **HTML** from the dropdown.
    5. Under **Name**, enter the name of your element, then click **OK**.
    6. In **Default Presentation Template**, click **Select Presentation Template**.
    7. Select the **Presentation Template** you created in step 4, then click **OK**.
    8. Click **Save and Close**.
  
    <img src="../../../../assets/dx-leap-integration-html-ct.png" alt="default presentation template" width="600" height="1000">

6. Create a **Site Area** using the default template.

    1. In your library, click **New > Site Area > Default Site Area Template**.
    2. Under **Name**, enter the name of your site area.
    3. Click **Properties > Profile**.
    4. Under **Keywords**, add the following parameter to make your site area visible when in your DX site's **Edit Mode**.

        ```
        ibm.portal.toolbar.NewContent
        ```

    5. Click **Save and Close**.

    <img src="../../../../assets/dx-leap-integration-siteareakeyword.png" alt="keyword property" width="400" height="800">

7. Inside the site area you created, create the Content based on your content template. For the HTML value, use the script below, replacing `{appId}` and `{formId}` with the appropriate values, depending on your app. The Launch link of your Leap app should have the details you need; refer to the pattern `sample-hostname.com/.../app/<appId>/launch/index.html?form=<formId>`, that is, your appId should come after the word "app" in your link, whereas the formId should come after "form=".

    ```
    <div id="[Plugin:ScriptPortletNamespace]leapDiv" style="width: 100%"></div>

    <script src="/apps/api/leap.js" data-leap-config="{overwriteExistingDojoConfig: true}"></script>

    <script>
    Leap.onReady = function() {
        let prefSecMod =  'anon';

        [Plugin:NotEquals text1="[Plugin:EvaluateEL value="${wp.user.uid}"]" text2=""]
        prefSecMod =  'secure';
        [/Plugin:NotEquals]

        let launchParams =  {
            'appId': '{appId}',
            'formId': '{formId}',
            'locale': navigator.language,
            'targetId': '[Plugin:ScriptPortletNamespace]leapDiv',
            'prefSecMode': prefSecMod
        };

        console.log('### launchParams:', launchParams);

        Leap.launch(launchParams);
    };
    </script> 
    ```

    <img src="../../../../assets/dx-leap-integration-content.png" alt="appId and formId" width="600" height="1000">

8. Go to your DX site. Upon enabling Edit Mode, and clicking the Add page components and applications button (<img src="../../../../assets/dx-leap-integration-addicon.png" alt="add icon" width="25" style="vertical-align: middle;">) you should now be able to see the Site Area you created under "Page Components". Click on the Site Area, then you should find the Content you created. Add that Content to the page to **embed your Leap app**.

### Integrating HCL Leap applications with Web Application Bridge

WAB uses reverse proxy technology to integrate web-based content providers such as Leap with DX. Administrators must first create the content providers profiles, policies, and web dock applications. More details are available in [Web Application Bridge](../wab/index.md).

!!!warning
    As described in [Troubleshooting the Web Application Bridge](../wab/trouble_wab.md), WAB exposes the proxied application on the same context root as the original resource path. This can cause overlaps in the routing if the application (in this case, Leap) is deployed and exposed on the same host as DX.

    To prevent this, use and configure an [Ingress Controller](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) to expose the applications on different host names or subdomains.

1. Create content provider profiles.

    For information on how to create content provider profiles, policies, and connections, refer to the following:

      - [Content provider profile](../wab/wab/h_wab_provider.md)
      - [Content provider profile policy](../wab/wab/h_wab_policy.md)
      - [Content provider policy requests and responses](../wab/wab/h_wab_response.md)
      - [Content provider policy single sign-on](../wab/wab/h_wab_auth.md)

    Follow these steps to create the profile:

      1. In the **Profile Host**, you can set a **Unique profile title** (for example `Leap Content Provider Profile`).
      2. For the **Hostname or IP address**, enter `http://hostname:port/` which is the host (and port, if required) of the Leap environment.
        If the Leap deployment is deployed in the same Kubernetes cluster as HCL DX, the [Kubernetes Service DNS name](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#a-aaaa-records){target="_blank"} can be used here to only access the application through the Web Application Bridge proxy.
      3. **Save** the content provider profile.

2. Create Web Dock Applications.

    For information on how to create web dock applications, refer to [Web Dock application](../wab/wab/h_wab_dock.md).

    1. Add a **Unique web dock application title** (for example, `Leap`). Make sure the title describes the Web Dock portlet you want to add to the page.
    2. In the **Content provider profile** dropdown, select the newly created profile `Leap Content Provider Profile`.
    3. Add a path to the Leap page to display as the **Resource path** (for example, `/apps/landing/org/app/8a667f9a-aa60-4691-829a-9a8bf4220c04`).
    4. **Save** the web dock application.

3. Add the created Web Dock Application to the DX Page.
    1. Enable **Edit mode** on the DX page you want to include Leap on or create a new page.
        To create a new page, click the menu icon on the right of the Web Dock Application to open the Context menu. You can create either a child or a sibling page. 
    2. Click the plus icon on the left navigation panel to **Add page components and applications** to the page. In the navigation panel, go to the **Applications** tab and search for the newly created web dock application (in this case, `Leap`).
    3. Click the **Add To Page** button.

The HCL Leap Page should be visible within the HCL DX page.

Support for this feature is not available in the HCL Support Center. For questions and issues, reach out either in the [DXers - The HCL DX User Group](https://ptb.discord.com/channels/787019554173485067/802205783962026034){target="_blank"} on Discord or in the [HCL DX forum](https://support.hcltechsw.com/community?id=community_forum&sys_id=02c5dcf01b32f70cc1f9759d1e4bcb43){target="_blank"}.

## HCLSoftware U learning materials

For an introduction and a demo on how to integrate DX with HCL Leap as a business user, go to [DX Integration with HCL Leap for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D953){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Leap for Business Users Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_integration_with_HCL_Leap_for_Business_Users.pdf){target="_blank"} and corresponding [DX Integration with HCL Leap for Business Users Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_integration_with_HCL_Leap_for_Business_Users_Lab_Resources.zip).

For an introduction and a demo on how to integrate DX with HCL Leap as a developer, go to [DX Integration with HCL Leap for Developers](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1455){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Leap for Developers Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-DEV_DX_integration_with_HCL_Leap_for_Developers.pdf){target="_blank"}.
