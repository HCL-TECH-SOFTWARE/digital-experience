# Configuration Wizard instructions: Modify site URLs for search engine optimization

Use the Configuration Wizard to change or remove /wps/portal \(context root and default home values\) to create shorter, human-readable URLs. Select an option to remove navigational state information from site URLs. This procedure is intended only as a reference.

You can use the Configuration Wizard to shorten site URLs when you set up a stand-alone server or when you set up a cluster.

# Configuration Wizard instructions

After you answer questions and provide information about your environment, the wizard generates a custom configuration procedure. The following procedure represents all possible configuration steps. The instructions that you generate might include or exclude specific steps based on your wizard selections.

If you are using syndication, ensure that all of the syndication target servers are on Combined Cumulative Fix 08 or later before you modify URLs for search engine optimization. Enabling SEO options on servers that are not on Combined Cumulative Fix 08 or later could disrupt deployment.

1.  Validate the context root value selected.

    -   **Condition**

        Select **Yes** to modify your context root and connect to portal server to validate settings.

    -   **ConfigEngine task**

        validate-context-root

2.  Stop the portal server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

3.  Modify the servlet paths for all applications and portlets.

    -   **Condition**

        Select **Yes** to modify your context root.

    -   **ConfigEngine task**

        modify-servlet-path

        modify-servlet-path-portlets

4.  Add navigational state information to your friendly URL.

    -   **Condition**

        Select **Yes** to contain navigational state information.

    -   **ConfigEngine task**

        configure-nav-stateinfo-urls

5.  Remove navigational state information from your friendly URL.

    -   **Condition**

        Select **No** to contain navigational state information.

    -   **ConfigEngine task**

        configure-nav-stateless-urls

6.  Manual step: Configure your external web server.

    -   **Condition**

        Select **Yes** that you use an external web server.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Configure your external web server](cw_shorten_url_seo_manual-web-server.md#) for instructions.

7.  Manual step: Change the JSP components in the Web Resources v70 Library.

    -   **Condition**

        Select **Yes** that you use an external web server.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Change the JSP components in the Web Resources v70 Library](cw_shorten_url_seo_manual-jsp.md#) for instructions.

8.  Optional manual step: If your custom themes use Dojo, update your themes to reference the correct Dojo context root.

    -   **Condition**

        Select **Yes** that you use HCL Web Content Manager.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Updating your themes to reference the correct Dojo context root](cw_shorten_url_seo_manual-dojo.md#) for instructions.

9.  Manual step: Refresh your search collection and regather documents.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Refreshing the search collection](cw_shorten_url_seo_manual-search.md#) for instructions.

10. Manual step: Resynchronize the nodes and restart the cluster.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Resynchronizing the nodes and restarting the cluster](cw_shorten_url_seo_manual-resycn-cluster.md#) for instructions.

11. Optional manual step: Update syndicator and subscriber servers that reference your modified site URL. If you do not use syndication, skip this step.

    -   **Condition**

        Click **Modify Site URLs for Search**Engine Optimization from the Set Up a Cluster page.

        None

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Updating syndicator and subsubscriber servers that reference your URL](cw_shorten_url_seo_manual-synd.md#) for instructions.

12. Optional manual step: Disable friendly URL redirects.

    -   **Condition**

        Select to remove navigational state information from your site URL.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Disabling friendly URL redirects](cw_shorten_url_seo_manual-disable-redirect.md#) for instructions.

13. Optional manual step: Update the personalization publishing server with the new site URL.

    -   **Condition**

        Select that you use HCL Web Content Manager.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Updating the personalization publishing server with the new site URL](cw_shorten_url_seo_manual-pzn-publish.md#) for instructions.

14. Optional manual step: Redeploy the HCL Web Application Bridge to a virtual host.

    -   **Condition**

        Select **Yes** to modify your context root.

    -   **ConfigEngine task**

        None

    Go to [Manual Step: Redeploying the IBM Web Application Bridge to a virtual host.](cw_shorten_url_seo_manual-wab.md) for instructions.


**Related information**  


[Manual Step: Redeploying the HCL Web Application Bridge to a virtual host.](cw_shorten_url_seo_manual-wab.md#)

