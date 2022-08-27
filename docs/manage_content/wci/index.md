# Web Content Integrator

The Web Content Integrator is a solution for integrating externally managed web content with HCL Portal. By using standard content syndication feed technologies based on RSS 2.0, the Web Content Integrator provides a loosely coupled mechanism for transferring published content and metadata to the portal after they are approved in the source system. When the content and metadata are transferred to the portal, it is possible to use the built-in content management features of Web Content Manager to secure, personalize, and display the content to users.

To use the Web Content Integrator you must:

1.  Create a feed on your source system by using the Web Content Integrator feed format specification.
2.  Configure HCL Portal to consume the feed.

## Feed format specification

RSS, or Really Simple Syndication, is an XML-based format that is widely used for syndicating content from sources such as websites and blogs to readers who are subscribed to the feeds. The input to the Web Content Integrator is a content feed that complies with the RSS 2.0 format. The core feed format is relatively simple, with only a limited number of elements that need to be specified for each item in the feed. However, the RSS 2.0 specification allows the base format to be extended by using XML namespaces to support extra functions. To enable a deeper level of control over how items are created in Web Content Manager, an RSS extension is defined which contains elements that map to many of the attributes of the Web Content Manager object model.

-   **[Feed format overview](../wci/wci_ff_overview.md)**  
RSS 2.0 is a dialect of XML, and all RSS files must comply with the XML 1.0 specification as published by the World Wide Web Consortium \(W3C\). RSS feed files typically have file extensions of either .rss or .xml. The Web Content Integrator does not impose any file naming conventions on the feed producer.
-   **[RSS Namespace Extension for web content](../wci/wci_ff_nse.md)**  
Web Content Manager items contain a set of controls that are used to store information for various purposes. The elements in this namespace roughly map to the fields that are available on those controls. Depending on the type of the item, it can or can not contain certain controls so some of the elements in the namespace are only relevant to specific item types. All of the elements in this namespace are sub-elements of item, none are used at the channel level.
-   **[How to handle embedded links](../wci/wci_ff_links.md)**  
From time to time, the content that is being retrieved by the Web Content Integrator contains embedded links to images, files, and other content within the feed. You can use the link tag in your feed to represent embedded links so that they are converted into links to other Web Content Manager items that are created when the feed is processed.
-   **[Processing images](../wci/wci_ff_images.md)**  
The Web Content Integrator has an image-processing feature, which allows images that are referenced within HTML and rich text elements to be created as image components while processing a feed.
-   **[Example feeds](../wci/wci_ff_examples.md)**  
View some example feeds that illustrate how to represent the various item types within a feed.
-   **[RSS Namespace Extension for the Feed Service](../wci/wci_ff_nse_rss.md)**  
The RSS namespace extension is used to exchange control information between the feed producer and consumer applications.
-   **[Web content feed management](../wci/webcontentfeed_mgmt)**  
To access a feed you created on your source server, you must create a feed configuration.

