# Projects and syndication 

Projects are included in syndication, the method that is used by HCL Web Content Manager to replicate data from a web content library on a syndicator server to a web content library on a subscriber server. Although projects are syndicated with other items in a library that is being syndicated, you cannot use the subscriber copy of the project to update or publish your project. Work with projects on the syndicator server only.

## Deferred to Syndication

When a project is syndicated, the publish method on the subscriber is automatically changed to "Deferred to Syndication", and the following actions are not enabled on the subscriber:

-   Validate project
-   Publish project
-   Add to project
-   Remove from project
-   Mark for deletion
-   Cancel deletion

This means that the project on the subscriber cannot be updated or published unless it receives updates from the syndicator.

## When projects syndicate

Projects are not associated with a library. As syndication is library-based, a project is only syndicated when it contains unpublished items. Empty projects or previously published projects are not syndicated. Therefore, you might encounter some unexpected behavior. For example:

-   If you delete a project on the syndicator and that project is empty on the subscriber, then the project deletion does not syndicate to the subscriber, because empty projects are not syndicated.
-   However, if you remove all items from a project on a syndicator and then delete the project before syndication, then the project deletion is syndicated because there are still items in the subscriber version of the project.
-   When a project is published on the syndicator, the project might no longer be visible on the subscriber.

## Publishing a project on a subscriber

By default, syndicated projects can be published only on the server the project is created on, and cannot be published on downstream servers.

This behavior can be changed by using the configuration property wcm.publishProjectOnSubscriberEnabled. When set to true, users can publish projects on subscriber.

1.  Log in to the WebSphere® Integrated Solutions Console.
2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Add the following property:
    -   Property name: wcm.publishProjectOnSubscriberEnabled
    -   Value: `true`

**Restriction:**

-   While manually syndicating by using **Update** or **Rebuild** will continue to change items in a published project, only [**Rebuild with mirror**](../panel_help/wcm_syndication_manual.md) will revert the project itself to an unpublished state after publishing on a subscriber. Any syndication option other than **Rebuild with mirror** results in a history on the subscriber that is written as though the project was published and that items were then changed to match the syndicator.
-   If a project is published on a syndicator, publishing the same project on the subscriber removes its association with the project on the syndicator. Changes to items continue to syndicate, but the project item itself is no longer synchronized.
-   If a **Rebuild with mirror** occurs while a large project is publishing on a subscriber, it might revert only some of the items while others continue to publish. Using **Rebuild with mirror** again after the project is finished publishing reverts it completely.
-   Syndication does not always delete the project item on the subscriber when a project is deleted on the Syndicator even when all the items in the project are deleted on both servers. You might then need to delete the empty project item itself on the subscriber.
-   Project templates are not syndicated.
-   Workflows set to immediately publish drafts are not supported by projects.

**Parent topic:**[Projects ](../wcm/wcm_proj_overview.md)

