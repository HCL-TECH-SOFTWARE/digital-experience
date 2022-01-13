

HCL Digital Experience Support Statement





<!---->



[Jump to main content](#wh_topic_body) 






[HCL Digital Experience 9.5](../index.html)







* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)

[Index](../indexTerms.html "Index")






Search




1. [Home](../index.html)
2. [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)Welcome to the documentation for HCL Digital Experience 9.5. Learn how to install, configure, troubleshoot, maintain and use Version 9.5 of HCL Digital Experience.
3. [Digital Experience on non-containerized platforms](../containerization/dx_non_container.html)Learn how to deploy HCL Digital Experience as a non-containerized application and optimize web content and applications to deliver differentiated, personalized experiences for your customers.
4. [Installing HCL Digital Experience](../install/installing_parent2.html)Review the planning information on HCL Digital Experience, then select your operating system and installation pattern that most reflects your business needs.
5. [Planning to install HCL Digital Experience](../plan/plan_installation.html)Before you install HCL Digital Experience in a production environment, assess your hardware and software needs, possible database configurations, security options, and LDAP server options.
6. [Support Statement](../overview/inst_req_supt.html)This support statement proposes a revision to the definition of supported and unsupported about the various products of which HCL Digital Experience depends on for proper operation.


















* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)Welcome to the documentation for HCL Digital Experience 9.5. Learn how to install, configure, troubleshoot, maintain and use Version 9.5 of HCL Digital Experience.


	+ [Digital Experience on non-containerized platforms](../containerization/dx_non_container.html)Learn how to deploy HCL Digital Experience as a non-containerized application and optimize web content and applications to deliver differentiated, personalized experiences for your customers.
	
	
		- [Installing HCL Digital Experience](../install/installing_parent2.html)Review the planning information on HCL Digital Experience, then select your operating system and installation pattern that most reflects your business needs.
		
		
			* [Planning to install HCL Digital Experience](../plan/plan_installation.html)Before you install HCL Digital Experience in a production environment, assess your hardware and software needs, possible database configurations, security options, and LDAP server options. 
			
			
				+ [System requirements](../overview/inst_req.html)Before installing HCL Digital Experience, you must review the system requirements to ensure that you have the supported versions of prerequisite and co-requisite software and hardware.
				+ [Support Statement](../overview/inst_req_supt.html)This support statement proposes a revision to the definition of supported and unsupported about the various products of which HCL Digital Experience depends on for proper operation.
				+ [User IDs and passwords](../plan/sec_chars.html)Understanding character limitations for user IDs and passwords is important because they are used throughout the system to provide access and secure content.
				+ [Web Content Manager environments](../wcm/wcm_deploy.html)Reviewing the Web Content Manager environments help you understand what happens in each environment and how you might want to set up your physical servers.
				+ [Database considerations](../plan/db_considerations.html)HCL Digital Experience includes an Apache Derby database that is configured and ready for immediate use. But for a production environment or any environment for HCL Web Content Manager, you must use one of the other supported database management systems.
				+ [User registry considerations](../plan/plan_ureg.html)A user registry or repository authenticates a user and retrieves information about users and groups to do security-related functions, including authorization.
				+ [HCL Digital Experience high availability](../plan/express_ha.html)HCL Digital Experience is licensed for use in a single-server configuration and might not be used in either a cloned configuration or a clustered configuration except when implementing idle standby for the purpose of failover.
				+ [Cluster considerations](../plan/plan_clus_ovr.html)Multiple portal servers can be clustered with IBM WebSphere Application Server Network Deployment.
				+ [Virtual environment overview](../plan/plan_virt_envir.html) Use virtualized environments to meet your business needs like production server consolidation, centralized management, or dynamic test environments.
				+ [Multiple profile support](../plan/plan_multiple_profile.html)Multiple profiles give you the ability to have multiple, independently configured portal instances that run from the same installation.
			* [Roadmaps to deploy your system](../install/deployment_patterns.html)Review the roadmaps to understand the common deployment, configuration, migration, and integration patterns.
			* [Migrating to IBM WebSphere Application Server 9.0.5](../was/ug_instwas95.html)If you are installing the latest version of HCL Digital Experience, migrate your IBM WebSphere Application Server to 9.0.5.
			* [Installing and preparing the prerequisite software](../install/prereq_software.html)Before you install HCL Digital Experience, make sure that the prerequisite software is installed, configured, and has the required fix packs applied.
			* [Installing the HCL Digital Experience software](../install/inst_web_experience.html)The HCL Digital Experience is designed to help create, manage, simplify, and integrate your processes into an engaging online experience.
		- [Combined Cumulative Fix (CF) installation](../overview/ccf_strategy95.html)The Combined Cumulative Fix is a package of HCL Digital Experience fixes. Read the instructions to learn how to apply or roll back a combined cumulative fix.
		- [Backup and restore](../admin-system/i_wadm_c_bkup_restr_winlinux.html)Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that run in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. IBM Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, your HCL Digital Experience and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.
		- [Migrating](../migrate/migration.html)Successful migration requires significant planning and preparation, understanding the tools that are involved, and careful execution of the appropriate steps in the order provided.
		- [Setting up a website](../site/site_setup.html)Setting up a website includes, creating pages, adding navigation, setting up search, and adding content to the site. Themes are used to customize the portal's look-and-feel. Out-of-the-box templates and the site wizard can help you set up your portal site faster. You can add wikis and blogs to your site and let users tag and rate content on your site.
		- [Staging to production](../deploy/dep_intr.html) During portal solution development, the solution is initially developed, tested, and refined on one server or a limited number of servers. The solution is deployed later on live systems, referred to as the production environment. The process of moving the solution from the development environment to the production environment is called staging.
		- [Content Template Catalog 4.4](../ctc/ctc_intro.html)The Content Template (CTC) is a set of templates that accelerate the process of building a website.




