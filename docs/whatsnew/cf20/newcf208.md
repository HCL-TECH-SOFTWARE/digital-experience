
# What's new in CF208

The following features and updates are available to customers installing HCL Digital Experience Container Update CF208 on supported platforms:

- Kubernetes deployment Pre-requisites checking 
- Web Content Manager Author options now include Tiny MCE
- Web Content Manager set SVG to disabled by default
- Digital Asset Management set SVG to disabled by default
- Digital Asset Management Staging Obtain Subscribers List 
- Config Option to set absolute value Content Composer and DAM syndication
- Move or duplicate content items in Content Composer 
- WCM column sorting enhancement  
- New Configuration task for integration of Unica Campaign segments with DX Personalization Rules
- Experience API update
- New option to configure a local HCL Flexnet Entitlement server
- DAM Keyword enhancements
- Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U
<!---  Kubernetes deployment HA Proxy option to configure Ingress  -->

## Kubernetes deployment Pre-requisites checking  

=== "Containers"                                  
    DX 9.5 Container Update CF208 adds deployment pre-requisites checking for Helm deployments to supported Kubernetes platforms. See the topic [Configure Prereqs Checker For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-core-prereqs-checker.md) for more information.

<!--
## Kubernetes deployment HA Proxy option to configure Ingress 

=== "Containers"                                                                                                    
    DX 9.5 Container Update CF208 adds an option to configure an ingress in front of HA Proxy.  See the [Configure Ingress For DX Deployment](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) for more information. -->

## Web Content Manager Author options now include Tiny MCE

=== "Containers"
    Content Authors can now choose to use TinyMCE as the default editor for creating and editing WCM content. See the topic [Web Content Author Editor options](../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md), and [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-the-editor-used-for-in-place-editing) for more information. 


=== "On-Premises"
    Content Authors can now choose to use TinyMCE as the default editor for creating and editing WCM content. See the topic [Web Content Author Editor options](../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md), and [Web content authoring options](../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-the-editor-used-for-in-place-editing) for more information.

## Web Content Manager set SVG to disabled by default

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

## Digital Asset Management set SVG to disabled by default

=== "Containers"
    Configuration updates set SVG to disabled by default. 

    See the Help Center topic [Manage Media Assets](../../manage_content/digital_assets/usage/managing_dam/manage_media_assets.md) for more information 

## Digital Asset Management Staging Obtain Subscribers List 

=== "Containers"                                                      
    A new command is available to display the details of all the registered DAM Staging subscribers. See the topic [Staging DAM to rendering environments](../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) for more information.

## Config Option to set absolute value Content Composer and DAM syndication

=== "Containers"
    When syndicating DAM assets and Content Composer items that point to DAM assets, the target URLs need to be updated to point to the new server. A new option can be configured to control syndication of staging documents in production operations so that references will point to the appropriate server location. See the topic [(Optional) Override Content Composer and DAM URL](../../deployment/install/container/helm_deployment/helm_install_commands.md#optional-override-content-composer-and-dam-url) for more information.


## Move or duplicate content items in Content Composer 

=== "Containers"
    Content items can now be moved or duplicated through Content Composer. See the topic [authoring actions in dashboard view](../../manage_content/wcm_authoring/content_composer/usage/author_and_manage_content_items/author_content_items.md#create-new-content-with-default-keywords) for more information.


## WCM column sorting enhancement  

=== "Containers"
    A new option to set the sort order of the last modified date column from the WCM Library Explorer to descending in addition to ascending default order.


===  "On-Premises"
    A new option to set the sort order of the last modified date column from the WCM Library Explorer to descending in addition to ascending default order. 


##  New Configuration task for integration of Unica Campaign segments with DX Personalization Rules

=== "Containers"
    See the topic [Out-of-box application object for shipping Unica with PZN](../../manage_content/pzn/pzn_unica_integration/out_of_box_method.md) for more information.     


===  "On-Premises"
    See the topic [Out-of-box application object for shipping Unica with PZN](../../manage_content/pzn/pzn_unica_integration/out_of_box_method.md) for more information. 


## Experience API update  

=== "Containers"
    The Content Controller PUT /webcontent/contents/{content_id} endpoint has been updated to accept new optional parameters; "parent" and "library". This enables moving content items from one location to another. See the [HCL Experience API on HCL Software Github](https://github.com/HCL-TECH-SOFTWARE/experience-api-documentation) for more information. 

## New option to configure a local HCL Flexnet Entitlement server 

=== "Containers"    
    Customers with HCL Digital Experience Cloud Native 9.5 entitlements deploying to supported Kubernetes environments can optionally install a local Flexnet Entitlement server. See the topic [Configuring a local HCL Flexnet entitlement server](../../get_started/download/software_licensing_portal/configure_entitlement_checks/configuring_local_flexnet_entitlement_server.md) for more information.

## DAM Keyword enhancements

=== "Containers" 
    Added new sections "Remove All Keywords tagged in a media asset" and "Error validation on adding duplicate keywords". See the topic [DAM Keyword enhancements](../../manage_content/digital_assets/usage/managing_dam/modify_dam/dam_keyword_enhancement.md) for more information.

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/#HCLDXLearningJourneys) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
