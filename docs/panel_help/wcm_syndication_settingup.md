# Creating a syndication relationship by using the Administration view

You can set up HCL Digital Experience syndication by using the Administration Portlets or the command line.

Make sure that you have the appropriate configuration setup before you enable syndication.

-   **Disk space**

    Before you use syndication, you must ensure that your subscriber has sufficient memory to receive the data that is syndicated from the syndicator. For example, if you are going to syndicate all libraries, then you need at least as much space on your subscriber as the database used by your syndicator.

-   **Swap space**

    Ensure that you have at least as much swap space allocated on the subscriber server as you have physical memory.

-   **Cross version syndication**

    Cross-version syndication is supported between the following releases. Syndication from a newer release to an older release is not supported:

    -   HCL Portal version 7.0.0.2 with CF26 or higher.
    -   HCL Portal 8.0.0.1 with CF09 or higher.
    -   HCL Portal 8.5 or higher.
-   **Library already exists on the subscriber**

    First-time syndication to an existing library is not supported. If you attempt to syndicate a library to a subscriber that already has a library with the same name, an error results.

-   **Large library with more that 10000 items**

    To syndicate a library that contains more than 10000 items, update the maximum Java heap size that is used by the portal application server on the subscriber server:

    1.  In the WebSphere® Integrated Solutions Console, browse to the Java virtual machine settings.
        -   **Stand-alone server:**

            **Servers** \> **Server Types** \> **WebSphere application servers** \> **HCL Digital Experience** \> **Java and Process Management** \> **Process definition** \> **Java Virtual Machine**

        -   **Clustered server:**

            **System administration** \> **Deployment manager** \> **Java and Process Management** \> **Process Definition** \> **Java Virtual Machine**

    2.  Update the value in the **Maximum Heap Size** field. A value of at least 1024 MB is recommended.
    3.  Click **OK**, and then save your changes.

To set up syndication between web content libraries on two HCL Web Content Manager applications, establish a relationship between a syndicator and a subscriber. The syndicating server contains the data to be replicated, and the subscribing server receives the replicated data.

What can and cannot be syndicated:

-   Changes to only the library name or description are syndicated. Changes to other library properties, such as user access to a library, are not syndicated. If you want the same settings on all your syndicated libraries, you must manually make the same changes to any subscriber libraries.
-   If content from one library \(Library A\) uses an item from another library \(Library B\), you must include both libraries in the syndicator. Including both libraries ensures that all items are syndicated successfully.
-   If you include only Library A in the syndicator, any items in Library A that reference items in Library B are not syndicated. Syndication errors are also generated.
-   If you add a library to a syndicator after the initial syndication, you must click **Rebuild** to force the new library to be syndicated immediately.
-   If you are creating a two-way syndication relationship, you must use a consistent syndication strategy. For example, if you syndicate "All items", then both syndication relationships must be syndicating "All items".

1.  Ensure both the subscriber and syndicator are running and that they can access each other over a network.

2.  On your subscriber server, log in to HCL Digital Experience.

3.  If using HCL Digital Experience 9.5, go to the [Practitioner Studio](../practitioner_studio/practitionerstudio_overview.md) interface.

4.  Go to **Administration** \> **Security** \> **Manage Users and Groups** and create a shared credential vault slot.

    The user assigned access to the credential vault must exist on the syndicator and must have Administrator access to the WCM REST SERVICE virtual resource and Content Root \(Web Content Libraries portlet \> Set Access on Root\).

5.  Go to **Web Content** \> **Subscribers**.

6.  Click **Subscribe Now**.

7.  Enter the syndicator URL in the form of `http://HostName:HostPort/WcmContextRoot`.

    For example: `http://authoring:10039/wps/wcm`

    **Note:**

    When Setting Up WCM Syndication using Digital Experience 9.5 Containers in Kubernetes:

    -   **When you first subscribe to a syndicator, on-prem deployments will use a URL in this format:**

        ```
        http://HostName:HostPort/WcmContextRoot
        ```

    -   **When syndicating between Kubernetes setups, the URL should look like this:**

        ```
        https://service_name.namespace_name:HostPort/WcmContextRoot
        ```

    **Note:** For syndication to work in HTTPs, you have to import the SSL certificates between syndicator and subscriber servers.

    -   **Once the syndication pair has been created, you must edit the syndicator. The Subscriber URL field needs to be modified to look like this:**

        ```
        http://service_name.namespace_name:HostPort/WcmContextRoot/connect?MOD=Subs
        ```

    Once the change to the syndicator properties has been made, syndication will work properly.

    **Note:**

    When you syndicate from a virtual portal:

    -   **Using the URL context of a virtual portal:**

        ```
        http://HostName:HostPort/wps/wcm/url_context
        ```

    -   **Using the host name of a virtual portal:**

        ```
        http://VirtualHostName:HostPort/wps/wcm
        ```

8.  Enter a name for the syndicator item. This name is used for the syndicator item that is created on the syndicator server. Enter a name that helps identify the syndication relationship that you are creating. This name must be unique and cannot be the same as an existing syndicator name.

    **Note:** To reuse syndicator names of previously deleted syndication relationships on a subscriber, you must also delete the same relationship on the syndicator.

