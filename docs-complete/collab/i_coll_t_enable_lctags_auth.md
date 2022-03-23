# Configure authentication 

Portal requests data from the HCL Connections server through the HCL Connections search API. By default, access to public data is not secured. In case security is enabled for that application, authentication is required. You can use on of the following authentication methods: basic authentication and LTPA forwarding.

This procedure helps you set up authentication by using a shared slot in the portal credential vault. You need an HCL Connections user ID to configure the credential vault. The user ID does not need to belong to a real user. It can be an ID that is only used for integration. This user ID needs to be able to authenticate to the HCL Connections server. No other access rights are required.

Configure authentication for either basic authentication or LTPA forwarding.

1.  Option 1: Basic authentication
2.  If basic authentication is used, specify the credentials for the user ID in the portal credential vault.

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Credential Vault**.

    2.  Add a vault slot for the following name: com.ibm.wps.cp.tagging.federation.credentialSlot.search.basic\_auth

    3.  Select a shared vault slot, and enter the user ID and password of the HCL Connections user.

    4.  Specify an existing resource or specify a new one.

3.  Option 2: LTPA forwarding
4.  If LTPA forwarding is used, specify the full distinguished name \(DN\) of a user ID in the portal credential vault.

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Credential Vault**.

    2.  Add a vault slot for the following name: com.ibm.wps.cp.tagging.federation.credentialSlot.search.ltpa

    3.  Select a shared vault slot, and enter the DN of the HCL Connections user ID.

    4.  Enter an arbitrary password. The password is not necessary to create the LTPA token, but the credential vault portlet requires a password for a vault slot.

    5.  Specify an existing resource or specify a new one.

5.  Restart the HCL Portal server.


**Parent topic:**[Integrating HCL Connections tags ](../collab/i_coll_t_enable_lctags.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents ](../admin-system/stopstart.md)

