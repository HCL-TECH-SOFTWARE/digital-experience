# Configuring the profiling parameter on the page with the Syndicated Feed Portlet

You must configure the full profiling parameter on the page on which you deployed the Syndicated Feed Portlet.

1.  Create the page on which you want to deploy the Syndicated Feed Portlet.

    Make sure that the page inherits the portal default theme.

2.  Deploy the Syndicated Feed Portlet on that page.

3.  Locate the page in the **Manage pages** portlet.

4.  Click **Edit Page Properties** for the page.

5.  Click **Advanced options**.

6.  Click **I want to set parameters**.

7.  Add the new parameter and value as follows:

    -   New parameter: `resourceaggregation.profile`
    -   New value: Enter the profile override for the page, for example `profiles/profile_full.json`.
8.  Click **Add**.

9.  Click **OK** to save the new parameter.

10. Click **OK** to save your changes to the page properties.


**Parent topic:**[Client side aggregation \(CSA\) rendering in the Syndicated Feed Portlet](../admin-system/ic_syndfeed_csr.md)

