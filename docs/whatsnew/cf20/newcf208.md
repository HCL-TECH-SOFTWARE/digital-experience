
# What's new in CF208

The following features and updates are available to customers installing HCL Digital Experience Container Update CF208 on supported platforms:

- Kubernetes deployment Pre-requisites checking 
- Kubernetes deployment HA Proxy option to configure Ingress 
- Web Content Manager Author options now include Tiny MCE
- Web Content Manager and Digital Asset Management
- Digital Asset Management Staging Obtain Subscribers List 
- Config Option to set absolute value Content Composer and DAM syndication
- Content Composer Move content items UI and error handling updates 
- WCM column sorting enhancement  
- New Configuration task for integration of Unica Campaign segments with DX Personalization Rules
- Experience API update
- Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy


## Kubernetes deployment Pre-requisites checking  

=== "Containers"                                  
    DX 9.5 Container Update CF208 adds deployment pre-requisites checking for Helm deployments to supported Kubernetes platforms. See the topic [Configure Prereqs Checker For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md) for more information

## Kubernetes deployment HA Proxy option to configure Ingress 

=== "Containers"                                                                                                    
    DX 9.5 Container Update CF208 adds an option to configure an ingress in front of HA Proxy.  See the [Configure Ingress For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) for more information.

## Web Content Manager Author options now include Tiny MCE

=== "Containers"
    Content Authors can now choose to use TinyMCE as the default editor for creating and editing WCM content. See the topic [Web Content Author Editor options](../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md), and [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-the-editor-used-for-in-place-editing) for more information. 


=== "On-Premises"
    Content Authors can now choose to use TinyMCE as the default editor for creating and editing WCM content. See the topic [Web Content Author Editor options](../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md), and [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-the-editor-used-for-in-place-editing) for more information.

## Web Content Manager

=== "Containers"
    Configuration updates set SVG to disabled by default. 

    Since SVG files can post a security concern, beginning with CF208, the uploading of SVG image files is disabled by default unless already customized. 

    !!!note
        If you still want to allow the uploading of SVG files to WCM, configure the following in WCM WCMConfigService service by using the WebSphere® Integrated Solutions Console:

        imageresourcecmpnt.allowedmimetypes = image/gif,image/png,image/jpeg,image/jpg,image/jpe,image/jfif,image/bmp,image/x-bmp,image/x-bitmap,image/x-xbitmap,image/x-win-bitmap,image/x-windows-bmp,image/ms-bmp,image/x-ms-bmp,application/bmp,application/x-bmp,application/x-win-bitmap,image/ico,image/svg+xml,image/tiff,image/tif,image/webp
    
        Note that you might have already added custom types. If that is the case, SVG image files are not disabled by default and no adjustment is necessary.

    See the Help Center topic [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md) for more information. 

=== "On-Premises"
    Configuration updates set SVG to disabled by default. 

    Since SVG files can post a security concern, beginning with CF208, the uploading of SVG image files is disabled by default unless already customized. 

    !!!note
        If you still want to allow the uploading of SVG files to WCM, configure the following in WCM WCMConfigService service by using the WebSphere® Integrated Solutions Console:

        imageresourcecmpnt.allowedmimetypes = image/gif,image/png,image/jpeg,image/jpg,image/jpe,image/jfif,image/bmp,image/x-bmp,image/x-bitmap,image/x-xbitmap,image/x-win-bitmap,image/x-windows-bmp,image/ms-bmp,image/x-ms-bmp,application/bmp,application/x-bmp,application/x-win-bitmap,image/ico,image/svg+xml,image/tiff,image/tif,image/webp
    
        Note that you might have already added custom types. If that is the case, SVG image files are not disabled by default and no adjustment is necessary.

    See the Help Center topic [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md) for more information.

## Digital Asset Management 

=== "Containers"
    Configuration updates set SVG to disabled by default. 

    See the Help Center topic [Manage Media Assets](../../manage_content/digital_assets/usage/managing_dam/manage_media_assets.md) for more information 

## Digital Asset Management Staging Obtain Subscribers List 

=== "Containers"                                                      
    A new command is available to display the details of all the registered DAM Staging subscribers. See the topic [Staging DAM to rendering environments](../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) for more information.

## Config Option to set absolute value Content Composer and DAM syndication

A new option can be configured to control syndication of staging documents in production operations. See the Help Center topics [Install Commands to Deploy](../../deployment/install/container/helm_deployment/helm_install_commands.md) for more information.

## Content Composer Move content items UI and error handling updates 

=== "Containers"
    See the topics Content Composer Move content items and [Content authoring actions in dashboard view](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/index.md) for more information.

## WCM column sorting enhancement  

=== "Containers"
    A new option to set the sort order of the last modified date column from the WCM Library Explorer to descending in addition to ascending default order.


===  "On-Premises"
    A new option to set the sort order of the last modified date column from the WCM Library Explorer to descending in addition to ascending default order. 


##  New Configuration task for integration of Unica Campaign segments with DX Personalization Rules

=== "Containers"
    See the topic [Sample for leveraging Unica segments in PZN Rules](../../manage_content/pzn/pzn_unica_integration/sample_code_method.md) for more information.     


===  "On-Premises"
    See the topic [Sample for leveraging Unica segments in PZN Rules](../../manage_content/pzn/pzn_unica_integration/sample_code_method.md) for more information. 


## Experience API update  

The Content Controller PUT /webcontent/contents/{content_id} endpoint has been updated to accept new optional parameters; "parent" and "library". This enables moving content items from one location to another. See the [HCL Experience API on HCL Software Github](https://github.com/HCL-TECH-SOFTWARE/experience-api-documentation) for more information. 

## New option to configure a local HCL Flexnet Entitlement server 

=== "Containers"    
    Customers with HCL Digital Experience Cloud Native 9.5 entitlements deploying to supported Kubernetes environments can optionally install a local Flexnet Entitlement server. See the topic [Configuring a local HCL Flexnet entitlement server](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_local_flexnet_entitlement_server.md) for more information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCL Software Academy

The HCL Software Academy offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://academy.hcltechsw.com/#HCLDXLearningJourneys) section of the HCL Software Academy and [What’s New for Digital Experience](https://academy.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
