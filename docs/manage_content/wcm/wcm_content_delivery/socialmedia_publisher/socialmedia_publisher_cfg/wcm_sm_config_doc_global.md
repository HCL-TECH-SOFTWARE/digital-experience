# Global configuration settings

Although the Social Media Publisher uses social network configuration documents to specify most of its configuration properties, it also uses a global settings document for configuring server-wide options.

To use a global setting, you create a text component that is called **Global Settings** within the **Social Configuration** library. Type the settings that you want to configure into the text field, one per line.

|Setting|Details|
|-------|-------|
|`actions.post.credentialvault=`|This is used to specify the name of the credential vault that contains the user name and password that is used in post workflow actions. The credential vault user requires edit access to all content that is posted.|
|`library.actions.post.credentialvault=`|This is used to specify the name of the credential vault that contains the user name and password that is used in post workflow actions for a specific library, where "library" is the name of the library you want to assign a credential vault to. The credential vault user requires edit access to all content that is posted.|
|`actions.disableAllSocialWorkflowActionsOnServers=`|You disable all social media actions on specific servers by entering a comma-separated list of servers. You can specify either node-names, host names or cluster-names.It is recommended that this setting is set to the host name or cluster name of all test, preview, and staging servers.

|
|`actions.disablePostSocialWorkflowActionsOnServers=`|You disable all social media post actions on specific servers by entering a comma-separated list of servers. You can specify either node-names, host names or cluster-names.It is recommended that this setting is set to the host name or cluster name of the authoring server or servers.

|
|`actions.disableDeleteSocialWorkflowActionsOnServers=`|You disable all social media delete actions on specific servers by entering a comma-separated list of servers. You can specify either node-names, host names or cluster-names.|
|`actions.disableUntrackSocialWorkflowActionsOnServers=`|You disable all social media untrack actions on specific servers by entering a comma-separated list of servers. You can specify either node-names, host names or cluster-names.|
|`disableDeleteHandlerOnServers=`|You disable all social media delete handlers on specific servers by entering a comma-separated list of servers. You can specify either node-names, host names or cluster-names.The delete handler responds to content deletions and untracks or deletes associated social messages that have already been posted to social media.

It is recommended that this setting is set to the host name or cluster name of all test, preview, and staging servers.

|
|For Facebook:-   `facebook.endUser.statistics.enabled=true`
-   `facebook.endUser.statistics.domain=YOUR_DOMAIN`

For Twitter:-   `twitter.endUser.statistics.enabled=true`
-   `twitter.endUser.statistics.domain=YOUR_DOMAIN`

|These settings are used to enable the tracking of end user social activity.Set these parameters to false to disable statistic tracking for a specific social network.

These settings can be individually specified per-library by adding the name of the library to the beginning of the parameter. For example: `myLibrary.twitter.endUser.statistics.enabled=true`

When using virtual portals, or not performing servlet-rendering on Web Content Manager V7.0, then the domain' properties must include the virtual portal context. For example: `twitter.endUser.statistics.domain=localhost/wps/portal/myvp`

|
|`socialTable.showFullRefreshButton=false`|If set to true, the social information table displays a **Refresh All** button that will refresh both statistics and table data.If set to false, a **Refresh Table** button is displayed, and only table data is refreshed.

|
|`format:network_name.message_type.postfield.defaultValue=custom_default_value`|Used to define the default value for a Post format field.For example:

```
connections.blog_post.message.defaultValue=
[Element context="current" type="content" key="Message" 
format="length:100"]<br>
See more: 
[URLCmpnt context="current" type="content" mode="standalone" 
start="<a href='" end="'>Link</a>"
```

|
|`jms.processRemoteMsgs=`|The Social Media Publisher uses the built-in JMS functions of Web Content Manager to monitor and respond to events that are occurring within a system. When the Social Media Publisher is running within a cluster, each server needs to be configured to match the WebSphere® Application Server JMS policy type in effect. To determine the current WebSphere Application Server JMS policy type, open the WebSphere Application Server Administration Console and navigate to **Resources \> JMS \> Topics \> IWKTopics\_Items \> Buses \> IWKBus \> Bus Members \> PortalCluster**

**Note:** This is only available if the Social Media Publisher is installed or if Web Content Manager JMS support has been manually enabled.

The jms.processRemoteMsgs setting is set to either true or false depending on the WebSphere Application Server JMS policy type:

-   **High Availability \(Default\)**

Set jms.processRemoteMsgs to true.

-   **Scalability**

Set jms.processRemoteMsgs to false.

-   **Scalability with high availability**

Set jms.processRemoteMsgs to false.

-   **Custom**

Set jms.processRemoteMsgs to true if there is a single JMS engine per cluster, or false if there is a JMS engine per node.


When this setting is syndicated to all environments, all clusters in your environment will share the same WebSphere Application Server JMS policy type.

|

**Note:** These settings are also documented in the **Global Settings Reference** component that is stored in the **Social Configuration** library.


