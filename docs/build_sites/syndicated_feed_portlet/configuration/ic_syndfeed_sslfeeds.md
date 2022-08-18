# Enabling display of SSL-secured feeds

When you use the Syndicated Feed Portlet, some feeds that use HTTP over SSL \(HTTPS\) might not function properly because of missing SSL certificates. You might encounter errors, such as Missing Certificate, Unknown Certificate, or Untrusted Certificate because of missing root signer certificates or missing self-signed certificates in the certificate truststore. In both the cases, you must add the appropriate certificates to the certificate truststore.

To add the appropriate certificates, you must have Administrator access to your HCL Digital Experience installation.

1.  Obtain the missing certificates.

    There are various mechanisms for doing this depending on the type of certificate that is missing. In general, the quickest way to obtain the missing certificate is to access the feed you are trying to add directly from a web browser. All modern browsers provide the capability to view a certificate and its trust chain. However, the directions for viewing and exporting certificates from a web browser are browser vendor specific and therefore outside the scope of this document \(except to say that they should be exported in Base-64 encoded format as a file with the extension .cer or .arm\). If you need assistance with this task, contact your IT administrator. There are also many online resources that can help you complete this task.

    **Note:** If you use self-signed certificates, you might be prompted with several warnings about the acceptance or trust of this certificate. In such cases, ensure that you trust the third-party server before you add the certificate to your certificate truststore.

2.  Once you export the appropriate root signer or self-signed certificate, refer to the instructions in the Adding a signer certificate to a keystore topic to import the root signer certificate or to import the self-signed certificate as a new trusted signer certificate to the appropriate truststore.

3.  Restart the HCL Portal server.


**Parent topic:**[Syndicated Feed Portlet for HCL Digital Experience](../admin-system/ic_syndfeed_features.md)

**Related information**  


[Adding a signer certificate to a keystore](https://www.ibm.com/docs/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tsec_ssladdsignercert.html)

