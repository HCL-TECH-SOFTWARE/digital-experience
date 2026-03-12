# How to create a syndicator-subscriber pair

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

In the Web Content Manager (WCM) feature of HCL Digital Experience (DX), content updates and metadata are distributed across your infrastructure using a dedicated syndication relationship. Establishing this connection ensures that your authoring environment can automatically push published changes to your delivery servers. This article describes how to create a syndicator-subscriber pair.

## Instructions

Before establishing the syndication pair, authorize the subscriber server to securely communicate with the syndicator. Initialize this connection by creating a shared credential vault slot on the subscriber server to store the administrative credentials for the syndicator, then configure the subscription.

### Prerequisites for SSL connections

When using an SSL-connection for syndication, please first ensure that the syndicator-server has added the signer certificate from the subscriber-server into it's own NodeDefaultTrustStore and that the subscriber-server also has added the signer certificate from the syndicator-server to it's Node DefaultTrustStore as well, before trying to establish the syndication pair! This can be done as following:  

**On Syndicator side:**  

1. Login into the IBM Integrated Solutions Console (WAS admin console) as WebSphere Application Server administrator  
2. Navigate to **Security > SSL certificate and key management > Key stores and certificates > NodeDefaultTrustStore > Signer certificates**  
3. Click to the button **Retrieve from port**  
4. Enter the following information:  
    **Host:** `<Subscriber server hostname>`  
    **Port:** `443`  

    !!!note
        For on-premise environments you may want to use then port 10041 (default HCL DX SSL port)

    **SSL configuration for outbound connection:** `NodeDefaultSSLSettings`  
    **Alias:** `<Hostname of the subscriber server>`  

5. Click to the button **Retrieve signer information**  

6. After the signer certificate was received correctly, click tot he **OK** button and save the changes to the master configuration.  

**On Subscriber side:**  

1. Login into the IBM Integrated Solutions Console (WAS admin console) as WebSphere Application Server administrator  
2. Navigate to **Security > SSL certificate and key management > Key stores and certificates > NodeDefaultTrustStore > Signer certificates**  
3. Click to the button **Retrieve from port**  
4. Enter the following information:  
    **Host:** `<Syndicator server hostname>`  
    **Port:** `443`  

    !!!note
        For on-premise environments you may want to use then port 10041 (default HCL DX SSL port)

    **SSL configuration for outbound connection:** `NodeDefaultSSLSettings`  
    **Alias:** `<Hostname of the syndicator server>`  

5. Click to the button **Retrieve signer information**  

6. After the signer certificate was received correctly, click tot he **OK** button and save the changes to the master configuration.  

### Create the vault slot

1. On the subscriber side, login to HCL DX as an administrator.
2. Navigate to **Administration > Security > Credential Vault**.
3. Select **Add a vault slot**.
4. Under **Name**, enter `SyndicationSlot`.  
5. Under **Vault resource associated with vault slot**, select **New** and enter `SyndicationVaultResource`.  
6. Tick the **Vault slot is shared** checkbox then enter the **Shared userid** (the syndicator admin userid) and **Shared password** twice.
7. Under **Description**, enter `SyndicationSharedSlot`.
8. Select **OK**.

### Create the syndicator-subscriber pair

 1. Navigate to **Administration > Content Management > Subscribers**.  
 2. Select **Subscribe Now**.  
 3. Under **Syndicator URL**, enter your syndicator server URL. For example, `http://mysyndicator.example_hostname.com:<port>/wps/wcm`.  

    !!!note
        If the syndicator is a Virtual Portal (VP) named `myVP`, the URL would be: `http://mysyndicator.example_hostname.com:<port>/wps/wcm/myVP`.  
        If an SSL connection will be used, please use `https` as protocol in the URL instead of `http`.  

 4. Under **Syndicator Name**, enter `mySyndicator`.  
 5. Under **Subscriber Name**, enter `mySubscriber`.  
 6. In the **Credential Vault Slot** dropdown, select `SyndicationSlot`.  

### Verify the connection

As soon as the syndicator/subscriber connection-pair has been successfully established, click to the **Test Connection** button on the subscriber side to verify the connection. Do the same step on the syndicator side.  

**Steps to verify the connection:**  

1. Login into HCL DX Portal as portal administrator.  
2. Navigate to **Administration > Content Management > Syndicators or Subscribers**.  
3. Click to the **flash** icon on the right side  
4. Check, if a green information message appears, indicating that the connection works.  
    If the connection fails, please check the **Verify the connection settings** section and/or the troubleshooting documents mentioned in the **Additional information** section.  

### Verify the configuration settings  

If any errors occur with the Test Connection, please verify the configuration settings on both sides (Syndicator and Subscriber side). This can be done as following:  

1. Login into HCL DX Portal as portal administrator on both sides (Syndicator and Subscriber server side).  
2. Navigate to **Administration > Content Management > Syndicators or Subscribers**.  
3. Click to the **pencil** icon on the right side.  
4. Please check, if the Syndicator and subscriber URL is set correctly. For example:  

    **When using SSL:**  
    On Syndicator side a sample Subscriber URL:  
    `https://subscriber_hostname:443/wps/wcm/connect?MOD=Subs`  
    or:  
    `https://subscriber_hostname:10041/wps/wcm/connect?MOD=Subs`  

    On Subscriber side a sample Syndicator URL:  
    `https://syndicator_hostname:443/wps/wcm/connect?MOD=Synd`  
    or:  
    `https://syndicator_hostname:10041/wps/wcm/connect?MOD=Synd`  

### Troubleshooting

If the syndicator/subscriber pair connection still fails, please check the SystemOut.log on Syndicator and Subscriber side to find out, which error messages occur during a test connection. Based on the error-message further troubleshooting can be done. If more detailed traces are required, please review [Collecting DAta: Syndication for HCL Digital Experience v8.5 and higher](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0013616){target="_blank"}

???+ info "Additional information"
    - [HCL Digital Experience - Setting up HCL Portal Syndication](https://www.youtube.com/watch?v=yUlddDkrY9w){target="_blank"}.  
    - [Syndication troubleshooting](../../../manage_content/wcm_delivery/syndication/wcm_syndication_troubleshooting.md){target="_blank"}.  
    - [Troubleshooting Syndication Issues](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0102792){target="_blank"}.  
    - [Collecting Data: Syndication for HCL Digital Experience v8.5 and higher](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0013616){target="_blank"}.  
