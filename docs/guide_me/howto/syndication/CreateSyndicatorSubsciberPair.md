# How to create a syndicator-subscriber pair

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

In the Web Content Manager (WCM) feature of HCL Digital Experience (DX), content updates and metadata are distributed across your infrastructure using a dedicated syndication relationship. Establishing this connection ensures that your authoring environment can automatically push published changes to your delivery servers. This article describes how to create a syndicator-subscriber pair.

## Instructions

Before establishing the syndication pair, authorize the subscriber server to securely communicate with the syndicator. Initialize this connection by creating a shared credential vault slot on the subscriber server to store the administrative credentials for the syndicator, then configure the subscription.

### Create the vault slot

1. Log in to HCL DX as an administrator.
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

 4. Under **Syndicator Name**, enter `mySyndicator`.  
 5. Under **Subscriber Name**, enter `mySubscriber`.  
 6. In the **Credential Vault Slot** dropdown, select `SyndicationSlot`.  

???+ info "Additional information"
    - [HCL Digital Experience - Setting up HCL Portal Syndication](https://www.youtube.com/watch?v=yUlddDkrY9w){target="_blank"}.
