---
id: cw_standalone
title: Set up a stand-alone server
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You created a stand-alone, demonstration environment with IBM® Installation Manager. Now you are ready to change your demonstration environment into a production-ready, distributed stand-alone server environment. To begin, you can use the Database Transfer option to transfer your database from the default database, Apache Derby, to a more robust database. After your data is transferred, you can change from the built-in file-based repository to a federated repository. Then, you can choose to modify your site URLs for search engine optimization benefits.

When a stand-alone topology is used as the foundation for a distributed environment, the web server, database, and user registry software is distributed to different physical servers. Using a distributed environment is beneficial for many reasons:

-   Workload management. Database workload is distributed to another server.
-   Improved security. You can place the web server outside the firewall to direct traffic to the portal server.
-   Potential for growth. You can add more servers later as traffic increases.

A distributed, stand-alone server topology is useful for the following types of users:

-   A company or organization that does not need a cluster environment for failover or high availability.
-   A company or organization that needs an environment to test your applications and designs before these applications and designs go to the live server.
-   A company or organization with limited server resources that wants to set up a department server or small website.

You can select the stand-alone topology to set up to four different environments. This topology is used to set up a demonstration environment, a portlet and theme development environment, a web content development environment, and a stand-alone server, distributed environment.

See a list of the topology options available to you for setting up an environment. Use the descriptions to guide you in selecting the best topology to apply to your environment.

**Related information**  


[Configuration Wizard](cw_main.md)

