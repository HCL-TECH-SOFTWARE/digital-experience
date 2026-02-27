# How to create a syndicator / subscriber pair

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

This document describes how to create a syndicator / subscriber pair.

## Instructions

On subscriber server:

### Step 1 - Create the vault slot

1. Navigate to `Administration > Security > Credential Vault`.
2. Click `Add a Vault Slot`.
3. Enter the Name: `SyndicationSlot`.  
4. Under Vault resource associated with vault slot, select  `New` and enter the name: `SyndicationVaultResource`.  
5. Select `Vault slot is shared` and enter the shared userid (syndicator admin userid) and shared password twice.
6. Under Description type in: `SyndicationSharedSlot`.
7. Then click ok.

### Step 2 - Create the syndicator / subscriber pair

 1. Navigate to `Administration > Content Management > Subscribers`.  
 2. Click the `Subscribe Now` button.  
 3. In the `Syndicator URL` section enter your syndicator server URL.  
     For example: `http://mysyndicator.example_hostname.com:<port>/wps/wcm`.  
 4. Specify the Syndicator Name: `mySyndicator`.  
 5. Specify the Subscriber Name: `mySubscriber`.  
 6. Select the credential vault slot `SyndicationSlot`.  

!!!note
    If the syndicator is a Virtual Portal (VP) named for example `myVP`, the URL would be: `http://mysyndicator.example_hostname.com:<port>/wps/wcm/myVP`.

???+ info "Additional information"
    More details can be found in the [HCL Digital Experience - Setting up HCL Portal Syndication](https://www.youtube.com/watch?v=yUlddDkrY9w){target="_blank"} video.
