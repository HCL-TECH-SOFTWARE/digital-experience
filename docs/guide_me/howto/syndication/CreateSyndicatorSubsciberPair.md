# How to create a syndicator-subscriber pair

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

In the Web Content Manager (WCM) feature of HCL Digital Experience (DX), content updates and metadata are distributed across your infrastructure using a dedicated syndication relationship. Establishing this connection ensures that your authoring environment can automatically push published changes to your delivery servers. This article describes how to create a syndicator-subscriber pair.

## Instructions

Initialize this connection by creating a shared credential vault slot on the subscriber server to store the administrative credentials for the syndicator, and then configure the subscription.

### Prerequisites for SSL connections

Before you establish a syndication pair, ensure that the syndicator and subscriber servers have exchanged signer certificates in their respective `NodeDefaultTrustStore` files.

Complete the following steps on both the syndicator and the subscriber servers:

1. Log in to the IBM Integrated Solutions Console (WAS admin console) as an administrator.  
2. Navigate to **Security > SSL certificate and key management > Key stores and certificates > `NodeDefaultTrustStore` > Signer certificates**.
3. Select **Retrieve from port**, and then enter the following:  
    - **Host:** The hostname of the target server (for example, on the syndicator, enter the subscriber server hostname).
    - **Port:** `443`  

        !!!note
            For on-premises environments, use the default HCL DX SSL port `10041`.

    - **SSL configuration for outbound connection:** `NodeDefaultSSLSettings`  
    - **Alias:** The hostname of the target server (for example, on the syndicator, enter the subscriber server hostname).

4. Select **Retrieve signer information**.
5. After the signer certificate is received correctly, select **OK**.
6. Select **Apply**.
7. Select **Save** at the top of the console messages.

### Create the vault slot

1. On the subscriber side, log in to HCL DX as an administrator.
2. Navigate to **Administration > Security > Credential Vault**.
3. Select **Add a vault slot**.
4. Under **Name**, enter `SyndicationSlot`.  
5. Under **Vault resource associated with vault slot**, select **New**, and then enter `SyndicationVaultResource`.  
6. Select the **Vault slot is shared** check box, and then enter the following details:
    - **Shared userid** (the syndicator admin user ID)
    - **Shared password**
    - **Confirm password**
7. Under **Description**, enter `SyndicationSharedSlot`.
8. Select **OK**.

### Create the syndicator-subscriber pair

1. Navigate to **Administration > Content Management > Subscribers**.  
2. Select **Subscribe Now**.  
3. Under **Syndicator URL**, enter your syndicator server URL. For example: `http://mysyndicator.example_hostname.com:<port>/wps/wcm`.  

    !!!note
        - If the syndicator is a Virtual Portal (VP) named `myVP`, the URL would be: `http://mysyndicator.example_hostname.com:<port>/wps/wcm/myVP`.  
        - If you use an SSL connection, use `https` as the protocol in the URL instead of `http`.  

4. Under **Syndicator Name**, enter `mySyndicator`.  
5. Under **Subscriber Name**, enter `mySubscriber`.  
6. In the **Credential Vault Slot** drop-down list, select `SyndicationSlot`.  

### Verify the connection

After the syndicator-subscriber connection is established, test the connection on the syndicator and subscriber servers.

1. Log in to HCL DX as an administrator.  
2. Navigate to **Administration > Content Management**.
3. Select **Syndicators** or **Subscribers**.
4. Select the **flash** icon on the right side.
5. Verify that a green information message appears, indicating that the connection works. If the connection fails, refer to [Verify the configuration settings](#verify-the-configuration-settings) and [Troubleshooting](#troubleshooting).

### Verify the configuration settings  

If you encounter errors while testing the connection, verify the configuration settings on both the syndicator and subscriber servers using the following steps:

1. Log in to HCL DX as an administrator for the syndicator and subscriber servers.  
2. Navigate to **Administration > Content Management**.
3. Select **Syndicators** or **Subscribers**.
4. Select the **pencil** icon on the right side.  
5. Compare your URLs against the following examples to ensure they are correct.

    - Sample subscriber URLs on the syndicator server:

        ```url
        https://subscriber_hostname:443/wps/wcm/connect?MOD=Subs
        ```

        ```url
        https://subscriber_hostname:10041/wps/wcm/connect?MOD=Subs
        ```  

    - Sample syndicator URLs on the subscriber server:

        ```url
        https://syndicator_hostname:443/wps/wcm/connect?MOD=Synd
        ```

        ```url
        https://syndicator_hostname:10041/wps/wcm/connect?MOD=Synd
        ```  

### Troubleshooting

If the syndicator-subscriber pair connection continues to fail, check the `SystemOut.log` on both servers to determine which error messages occur during a test connection for further troubleshooting. If more detailed traces are required, refer to [Collecting Data: Syndication for HCL Digital Experience v8.5 and higher](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0013616){target="_blank"}.

???+ info "Additional information"
    - [HCL Digital Experience - Setting up HCL Portal Syndication](https://www.youtube.com/watch?v=yUlddDkrY9w){target="_blank"}
    - [Syndication troubleshooting](../../../manage_content/wcm_delivery/syndication/wcm_syndication_troubleshooting.md){target="_blank"}
    - [Troubleshooting Syndication Issues](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0102792){target="_blank"}
