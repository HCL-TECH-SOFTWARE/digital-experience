# HCL Web Content Manager tracing

Use Application Server trace facilities to capture trace information for HCL Web Content Manager (WCM). Tracing can be enabled either permanently or for the current HCL Digital Experience (DX) session only. WCM uses IBM® WebSphere® Application Server trace facilities to generate trace data. Enable tracing when you need detailed output to help debug issues effectively.

## Enable static (extended) tracing

Static tracing captures data from server startup through problem recreation. Use this option when continuous trace data collection is required.

1. Log in to the **Integrated Solutions Console** as the WebSphere Application Server administrator.  
2. Select **Troubleshooting > Logs and Traces > WebSphere_Portal > Diagnostic Trace**.  
3. On the **Configuration** tab, select the **Enable Log** checkbox. Adjust **Maximum File Size** and **Maximum Number of Historical Files** as needed to prevent trace data from being overwritten.  
4. Click **Change Log Level Details**, and enter the required trace string from the table below.  
5. Click **OK**, and save your changes.  
6. Restart the **WebSphere_Portal** application server.

## Enable dynamic tracing

Dynamic tracing can be used when restarting the server is not possible.

1. Log in to the **Integrated Solutions Console** as the Portal administrator.  
2. Select **Administration > Portal Analysis > Enable Tracing**. The **Enable Tracing** portlet appears.  
3. Type the required trace string into the **Append these trace settings** field.  
4. Click the **Add** icon. The portlet updates the **Current trace settings** field.

    !!!note
    Restarting HCL Portal removes traces set using the **Enable Tracing** portlet.

## Trace Strings

HCL DX 9.5 and later provides the following trace strings for detailed debugging and analysis.

|Issue|Trace String|
|-----|------------|
|General Search Traces|-   `com.ibm.hrl.*=all:`<br>-   `com.ibm.crawler.*=all:`<br>-   `com.ibm.portal.search.*=all:`<br>-   `com.ibm.lotus.search.*=all:`<br>-   `com.ibm.siapi.search.*=all`|
|Remote Search Server|-   `com.ibm.hrl.*=all:`<br>-   `com.ibm.crawler.*=all:`<br>-   `com.ibm.portal.search.*=all:`<br>-   `com.ibm.lotus.search.*=all:`<br>-   `com.ibm.siapi.search.*=all`|
|WCM Seedlist|-   `com.ibm.workplace.wcm.searchseed.*=finest:`<br>-   `com.ibm.lotus.search.providers.content.seedlist.*=finest:`<br>-   `com.ibm.workplace.wcm.seedlist.*=finest:`<br>-   `com.ibm.workplace.wcm.services.*=finest`|
|WCM REST API|-   `com.ibm.workplace.wcm.rest.*=all:`<br>-   `com.hcl.wcm.rest.*=all:`|
|Search Token issues|-   `com.ibm.ilel.*=all`|

The following table is the list of all trace strings available for HCL DX 8.5 and higher releases:

