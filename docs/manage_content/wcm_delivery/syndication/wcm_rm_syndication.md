# Roadmap: Syndication

Syndication is the tool that is used to replicate data from a web content library on one server to a web content library on another server. The relationship between a syndicator and a subscriber can be either a one-way or two-way relationship.

Use this roadmap to learn more about the following information:

-   How syndication works.
-   How to prepare your system for syndication.
-   How to configure a syndication relationship.
-   How to monitor syndication and fix any errors.
-   How to troubleshoot any syndication issues.
-   How to use syndication with other tools and features.

## Who should use this roadmap

Use this roadmap if you:

-   Are installing a server that participates in a syndication relationship.
-   Create a web content library that is syndicated to another server.

## How syndication works

Before you set up a syndication relationship, familiarize yourself with the different types of syndication relationships, and the different syndication methods and modes. You should also familiarize yourself with the workflow and project tools. These features also determine when items are syndicated between servers.

## Server preparation

Before a syndication relationship is created between two servers, these configuration options must be set. You can configure your system to automatically run the member fixer tool when syndicating. The member fixer is run on the subscriber during syndication. It is run against items that have just been syndicated. Details of the member fixer operations are included in the syndication report.

To automatically run scope synchronization whenever syndication occurs, specify the tagging.syndication.enableTagSynchronizationproperty in the Web Content Manager configuration service.

## Troubleshooting syndication

Occasionally you might encounter problems with your syndication setup.

## Creating a syndication relationship

A syndication relationship can either be created by using the administration view or by using the command line.

## Manually syndicating items

Although syndication can be configured to run automatically by default, from time to time you might need to manually update syndication.

## Monitoring syndication

After you set up a syndication relationship, you can monitor the progress of the data replication between syndicators and subscribers for details such as whether syndication was successful, when it occurred, and how many changes were included.

If any items fail to syndicate, look up for topic information about managing failed items.

When you have fixed any issues, you can also use the update or rebuild features to synchronize your servers.

## Syndication during migration

Cross version syndication is the preferred method of refreshing web content after an initial migration. The portal migration process is used to migrate web content. However after the initial migration is complete, syndication is used to keep the migrated system synchronized with the older system.

## Developing with syndication

You can run various syndication functions by using the web content API.

Custom plug-ins that run extra functions when a syndication event is started can be developed for both syndicators and subscribers.


