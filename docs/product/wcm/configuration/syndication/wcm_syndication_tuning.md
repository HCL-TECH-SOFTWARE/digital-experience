# Syndication tuning

While syndication is a vital part of keeping your web content current, the same syndication strategy is not appropriate for every environment. Depending on how you deploy HCL Web Content Manager, you can use different syndication strategies to balance the currency of your content with the performance your environment requires.

There are several different means to manage how and when content is replicated to other servers. It is important to note that, as with any process, syndication entails a performance cost. You must account for this when you set not only the frequency of syndication, but also the number of syndication relationships for a server.

## Syndication interval

The syndication interval controls the frequency of syndication while automatic syndication is enabled and can be used by administrators to put an upper limit how often syndication occurs. Because up-to-date information is important to any web content environment, automatic syndication is enabled by default when HCL Portal is installed. While the default setting for the syndication interval ensures maximum currency, you can choose to adjust the value if the currency demands of your environment do not call for the shortest interval.

Here are some general guidelines for setting the syndication interval.

|Interval setting|Recommended environments|
|----------------|------------------------|
|10 minutes – 2 hours|Staging servers to delivery servers.|
|30 seconds – 10 minutes|Any environment that requires frequent replication, such as an authoring server to a staging server, a test server, or distributed authoring server.When you increase the syndication interval for environments where authoring servers are involved, be mindful that timely replication is often essential, particularly in collaborative authoring environments where multiple authors on different servers might be working on the same content.

|

## Publish and expire dates

Because the syndication interval is not based on a scheduled time of the day, it is not suitable for setting up syndication to run during off-peak times. The publish date and expire date are the preferred methods for doing this.

The publish date for each content item specifies the date and time when the content is published to a website. After a content item is approved and the publish date is reached, the content item is queued for syndication according to the next syndication interval. By using the publish date, you can delay the publishing of content, effectively delaying its syndication. For example, if you are using a short syndication interval to ensure timely replication of most content, you can delay the syndication of less urgent content through the publish date for that content.

The expire date specifies the date and time when the content item is removed from a website. As with the publish date, you can use the expire date to cause the syndication activity that is associated with removing the content to occur at a time when other syndication activity is less intensive.

For more information on the publish and expire dates in the workflow process, refer to [Item status](wcm_managing_workflow_status.md).

## Syndicating large libraries

When you syndicate large libraries, you might also need to adjust these timeout settings:

1.  Log in to the WebSphere® Integrated Solutions Console.
2.  Click **Servers** \> **Server Types** \> **WebSphere application servers** \> **portal\_server** \> **Container Services** \> **Transaction Service**.
3.  Change the **total transaction lifetime timeout** and the **maximum transaction timeout** settings to 2000 seconds.

## Syndicating segment groups

CF08 adds the capability for Personalization Rules that are managed by HCL Web Content Manager, known as segment groups.

To create segment groups within an authoring environment and then syndicate them:

1.  Install CF08 on both the syndicator and any subscriber servers.

2.  Create a segment group on the syndicator in a library that is included within an existing syndication pair.

3.  Run a syndication rebuild on the syndicator.


To use segment groups without syndication, create a new library specifically for any segment groups that do not need to be syndicated. The new library is not added to any existing syndication pairs.

**Parent topic:**[Syndication](../wcm/wcm_administering.md)

