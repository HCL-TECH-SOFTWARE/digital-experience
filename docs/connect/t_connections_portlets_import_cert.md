# Importing a certificate to support SSL 

Import a certificate so that HCL Connections and HCL Portal can communicate over Secure Socket Layer \(SSL\).

In order for HCL Portal to communicate with HCL Connections over Secure Sockets Layer \(SSL\), the HCL Portal server must trust the signer of the SSL certificate for HCL Connections. This setting might be default in your WebSphere infrastructure if you use SSL certificates that are issued by a commonly recognized authority. If you use self-signed certificates, the default certificate or a signer that is not recognized by your HCL Portal server, you must import the SSL certificate from HCL Connections to your HCL Portal server.

1.  Import the SSL keys into the Portal server as follows:
2.  Log in to the WebSphere® Application Server Integrated Solutions Console.

3.  Go to **Security** \> **SSL certificate and key management** \> **Key stores and certificates**.

4.  Add the certificates to the appropriate truststore as configured in SSL Configurations. To view the SSL configuration and determine the appropriate truststore, go to **Security** \> **SSL certificate and key management** \> **SSL configurations** \> **NodeDefaultSSLSettings** \> **\['Trust Store Name'\]**

    For example, in a stand-alone deployment you go to **NodeDefaultTrustStore** \> **Signer certificates** for adding certificates. If NodeDefaultSSL Settings points to **'CellDefaultTrustStore'**, you add a certificate to **'CellDefaultTrustStore'**.

    **Note:** In a clustered deployment, add certificates for all Portal nodes to the Connections nodes, and add certificates for the Connections nodes to the Portal nodes.

5.  Click **Retrieve from port**.

6.  Enter the host and SSL port that is used by your Connections server.

    The default SSL port is 443. Give the alias a name, for example, Connections.

    For example:

    ```
    Host:  connections.example.com
    Port:  443
    Alias:  connections
    ```

7.  Click **Retrieve signer information**.

8.  Click **OK**.

9.  Click **Save**.


**Parent topic:**[Deploying the HCL Connections Portlets for HCL Connections Cloud ](../connect/c_connections_portlets_deploying_portlets_cc.md)

