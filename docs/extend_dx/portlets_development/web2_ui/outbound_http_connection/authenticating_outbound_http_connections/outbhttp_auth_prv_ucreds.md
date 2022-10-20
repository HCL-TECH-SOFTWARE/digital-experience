# Providing user credentials for authenticated connections

Several authentication handlers require that user credentials are presented in the authentication process. For example, the HTTP basic authentication handler requires such user credentials. Before the outbound connection can be used, these user credentials are set in the Credential Vault.

For details about setting and storing credentials in the Credential vault, read the information about [Credential vault](../../../../../deployment/manage/security/sec_auth_consideration/plan_credvault.md).

The outbound HTTP connection configuration references the credentials by the slot name.

The following example procedure creates a simple credential with user ID and password in the Credential Vault:

1.  Access HCL Digital Experience as a portal administrator.

2.  Click the **Administration menu** icon. Then, click **Access** \> **Credential Vault**.

    The Credential Vault management portlet is shown.

3.  Select **Add a Vault slot**.

    The window for creating a vault slot is shown.

4.  Choose a Vault slot name, and select the slot and vault segment to where it belongs.

5.  Set the Vault slot as **Shared**, and set the user ID and password for the remote user.


You created a credential with user ID and password in the Credential Vault.


???+ info "Related information"
    - [Credential Vault](../../../../../deployment/manage/security/sec_auth_consideration/plan_credvault.md)
    - [Establishing SSO connections through LTPA token](outbhttp_auth_est_sso_ltpa_tok.md)

