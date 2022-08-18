# HCL Web Content Manager tracing

Enable the use of WebSphere Application Server trace facilities to create trace information for Web Content Manager. This tracing can be enabled either permanently or for just the current HCL Digital Experience session.

HCL Web Content Manager uses the IBM® WebSphere® Application Server trace facilities to create trace information. If you need detailed trace output of Web Content Manager to debug a problem, follow these steps:

## Enable static \(extended\) tracing

Static tracing is recommended when there is a need to capture data, as it collects data from server startup until problem recreation.

1.  Log in to the Integrated Solutions Console as the WebSphere Application Server administrator.
2.  Select **Troubleshooting** \> **Logs and Traces** \> **WebSphere\_Portal** \> **Diagnostic Trace**.
3.  On the **Configuration** tab, ensure that the **Enable Log** checkbox is selected. On this same tab, increase the **Maximum File Size** and **Maximum Number of Historical Files** as needed to ensure that the tracing of the problem recreation is not overwritten due to the amount of traffic on the system and output of the tracing itself.
4.  Click **Change Log Level Details** and enter the trace string based on the table below.
5.  Click **OK** and save the changes.
6.  Restart the **WebSphere\_Portal** application server.

## Enable dynamic tracing

Dynamic tracing can be used for situations that do not permit a server restart.

1.  Log in to the Integrated Solutions Console as the Portal administrator.
2.  Select **Administration** \> **Portal Analysis** \> **Enable Tracing**. The Enable Tracing portlet appears.
3.  Type the required trace string into the field **Append these trace settings** based on the table below.
4.  Click the **Add** icon. Enable Tracing updates the field **Current trace settings**.

    **Note:** Restarting HCL Portal will remove traces that were set by using the Enable Tracing Administration portlet.


## Trace Strings

In HCL Digital Experience 9.5 and higher releases, the following trace strings are now available:

|Issue|Trace String|
|-----|------------|
|General Search Traces|-   `com.ibm.hrl.*=all:`
-   `com.ibm.crawler.*=all:`
-   `com.ibm.portal.search.*=all:`
-   `com.ibm.lotus.search.*=all:`
-   `com.ibm.siapi.search.*=all`

|
|Remote Search Server|-   `com.ibm.hrl.*=all:`
-   `com.ibm.crawler.*=all:`
-   `com.ibm.portal.search.*=all:`
-   `com.ibm.lotus.search.*=all:`
-   `com.ibm.siapi.search.*=all`

|
|WCM Seedlist|-   `com.ibm.workplace.wcm.searchseed.*=finest:`
-   `com.ibm.lotus.search.providers.content.seedlist.*=finest:`
-   `com.ibm.workplace.wcm.seedlist.*=finest:`
-   `com.ibm.workplace.wcm.services.*=finest`

|
|WCM REST API|-   `com.ibm.workplace.wcm.rest.*=all:`
-   `com.hcl.wcm.rest.*=all:`

|
|Search Token issues|-   `com.ibm.ilel.*=all`

|

The following table is the list of all trace strings available for HCL Digital Experience 8.5 and higher releases:

|Issue|Trace String|
|-----|------------|
|General Information|-   `com.ibm.workplace.wcm.*=all`
-   `com.aptrix.*=all`
-   `com.presence.connect.*=all`

|
|Syndication|-   Refer to [Collecting Data: Syndication for HCL Portal 8.5](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013616)

|
|Security|-   `com.ibm.wps.engine.*=all`
-   `com.ibm.wps.services.puma.*=all`
-   `com.ibm.wps.puma.*=all:com.ibm.wps.um.*=all`
-   `com.ibm.wps.sso.*=all`
-   `com.ibm.wps.services.authentication.*=all`
-   `com.ibm.ws.security.*=all`
-   `com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all`
-   `com.ibm.wsspi.wim.*=all:com.ibm.workplace.wcm.*=all`
-   `com.aptrix.*=all`
-   `com.presence.connect.wmmcomms.*=all`
-   `com.presence.connect.profile.*=finest`

|
|Authoring Portlet|-   `com.ibm.workplace.wcm.app.ui.*=all`
-   `com.aptrix.*=all`
-   `com.presence.connect.*=all`

 **Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.

There are multiple methods for collecting this information:

