# Enabling client side rendering in the Syndicated Feed Portlet

To enable client side rendering in the Syndicated Feed Portlet, create a useClientSideRendering configuration parameter and set its value to `true`.

To enable client side rendering for the Syndicated Feed Portlet:

1.  From the WebSphere® Integrated Solutions Console, click **Portlets** under **Portlet Management**.

2.  Search for the Syndicated Feed portlet entry.

3.  Click the **Configure portlet** \(wrench\) icon corresponding to the Syndicated Feed Portlet.

4.  Add the `useClientSideRendering` configuration parameter to the existing list of configuration parameters for the Syndicated Feed Portlet. Set the value of this configuration parameter to `true`.

    Following are the steps to add a configuration parameter for a portlet:

    1.  Enter the parameter name in the **New Preference** text field.

    2.  Enter the value of the parameter in the **New value** text field.

    3.  Click **Add**.

    **Note:** You do not need to restart the portal server after you specify the configuration parameters.



