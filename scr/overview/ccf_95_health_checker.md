

Cumulative Fix Health Checker | HCL Digital Experience





<!---->



[Jump to main content](#wh_topic_body) 






[HCL Digital Experience 9.5](../index.html)







* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)

[Index](../indexTerms.html "Index")






Search




1. [Home](../index.html)
2. [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)Welcome to the documentation for HCL Digital Experience 9.5. Learn how to install, configure, troubleshoot, maintain and use Version 9.5 of HCL Digital Experience.
3. [Digital Experience on non-containerized platforms](../containerization/dx_non_container.html)Learn how to deploy HCL Digital Experience as a non-containerized application and optimize web content and applications to deliver differentiated, personalized experiences for your customers.
4. [Combined Cumulative Fix (CF) installation](../overview/ccf_strategy95.html)The Combined Cumulative Fix is a package of HCL Digital Experience fixes. Read the instructions to learn how to apply or roll back a combined cumulative fix.
5. [Cumulative Fix Health Checker](../overview/ccf_95_health_checker.html)These instructions are for the HCL Digital Experience Combined Cumulative Fix Health Checker.


















* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)Welcome to the documentation for HCL Digital Experience 9.5. Learn how to install, configure, troubleshoot, maintain and use Version 9.5 of HCL Digital Experience.


	+ [Digital Experience on non-containerized platforms](../containerization/dx_non_container.html)Learn how to deploy HCL Digital Experience as a non-containerized application and optimize web content and applications to deliver differentiated, personalized experiences for your customers.
	
	
		- [Installing HCL Digital Experience](../install/installing_parent2.html)Review the planning information on HCL Digital Experience, then select your operating system and installation pattern that most reflects your business needs.
		- [Combined Cumulative Fix (CF) installation](../overview/ccf_strategy95.html)The Combined Cumulative Fix is a package of HCL Digital Experience fixes. Read the instructions to learn how to apply or roll back a combined cumulative fix. 
		
		
			* [Cumulative fix instructions: Stand-alone](../overview/ccf_95_standalone.html)Read the installation instructions to learn how to apply a cumulative fix to a stand-alone portal installation or to roll back the cumulative fix.
			* [Cumulative fix instructions: Cluster](../overview/ccf_95_cluster.html)Read the installation instructions to learn how to apply a cumulative fix to a clustered portal installation or to roll back the cumulative fix.
			* [Cumulative fix instructions: Farm](../overview/ccf_95_farm.html)Read the installation instructions to learn how to apply a cumulative fix to a portal farm installation or to roll back the cumulative fix.
			* [Cumulative fix instructions: Remote search](../overview/ccf_95_remote_search.html)Read the installation instructions to learn how to apply a cumulative fix to a portal remote search installation or to roll back the cumulative fix.
			* [Cumulative Fix Health Checker](../overview/ccf_95_health_checker.html)These instructions are for the HCL Digital Experience Combined Cumulative Fix Health Checker.
			* [Known Issues for the Combined Cumulative Fix](../overview/ccf_95_known_issues.html)Learn what are the known issues in the HCL Digital Experience Combined Cumulative Fixes.
		- [Backup and restore](../admin-system/i_wadm_c_bkup_restr_winlinux.html)Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that run in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. IBM Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, your HCL Digital Experience and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.
		- [Migrating](../migrate/migration.html)Successful migration requires significant planning and preparation, understanding the tools that are involved, and careful execution of the appropriate steps in the order provided.
		- [Setting up a website](../site/site_setup.html)Setting up a website includes, creating pages, adding navigation, setting up search, and adding content to the site. Themes are used to customize the portal's look-and-feel. Out-of-the-box templates and the site wizard can help you set up your portal site faster. You can add wikis and blogs to your site and let users tag and rate content on your site.
		- [Staging to production](../deploy/dep_intr.html) During portal solution development, the solution is initially developed, tested, and refined on one server or a limited number of servers. The solution is deployed later on live systems, referred to as the production environment. The process of moving the solution from the development environment to the production environment is called staging.
		- [Content Template Catalog 4.4](../ctc/ctc_intro.html)The Content Template (CTC) is a set of templates that accelerate the process of building a website.




# Cumulative Fix Health Checker | HCL Digital Experience


These instructions are for the HCL Digital Experience Combined Cumulative Fix Health
Checker.



To assist you with your upgrade, HCL is now providing a Health Checker tool
that you can use to validate your Portal installation before applying a
cumulative fix. Simply execute this tool on the target system and review
the report that is generated to see if there are any issues you need to
resolve before installing the update. The tool can't catch everything, but
it scans for some of the most common pitfalls and will help to ensure a
smoother upgrade experience.


We suggest running the tool a few days before you plan to apply the cumulative
fix so that you have time to reconcile any problems it finds.


The tool will be installed with Cumulative Fix 03 or later and will be available
for use with all future updates. To use it before applying CF03, simply
unzip the archive from the maintenance package into your
(PortalServer\_root) directory. By default, this is:
* Windows: C:\IBM\WebSphere\PortalServer
* Unix/Linux: /opt/IBM/WebSphere/PortalServer
* IBM i: /QIBM/ProdData/WebSphere/PortalServer/V85/Server

This will overwrite two or possibly three existing files:
* installer/wp.config/bin/wp.config.jar
* installer/wp.update/config/includes/upgrade\_health\_check.xml
* installer/wp.update/config/was/wp\_TestPortalScripting.jacl

Once the tool is installed, execute the following ConfigEngine command from within the path of
the profile to run it: * Unix/Linux: 
```
<profile_root>/ConfigEngine/ConfigEngine.sh health-check-update
-DPortalAdminPwd=<password> -DWasPassword=<password>
```
* Windows: 
```
<profile_root>\ConfigEngine\ConfigEngine.bat health-check-update
-DPortalAdminPwd=<password> -DWasPassword=<password>
```
* IBM i: 
```
<profile_root>/ConfigEngine/ConfigEngine.sh health-check-update
-DPortalAdminPwd=<password> -DWasPassword=<password>
```

You can run this tool safely on any system that you plan to update. It is
designed not to make any changes to your environment or to interfere with
any running processes.


After the command completes, you will find an output report in the
`ConfigEngine/log` directory named `HealthCheck-.log`. A new
report with a new timestamp will be generated every time you run the tool.
If the tool found any conditions that would interfere with a successful update,
they will be described in the report. You should remediate these problems
and re-run the tool until you get a clean report before applying the cumulative
fix.











 
 Generated by [<oXygen/> XML WebHelp](http://www.oxygenxml.com/xml_webhelp.html) 









![]()




