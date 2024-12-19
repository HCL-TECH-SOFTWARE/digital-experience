# Optimizing the performance of the extensions

How to optimize your system for best performance of the multilingual solution.

1.  Add the following settings to the **WCM WCMConfigService** service by using the WebSphere® Application Server.

    1.  Enable the missed path cache by adding `missed_absPath.cache.enable=true`.

    2.  Enable the user cache by setting `user.cache.enable=true`.

    3.  Restart the server.

2.  Update these settings in the WebSphere Application Server to enable "disk-offload" and "flush to disk" for the following caches:

    -   **ML Config File**

        services/cache/iwk/mlconffile

    -   **Abs Path**

        services/cache/iwk/abspath

    -   **Abs Path Reverse**

        services/cache/iwk/abspathreverse

    -   **Missed Path**

        services/cache/iwk/missed

    -   **Object Summary**

        services/cache/iwk/summary

    -   **Strategy**

        services/cache/iwk/strategy

    !!! note
        These changes require manual flushing of the cache offload directories whenever an iFix, Cumulative iFix or Fixpack is installed.

3.  Periodically run the clear history tool to improve page load and save performance. See [Clearing item history](../../../wcm_configuration/wcm_adm_tools/wcm_admin_clear_history.md) and [Clearing version history](../../../wcm_configuration/wcm_adm_tools/wcm_admin_clear_versions.md) for further information.

4.  Disable workflow actions on subscribers to reduce load and reduce the number of versions that are created for each item. See [Disabling Workflow Actions](../../../wcm_configuration/wcm_svc_cfg//wcm_config_disable_actions.md) for further information.

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.