-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)
-   [Fiddler](https://www.telerik.com/fiddler)
-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)
-   [Firefox Firebug](https://getfirebug.com)

|
|API|-   `com.ibm.workplace.wcm.*=all`
-   `com.aptrix.*=all:`
-   `com.presence.connect.*=all`

|
|WCM REST API|-   `com.ibm.workplace.wcm.*=all`

|
|JSR 286 Web Content Viewer|-   `com.aptrix.*=all`
-   `com.presence.*=all`
-   `com.ibm.workplace.wcm.*=fine`
-   `com.ibm.workplace.wcm.app.ui.portlet.*=all`
-   `com.ibm.websphere.wmm.*=all`
-   `com.ibm.wps.services.puma.*=all`
-   `com.ibm.wps.puma.*=all`
-   `com.ibm.workplace.wcm.resolver.*=all`
-   `com.ibm.workplace.wcm.services.addressability.*=all`

|
|Remote Web Content Viewer Portlet|On the remote rendering server:-   `com.ibm.workplace.wcm.app.ui.remote.*=all`
-   `com.ibm.workplace.wcm.app.ui.portlet.*=all`

If the credential vault is in use, add the following the remote rendering server traces:

-   `com.ibm.wps.services.credentialvault.*=finest`
-   `com.ibm.wps.sso.credentialvault.*=finest`
-   `com.ibm.wps.command.credentialvault.*=finest`
-   `com.ibm.wps.engine.Servlet.*=finest`

On the rendering server:

-   `com.aptrix.*=all`
-   `com.presence.connect.wmmcomms.*=all`
-   `com.ibm.wps.services.puma.*=all`
-   `com.ibm.wps.puma.*=all`
-   `com.ibm.wps.sso.*=all`
-   `com.ibm.wps.services.authentication.*=all`
-   `com.ibm.ws.security.*=all`
-   `com.ibm.ws.wim.*=all:com.ibm.websphere.wim.*=all`
-   `com.ibm.wsspi.wim.*=all`

|
|Caching|-   `com.presence.connect.cache.*=finest`
-   `com.presence.connect.business.*=finest`
-   `com.aptrix.pluto.renderer.*=finest`
-   `com.ibm.workplace.wcm.services.content.*=finest`

|
|Pre-rendering|-   `com.aptrix.cacher.*=finest`

|
|Enterprise Content Management Integration|Document Picker issues:-   `com.ibm.wps.proxy.*=all`
-   `com.ibm.mm.proxy.*=all`
-   `com.ibm.lotus.quickr.*=all`

Personalization Federated Document issues:

-   `com.ibm.workplace.wcm.pzn.ecm.*=all`
-   `com.ibm.websphere.personalization.*=all`

**Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.

There are multiple methods for collecting this information:

-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)
-   [Fiddler](https://www.telerik.com/fiddler)
-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)
-   [Firefox Firebug](https://getfirebug.com)

|
|Blogs and Wikis|-   `com.ibm.workplace.wcm.*=all`
-   `com.aptrix.*=all:com.presence.*=all`
-   `com.ibm.icm.jcr.*=finest`
-   `com.ibm.icm.ci.schema.impl.SchemaService=info`

|
|Java Content Repository \(JCR\)|-   `com.ibm.icm.*=finest`
-   `com.ibm.icm.ci.schema.impl.SchemaService=info`

|
|Java Content Repository \(JCR\) Export/Import of Library|-   `com.ibm.icm.jcr.command.*=all`

|
|Web Content Integrator|-   `com.ibm.workplace.feed.*=finest`

|
|Migration|-   `com.ibm.workplace.wcm.app.migration.* = all`

|
|Seedlist and Search|WCM Seedlist issues:-   `com.ibm.lotus.search.providers.content.seedlist.*=finer`
-   `com.ibm.workplace.wcm.seedlist.*=finer`
-   `com.ibm.workplace.wcm.services.*=finer`

WCM Search issues:

-   `com.aptrix.pluto.cmpnt.*=finest`
-   `com.ibm.workplace.wcm.data.siapi.*=finest`
-   `com.ibm.workplace.wcm.services.siapi.*=finest`

|
|Personalization|For issues with personalization in HCL Portal \(rules, campaigns, application objects\):-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all`

 For issues with personalization and security:

-   `com.ibm.webshere.personalization.=finest:`
-   `com.ibm.icm.ci.query.impl.ResultSetProcessor=finest`
-   `com.ibm.icm.ci.query.impl.QueryProcessor=finest:com.ibm.wps.services.puma.=finest:`
-   `com.ibm.wps.puma.*=finest`

For issues with personalization and Web Content Management \(WCM\):

-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all:`
-   `com.ibm.workplace.wcm.pzn.*=all:com.ibm.workplace.wcm.services.pzn.*=all`

For issues with personalization and JCR:

-   `com.ibm.websphere.personalization.*=all:com.ibm.websphere.query.*=all:`
-   `com.ibm.icm.*=finest:com.ibm.icm.ci.schema.impl.SchemaService=info`

For issues with personalization authoring performance:

-   `com.ibm.websphere.personalization.*=all:com.ibm.wps.caf.*=all`

For issues with personalization runtime performance:

-   `com.ibm.websphere.personalization.*=all`

For issues with personalization publishing:

-   `com.ibm.websphere.personalization.*=all`

For configuration issues with personalization authoring environment \(Navigator Portlet, Editor Portlet, and List Portlet\):

-   `com.ibm.websphere.personalization.*=all:com.ibm.wps.caf.*=all`

|
|Java Message Service \(JMS\)|-   `com.ibm.workplace.wcm.services.messaging.*=all`
-   `com.ibm.workplace.wcm.messaging.*=all`
-   `Messaging=all:JMSApi=all:JMSServer=all`

|
|Advanced Editor \(RTE\)|Enable Java Console logging on client system and send output.**Note:** Client-side trace required. When recreating the issue, it is important to note any JavaScript exceptions you may see in the browser. Additionally, you need to collect some browser-side information so we can see the requests being passed.

There are multiple methods for collecting this information:

-   [The JavaScript console of the browser](https://www.w3schools.com/jsref/met_console_log.asp)
-   [Fiddler](https://www.telerik.com/fiddler)
-   [Firefox HTTP Header Live](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/)
-   [Firefox Firebug](https://getfirebug.com)

|
|Multilingual Solutions|MLS Install Trace location: \[WAS\_PROFILE\_ROOT\]/ConfigEngine/log/ConfigTrace.logConfiguration Issues:

-   `com.ibm.workplace.wcm.ml.utils.*=all`
-   `com.ibm.workplace.wcm.ml.messaging.*=all`

Authoring plugin:

-   `com.ibm.workplace.wcm.ml.utils.*=all`
-   `com.ibm.workplace.wcm.ml.processor.*=all`
-   `com.ibm.workplace.wcm.ml.MLServlet=all`
-   `com.ibm.workplace.wcm.ml.ServletUtils=all`

Workflow Traces:

1.  Localize stage:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.LocalizeMLCustomWorkflowAction=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.LocalizeCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncUpdateCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction=all`
2.  Regionalize stage:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.RegionalizeMLCustomWorkflowAction=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.RegionalizeCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncUpdateCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.WorkflowSwitcherWorkflowAction=all`
3.  Pending Publish stage:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.SyncPublishMLCustomWorkflowAction=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncPublishCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncStageCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`
4.  Pending Expired stage:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.SyncExpireMLCustomWorkflowAction=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncExpireCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractSyncStageCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`
5.  Delete stage:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.SyncDeleteMLCustomWorkflowAction=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.SyncDeleteCustomWorkflowActionService=all`
    -   `com.ibm.workplace.wcm.ml.workflowactions.service.AbstractMLCustomWorkflowActionService=all`
6.  Servlet Rendering Plugin Traces:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.processor.LocaleNavigatorProcessorImpl=all`
7.  Portlet Rendering Plugin Traces:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.contextprocessor.*=all`
8.  Library Copy Traces:
    -   `com.ibm.workplace.wcm.ml.utils.*=all`
    -   `com.ibm.workplace.wcm.ml.processor.LibraryCopyContextProcessorImpl=all`

|
|Workflow|-   `com.ibm.workplace.wcm.api.*=finest`
-   `com.aptrix.pluto.workflow.*=finest`
-   `com.ibm.workplace.wcm.services.workflow.*=finest`

|

The resulting traces of Virtual Member Manager are written below:

-   AIX® Linux™ Solaris: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   IBM i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/logs/HCL Portal and HCL Web Content Manager/trace.log
-   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\logs\\HCL Portal and HCL Web Content Manager\\trace.log
-   z/OS®: The resulting traces of Virtual Member Manager are written to the output location you specified as ras\_trace\_outputLocation in the WebSphere Integrated Solutions Console. Check the Help Center of WebSphere Application Server for z/OS for details on what can be specified. For more information, see [Setting trace controls](https://help.hcltechsw.com/digital-experience/8.5/trouble/adsyslog.html#adsyslog__tra_log).

**Parent topic:**[Logging and tracing](../trouble/pd_intr_logs.md)

