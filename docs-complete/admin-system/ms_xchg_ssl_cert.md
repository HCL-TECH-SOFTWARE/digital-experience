# Configuring your portal to accept the Exchange server SSL certificate 

To use the secure socket layer \(SSL\) features, you must configure the JVM for the HCL Portal server to accept the SSL certificate of the Exchange server.

You must obtain the certificate from the Exchange server. There are different methods to obtain the certificate. The best way is to ask the Exchange administrator to send it to you.

To make the Exchange Server SSL certificate available to the portal server, add the base 64-encoded ASCII data certificate by using the WebSphere® Integrated Solutions Console.

1.  Open the WebSphere Integrated Solutions Console.

2.  Click **Security** \> **SSL certificates and key management**.

3.  Under Related Items, click **Key Stores and Certificates**.

4.  Click **NodeDefaultTrustStore**.

5.  Under Additional Properties, click **Signer Certificates**.

6.  Click **Add**.

7.  In the **Alias** field, enter a name.

8.  In the **File name** field, enter the path and name of the certificate file.

9.  For the **Data type**, select **Bas64-encoded ASCII data** from the pull-down list.

10. Click **Apply**, then **OK**.

11. Restart server1 and your HCL Portal.


**Parent topic:**[Emailing with the Microsoft Exchange 2010 portlet application ](../admin-system/ms_xchg_2010_p_app.md)

