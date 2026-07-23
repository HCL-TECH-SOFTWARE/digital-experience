# How to manage syndicators and subscribers

## Creating a syndication relationship by using the Administration portlets | HCL Digital Experience

You can set up syndication by using either the Administration portlets or the command line.

### Before you begin

Verify that your environment is properly configured before you enable syndication.

#### Disk space

Make sure the subscriber has enough disk space to receive the data syndicated from the syndicator.  
For example, if you plan to syndicate all libraries, the subscriber must have at least as much available space as the database size on the syndicator.

#### Swap space

Ensure that you have at least as much swap space allocated on the subscriber server as you have physical memory.<!--Confirm if necessary section or not-->

## Cross-version syndication

Cross-version syndication is supported between the following releases.  
Syndication from a newer release to an older release isn't supported:

- HCL Portal version 7.0.0.2 with CF26 or later
- HCL Portal 8.0.0.1 with CF09 or later
- HCL Portal 8.5 or later

## Library already exists on the subscriber

First-time syndication to an existing library isn't supported.  
If you try to syndicate a library to a subscriber that already has a library with the same name, an error occurs.

## Large library with more than 10,000 items

To syndicate a library with more than 10,000 items, increase the maximum Java heap size on the portal application server of the subscriber.

### Increase the maximum heap size

1. Open the WebSphere® Integrated Solutions Console.
2. Go to the Java virtual machine settings:

 - **For a stand-alone server:**
    `Servers > Server Types > WebSphere application servers > HCL Digital Experience > Java and Process Management > Process definition > Java Virtual Machine`

  - **For a clustered server:**
    `System administration > Deployment manager > Java and Process Management > Process Definition > Java Virtual Machine`

3. Update the **Maximum Heap Size** field.
   It's recommended to set it to at least **1024 MB**.
4. Select **OK**, and then save your changes.

To set up syndication between web content libraries on two HCL Web Content Manager applications, create a relationship between a syndicator and a subscriber. The syndicator server contains the data to be replicated, and the subscriber server receives the replicated data.

## Syndication scope

**What can be syndicated**  
- Changes to the library name or description.

**What can't be syndicated**  
- Changes to other library properties, such as user access.  
- To keep settings consistent across all syndicated libraries, manually update each subscriber library.

**Referenced libraries**  
If content from one library (Library A) uses items from another library (Library B), include both libraries in the syndicator.  
Otherwise, items in Library A that reference Library B will not syndicate, and errors will occur.

**Adding libraries after initial syndication**  
If you add a library to a syndicator after the first syndication, select **Rebuild** to force the new library to syndicate immediately.

**Two-way syndication**  
Use the same syndication strategy on both sides.  
For example, if you syndicate **All items**, the other relationship must also syndicate **All items**.

---
## Procedure

1. Make sure both the subscriber and syndicator are running and can communicate over the network.
2. On the subscriber server, sign in to **HCL Digital Experience**.
3. Go to **Administration > Access > Credential Vault**, and create a shared credential vault slot.


    !!! important "Credential vault user permissions"
        The user assigned to the credential vault must exist on the syndicator  
        and must have **Administrator** access to the **WCM REST SERVICE** virtual resource and **Content Root**.  

        **(Web Content Libraries portlet > Set Access on Root)**

4. Go to **Administration > Portal Content > Subscribers**.
5. Select **Subscribe Now**.
6. Enter the syndicator URL in this format:  
   `http://HostName:HostPort/WcmContextRoot`  
   Example: `http://authoring:10039/wps/wcm`

    !!! note
        When syndicating from a virtual portal:
        - Using the URL context: `http://HostName:HostPort/wps/wcm/url_context`
        - Using the virtual host name: `http://VirtualHostName:HostPort/wps/wcm`

7. Enter a name for the syndicator item.  
   Choose a unique name that clearly identifies the syndication relationship. To reuse the name of a previously deleted syndicator on the subscriber, you must also delete it on the syndicator.

8. Enter a name for the subscriber item.  Choose a unique name that clearly identifies the syndication relationship.
9. Select the credential vault slot you created earlier.
10. Select **Next**.

    !!! note
        When syndicating to a server without CF3 for HCL Digital Experience installed, steps 11 and 12 are skipped.

11. Choose a syndication schedule mode:
    - **Configured**: Uses the mode configured in the **WCM WCMConfigService** service.
    - **Automatic**: Syndication runs automatically at set intervals.
    - **Manual**: Syndication runs only when requested from the administration portlet.
