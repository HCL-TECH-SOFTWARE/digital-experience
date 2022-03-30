# Determining the needs of your portal site 

The following general use cases are intended only to provide some recommendations for your decisions about directories when integrating collaboration product.

To identify your use case, ask yourself two questions about your site:

1.  What directory service are you already using, or do you want to use, for the user directory for HCL Portal? Possible answers are:
    -   A: LDAP directory other than Domino®
    -   B: Domino LDAP directory
2.  What directory service are you already using, or do you want to use, for the user directories for collaboration products, such as HCL Sametime? Possible answers are:
    -   A: LDAP directory other than Domino
    -   B: Domino LDAP directory
    -   C: Native \(non-LDAP\) Domino directory

|Single directory \(LDAP other than Domino\) site|Your decisions about Domino integration|
|------------------------------------------------|---------------------------------------|
|-   You have HCL Portal installed and in active use.
-   Your portal site is configured with an LDAP directory other than Domino \(for the purposes of these scenarios, assume IBM® Directory Server, but any other LDAP has the same considerations\) with a substantial user repository in active use.
-   You intend to integrate collaborative portlets
-   You want the Domino portlets to have online awareness features.
-   You want users to be able to work in portlets without authentication other than logging into the portal \(that is, you need the single sign-on feature\). In fact, you may already have single sign-on enabled on your portal server.
-   You do not yet have any collaboration products or servers installed, or if you have them, they are not yet configured for use with the portal.

**Note:** If you have an existing Domino server you intend to integrate, make sure that its release is supported before you attempt to use it with the portal. See the Software for collaboration section in the *HCL Portal hardware and sofware requirements.* If the release is not supported, you must upgrade the Domino server before you can use it with the portal.


|Your environment is typical of most portal customers.

You must install and set up a Sametime server to support awareness. We recommend that you configure the server to authenticate against the LDAP directory already configured with your portal site.

To enable single sign-on, configure it as a last task after installing and configuring new servers for collaboration products, to include all the new servers.

Support for key features in the collaborative portlets such as auto-detection of users' mail files requires additional configuration in this environment.

|

|Single directory \(Domino LDAP\) site|Your decisions about Domino integration|
|-------------------------------------|---------------------------------------|
|-   You have installed HCL Portal
-   You have no LDAP user directory configured yet.
-   You intend to integrate collaborative portlets
-   You want the portlets to have online awareness features, and you want users to be able to work in portlets without authentication other than logging into the portal \(that is, you need the single sign-on feature\)

|Your environment is recommended, especially for new portal sites, if you intend to make full use of Domino integration. Install and configure Domino as your LDAP directory for the portal.

It is a best practice to use the directory configured for Sametime as the directory configured for the portal, and Domino LDAP is the best choice for Sametime; therefore, in a new site we recommend using Domino LDAP as the single directory.

|

|Dual directory-type site \(LDAP other than Domino for portal with Domino LDAP for Sametime user directory\)|Your decisions about Domino integration|
|-----------------------------------------------------------------------------------------------------------|---------------------------------------|
|-   You already have a mature installation of Domino servers including Sametime or iNotes. Your Domino servers are upgraded to a release supported by HCL Portal.
-   You have newly installed HCL Portal or have the intention to deploy it. You may even have a mature portal site, but have not yet attempted to integrate it with your Domino installations.
-   You intend to integrate collaborative portlets, especially messaging portlets to support your existing Domino mail and calendar users.
-   You want the portlets to have online awareness features \(your Domino users are accustomed to Sametime instant messaging\), and you want users to be able to work in portlets without authentication other than logging into the portal \(that is, you need the single sign-on feature\).

|Your environment is typical of many portal customers who have investments in both directories that must be maintained.

See the following topics for tasks specific to reconciling directories:

-   [Auto-detecting user mail information from a secondary LDAP server](i_domi_t_csenvir_dom_2domdirs.md)
-   [People awareness](i_coll_c_people_aw.md)

|

|Multiple directory-type site \(LDAP other than Domino for portal with a combination of other directories, most likely native Domino directory for Sametime|Your decisions about Domino integration|
|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
|-   You already have a mature installation of Domino servers including Sametime or iNotes. Your Domino servers are upgraded to a release supported by HCL Portal.
-   You have newly installed HCL Portal or have the intention to deploy it. You may even have a mature portal site, but have not yet attempted to integrate it with your Domino installations.
-   You have a native Domino Directory \(non-LDAP\) in active use. Sametime uses a native Domino Directory.
-   You intend to integrate collaborative portlets, especially messaging portlets, to support your existing Domino mail and calendar users.
-   You want the portlets to have online awareness features \(your users are accustomed to Sametime instant messaging\), and you want users to be able to work in portlets without authentication other than logging into the portal \(that is, you need the single sign-on feature\).

|Your environment is typical of many customers with mature Domino installations and an investment in an extensive native Domino directory who want to integrate portal.

To support SSO, you must reconcile authentication between user identifications in your native Domino directory and the portal LDAP directory.

See the following topics for tasks specific to reconciling directories:

-   [Auto-detecting user mail information from a secondary LDAP server](i_domi_t_csenvir_dom_2domdirs.md)
-   [People awareness](i_coll_c_people_aw.md)

|

**Parent topic:**[Planning for collaborative servers and portlets ](../collab/i_domi_c_servers_plan.md)

