# Planning considerations for WebSEAL junctions

A junction acts as a single point of access into a web application network.

A junction is an HTTP or HTTPS connection between a front-end WebSEAL server and a back-end web application server. WebSEAL does authentication checks on all requests for resources before it passes those requests across a junction to the back-end server.

Starting with HCL Portal version 8.0, the supported junction types between the front-end WebSEAL server and a back-end HCL Portal server are:

-   Virtual host junctions - this junction type is generally supported for all use cases.
-   Transparent junctions - support for Transparent junctions with HCL Portal is limited to a simple use case. For example, one HCL Digital Experience logical instance that uses the default /wps context root. The logical instance might be one server or cluster or set of related farm nodes that run a single logical instance of a Portal website, which might include virtual portals. Anything more complex than this simple use case requires the use of Virtual host junctions.

Prior releases supported the use of traditional non-transparent WebSEAL junctions, but this configuration is no longer supported by HCL Portal 8.0 and later. With the proliferation of HCL Digital Experience URLs, the virtual host junction is now the most efficient way to make an HCL Digital Experience server work behind a WebSEAL proxy. All discussions around encryption, Trust Association Interceptor \(TAI\) versus LTPA and other setup options continue to be applicable. The difference is the overall junction type, which determines how the junction is visible to the users.

A traditional non-transparent junction has a token in the URL that corresponds to the junction in WebSEAL. For example, the URL might be **http://webseal.hostname.yourco.com/junction1/wps/myportal**. A transparent junction uses an existing token in the URL to identify the junction; for example, it uses the **/wps** token in **/wps/myportal**. The problem with both of these methods is that HCL Digital Experience has many URLs and not all of them start with **/wps**. They are also difficult to configure to use a consistent prefix.

Virtual host junctions use a virtual host name to identify the junction. To identify the junction, the host name might be junction1.webseal.hostname.yourco.com. This junction is only an example; you can use any host name that fits within your domain. The junction is then defined in WebSEAL to use the incoming host name, instead of a URL token, to identify the junction and the corresponding back-end servers.

In the configuration that is described here, the WebSEAL component of Security Access Manager handles the user authentication. A Trust Association Interceptor \(TAI\) is used by WebSphere® Application Server and HCL Digital Experience to accept the identity of the user as asserted by WebSEAL.

To properly secure the WebSphere Application Server and HCL Digital Experience system against an attack, the TAI must still authenticate the WebSEAL server. So that only requests that are legitimately presented through that WebSEAL server are accepted. There are different ways to configure this authentication between WebSEAL and the TAI in WebSphere Application Server. You can choose between the different ways to configure depending on how much effort and performance you want to put into securing your network. The decisions that you make determines how you set up the junctions between the WebSEAL server and HCL Portal.

!!! note 
    By default, the XML configuration interface cannot access HCL Digital Experience through a WebSEAL junction. To enable the XML configuration interface to access HCL Digital Experience through a WebSEAL junction, use Security Access Manager to define the configuration URL \(`/wps/config`\) within the junction as unprotected. Use the WebSEAL documentation for specific instructions about defining separate URLs within the junction and assigning separate ACLs to these URLs. After the configuration URL is defined as unprotected, only HCL Portal enforces access control to this URL. Other resources that are protected within the WebSEAL junction \(for example, the wps/myportal URL\) are still protected by WebSEAL.

## Nonencrypted junction using Basic Authentication

The identity of the user must be passed to the TAI in a header that is called `iv-user`. The header is inserted by WebSEAL into the request that is sent from WebSEAL to the WebSphere Application Server and the HCL Portal servers. The junction creation option to pass the user identity is `-c iv-user`. While WebSEAL can be configured to pass the user identity in other ways, the `iv-user` header is the only one that is supported by the TAI.

## Advanced junction configurations

For more details and options about how to configure junctions between WebSEAL with WebSphere Application Server and HCL Digital Experience, including other options for specifying the WebSEAL server identity, use the WebSEAL Administration Guide and to the documentation for the HTTP Server that you are using with WebSphere Application Server.

The junctions between WebSEAL and WebSphere Application Server and HCL Digital Experience can be configured to be encrypted or not. Encrypted junctions enhance security by making sure that no one can eavesdrop on information that is flowing between WebSEAL, WebSphere Application Server, and HCL Digital Experience. However, encrypted junctions require more administration to move the necessary signing certificates between the systems, and also have a performance cost. If you are not comfortable that your network between the firewalls is secure against unauthorized access and observation, you must use encrypted junctions between WebSEAL and WebSphere Application Server/HCL Portal. If you are comfortable that your network is secure against unauthorized access and observation, especially for traffic across an inner firewall, you can use unencrypted junctions between WebSEAL and WebSphere Application Server/HCL Digital Experience.

Setting up the WebSEAL -WebSphere Application Server/HCL Digital Experience junction over SSL requires that you configure WebSphere Application Server and the HTTP server that is used by WebSphere Application Server to accept inbound SSL traffic and route this traffic correctly to WebSphere Application Server and HCL Portal. This process includes importing the necessary signing certificates into at least the WebSEAL certificate keystore, and possibly also the HTTP server certificate keystore.

If you choose to use encrypted junctions between WebSEAL and WebSphere Application Server and HCL Digital Experience, you can also choose to have WebSEAL identify and authenticate itself to WebSphere Application Server and the TAI by using its own client-side certificate. In this case, you can configure the TAI to not further validate the WebSEAL server, relying on the mutual SSL connection to supply a trustable identity for the WebSEAL server.

If you choose not to use client-side certificates to identify the WebSEAL server, or if you choose not to use an SSL junction, you can identify the WebSEAL server to the TAI by using a Basic Authentication \(BA\) header. In this case, a password is placed into the BA header, and also configured into the TAI. This action represents a "shared secret" that only the TAI and the WebSEAL server know, which allows the TAI to trust that it really is the WebSEAL server that is asserting the user's identity, and the TAI can trust it. In this case, using an SSL junction provides more security by protecting this BA header from observation, but the TAI still relies on the BA header for identifying the WebSEAL server.

To set up the junction to use the Basic Authentication header to identify the WebSEAL server, use the `-b supply` option on the junction creation command. This option causes WebSEAL to build the BA header by using the user's user ID \(which is ignored by the TAI, in favor of the `iv-user` header\) and the password that is configured into WebSEAL from the `webseald-instance.conf` file, on the `basicauth-dummy-passwd` property. The password in the `webseald-instance.conf` file must match the password for the ID that is specified on the `com.ibm.websphere.security.webseal.loginid` property of the TAI startup parameters in the WebSphere Integrated Solutions Console. For example, if you specify `com.ibm.websphere.security.webseal.loginid=mistered` on the TAI startup parameters, and the password for `mistered` is `wilbur`, then you must specify `wilbur` on the `basicauth-dummy-passwd` property in `webseald-instance.conf` on the WebSEAL server.


<!--- **Related information**  

[WebSEAL Administration Guide](https://www.ibm.com/docs/en/SSPREK_7.0.0/com.ibm.isam.doc_80/ameb_webseal_admin_pdf.pdf) --->