# HCL Digital Experience Support Statement


This support statement proposes a revision to the definition of supported and
unsupported about the various products of which HCL Digital Experience depends on for proper
operation. 


## Introduction

HCL Digital Experience requires the use of several collateral products for its normal operations.
In particular, it requires WebSphere® Application Server, a database, a
repository for user information (typically an LDAP), and other products depending on specific
customer requirements. 

During the testing of a new release, Development generally tests HCL Digital Experience with a
prescribed list of these collateral products. These products are designated as Supported
Products in the documented hardware and software requirements for that release. 

Because the list of Supported Products cannot reasonably describe all possible
configurations that a customer might need to use, some customers voiced concerns about the level of
support that is provided for configurations that are not designated as Supported. This
document is intended to provide clarification of the level of support that can be expected for the
current release with various combinations of dependent products.

Note: Although the statements in this document reflect the general level of support that can be
expected for HCL Digital Experience, the terms and conditions of any specific support offering,
license or other Agreement you might have with HCL will determine the actual delivered support for
the product. Nothing herein shall be construed as supplementing, modifying or superseding the terms
of your HCL license agreement for HCL Digital Experience or any other agreement you might have with
HCL, nor shall it create any obligation for HCL to deliver a level of support other than might be
set forth in such Agreements.
## Categories of Support

There are three categories of support for collateral products to HCL Digital Experience. They are
Supported Products, Newer Versions, and Releases of Supported Products and
Unsupported Products. The definition and support statement for each category follows:


Supported Product
A Supported Product is a product (at a specified version, release and fix level) that was
tested by Development and is known to work with HCL Digital Experience.Products in this category
are supported according to the terms of your HCL Digital Experience License Agreement. PMRs (Problem
Management Records) are accepted by HCL Software Support in accordance with the conditions of the License
Agreement you have for HCL Digital Experience


Newer Versions and Releases of Supported Products
Many products outside the specific version(s), release(s), or fix pack(s) of the
Supported version (referenced in the documented hardware and software requirements) might not
be explicitly tested by HCL Software, yet can reasonably be expected to perform within the accepted
bounds of reliability, function, and performance by a customer. Products that fall into this
category are typically newer releases or fix levels of a product already in the Supported
Product category or a product that adheres to a standard API that HCL Digital Experience
supports (such as an LDAP server). Some specific examples might include a newer operating system fix
level, a WebSphere® Application Server (WAS) fix pack newer than the original
Supported fix pack level, an IBM Java (JVM) fix pack, a new fix pack, or release of DB2 or an
updated LDAP server.

For products that fall into this category, support is as follows:


For Products, such as IBM Directory Server or HCL Domino LDAP, IBM DB2, IBM JDKs (JVMs) and
WebSphere® Application Server, HCL Digital Experience will fully support
fix-pack, release and version updates that do not significantly change interfaces or other
underlying support that HCL Digital Experience depends on for its functionality. If and when a newer
release of one of these products is shipped that HCL Digital Experience cannot accommodate, that
fact will be noted as described in the next section entitled Unsupported Products. Note that
in order for HCL Digital Experience to support an update to a database or LDAP product, WebSphere® Application Server must support that update as well.

