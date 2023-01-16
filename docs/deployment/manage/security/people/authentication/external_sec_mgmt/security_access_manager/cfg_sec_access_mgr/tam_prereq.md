# Security Access Manager prerequisites

Complete the prerequisite tasks before you configure IBM Security Access Manager.

Complete the following task before you configure Security Access Manager:

1.  Install HCL Digital Experience.
2.  Run the appropriate Configuration Wizard option to configure HCL Digital Experience. The stand-alone server and production server options include a database transfer and LDAP server configuration.
3.  Install and configure Security Access Manager.
4.  Configure the WebSEAL security proxy. Refer to the WebSEAL installation guide for information.
5.  Set `JAVA_HOME` in your operating system shell to point to the IBM SDK that your Portal server is running on.

    Example: C:\\IBM\\WebSphere\\AppServer\\java\\8.0

6.  Ensure that the path of your operating system shell includes %JAVA\_HOME%\\bin directory.

!!!tip
    IBM® WebSphere® Application Server ships a PD.jar file that HCL Digital Experience uses to configure Security Access Manager. The file is in the [AppServer\_root](../../../../../../../../guide_me/wpsdirstr.md#appserver_root)/tivoli/tam directory. However, the Security Access Manager typically contains a newer version of the PD.jar file.

To enable HCL Digital Experience tasks, copy the PD.jar to <AppServer\>/<javaversion\>/jre/lib/ext/ \(ideally the updated PD.jar' minimally, the [AppServer\_root](../../../../../../../../guide_me/wpsdirstr.md#appserver_root)/tivoli/tam/PD.jar.

The PD.jarmay need access to the class definition sun.io.MalformedInputException.

If the class is needed, the jar <AppServer\>/lib/jacl.jar should be copied to:

<AppServer\>/<javaversion\>/jre/lib/ext/