12. (Optional) Select **Update syndication when a syndication pair is created** to run a one-time syndication event immediately.
13. Select **Next**.
14. Select the libraries to subscribe to, and choose the syndication type.  For details, see the [syndication actions on a syndicator table](#table-1-syndication-actions-on-a-syndicator) and the [syndication actions on a subscriber table](#table-2-syndication-actions-on-a-subscriber).

15. Click **Finish**.
16. To begin syndication, click **Update Subscriber**.



### Published items

Use this type primarily for staging or delivery servers.

**Items syndicated**  
- Published items  
- Expired items

**Items not syndicated**  
- Draft items  
- Projects  
- Project templates  
- Items inside projects

---

### All items

Use to gradually syndicate projects to staging or delivery servers.

**Items syndicated**  
- Published items  
- Expired items  
- Draft items  
- Projects that contain draft items saved in the library See [Projects and syndication](../../../../../manage_content/wcm_authoring/authoring_portlet/change_management/projects/wcm_dev_projects_syndication.md).

**Items not syndicated**  
 Project templates

---

### All items and versions

Use for syndication within authoring environments. This option may increase syndication time.

**Items syndicated**  
- Published items  
- Expired items  
- Draft items  
- Projects that contain draft items saved in the library. See [Projects and syndication](../../../../../manage_content/wcm_authoring/authoring_portlet/change_management/projects/wcm_dev_projects_syndication.md).
- Versions  
- Deleted items

**Items not syndicated**  
- Project templates

!!! note
    - If you change the syndication type to a more restrictive setting, a normal rebuild won't remove already syndicated items that are now out of scope.
    - Use [Rebuild With Mirror](https://help.hcl-software.com/digital-experience/8.5/panel_help/wcm_syndication_manual.html){:target="_blank"} to fully synchronize the library, remove subscriber modifications, and remove previously syndicated items.

## Actions on syndicator and subscriber

The following table shows what actions occur on the subscriber when you run different syndication types and rebuild options on the syndicator.

### Table 1. **Syndication actions on a syndicator**

| Action on syndicator                         | Syndication type on syndicator | Rebuild: action on subscriber          | Rebuild with mirror: action on subscriber               |
|----------------------------------------------|--------------------------------|----------------------------------------|---------------------------------------------------------|
| Update Live items on the syndicator          | Published items                | Update Live items on the subscriber   | Update Live items on the subscriber                     |
| Update Live or Draft items on the syndicator | All items                      | Update Live or Draft items on subscriber | Purge items on the subscriber<br>Create items on the subscriber |
| Delete Live items on the syndicator          | Published items                | Update Live items on the subscriber   | Update Live items on the subscriber                     |
| Delete Live or Draft items on the syndicator | All items                      | Update Live or Draft items on subscriber | Purge items on the subscriber<br>Create items on the subscriber |
| Restore Live items on the syndicator         | Published items                | Update Live items on the subscriber   | Update Live items on the subscriber                     |
| Update items on the syndicator               | All items and versions         | Update items on the subscriber        | Update items on the subscriber                          |
| Delete items on the syndicator               | All items and versions         | Delete items on the subscriber        | Delete items on the subscriber                          |
| Restore items on the syndicator              | All items and versions         | Restore items on the subscriber       | Restore items on the subscriber                         |
| Purge items on the syndicator                | All items and versions         | No action                              | No action                                               |

### Table 2. **Syndication actions on a subscriber**

The following table shows the actions that occur on the subscriber based on the syndication type and rebuild options on the syndicator.


| Action on subscriber                       | Syndication type on syndicator | Rebuild: action on subscriber      | Rebuild with mirror: action on subscriber               |
|--------------------------------------------|--------------------------------|-----------------------------------|---------------------------------------------------------|
| Update Live items on the subscriber        | Published items                | No action                         | Revert Live items on the subscriber                     |
| Update Live or Draft items on the subscriber | All items                    | Delete Live items on the subscriber | Restore Live items on the subscriber                     |
| Add items on the subscriber                | All items                      | No action                         | Create items on the subscriber                          |
| Delete Live items on the subscriber        | All items                      | Update Live or Draft items on the subscriber | Delete Live items on the subscriber                     |
| Restore Live items on the subscriber       | All items                      | Revert items on the subscriber   | Add items on the subscriber                             |
| Add items on the subscriber                | All items and versions         | Purge items on the subscriber    | Purge items on the subscriber                           |
| Delete items on the subscriber             | All items and versions         | No action                         | No action                                               |
| Restore items on the subscriber            | All items and versions         | No action                         | Revert items on the subscriber                          |
| Create items on the subscriber             | All items and versions         | Add items on the subscriber      | Purge items on the subscriber                           |
| Purge items on the subscriber              | All items and versions         | Purge items on the subscriber    | No action                                               |

15.





















