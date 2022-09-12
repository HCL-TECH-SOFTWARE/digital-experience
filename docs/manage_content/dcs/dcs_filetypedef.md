# Setting Up File Type Definitions to Enable Document Conversion Services

Set up file definition types to ensure that document conversions works for the Microsoft Office and OpenOffice file types.

!!!important "**Notice of Deprecation and Replacement of Document Conversion Services:**"

Document Conversion Services components in HCL Digital Experience software will be updated and replaced in the future HCL DX Container Update release in 2022. HCL Digital Experience will remove the third-party component, which is supplied by Oracle, that provides these capabilities and replace them with HCL supported functions. After that point, HCL Digital Experience v8.5, v9 and v9.5 Container Update and CF releases will include the newer HCL supported component. Refer to the following HCL Digital Experience support Knowledge Article: [Replacement of Document Conversion Services component in HCL Digital Experience software for additional information](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908){:target="_blank"}.

1.  Locate the content-types.properties file in the following directory:

    -   AIX®, HP-UX, Linux™, Solaris, Windows™: [AppServer\_root](../../guide_me/wpsdirstr.md#appserverroot)/java/jre/lib
    -   IBM® i:
        -   JDK 7: /QOpenSys/QIBM/ProdData/JavaVM/jdk70/64bit/jre/lib
        -   JDK 7.1: /QOpenSys/QIBM/ProdData/JavaVM/jdk71/64bit/jre/lib
    -   z/OS®: [AppServer\_root](../../guide_me/wpsdirstr.md#appserverroot)/java/lib
2.  Update the content-types.properties file as follows.

    These extensions are case-sensitive.

    -   **Microsoft® Office 2007**

        ```
        application/vnd.openxmlformats-officedocument.wordprocessingml.document: \
        		 description=Microsoft Word 2007 file;\
        		 file_extensions=.docx
        
        application/vnd.openxmlformats-officedocument.presentationml.presentation: \
        		 description=Microsoft PowerPoint 2007 file;\
        		 file_extensions=.pptx
        
        application/vnd.openxmlformats-officedocument.spreadsheetml.sheet: \
        		 description=Microsoft Excel 2007 file;\
        		 file_extensions=.xlsx
        ```

    -   **Microsoft® Office \(before 2007\)**

        ```
        application/msword: \
        	description=Microsoft Word;\
        	file_extensions=.doc
        
        application/vnd.ms-excel: \
        	description=Microsoft Excel;\
        	file_extensions=.xls
        
        application/vnd.ms-powerpoint: \
        	description=Microsoft PowerPoint;\
        	file_extensions=.ppt
        
        ```

    -   **Lotus® SmartSuite®**

        ```
        application/vnd.lotus-freelance: \
                description=Lotus Freelance;\
                file_extensions=.prz
        
        application/vnd.lotus-1-2-3: \
                description=Lotus 1-2-3;\
                file_extensions=.123
        
        application/vnd.lotus-wordpro: \
                description=Lotus WordPro;\
                file_extensions=.lwp
        
        ```

    -   **OpenOffice**

        ```
        application/vnd.sun.xml.writer: \
        	description=Open Office;\
        	file_extensions=.sxw
        
        application/vnd.sun.xml.writer.template: \
        	description=Open Office;\
        	file_extensions=.stw
        
        application/vnd.sun.xml.writer.global: \
        	description=Open Office;\
        	file_extensions=.sxg
        
        application/vnd.sun.xml.calc: \
        	description=Open Office;\
        	file_extensions=.sxc
        
        application/vnd.sun.xml.calc.template: \
        	description=Open Office;\
        	file_extensions=.stc
        
        application/vnd.sun.xml.impress: \
        	description=Open Office;\
        	file_extensions=.sxi
        
        application/vnd.sun.xml.impress.template: \
        	description=Open Office;\
        	file_extensions=.sti
        
        application/vnd.sun.xml.draw: \
        	description=Open Office;\
        	file_extensions=.sxd
        
        application/vnd.sun.xml.draw.template: \
        	description=Open Office;\
        	file_extensions=.std
        
        application/vnd.sun.xml.math: \
        	description=Open Office;\
        	file_extensions=.sxm
        
        ```

3.  Install the appropriate package for your system.

    |Systems|Extra Packages|
    |-------|--------------|
    |AIX|X11R6|
    |HP-UX|X11R6|
    |IBM i \(v7r1\)|X11R6|
    |Linux|    ```
X11R6
LessTif or Motif with libXm.so.1 (Stellent 8.0.1)
LessTif or Motif with libXm.so.2 (Stellent 
7.75 or earlier)
    ```

|
    |Solaris|X11R6|
    |Windows|n/a|
    |z/OS|X11R6|

    If OpenMotif is included on the Linux server, do not need to install the LessTif Rational Portfolio Manager package. The binary files for the LessTif package are already included.


A temporary directory is used for document conversion.

-   Windows: c:\\temp
-   AIX, HP-UX, Linux, Solaris: /tmp

    !!!note
        The default /tmp directory is in the root system. If it does not exist, it must be created.

-   IBM i: /temp
-   z/OS: /tmp

To create a temporary directory other than the default, edit the convertors.xml file in [wp\_profile\_root](../../guide_me/wpsdirstr.md#wpprofileroot)/PortalServer/dcs. Add the property tempDir to the `<global>` tag as follows:

```
<global>
<property name="tempDir" value="yourtempDirectory"/>
</global>
```

To start the native application when you click the attachment, the following MIME types must be registered in WebSphere® Application Server to enable browsers to properly display documents of that type. The following extra types must be registered:

-   application/msword doc
-   application/vnd.ms-excel xls

For AIX, HP-UX, Linux, Solaris, you must start IBM Workplace Services Express® from the console or an X-Server-enabled client with the same privileges \(**xhost+**\) as the console.

!!!note
    Graphical conversions require access to an X Windows server. They require access to the **Xm**, **Xt**, and **X11** libraries. Also, the DISPLAY environment variable must be set to the account that Portal is running under. The DISPLAY must be valid at the point that Portal is started. Therefore, telnetting to a server and starting Portal from there does not work. You must start the portal from an X terminal.

For AIX, HP-UX, and IBM i, refer to the prerequisites as described in [Configuring images for Document Conversion Services](/configuration/dcs_config_images.md).

For IBM i, refer to the prerequisites as described in [Configuring images for Document Conversion Services](/configuration/dcs_config_i.md).


