# Reloading the profile and module in development mode without caching

When you are debugging an issue, sometimes you must actively update the profile or module definitions.

You can invalidate the cache using the Theme Analyzer to update the profile or module definitions. Or, you can enable development mode, which disables all caches in the system and refreshes all profile and module information for every request.

1.  Open the WebSphere® Integrated Solutions Console.

2.  Select **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select the **WP ConfigService** resource environment provider.

4.  Click **Custom properties**.

5.  Change the **resourceaggregation.development.mode** entry to **true**.

6.  Save the changes.

7.  Restart the HCL Portal server.


**Parent topic:**[Troubleshooting modular themes](../dev-theme/themeopt_mod_debug_ovr.md)

