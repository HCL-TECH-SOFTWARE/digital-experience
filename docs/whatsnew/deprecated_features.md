# Deprecated features

Deprecation means that the features are supported at this time but can be removed in an upcoming CF. It is recommended that deprecated items be removed as soon as possible as they can cause unpredictable behavior. 

Links to more information on the replacement for those items listed for deprecation will be posted as they become available to provide help as you move away from these features.

## Recently Deprecated Features

|Category|Deprecated|Recommended Action|Effective Date|
|--------|----------|------------------|--------------|
|HCL DX Software Version|HCL Digital Experience Version 8.5 and 8 solutions|On June 30, 2023 HCL announces End of Support dates for HCL DX product release versions 8.5 and 9, effective on June 30, 2025. Customers should upgrade to HCL DX release version 9.5, by following the [upgrade steps in the Help Center](../deployment/install/traditional/install_upgrade_plan_supported_paths.md). For more information, please refer to the [HCL Software Lifecycle site](https://www.hcltechsw.com/resources/product-release/product-lifecycle-table?productFamily=digital%20experience), Digital Experience category.|June 30, 2025|
|Manage Content|Design Studio|The Design Studio Beta component has been removed. Future Digital Experience 9.5 releases will incorporate feedback on the component features received during the Beta evaluation period.|March 2023|
|Manage Content |Textbox.io |The Textbox.io component in the HCL Digital Experience software is being deprecated and will End of Support (EOS) on January 31, 2024. From CF208 onwards, the TinyMCE editor can be used as the embedded Rich text editor. For more information, see [Web Content Author Editor options](../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md) and [Web content authoring options](../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-the-editor-used-for-in-place-editing).| January 2023|
|Developing|DAM API|Effective June 2022, the following DAM API will be deprecated.<br>- PUT /plugins/{plugin_id}<br>- PATCH /plugins/{plugin_id}<br>- GET /plugins/{plugin_id}<br>- DELETE /plugins/{plugin_id}<br>- POST /plugins<br>- GET /plugins<br>For more information, refer to the latest [HCL Experience API](https://github.com/HCL-TECH-SOFTWARE/experience-api-documentation) Github repository.|June 2022|
|Third-party Document Conversion Services|Deprecation of Document Conversion Services provided by Oracle|Document Conversion Services components in HCL Digital Experience software will be updated and replaced in the future HCL DX Container Update release in 2022. HCL Digital Experience will remove the third-party component, which is supplied by Oracle, that provides these capabilities and replace them with HCL supported functions. After that point, HCL Digital Experience v8.5, v9, and v9.5 Container Update and CF releases will include the newer HCL supported component. Refer to the following HCL Digital Experience support article: [Replacement of Document Conversion Services component in HCL Digital Experience software for additional information](https://support.hcltechsw.com/csm?id=kb_article&amp;sysparm_article=KB0096908).|August 20, 2022|
|Deploying|Operator-based deployment|Beginning with HCL Digital Experience 9.5 Container Update CF200, HCL has discontinued releasing the HCL Digital Experience (DX) Operator-based deployments and will provide support only for Helm-based deployments. There will be no further updates or code fixes provided for the Operator-based deployments. For more information, see [Helm-based deployment](https://opensource.hcltechsw.com/digital-experience/cf205/platform/kubernetes/overview/).|December 2021|
|Integrating |Sametime Integration |Integration with Sametime will be deprecated. The supported Sametime version 9.0 already reached EOS. |November 2021|
|Integrating |Add to Sametime List |Effective November 2021, integration with Sametime will be deprecated. The supported Sametime version 9.0 already reached EOS. |November 2021|
|Online Help |Sametime Web 2.0 Contact List |Effective November 2021, integration with Sametime will be deprecated. The supported Sametime version 9.0 already reached EOS.  |November 2021|
|Developing |Microsoft Exchange 2010 Calendar |Effective November 2021, integration with Microsoft Exchange 2010 will be deprecated. Exchange 2010 is out of support for Microsoft. |November 2021|
|Developing |Microsoft Exchange 2010 Mail |Effective November 2021, integration with Microsoft Exchange 2010 will be deprecated. Exchange 2010 is out of support for Microsoft. |November 2021|
|Online Help |Coach |Effective November 2021, Coach portlet will be deprecated. IBM no longer supports WebSphere Lombardi. |November 2021|
|Online Help |Dynamic Coach |Effective November 2021, Dynamic Coach portlet will be deprecated. IBM no longer supports WebSphere Lombardi. |November 2021|
|Configuring |Federated Documents Picker |Effective November 2021, Federated Documents Picker feature will be deprecated. HCL Digital Asset Management may be use in replacement for this feature. |November 2021|
|Online Help |Frequent Users |Effective November 2021, Frequent Users portlet will be deprecated. This is an obsolete portlet and no replacement is needed. |November 2021|
|Setting up a website |Syndicated Feed Portlet |Effective November 2021, Syndicated Feed portlet will be deprecated. |November 2021|
|Integrating |TPIR Configuration Viewer |Effective November 2021, TPIR Configuration Viewer will be deprecated. IBM no longer supports WebSphere Lombardi. |November 2021|
|Developing |UX Screen Flow Manager - Dialog Stack Portlet |Effective November 2021, Dialog Stack portlet will be deprecated. The feature was already removed on the later version of Portal. |November 2021|
|Developing |UX Screen Flow Manager - Dialog State Display Portlet |Effective November 2021, Dialog State Display portlet will be deprecated. The feature was already removed on the later version of Portal. |November 2021|
|Setting up a website |Welcome to WebSphere Portal |Effective November 2021, Welcome portlet will be deprecated. This is an obsolete portlet and no replacement is needed. |November 2021|
|Integrating |Watson Content Hub support |Effective November 2021, integration with Watson Content Hub will be deprecated. HCL Digital Asset Management may be use in replacement for this feature. |November 2021|
|Integrating |Web Application Bridge - Microsoft SharePoint |Effective November 2021, integration with Microsoft SharePoint will be deprecated. |November 2021|
|Integrating |SAP NetWeaver |Effective November 2021, integration with SAP NetWeaver will be deprecated. NetWeaver is no longer supported by SAP. |November 2021|
|Integrating |Domino |Effective November 2021, integration with Domino will be deprecated. The iFrame integration approach is already obsolete and not used. |November 2021|
|Integrating |iNotes portlet |Effective November 2021, integration with Domino will be deprecated. The iFrame integration approach is already obsolete and not used. |November 2021|
|Migrating |IBM® JSF Bridge |In WAS 9.0.5.2 and 8.5.5.17, IBM removed the JSF Bridge from WAS. To address this, an updated JSF Portlet Bridge is included in DX CF18 release. Customers installing HCL DX CF18, and using an IBM WebSphere Application Server Network Deployment version later than 8.5.5.17 or 9.0.5.2 should utilize the new JSF Portlet Bridge. The HCL JSF Portlet Bridge is built using the same class names as the IBM JSF Portlet Bridge provided in WAS 9.0.0.7 thru 9.0.5.1 and WAS 8.5.5.16 respectively. User applications should be able to continue to function without any modification.|December 2020|

## Deprecated Dependent Products

These are the lists of Dependent Products that are already Out of Support.

### Linux OS family

|OS|OS Supported Versions|Hardware|Bitness|Product Minimum|
|-------|-------|-------|-------|-------|
|SUSE Linux Enterprise Server (SLES) 11	|Base and later maintenance	releases|x86-64 IBM z Systems	|64-Exploit, 64-Tolerate	|8.5	|
|Ubuntu 16.04 LTS	|Base and later maintenance	releases|Power System – Little Endian	|64-Exploit, 64-Tolerate	|8.5	|
|Ubuntu 16.04 LTS	|Base and later maintenance	releases|x86-64	|64-Exploit, 64-Tolerate	|8.5	|  

### Windows OS family

|OS|Supported Versions|Hardware|Bitness|Product Minimum|
|---------|---------|---------|---------|---------|
|Windows 8.1 Enterprise*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows 8.1 Professional*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows 8.1 Standard*|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 R2 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2012 R2 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Datacenter Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Essentials Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|
|Windows Server 2016 Standard Edition|Base and later maintenance releases|x86-64|64-Exploit, 64-Tolerate|8.5|

*Support for developer platform only.  

### Hypervisor - AIX Summary
|Hypervisor|Product minimum|Deployment Units|Supported Guest Operating System|
|---------|-----|-----|----------------------------------|
|Application Workload Partition (WPAR) AIX 7.1|8.5|Server|	-	AIX 7.1 POWER System \- Big Endian<br>-	AIX 7.2 POWER System \- Big Endian|

!!! important "AIX support"

    Portal Express offering does not support AIX.  

### Hypervisor - Linux Summary

|Hypervisor|Product Minimum|Deployment Units|Supported Guest Operating System|
|---------|-----|-----|----------------------------------|
|KVM in SUSE Linux Enterprise Server (SLES) 11 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 5.0|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 5.5 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 6.0 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|VMware ESXi 6.1 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- 	Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.1 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.2 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|
|z/VM 6.3 and later|8.5|Server|All supported operating systems:<br>- SUSE Linux Enterprise Server (SLES) 11 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 and 8 x86-64<br>- SUSE Linux Enterprise Server (SLES) 12 IBM z Systems<br>- Red Hat Enterprise Linux (RHEL) Server 7 IBM z Systems<br>- Ubuntu 16.04 LTS x86-64<br>- Ubuntu 16.04 LTS POWER System - Little Endian<br>- Red Hat Enterprise Linux (RHEL) Server 7 POWER System - Little Endian|  

### Hypervisor - Windows Summary  
|Hypervisor|Product Minimum|Deployment Units|Supported Guest Operating System|
|----------|-----|-----|----------------------------------------|
|KVM in SUSE Linux Enterprise Server (SLES) 11 and later|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 5.0|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 5.5|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 6.0|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|
|VMware ESXi 6.1|8.5|Server|All supported operating systems:<br/>- Windows Server 2012 Datacenter Edition x86-64<br/>- Windows Server 2012 Standard Edition x86-64<br/>- Windows 8.1 Enterprise x86-64<br/>- Windows 8.1 Professional x86-64<br/>- Windows 8.1 Standard x86-64<br/>- Windows Server 2012 R2 Datacenter Edition x86-64<br/>- Windows Server 2012 R2 Standard Edition x86-64<br/>- Windows 10 Pro x86-64<br/>- Windows 10 Enterprise x86-64<br/>- Windows Server 2016 Datacenter Edition x86-64<br/>- Windows Server 2016 Standard Edition x86-64<br/>- Windows Server 2016 Essentials Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Datacenter Edition x86-64<br/>- Windows Server 2019 Essentials Edition x86-64|  

### Java SDK
HCL Digital Experience 9.5 requires JDK 7.0 or later for installation. 

|Prerequisite|Prerequisite minimum, and Supported versions|Product Minimum|
|----------|----------|----------|
|IBM Runtime Environment, Java Technology Edition|7.0 and later maintenance releases|8.5|
||7.1 and later maintenance releases|8.5|  

### Databases

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|DB2 Advanced Enterprise Server Edition|11.1.0** and later maintenance releases|8.5|
|DB2 Advanced Workgroup Server Edition|11.1.0** and later maintenance releases|8.5|
|DB2 Connect Application Server Advanced Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Connect Enterprise Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Enterprise Server Edition|11.1.0 and later maintenance releases|8.5|
|DB2 Express Edition|11.1.0 and later maintenance releases|8.5|
|DB2 for z/OS|11.1.0 and later maintenance releases|8.5|
|Microsoft SQL Server|2014 and later maintenance releases|8.5|
||2016 and later maintenance releases|8.5|
|Oracle Database 12.2 Standard Edition|(12.2.0.0) and later maintenance releases|8.5|
|Oracle Database 12.2 Enterprise Edition|(12.2.0.0) and later maintenance releases|8.5|
|Oracle Database 12.2.0.1.0 Enterprise Edition|12.2.0.1.0 and later maintenance releases|8.5|
|Oracle Database 12.2.0.2 Enterprise Edition|12.2.0.2 and later maintenance releases|8.5|  

### Collaboration

|Prerequisite|Supported software versions|Product Minimum|
|-----------|------------------|-----|
|HCL Sametime Communicate|9.0 and later maintenance|8.5|
|HCL Sametime Complete|9.0 and later maintenance|8.5|  

### JDBC Drivers

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|DB2 Connect Enterprise Edition|11.1, and later maintenance releases|8.5|
|Microsoft SQL Server JDBC Driver|4.2, and later maintenance releases|8.5|

### Security Management

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|IBM Security Access Manager for Web|7.0, and later maintenance releases|8.5|
|IBM Security Access Manager|9.0, and later maintenance releases|8.5|
|Tivoli Directory Integrator|7.1.1, and later maintenance releases|8.5|  

### Web Browsers

|Supported Software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Microsoft Internet Explorer|11|8.5|

## Previously Deprecated Features

|Category|Unsupported|Recommended Action|
|--------|-----------|------------------|
|Configuring |OpenShift Passthrough| To deploy OpenShift manually using `Routes`, you need to create a .yaml file and add the changes required. Those changes can be applied by running `kubectl apply` and specifying the namespace and location.<br>Documentation resource: [Create the route resource manually](../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.md#create-the-route-resource-manually)|
|Setting up a site |Running the "Local Content Viewer" portlet (WCM Rendering Portlet) with WSRP |The Local Content View portlet has no architectural replacement. Instead, use WCM Rendering portlet locally. The feature allows customers to run the content viewer on a remote portal and integrate it into a local portal. You can run the content viewer only locally.<br> Documentation resource: [Enabling remote rendering with WSRP and the Web Content Viewer](https://help.hcltechsw.com/digital-experience/9.5/wcm/wcm_config_wcmviewer_wsrp.html).<!-- (../wcm/wcm_config_wcmviewer_wsrp.md) -->|
|Administering |Frequent Users portlet<br> Documentation resource: [Viewing frequent users](https://help.hcltechsw.com/digital-experience/8.5/panel_help/h_main_frequent_users.html)|Login filters can be used to record login activity as needed.<br>Documentation resource: [New security APIs in HCL Portal](https://support.hcltechsw.com/csm){:target="_blank"}|
|Security |OpenID authentication<br>Legacy Portal OpenID TAI (com.ibm.portal.auth.tai.OpenidTAI provided by HCL Digital Experience)<br>See [Integrating with OpenID authentication](https://help.hcltechsw.com/digital-experience/9.5/security/use_openid.html){:target="_blank"}. |For authentication in HCL Digital Experience with an external Identity Provider use SAML/OpenID Connect TAIs provided by IBM WebSphere Application Server or custom TAIs.<br>Documentation resource: [Establishing SSO connections through SAML 2.0 tokens](https://help.hcltechsw.com/digital-experience/9.5/dev-portlet/outbhttp_auth_est_sso_saml_tok.html){:target="_blank"}|
|Administering |XMLAccess xsds for older releases (HCL Digital Experience Portal 5.0 - 7.0) |Use the XML configuration interface with XML input files specified according to the latest schema file: PortalConfig\_8.5.0.xsd.<br>Documentation resource: [Using the XML configuration command line client](https://help.hcltechsw.com/digital-experience/9.5/admin-system/adxmltsk_cmdln.html){:target="_blank"}.|
|Developing |Enabler, Builder, and Mashups components and API |The **Mashup Enabler** and the **Builder** components are deprecated. The **Mashups Enabler** and the **Builder** API are deprecated.<br> Documentation resource: [Mashup integration post migration activities](https://help.hcltechsw.com/digital-experience/9.5/migrate/mig_t_post_mig.html)|
|Personalization |LikeMinds |The **LikeMinds** services and database domains are deprecated.<br> Documentation resource: [Using the XML configuration commands line client](https://help.hcltechsw.com/digital-experience/9.5/admin-system/adxmltsk_cmdln.html){:target="_blank"} <br>Go to Active Site Analytics to learn how to configure a variety of analysis tools to support your Digital Experience platform requirements. <br>Documentation resource: [Enabling Active Site Analytics for your Marketing Center Spot](https://support.hcltechsw.com/csm){:target="_blank"}|
|Personalization |Feedback |The **Feedback** database domains are deprecated.<br>Documentation resource: [Using the XML configuration commands line client](https://help.hcltechsw.com/digital-experience/9.5/admin-system/adxmltsk_cmdln.html){:target="_blank"} <br>Go to Active Site Analytics to learn how to configure a variety of analysis tools to support your Digital Experience platform requirements.<br>Documentation resource: [Enabling Active Site Analytics for your Marketing Center Spot](https://support.hcltechsw.com/csm){:target="_blank"}|
|Security |Active Credentials |Active credentials are deprecated from the Credential Vault portlet. Passive credentials are still available.<br>Documentation resource: [Credential Vault](https://help.hcltechsw.com/digital-experience/9.5/plan/plan_credvault.html){:target="_blank"}|
|Administering |Shared private pages |The Sharing private pages service is deprecated.<br>Documentation resource: [Sharing pages with other users](https://support.hcltechsw.com/csm){:target="_blank"}<br>Go to Managing Pages for the set of services available in HCL Digital Experience 8.5 and 9 releases.<br>Documentation resource: [Managing pages](https://help.hcltechsw.com/digital-experience/9.5/admin-system/mp_manage_pages.html){:target="_blank"}|
|Administering |Parallel Portlet rendering |The Parallel Portlet rendering feature is deprecated. See the [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411){:target="_blank"} for recommendations to optimize digital experience application performance. |
|Security |Stand-alone LDAP user registry |The stand-alone LDAP user registry configuration is deprecated. Instead, configure the federated LDAP user registry. If you upgraded from HCL Digital Experience 7.0 or 8.0 with a stand-alone LDAP user registry, you can continue to use your stand-alone LDAP user registry. However, run the wp-modify-federated-security to change to a federated LDAP user registry.<br>Documentation resource: [Changing from a stand-alone repository to a federated repository](https://help.hcltechsw.com/digital-experience/9.5/security/mod_fed_sec.html){:target="_blank"}|
|Administering |URL mappings |URL mappings are deprecated. If you upgrade from HCL Digital Experience 8.0 to 8.5, you can continue to use your existing URL mappings, but creating new URL mappings is no longer supported. Use [Vanity URLs](https://help.hcltechsw.com/digital-experience/9.5/wcm/vanity_urls.html){:target="_blank"} or [Friendly URLs](https://help.hcltechsw.com/digital-experience/9.5/admin-system/mp_friendly_url.html){:target="_blank"}.|
|Installation |Full and Base installation options |Before HCL Digital Experience 8.5, a customer chose either a full deployment with all the same pages and artifacts or a base deployment to customize their portal. Starting with HCL Digital Experience 8.5, the **Configuration Wizard** installs the full deployment. Customers can then remove pages to customize their portal. Then, they can package their customizations as a Portal Application Archive (PAA) file. Finally, customers can install their production server, run the empty-portal task, and install the customization PAA file. |
|Security |LTPA version 1 token support |The LTPA version 1 token is deprecated. WebSphere® Application Server 8.5.5. disables the LTPA version 1 token by default. If you are integrating with third-party applications that rely on LTPA version 1, update the application to support LTPA version 2. If you cannot update the application, you must manually re-enable LTPA version 1 support after you complete the migration. For information on updating your application to support LTPA version 2, see the documentation for the application [Enabling or disabling single sign-on interoperability mode for the LTPA token for WebSphere® Application Server 8.5.5](https://www.ibm.com/support/knowledgecenter/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/twbs_interopltpatoken.html){:target="_blank"} and [Enabling or disabling single sign-on interoperability mode for the LTPA token for WebSphere® Application Server 9.0.0](https://www.ibm.com/support/knowledgecenter/en/SSAW57_9.0.0/com.ibm.websphere.nd.multiplatform.doc/ae/twbs_interopltpatoken.html){:target="_blank"}.|
