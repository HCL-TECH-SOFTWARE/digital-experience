# WSRP services

By using the Web Services for Remote Portlets \(WSRP\) standard. HCL Digital Experience can provide portlets, applications, and content as WSRP services.

The WSRP standard and specification is provided by OASIS. It defines a web service communication interface for interactive presentation-oriented web services. This standard simplifies the integration of remote portlets, applications, and content into portals. Producers and Consumers use this interface for providing and consuming portlets. Users can work with WSRP in the following ways:

-   Producers can provide portlets as presentation-oriented WSRP services and make them available to Consumers who want to use these services.
-   Consumers can select from a rich choice of available remote portlets and integrate them into their portal.
-   Portal site visitors can then access the integrated remote portlets. They can work and interact with them in the same way as they do with local portlets. The integrated remote portlets appear and operate to portal site visitors the same way as local portlets.

The WSRP implementation of HCL Digital Experience 8.5 is built on the JAX-WS based web service stack of IBM® WebSphere® Application Server. The WSRP implementation in earlier versions of HCL Digital Experience was based on the web service stack that is based on the JAX-RPC standard.

The information that is given in this WSRP section assumes that you are already familiar with HCL Digital Experience and with the WSRP specification. If you want more detailed information about the OASIS WSRP specification, refer to the OASIS WSRP Standard website at [http://oasis-open.org/committees/wsrp](http://oasis-open.org/committees/wsrp).

Before you start working with WSRP in your portal, read the relevant topics about WSRP carefully:

-   In all cases, read the topics about planning, security considerations, and hints and tips for using WSRP with your portal.
-   Depending on how you want to use WSRP, read the topics about Producers or Consumers.

Currently, there are two versions of the WSRP standard, WSRP 1.0 and WSRP 2.0. HCL Digital Experience supports both versions of the WSRP standard.

The following topics provide information about WSRP Producers and Consumers and about how they communicate with each other.

-   **[What is new in WSRP](wsrpc_new.md)**  
WSRP in HCL Portal 8.5 is now based on the JAX-WS standard for Java based web services. It takes advantage of the improvements of the current JAX-WS based web services stack that is part of IBM WebSphere Application Server. The WSRP services are implemented as JAX-WS compliant service providers and service clients. To configure web service security and quality of service, you can manage them in the WebSphere Integrated Solutions Console by using policy sets.
-   **[Learning about WSRP](../wsrp/learning_wsrp/index.md)**  
Web Services for Remote Portlets \(WSRP\) allows easy integration of remote portlets, applications, and content into portal.
-   **[Planning for WSRP](../wsrp/planning_wsrp/index.md)**  
Before you work with WSRP, plan your configuration based on the information in the following topics.
-   **[Using your portal as a WSRP Producer](../wsrp/portal_wsrp_producer/index.md)**  
Learn about the tasks that you perform when you use your portal to provide WSRP services as a WSRP Producer portal.
-   **[Using your portal as a WSRP Consumer](../wsrp/portal_wsrp_consumer/index.md)**  
Learn about the tasks that you perform when you use your portal as a WSRP Consumer portal to consume remote portlets. You can consume portlets from a HCL Digital Experience or from a different WSRP Producer such as the IBM WSRP Version 2.0 Producer for IBM WebSphere Application Server.
-   **[Using handlers for WSRP web services](../wsrp/handlers_wsrp_webservices/index.md)**  
You can extend your WSRP Producer or WSRP Consumer portal by handlers that comply with JAX-WS.
-   **[Reference for using WSRP with the portal](../wsrp/reference_for_using_wsrp_portal/index.md)**  
Reference information about using WSRP with the portal includes WSRP markup caching and Known limitations.


???+ info "Related information"
    - [Enabling remote rendering with WSRP and the Web Content Viewer](../../../../manage_content/wcm_delivery/deliver_webcontent_on_portal/enable_remote_render_wsrp/index.md)
    - [Deploying the initial release](../../../../deployment/manage/staging_to_production/creating_deploying_initial_release/dep_deploy.md)
    - [Deploying the differential release](../../../../deployment/manage/staging_to_production/creating_deploying_diff_release/dep_deploy_diff.md)
    - [Planning for virtual portals](../../../../build_sites/virtual_portal/vp_planning/index.md)
    - [OASIS WSRP Standard](http://oasis-open.org/committees/wsrp)
    - [The master administrator](../../../../build_sites/virtual_portal/vp_planning/vp_roles/advppln_roles_mastr_adm.md)
    - [OASIS Web Services for Remote Portlets \(WSRP\) TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=wsrp)

