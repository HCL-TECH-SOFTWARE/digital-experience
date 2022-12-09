
# What's new in CF208

The following features and updates are available to customers installing HCL Digital Experience Container Update CF208 on supported platforms:


## Kubernetes deployment Pre-requisites checking  

=== "Containers"                                  
    DX 9.5 Container Update CF208 adds deployment pre-requisites checking for Helm deployments to supported Kubernetes platforms. See the Help center topic: Configure Prereqs Checker For DX Deployment for more information

## Kubernetes deployment HA Proxy option to configure Ingress 

=== "Containers"                                                                                                    
    DX 9.5 Container Update CF208 adds an option to configure an ingress in front of HA Proxy.  See the Help Center topic: Configure Ingress For DX Deployment for more information.

## Web Content Manager Author options now include Tiny MCE

Content Authors can now choose to use TinyMCE as the default editor for creating and editing WCM content. See the Enhanced Editor option from the Web Content Authoring options Help Center topic for more information. 

## Web Content Manager and Digital Asset Management 

=== "Containers"
    configuration updates set SVG to disabled by default. are See the Help Center topic: Web content authoring options and DAM Limitations statements for more information. 

## Digital Asset Management Staging Obtain Subscribers List 

=== "Containers"                                                      
    A new command is available to display the details of all the registered DAM Staging subscribers. See the Help Center topic: Staging DAM to rendering environments for more information.

## Config Option to set absolute value Content Composer and DAM syndication

A new option can be configured to control syndication of staging documents in production operations. See the Help Center topics: [] for more information. (Obtain the Help Center link (s) from Hariharan or Thomas).

## Content Composer Move content items UI and error handling updates 

=== "Containers"
    See the Help Center topics Content Composer Move content items and Content authoring actions in dashboard view for more information.

## WCM column sorting enhancement  

A new option to set the sort order of the last modified date column from the WCM Library Explorer to descending in addition to ascending default order 

•	New Configuration task for integration of Unica Campaign segments with DX Personalization Rules. See the Help Center topic:  Sample for leveraging Unica segments in PZN Rules for more information. 

## Experience API update             
The Content Controller PUT /webcontent/contents/{content_id} endpoint has been updated to accept new optional parameters; "parent" and "library". This enables moving content items from one location to another. See the HCL Experience API on HCL Software Github 

## New option to configure a local HCL Flexnet Entitlement server 

=== "Containers"    
    Customers with HCL Digital Experience Cloud Native 9.5 entitlements deploying to supported Kubernetes environments can optionally install a local Flexnet Entitlement server. See the Help Center topic Configuring a local HCL Flexnet entitlement server 

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy

The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the HCL Digital Experience section of the HCL Software Academy and What’s New for Digital Experience section for more information.
