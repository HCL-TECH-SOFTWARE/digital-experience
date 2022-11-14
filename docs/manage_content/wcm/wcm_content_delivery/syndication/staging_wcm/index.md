# Staging-server topology for Web Content Manager

If you need to deliver large complex websites with many site users and content creator, implement a staging server configuration. Implementing a staging server provides an environment for checking for accuracy, issues with the design, and performance. With a staging server configuration authoring, staging and delivery are separated onto different servers. The staging environment can be used for testing or to allow changes from the authoring environment to accumulate before you syndicate the changes to the delivery environment in a single batch.

There is a different server, or cluster of servers, for the delivery, staging, and authoring environments. The delivery, staging, authoring environment all access the same LDAP. If needed the LDAP and database servers can be clustered too. Website users access the delivery server through the web server. Authors access the authoring server and content is syndicated to the staging server for quality assurance verification before it is published to the delivery server.

On the authoring server, the following activities occur:

-   Create drafts
-   Approve drafts
-   Test changes
-   Publish new and changed content
-   Syndicate content to the staging server

On the staging server, the following activities occur

-   User assurance testing
-   Performance testing
-   Syndicate content to the delivery server

On the delivery server, the following activities occur:

-   Host content for website users

## Hardware and resources

-   An authoring environment would normally be a clustered environment to cope with many website creators and web content authors.
-   The staging environment can consist of:
    -   A web content delivery server or cluster that subscribes to the authoring environment. This method would be used when you want to allow changes from the authoring environment to accumulate before you syndicate your changes to your delivery environment in a single batch.
    -   A complete replica of the delivery environment. This type of environment would be used for system UAT to ensure that the website is accurate, error-free, and can run under load.
-   The delivery environment can consist of:
    -   A web content delivery server or cluster that subscribes to the staging environment. Content can be delivered by using either a web content viewer portlet, the web content servlet, or a pre-rendered site.
    -   A local WebSphere Portal production environment that subscribes to the staging environment and delivers web content by using a web content viewer.
    -   A remote WebSphere Portal production environment. In this scenario, a web content delivery server subscribes from the staging environment, and the remote WebSphere Portal production environment uses WSRP and a web content viewer to display content from the web content delivery server.
-   The delivery environment can consist of:
    -   A web content delivery server or cluster that subscribes to the staging environment. Content can be delivered by using either the web content servlet or a pre-rendered site.
    -   A local WebSphere Portal production environment that subscribes to the staging environment and delivers web content by using the web content servlet.
    -   A remote WebSphere Portal production environment. In this scenario, a web content delivery server subscribes from the staging environment, and the remote WebSphere Portal production environment uses the web content servlet to display content from the web content delivery server.

## Syndication options

-   Automatic one-way syndication from the authoring environment to the staging environment.
-   Manual one-way syndication from the staging environment to the delivery environment.

**Related information**  


[Staging to production list](../deploy/dep_stage_check.md)

