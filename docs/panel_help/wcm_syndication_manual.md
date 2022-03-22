# Manually syndicating items

Although syndication is configured to run automatically by default, from time to time you might need to manually update syndication.

To manually update a syndication relationship:

1.  Go to **Administration** \> **Portal Content**.

2.  Go to either the syndicator or subscriber views.

3.  Select either a syndicator or subscriber.

4.  Click the update icon and then either:

    1.  Select **Update. Update items changed since last syndication.** to update the syndication relationship.

    2.  Select **Rebuild. Re-check all items.** to rebuild the syndication relationship.

    From CF07, you can manually syndicate by using the following methods:

    -   **Update**

        This method syndicates items that are newer than the previous syndication. Items that are newer than the last syndication on the syndicator are sent to the subscriber. Items that are newer on the subscriber are not updated. Items that are created on the subscriber that do not exist on the syndicator are not removed from the subscriber.

    -   **Rebuild**

        This method syndicates all items that are newer on the syndicator. All items that are newer on the syndicator are sent to the subscriber. Items that are newer on the subscriber are not updated. Items that are created on the subscriber that do not exist on the syndicator are not removed from the subscriber.

        -   **Rebuild with mirror**

            If you select the mirror option, all items on the subscriber are reset to mirror the syndicator. All items that are newer on the syndicator are sent to the subscriber. Items that are newer on the subscriber are overwritten with the older version from the syndicator. Items that are created on the subscriber that do not exist on the syndicator are removed from the subscriber. Version history is not syndicated.

            **Restriction:** The **Rebuild with mirror** option must not be used with two-way syndication. Two-way syndication means that server A syndicates to server B, and server B syndicates to server A.

            **Restriction:** The **Rebuild with mirror** option can be used only on a syndicator.

            **Note:** The **Rebuild with mirror** option will not automatically cascade through all subscribers downstream of the syndicator. You might need to repeat the **Rebuild with mirror** action on subscribers further down the syndication chain to synchronize all servers.

            **Note:** The **Rebuild with mirror** option will not automatically cascade through all subscribers downstream of the syndicator. You might need to repeat the **Rebuild with mirror** action on subscribers further down the syndication chain to synchronize all servers.

            **Restriction:** Don't use the **Rebuild with mirror** option if other syndicator pairs feed into any of the libraries that are being rebuilt.

            **Note:** With CF09 or higher installed, the **Rebuild with mirror** option automatically cascades through all subscribers downstream of the syndicator that are configured with automatic syndication. Downstream automatic syndication is paused while the upstream mirror is running. Syndication can still be run manually downstream while automatic syndication is paused downstream.

            **Note:** With HCL Digital Experience 9.5 Container Update release CF173, CF18 and higher releases, an option to disable the rebuild with mirror syndication is available. This option can be set on the syndicator by setting wcm.syndication.syndicator.mirror.ui=false in the WCM **WCMConfigService** Resource Environment Provider \(REP\). This can be useful to avoid accidental mirror syndications that replace everything on the subscriber. Setting this property requires a restart of the HCL Portal server after setting.

            The option to disable the rebuild with mirror syndication is also available to HCL Digital Experience 8.5 and 9.0 CF18 users.

            -   Documentation resource: [Syndicator settings](wcm_reference_syndicatorfields.md)
        |Action|Rebuild|Rebuild with Mirror|
        |------|-------|-------------------|
        |Update item on syndicator.|Update item on subscriber.|Update item on subscriber.|
        |Update item on subscriber.|No action.|Revert item on subscriber.|
        |Delete item on syndicator.|Delete item on subscriber.|Delete item on subscriber.|
        |Delete item on subscriber.|Add item on subscriber.|Add item on subscriber.|
        |Add item on syndicator.|Add item on subscriber.|Add item on subscriber.|
        |Add item on subscriber.|No action.|Purge item on subscriber.|
        |Update item on syndicator and then update item on subscriber.|No action \(subscriber modification preserved\).|Revert item to syndicator version.|

5.  Click **Update Subscription**.