|Issue|Trace String|
|-----|------------|
|General Information|-   `com.ibm.workplace.wcm.*=all`<br>-   `com.aptrix.*=all`<br>-   `com.presence.connect.*=all`|
|Syndication|-   Refer to [Collecting Data: Syndication for HCL Portal 8.5](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013616)|
|Security|-   `com.ibm.wps.engine.*=all`<br>-   `com.ibm.wps.services.puma.*=all`<br>-   `com.ibm.wps.puma.*=all:com.ibm.wps.um.*=all`<br>-   `com.ibm.wps.sso.*=all`<br>-   `com.ibm.wps.services.authentication.*=all`<br>-   `com.ibm.ws.security.*=all`<br>-   `com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all`<br>-   `com.ibm.wsspi.wim.*=all:com.ibm.workplace.wcm.*=all`<br>-   `com.aptrix.*=all`<br>-   `com.presence.connect.wmmcomms.*=all`<br>-   `com.presence.connect.profile.*=finest`|
|Authoring Portlet|-   `com.ibm.workplace.wcm.app.ui.*=all`<br>-   `com.aptrix.*=all`<br>-   `com.presence.connect.*=all`<br><br>**Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.<br><br>There are multiple methods for collecting this information:<br>-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)<br>-   [Fiddler](https://www.telerik.com/fiddler)<br>-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)<br>-   [Firefox Firebug](https://getfirebug.com)|
|API|-   `com.ibm.workplace.wcm.*=all`<br>-   `com.aptrix.*=all:`<br>-   `com.presence.connect.*=all`<br>|
|WCM REST API|-   `com.ibm.workplace.wcm.*=all`|
|JSR 286 Web Content Viewer|-   `com.aptrix.*=all`<br>-   `com.presence.*=all`<br>-   `com.ibm.workplace.wcm.*=fine`<br>-   `com.ibm.workplace.wcm.app.ui.portlet.*=all`<br>-   `com.ibm.websphere.wmm.*=all`<br>-   `com.ibm.wps.services.puma.*=all`<br>-   `com.ibm.wps.puma.*=all`<br>-   `com.ibm.workplace.wcm.resolver.*=all`<br>-   `com.ibm.workplace.wcm.services.addressability.*=all`|
|Remote Web Content Viewer Portlet|On the remote rendering server:-   `com.ibm.workplace.wcm.app.ui.remote.*=all`<br>-   `com.ibm.workplace.wcm.app.ui.portlet.*=all`<br><br>If the credential vault is in use, add the following the remote rendering server traces:<br>-   `com.ibm.wps.services.credentialvault.*=finest`<br>-   `com.ibm.wps.sso.credentialvault.*=finest`<br>-   `com.ibm.wps.command.credentialvault.*=finest`<br>-   `com.ibm.wps.engine.Servlet.*=finest`<br><br>On the rendering server:<br>-   `com.aptrix.*=all`<br>-   `com.presence.connect.wmmcomms.*=all`<br>-   `com.ibm.wps.services.puma.*=all`<br>-   `com.ibm.wps.puma.*=all`<br>-   `com.ibm.wps.sso.*=all`<br>-   `com.ibm.wps.services.authentication.*=all`<br>-   `com.ibm.ws.security.*=all`<br>-   `com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all`<br>-   `com.ibm.wsspi.wim.*=all`|
|Caching|-   `com.presence.connect.cache.*=finest`<br>-   `com.presence.connect.business.*=finest`<br>-   `com.aptrix.pluto.renderer.*=finest`<br>-   `com.ibm.workplace.wcm.services.content.*=finest`|
|Pre-rendering|-   `com.aptrix.cacher.*=finest`|
|Enterprise Content Management Integration|Document Picker issues:-   `com.ibm.wps.proxy.*=all`<br>-   `com.ibm.mm.proxy.*=all`<br>-   `com.ibm.lotus.quickr.*=all`<br><br>Personalization Federated Document issues:<br>-   `com.ibm.workplace.wcm.pzn.ecm.*=all`<br>-   `com.ibm.websphere.personalization.*=all`<br><br>**Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.<br><br>There are multiple methods for collecting this information:<br>-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)<br>-   [Fiddler](https://www.telerik.com/fiddler)<br>-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)<br>-   [Firefox Firebug](https://getfirebug.com)|
|Blogs and Wikis|-   `com.ibm.workplace.wcm.*=all`<br>-   `com.aptrix.*=all:com.presence.*=all`<br>-   `com.ibm.icm.jcr.*=finest`<br>-   `com.ibm.icm.ci.schema.impl.SchemaService=info`|
|Java Content Repository (JCR)|-   `com.ibm.icm.*=finest`<br>-   `com.ibm.icm.ci.schema.impl.SchemaService=info`|
|Java Content Repository (JCR) Export/Import of Library|-   `com.ibm.icm.jcr.command.*=all`|
|Web Content Integrator|-   `com.ibm.workplace.feed.*=finest`|
|Migration|-   `com.ibm.workplace.wcm.app.migration.* = all`|
|Seedlist and Search|WCM Seedlist issues:<br>-   `com.ibm.lotus.search.providers.content.seedlist.*=finer`<br>-   `com.ibm.workplace.wcm.seedlist.*=finer`<br>-   `com.ibm.workplace.wcm.services.*=finer`<br><br>WCM Search issues:<br>-   `com.aptrix.pluto.cmpnt.*=finest`<br>-   `com.ibm.workplace.wcm.data.siapi.*=finest`<br>-   `com.ibm.workplace.wcm.services.siapi.*=finest`|
|Personalization|For issues with personalization in HCL Portal (rules, campaigns, application objects): <br>-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all`<br><br>For issues with personalization and security:<br>-   `com.ibm.webshere.personalization.=finest:`<br>-   `com.ibm.icm.ci.query.impl.ResultSetProcessor=finest`<br>-   `com.ibm.icm.ci.query.impl.QueryProcessor=finest:com.ibm.wps.services.puma.=finest:`<br>-   `com.ibm.wps.puma.*=finest`<br><br>For issues with personalization and Web Content Management (WCM):<br>-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all:`<br>-   `com.ibm.workplace.wcm.pzn.*=all:com.ibm.workplace.wcm.services.pzn.*=all`<br><br>For issues with personalization and JCR:<br>-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all:`<br>-   `com.ibm.icm.*=finest:com.ibm.icm.ci.schema.impl.SchemaService=info`<br><br>For issues with personalization authoring performance:<br>-   `com.ibm.websphere.personalization.*=all:com.ibm.wps.caf.*=all`<br><br>For issues with personalization runtime performance:<br>-   `com.ibm.websphere.personalization.*=all`<br><br>For issues with personalization publishing:<br>-   `com.ibm.websphere.personalization.*=all`<br><br>For configuration issues with personalization authoring environment (Navigator Portlet, Editor Portlet, and List Portlet):<br>-   `com.ibm.websphere.personalization.*=all:com.ibm.wps.caf.*=all`|
|Java Message Service (JMS)|-   `com.ibm.workplace.wcm.services.messaging.*=all`<br>-   `com.ibm.workplace.wcm.messaging.*=all`<br>-   `Messaging=all:JMSApi=all:JMSServer=all`|
|Advanced Editor (RTE)|Enable Java Console logging on client system and send output.<br><br>**Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.<br><br>There are multiple methods for collecting this information:<br>-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)<br>-   [Fiddler](https://www.telerik.com/fiddler)<br>-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)<br>-   [Firefox Firebug](https://getfirebug.com)|
|Multilingual Solutions|MLS Install Trace location: [WAS_PROFILE_ROOT]/ConfigEngine/log/ConfigTrace.logConfiguration Issues:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.messaging.*=all`<br><br>Authoring plugin:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.processor.*=all`<br>-   `com.ibm.workplace.wcm.ml.MLServlet=all`<br>-   `com.ibm.workplace.wcm.ml.ServletUtils=all`<br><br>Workflow Traces:<br>1.  Localize stage:<br> -   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.LocalizeCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncUpdateCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction=all`<br><br>2.  Regionalize stage:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.RegionalizeMLCustomWorkflowAction=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.RegionalizeCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncUpdateCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction=all`<br><br>3.  Pending Publish stage:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.SyncPublishMLCustomWorkflowAction=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncPublishCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncStageCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`<br><br>4.  Pending Expired stage:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.SyncExpireMLCustomWorkflowAction=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncExpireCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncStageCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`<br><br>5.  Delete stage:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.SyncDeleteMLCustomWorkflowAction=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncDeleteCustomWorkflowActionService=all`<br>-   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`<br><br>6.  Servlet Rendering Plugin Traces:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.processor.LocaleNavigatorProcessorImpl=all`<br><br>7.  Portlet Rendering Plugin Traces:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.contextprocessor.*=all`<br><br>8.  Library Copy Traces:<br>-   `com.ibm.workplace.wcm.ml.utils.*=all`<br>-   `com.ibm.workplace.wcm.ml.processor.LibraryCopyContextProcessorImpl=all`|
|Workflow|-   `com.ibm.workplace.wcm.api.*=finest`<br>-   `com.aptrix.pluto.workflow.*=finest`<br>-   `com.ibm.workplace.wcm.services.workflow.*=finest`|

!!! warning "Warning"
    - Enabling general tracing can cause the server to become unresponsive, as it may generate a large amount of log output in a short period of time, rapidly consuming disk space and system resources. To prevent this, always set the log scope as narrowly as necessary for troubleshooting, and disable general tracing as soon as you have collected the required information.

    - The Kubernetes probe is configured by default to target the server's landing page. To reduce the impact of page loads on your site, adjust the [Probes configuration](../../../..//deployment/install/container/helm_deployment/preparation/mandatory_tasks/probes_configuration.md) or change the landing page to one with a smaller footprint. This helps minimize resource consumption and improves overall site responsiveness during tracing and monitoring.

The resulting traces for Virtual Member Manager are written to the following locations:

- **AIX® and Linux™:** `wp_profile_root/logs/HCL Portal and HCL Web Content Manager/trace.log`
- **Windows™:** `wp_profile_root\logs\HCL Portal and HCL Web Content Manager\trace.log`

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact Support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.

???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)