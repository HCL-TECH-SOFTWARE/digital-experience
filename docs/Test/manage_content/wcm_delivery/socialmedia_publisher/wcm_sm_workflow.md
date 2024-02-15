# Social Media Workflow Actions

A set of social media workflow actions are supplied to with the Social Media Publisher and are found in the Social Configuration library. These actions can be added to workflows to run social media actions as part of a workflow.

## Preinstalled social media workflow actions

These social media workflow actions are included with the Social Media Publisher:

-   Post to all registered configurations
-   Untrack message from all registered configurations
-   Delete message from all registered configurations

## Custom social media workflow actions

You can also create the following social media workflow actions for individual configuration documents:

-   Post to specific configuration
-   Untrack message from specific configuration
-   Delete message from specific configuration

To use these actions, you must:

1.  Create a custom workflow action:
2.  Enter the name of the configuration document you want to use this action with in **Description** field. This description must exactly match the name of the configuration document, not the display title.
3.  Select an action from the **Social Custom Workflow Action Factory**.

## Post Action Credentials

Post actions require a credential vault slot called **socialPostUser** populated with credentials of a user that has the following access. This is normally an administration user:

-   Edit access to all content that will be posted.
-   Contributor access to all required social configuration documents.
-   User access to the social configuration library. This must be set on both syndicator and subscriber servers.

The name of the credential vault used can be customized via the global setting **actions.post.credentialvault**. You can also specify a library specific vault via the global setting **library.actions.post.credentialvault**, where library is the name of the library the action is saved in.

## Using Social Media Workflow Actions In Projects

When using social media workflow actions with projects, you can:

-   Add social media workflow actions directly to a project to run them on all content items in the project. This requires HCL Web Content Manager version 8.
-   Add social media workflow actions to the publish stage of individual workflows used by content items. The social media workflow actions are automatically executed once the project is published.
-   Use both project level and item level social media workflow actions. Project level actions will run before item level actions.

## Workflow Scheduling and Syndication

Social media actions are enabled by default on all the servers that subscribe to your authoring server and social media posts will be sent from all the servers in your system when a social media action is run.

It is best practice to disable social media actions on all servers except your rendering server. To do this, update the following parameter in your global settings:

-   `actions.disableAllSocialWorkflowActionsOnServers`
-   `actions.disablePostSocialWorkflowActionsOnServers`
-   `actions.disableDeleteSocialWorkflowActionsOnServers`
-   `actions.disableUntrackSocialWorkflowActionsOnServers`

See [Global configuration settings](../socialmedia_publisher/socialmedia_publisher_cfg/wcm_sm_config_doc_global.md) for further details.


