# Troubleshooting Installation

These are some solutions to problems with installing Content Template.

## Content Template 4.4 cannot be installed

-   **Problem**

    Content Template 4.4 can only be installed on a server where the **Page Templates** page is located under the **Hidden Pages** page.

-   **Symptoms:**

    You might see something similar to the following message in the ConfigTrace.log or on the command line you ran the install from:

    ```
    [xmlaccess] EJPXB0002I: Reading input file /opt/WebSphere/wp_profile/ConfigEngine/config/work/components/wp.ctc.templates/ctc-template-portlets.xml
    [xmlaccess] <?xml version="1.0" encoding="UTF-8"?&gt; 
    [xmlaccess] <!-- HCL Portal/8.0.0.1 build wp8001CF07_001_15 exported on Tue Aug 13 15:44:38 EST 2013 from min70mig.wcm.lab/127.0.0.1 --&gt; 
    [xmlaccess] <request build="wp8001CF07_001_15" type="update" version="8.0.0.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"&gt; 
    [xmlaccess] <status element="all" result="ok"/&gt; [xmlaccess] </request&gt; 
    [xmlaccess] EJPXB0020I: The request was processed successfully on the server. 
    [echo] EJPCE0150I: Xmlaccess script completed successfully ctc-template-portlets.xml 
    [copy] Copying 1 file to /opt/WebSphere/wp_profile/ConfigEngine/config/work/components/wp.ctc.templates 
    [xmlaccess] EJPXB0006I: Connecting to URL http://localhost:10039/wps/config/ 
    [xmlaccess] EJPXB0002I: Reading input file /opt/WebSphere/wp_profile/ConfigEngine/config/work/components/wp.ctc.templates/ctc-templates.xml [xmlaccess] <?xml version="1.0" encoding="UTF-8"?&gt; 
    [xmlaccess] <!-- HCL Portal/8.0.0.1 build wp8001CF07_001_15 exported on Tue Aug 13 15:44:42 EST 2013 from min70mig.wcm.lab/127.0.0.1 --&gt; 
    [xmlaccess] <request build="wp8001CF07_001_15" type="update" version="8.0.0.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"&gt; 
    [xmlaccess] <status element="" result="failed"&gt; 
    [xmlaccess] <message id="EJPXA0001E"&gt;EJPXA0001E: An error occurred while processing the XML configuration request.</message&gt; 
    [xmlaccess] <message&gt;has-system-mapping attribute of the content-mapping-info element must not be true if a system mapping is not specified and the parent page does not have a system mapping</message&gt; 
    [xmlaccess] <stacktrace&gt;<![CDATA[ [xmlaccess] com.ibm.wps.command.xml.XmlCommandException: EJPXA0001E: An error occurred while processing the XML configuration request. 
    [xmlaccess] at com.ibm.wps.command.xml.items.ContentNodeItem.executeWCMSynchronization(ContentNodeItem.java:1942) [xmlaccess] at com.ibm.wps.command.xml.items.ContentNodeItem.postProcess(ContentNodeItem.java:2138)
    ```

    Additionally, you may also see a message similar to this message in the log:

    ```
    [xmlaccess] EJPXB0015E: Server response indicates an error. 
    [echo] EJPCE0104E: Error running scripts at: /opt/WebSphere/wp_profile/paa/wp.ctc/components/wp.ctc.templates/xmlaccess/install/ctc-templates.xml. EJPCE0160I: Verify the PortalAdminId and PortalAdminPwd are set correctly in the wkplc.properties file 
    [echo] deploy-apps-applySIFeaturePack EJPCE0101E: Extension point implementation task failure on component for the following assembly: wp.ctc, component components/wp.ctc.templates [echo] 
    [si-deploy-paa-content] EJPCE0016E: Task has failed to complete with the following arguements: ConfigExtensionList=-applySIFeaturePack, ComponentList=components/wp.ctc.templates,components/wp.ctc.design,components/wp.ctc,components/wp.ctc.sitetemplates,components/wp.ctc.demo, FunctionalArea=featurepackSI 
    [echo] [deploy-paa]: wp.ctc /opt/WebSphere/wp_profile/paa.EJPCE0007E: Task failed to complete. Please check logs for further details  
    
    BUILD FAILED 
    /opt/WebSphere/PortalServer/solutionInstaller/wp.si/config/includes/SolutionInstaller_cfg.xml:561: [deploy-paa]: wp.ctc 
    /opt/WebSphere/wp_profile/paa.EJPCE0007E: Task failed to complete. Please check logs for further details</p>
    ```

-   **Cause:**

    This can happen when the **Page Templates** page is not located under the **Hidden Pages** page.

-   **Solution:**

    If the **Page Templates** page is not located under the **Hidden Pages** page:

    -   Update the page templates as described in the portal migration documentation. For instructions, see [Updating page templates](../migrate/mig_t_update_templates.md).
    -   You can alternately run the installation script again with `UPGRADE_CTC_3=true` in ctc.properties. This moves the page templates into the hidden pages location.

**Parent topic:**[Troubleshooting Content Template sites](../ctc/ctc_trouble_overview.md)

