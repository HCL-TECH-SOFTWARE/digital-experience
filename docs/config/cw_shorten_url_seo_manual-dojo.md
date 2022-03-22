# Manual Step: Updating your themes to reference the correct Dojo context root

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for updating your themes to reference the correct Dojo context root.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Optional manual step: If your custom themes use Dojo, update your themes to reference the correct Dojo context root.

    The default Dojo context root in HCL Portal is /wps/portal\_dojo. After you run the modify-servlet-path and modify-servlet-path-portlets tasks, the Dojo context root is changed to include the new value in the WpsContextRoot parameter as the prefix. For instance, if the new WpsContextRoot value is myco, then the new Dojo context root becomes /myco/portal\_dojo. If your theme includes hardcoded references to "/wps/portal\_dojo", update those references to the new context root. If you migrated a custom theme, you might find that it has references to /portal\_dojo without the /wps prefix. Look for these references in both the WAR file and in the WebDAV storage for your theme.


