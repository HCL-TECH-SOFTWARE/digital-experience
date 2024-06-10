# Working with Practitioner Studio

Learn how to enable, configure and disable Practitioner Studio on the latest version of HCL Digital Experience.

If you are using the on-premise installation of HCL Digital Experience 9.5, you will need to perform deployment and configuration steps in order to work with Practitioner Studio.

If you choose not to enable Practitioner Studio, you can still do all of the Administrator services that were available in previous releases.

!!!note
    If you have uninstalled HCL DX version 9.5, the Practitioner Studio or Woodburn Studio Theme applications are not removed.

    After Practitioner Studio and Woodburn Studio are installed, neither of their .ear files are removed from the WebSphere Administration Console. When you upgrade HCL DX to CF17 or later and you have removed HCL DX version 9.5, the upgrade will fail because the upgrade configuration tasks use these .ear files to take actions that are valid only for version 9.5. If HCL DX version 9.5 is uninstalled from the environment, you must manually uninstall the Practitioner Studio Theme and Woodburn Studio Theme applications from the WebSphere Administration Console to successfully upgrade your CF version.  

-   **[How to enable Practitioner Studio](enable_prac_studio.md)**  
This section outlines how to enable Practitioner Studio and Woodburn Studio in both base portal and virtual portal environments.
-   **[How to configure Practitioner Studio](config_prac_studio.md)**  
Learn how to show Practitioner Studio and Woodburn Studio themes, and Administration changes in a newly created virtual Portal.
-   **[How to disable Practitioner Studio](disable_prac_studio.md)**  
This section outlines how to disable Practitioner Studio and Woodburn Studio in both base Portal and virtual portal environments.


