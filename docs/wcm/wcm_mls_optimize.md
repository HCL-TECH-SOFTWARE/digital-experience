# Optimizing the performance of the extensions \| HCL Web Content Manager Multilingual Solution

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

    **Note:** These changes require manual flushing of the cache offload directories whenever an iFix, Cumulative iFix or Fixpack is installed.

3.  Periodically run the clear history tool to improve page load and save performance. See [Clearing item history](wcm_admin_clear_history.md) and [Clearing version history](wcm_admin_clear_versions.md) for further information.

4.  Disable workflow actions on subscribers to reduce load and reduce the number of versions that are created for each item. See [Disabling Workflow Actions](wcm_config_disable_actions.md) for further information.


**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