9.  Enter a name for the subscriber item. This name is used for the subscriber item that is created on the subscriber server. Enter a name that helps identify the syndication relationship that you are creating. This name must be unique and cannot be the same as an existing subscriber name.

10. Select the credential vault slot that you created previously.

11. Click **Next**

    **Cross-version syndication:** If you syndicate to a server where CF3 for HCL Portal is not installed, steps 11-12 are skipped.

12. Select a syndication schedule mode:

    -   **Configured**: This option uses the mode that is configured in the WCM WCMConfigService service.
    -   **Automatic**: Syndication is scheduled automatically based on the configured syndication interval.
    -   **Manual**: Syndication occurs only when requested by using the administration portlet.
13. Select **Update syndication when a syndication pair is created** to run a one-off syndication event when the syndication pair is successfully created. This is not related to any automatic configuration settings.

14. Click **Next**

15. Select the libraries that you want to subscribe to and the syndication type.

    -   **Published items:**

        Published item syndication is mostly used when you syndicate to a staging or delivery server. The following items are syndicated:

        -   Published
        -   Expired
        Draft items, projects, project templates, and items in a project are not syndicated.

    -   **All items:**

        Use "All items" syndication to gradually syndicate projects to a staging or delivery server, rather than waiting until all items in a project achieve a published state. The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the HCL Product Documentation topic named **Projects and syndication** for further information.
        Project templates are not syndicated.

    -   **All items and versions:**

        "All items and versions" syndication is mostly used when you syndicate between servers within an authoring environment. Selecting this option can increase the amount of time taken for syndication because it includes versions and deleted items.

        The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the HCL Product Documentation topic named **Projects and syndication** for further information.
        -   Versions
        -   Deleted items
        Project templates are not syndicated.

    **Note:** If the syndication configuration is updated to change the syndication type to be more restrictive, then a normal rebuild will not remove previously syndicated items that are now out of scope. For example draft items on the subscriber would not be removed if the syndication type is changed from "All Items" to "Published Items". A [Rebuild With Mirror](wcm_syndication_manual.md) can be used to fully synchronize the library with respect to the new syndication type which includes the removal of subscriber modifications and previously syndicated items.

    |Action on syndicator|Syndication type on syndicator|Rebuild: Action on Subscriber|Rebuild with mirror: Action on subscriber|
    |--------------------|------------------------------|-----------------------------|-----------------------------------------|
    |    1.  Update Live items on the syndicator.
|Published items|    1.  Updates Live items on the subscriber.
|    1.  Updates Live items on the subscriber.
|
    |    1.  Update Live or Draft items on the syndicator.
    2.  Delete Live items on the syndicator.
    3.  Restore Live items on the syndicator.
|All items|    1.  Update Live or Draft items on subscriber.
    2.  Purge items on the subscriber.
    3.  Create items on the subscriber.
|    1.  Update Live or Draft items on subscriber.
    2.  Purge items on the subscriber.
    3.  Create items on the subscriber.
|
    |    1.  Update items on the syndicator.
    2.  Delete items on the syndicator.
    3.  Restore items on the syndicator.
    4.  Purge items on the syndicator.
|All items and versions|    1.  Update items on subscriber.
    2.  Delete items on the subscriber.
    3.  Restore items on the subscriber.
    4.  No action.
|    1.  Update items on subscriber.
    2.  Delete items on the subscriber.
    3.  Restore items on the subscriber.
    4.  No action.
|

    |Action on subscriber|Syndication type on syndicator|Rebuild: Action on Subscriber|Rebuild with mirror: Action on subscriber|
    |--------------------|------------------------------|-----------------------------|-----------------------------------------|
    |    1.  Update Live items on the subscriber.
|Published items|    1.  No action.
|    1.  Revert Live items on the subscriber.
|
    |    1.  Update Live or Draft items on the subscriber.
    2.  Delete Live items on the subscriber.
    3.  Restore Live items on the subscriber.
|All items|    1.  No action.
    2.  Add items on the subscriber.
    3.  Create items on the subscriber.
|    1.  Revert items on the subscriber.
    2.  Add items on the subscriber.
    3.  Delete items on the subscriber.
|
    |    1.  Update Live or Draft items on the subscriber.
    2.  Delete Live items on the subscriber.
    3.  Restore items on the subscriber.
    4.  Create items on the subscriber.
    5.  Purge items on the subscriber.
|All items and versions|    1.  No action.
    2.  Add items on the subscriber.
    3.  Delete items on the subscriber.
    4.  No action.
    5.  No action.
|    1.  Revert items on the subscriber.
    2.  Add items on the subscriber.
    3.  Purge items on the subscriber.
    4.  Purge items on the subscriber.
    5.  No action.
|

16. Click **Finish**.

17. To begin syndication, click **Update Subscriber**.


**Using a security proxy:** The setup of a syndication pair assumes that the subscriber host name that the syndicator uses is the same as the host name used to access the subscriber to run the wizard.

In the case where a security proxy is in place in front of the subscriber cluster, this host name is the host name of the security proxy. Syndication must be set up directly between the syndicator and subscriber, not through the security proxy. After creation of the syndication pair, the syndicator must be manually edited and changed to use the actual subscriber host name rather than the host name of the security proxy. Without this extra step, syndication will not be successful.

