# Enabling basic authentication

Configure basic authentication for the HCL Connections portlets. Use basic authentication if you are not using single sign-on for authentication.

Configuring basic authentication allows the manual entry of user credentials in the personalize mode of the portlets. Basic authentication for the portlets is only supported if single sign-on is not already enabled between HCL Portal and HCL Connections. If single sign-on is enabled, the basic authentication credentials that are entered in the personalize mode of the portlets are ignored.

**Important:** Basic authentication is not intended for production use but for a test deployment or proof-of-concept deployments. Single sign-on is the only authentication configuration that is supported for production use.

**Note:**

-   The Activity Stream and Library portlets do not support basic authentication.

-   The Community Membership \(VMM\) Adapter does not support basic authentication. The steps to configure the adapter in the *Integrating community membership with Portal security* section and subsequent sections must not be completed until after single sign-on is configured.
-   Do not configure Directory Services if you are deploying portlets with basic authentication. However, if you change to an authentication model that uses single sign-on, configuring Directory Services is a mandatory prerequisite.

If you use basic authentication for the portlets, every user must type in their personal credentials manually in the personalize mode of the portlets or shared credentials can be supplied from the Credential Vault.

**Note:** If a user changes a valid user ID and password, the user must log out of Portal and log in again to refresh the credentials. If a user enters credential incorrectly, or updates an expired password, logging out and logging back in is not required.

1.  Set the authenticationMethod property to basicAuth in the file \\WEB-INF\\lcaccelerator\\properties\\lcaccelerator.properties in the deployed portlets war.

2.  Make sure that your changes are applied to all cluster members. Apply changes in the WAR file, redeploy the WAR, and synchronize the changes to all cluster members from the WebSphere® deployment manager.

3.  Edit the proxy-config.xml file that is at wp\_profile\\installedApps\\<cell\_name\>\\PA\_icWEFPtlts.ear\\snor.pf.portlets.war\\WEB-INF. Remove the following cookie settings from the policy definition for the HCL Connections server to prevent the outbound requests to the HCL Connections server from being authenticated with the LTPA token:

    ```
                <cookie>LTPA</cookie>
                <cookie>LTPA2</cookie>
                <cookie>LtpaToken</cookie>
                <cookie>LtpaToken2</cookie>
    ```

4.  If you change deployed applications, save the file, then restart the portlets application or the application server.


After you configure basic authentication, you can enable the portlets in one of the following ways:

-   Users can log in to portlets by using the Personalize mode.
-   The Portal administrator can configure the portlets by using the credential slot

To configure the portlets through a system slot:

1.  Click the **Administration menu** icon. Then, click **Access** \> **Credential Vault**.
2.  Click **Add a vault slot**.
3.  Choose a vault and vault segment from select drop-down.
4.  Choose a vault resource to associate with the system slot. If no vault resource is associated with the vault slot, create a vault resource.
5.  Enter a vault slot name. This name is seen in the configuration mode of the portlets.
6.  Check **Vault Slot is shared**.
7.  Enter a shared user ID and password to be stored in the system slot.
8.  \(Optional\) For Portal 8, the ADMIN\_SLOTS virtual resource requires access permissions. Assign ADMIN\_SLOTS "All Authenticated users" permissions. The ADMIN\_SLOTS can be found under the virtual resource in the Resources Permissions Portlet

**Note:** The settings on the personalize mode of the portlets overrides the settings in configuration mode. To enable the personalize mode in the portlets, the Portal administrator must do step 1 and enable basic authentication.