For non-HCL
products, the Support team makes a commercially reasonable effort to support products in this
category. Support accepts problem reports (PMRs) for the appropriate releases that use these
untested products. If Support is able to re-create the reported problem with a Supported
version of the product, we will attempt to fix the problem. 

If Support is not able to
re-create the problem with a Supported version of the product in question and is not able to
resolve the problem on the untested version of the product in question, Support will look to the
support organization for the product in question to provide resolution. Please note that varying
degrees of customer involvement may be necessary to handle this process for non-HCL products.


If the support organization for the untested product in question is unable to resolve the
problem, Support will deem that version, release or fix pack level of the untested product in
question to now be an Unsupported Product.


Unsupported Products
An Unsupported Product is a product (at a specified version, release and fix level) that
is known to not work with HCL Digital Experience and is therefore not supported. A product can be
included in this category as a result of an explicit test effort by Development or as a result of
discovery from a prior customer problem. The HCL Digital Experience Support team maintains a list,
by release, of all known Unsupported Products. The list is published as a technical document and is
available to all customers. WebSphere® Application Server has a similar
support statement, which can be found on the web.

Note: WebSphere® Application Server uses specially customized builds of the IBM Java
SDKs on certain platforms. Updates to these builds must be obtained from WebSphere® Application Server support.HCL Portal can be sensitive to
changes in the underlying WebSphere® Application Server. Upgrading to a new
fix pack level of the application server is well tolerated and encouraged (such as from WebSphere® Application Server version 8.5.5.2 to 9.0.x) as long as all required
fixes for WebSphere® Application Server are available as integrated into that
fix pack or by applying an interim fix specifically for that maintenance level. However, upgrading
from one version of WebSphere® Application Server to the next is problematic
if not done within the context of a migration of versions and must never be attempted with an
in-place system. 



## Support for Kubernetes

 Docker and Kubernetes are third-party products. HCL support is available to assist in
 configuration and support related issues as it pertains to the HCL Digital Experience
 product. If you require assistance with a full Kubernetes or Docker deployment, contact
 [HCL Services](https://www.hcltechsw.com/wps/portal/resources) or one of our HCL Business Partners to inquire about professional
 services.



## Support for LDAP Servers

LDAP support spans two categories:


Fully tested and supported LDAP servers:
The list of fully tested LDAP servers for each release of HCL Digital Experience is documented
in the detailed system requirements for each release. HCL Digital Experience support accepts problem
reports for the appropriate HCL Digital Experience releases using the tested directory servers.
These problem reports receive high-priority attention. Features that are tested with these
directories include relatively simple search and retrieval functions for user and group objects.
Functions outside this scope, such as the Active Directory
Global Catalog feature, are considered advanced features and have not been tested with HCL Digital
Experience. HCL Digital Experience support encourages customers to work with their LDAP provider for
additional support on these advanced features.
Untested and partially supported LDAP servers:
In general, HCL Digital Experience support makes a best effort to support directory servers that
have not been tested with HCL Digital Experience. HCL Digital Experience support accepts problem
reports for the appropriate HCL Digital Experience releases using untested directory servers. If HCL
Digital Experience support can re-create the reported problem using a tested LDAP server, staff will
attempt to fix the problem. If the support team is not able to re-create the problem on a tested
LDAP server, customers are referred to the LDAP provider for further assistance.

## Support for External Security Managers (ESM)

ESM
support spans two (2) categories:
Fully tested and supported ESM software: 
The list of fully tested ESM software versions for each release of HCL Digital Experience is
documented in the detailed system requirements for each release. HCL Digital Experience support
accepts problem reports for the appropriate HCL Digital Experience releases using the tested ESM
servers. These problem reports receive high-priority attention. Features that are tested with these
software products include authentication and authorization. Functions outside this scope, such as
login customizations, referrals, impersonation, and step up authentication are considered advanced
features and have not been tested with HCL Digital Experience. HCL Digital Experience support
encourages customers to work with their ESM provider for additional support on these advanced
features.
Untested and partially supported ESM servers: 
In general, HCL Digital Experience support makes a best effort to support ESM servers that have
not been tested with HCL Digital Experience when relying on the ESM for authentication only. HCL
Digital Experience support accepts problem reports for the appropriate HCL Digital Experience
releases using untested ESM Trust Association Interceptor (TAI) implementations. If HCL Digital
Experience support can re-create the reported problem using a tested ESM, staff will attempt to fix
the problem. If the support team is not able to re-create the problem on a tested ESM, customers are
referred to the ESM provider for further assistance.








 
 Generated by [<oXygen/> XML WebHelp](http://www.oxygenxml.com/xml_webhelp.html) 









![]()




