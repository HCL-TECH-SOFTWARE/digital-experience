# Cross version syndication

Cross version syndication is the preferred method of refreshing web content after an initial migration. The portal migration process is used to migrate web content, however after the initial migration is complete, syndication is used to keep the migrated system synchronized with the older system.

Cross-version syndication is supported between the following releases. Syndication from a newer release to an older release is not supported. Cross-version syndication of the Portal Site Library is also not supported.

-   HCL Portal version 7.0.0.2 with CF26 or higher.
-   HCL Portal 8.0.0.1 with CF09 or higher.
-   HCL Portal 8.5 or higher.

No special steps are required to configure syndication between releases. The procedure to enable syndication is the same no matter if the versions differ or not. When an existing subscriber is migrated, the existing pair continues to function normally. There are no additional limits to the kind of items or changes that can be updated between versions. Care must be taken whenever changes are made directly to the subscriber since it carries the risk of creating a conflict that can block items from syndicating.

## Fix-pack upgrades

Cross version syndication can also be used to syndicate content between environments for the same release, but on different cumulative fix-packs. This syndication allows individual environments, such as authoring and delivery, to be upgraded separately.

The upgrade can proceed in two ways: syndicator first or subscriber first. It might be preferable to upgrade the system with the least uses first to lessen the impact of an unintended interruption of service. However, the subscriber first approach is preferable because there is a greater degree of compatibility when syndication occurs from an older software level to a newer level.

-   Review the release notes of the new software level to check compatibility with the existing levels the server is syndicating to or subscribing from, during an upgrade.
-   The goal is to have an entire deployment to run at the same level release and fix-pack. This capability is not intended to allow different release and fix-pack levels to coexist indefinitely.
-   Syndicating from a newer software level to an older software level is only supported between different fix-pack levels of the same release up to two fix-pack levels. Syndication only between older releases to newer releases is supported.

    **Restriction:** The **Rebuild with mirror** option can be used only when you syndicate between servers that use CF07 or higher.

-   When you syndicate from a newer level to an older level, it is possible to use features on the syndicator that are not available on the subscriber. You should avoid using these features since it might result in syndication errors. If a failure is encountered because of a new feature, the change must be reverted on the syndicator and then syndication of the affected items resume. New features can be tried before the subscriber is upgraded, by saving content with the new features in a library that is not syndicated to an older software level.
-   When a library is syndicated to another release level, that library must not be syndicated back to any server that it was already syndicated from. Disable any reverse syndicator pairs before you attempt a fix-pack upgrade.

**Parent topic:**[Migrating from Web Content Manager version 7.0 or 8.0 ](../migrate/mig_content_from_7-0.md)

