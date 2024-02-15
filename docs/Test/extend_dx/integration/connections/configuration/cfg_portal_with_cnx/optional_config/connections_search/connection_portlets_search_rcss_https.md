# Additional configuration to support the HTTPS protocol

If you are using the HTTPS security protocol with RCSS, you must import a certificate to support that configuration.

1.  Extract the certificate in the DER encoded format from the search URL.

    For example, copy https://pvtind105.in.ibm.com:9444/search/atom/scope to a file, for example, pvtind105.cer.

2.  Copy this file to the Portal server.

3.  Open the cacerts file as a JKS key database by using iKeyman.bat in the  Appserver/bin folder. The cacerts file is in the AppServer/java/jre/lib/security folder. The password is changeit.

    !!!note
        If there are two java folders (one named java and the other named java1.7_xxx), use the cacerts file from the java1.7_xxx folder.

4.  After you open iKeyman and load the cacerts file, select the signer certificates from the key database content list and click **Add** to add the Connections certificate. Assign it a name.

5.  Exit from iKeyman and restart the Portal server.



