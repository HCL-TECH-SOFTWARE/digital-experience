# Setting Up File Type Definitions to Enable Document Conversion Services

Set up file definition types to ensure that document conversions works for the Microsoft Office and OpenOffice file types.

!!!important "Notice of Deprecation and Replacement of Document Conversion Services"
    Document Conversion Services components in HCL Digital Experience software have been replaced in HCL DX Cumulative Fix release CF205. HCL Digital Experience has removed the third-party component, which was supplied by Oracle, that provided these capabilities and replaced them with HCL-supported functions. At this point, HCL Digital Experience v8.5, v9 and v9.5 Container Update and CF releases include the HCL supported component. Refer to the following HCL Digital Experience support Knowledge Article: [Replacement of Document Conversion Services component in HCL Digital Experience software for additional information](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908){:target="_blank"}.

In HCL Portal versions CF205 and later, DX Document Conversion Services is automatically configured to use HCL-supported functions. The third-party component, which was supplied by Oracle, is no longer included. In HCL Portal versions CF204 and earlier, HCL Portal installations upgraded from CF203 or CF204, and HCL Portal installations upgraded after [manually backing up the Oracle Stellent files](dcs_backup.md), set up file definition types to ensure that document conversions works for the Microsoft Office and OpenOffice file types.

1.  Locate the content-types.properties file in the following directory:

    -   AIX®, Linux™, and Windows™: AppServer_root/java/jre/lib

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

    -   **Microsoft® Office (before 2007)**

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
    |Linux| <br><pr> \``` <br> X11R6 <br> LessTif or Motif with libXm.so.1 (Stellent 8.0.1) <br> LessTif or Motif with libXm.so.2 (Stellent 7.75 or earlier)<br> ```|
    |Solaris|X11R6|
    |Windows|n/a|
    | z/OS®| X11R6|

    If OpenMotif is included on the Linux server, do not need to install the LessTif Rational Portfolio Manager package. The binary files for the LessTif package are already included.


A temporary directory is used for document conversion.

-   Windows: c:\\temp
-   AIX and Linux: /tmp

    !!!note
        The default /tmp directory is in the root system. If it does not exist, it must be created.

To create a temporary directory other than the default, edit the convertors.xml file in wp_profile_root/PortalServer/dcs. Add the property tempDir to the `<global>` tag as follows:

```
<global>
<property name="tempDir" value="yourtempDirectory"/>
</global>
```

To start the native application when you click the attachment, the following MIME types must be registered in WebSphere® Application Server to enable browsers to properly display documents of that type. The following extra types must be registered:

-   application/msword doc
-   application/vnd.ms-excel xls

For AIX and Linux, you must start IBM Workplace Services Express® from the console or an X-Server-enabled client with the same privileges (**xhost+**) as the console.

!!!note
    Graphical conversions require access to an X Windows server. They require access to the **Xm**, **Xt**, and **X11** libraries. Also, the DISPLAY environment variable must be set to the account that Portal is running under. The DISPLAY must be valid at the point that Portal is started. Therefore, telnetting to a server and starting Portal from there does not work. You must start the portal from an X terminal.

For AIX, refer to the prerequisites as described in [Configuring images for Document Conversion Services](./configuration/index.md).


