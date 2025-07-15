# Web Content Integrator

The Web Content Integrator facilitates the integration of externally managed web content with **HCL Digital Experience (DX)**. This tool leverages standard content syndication feed technologies, primarily based on **RSS 2.0**, to transfer published content and its associated metadata to the portal once approved in the source system.

After content and metadata are transferred, you can utilize **Web Content Manager's** built-in features to secure, personalize, and display this content to your users.

## Using the Web Content Integrator

To implement and use the Web Content Integrator:

1.  Create a feed on your source system that adheres to the Web Content Integrator's specific feed format specification.
2.  Configure HCL DX to consume this feed.

## Feed Format Specification

**RSS (Really Simple Syndication)** is an XML-based format widely used for syndicating content from various sources to subscribers. The Web Content Integrator uses content feeds that fully comply with the **RSS 2.0 format**.

While the core feed format is simple, requiring only a few elements for each item, the **RSS 2.0 specification** supports extensions through **XML namespaces** to add extra functionality. To provide more granular control over how items are created in **Web Content Manager**, a specific RSS extension has been defined. This extension includes elements that map to many attributes of the Web Content Manager object model.

For more detailed information on the feed format, refer to the following resources:

* **[Example Feeds](../wci/wci_ff_examples.md)**
    View example feeds demonstrating how to represent different item types within a feed.

* **[Feed Format Overview](../wci/wci_ff_overview.md)**
    Learn that RSS 2.0 is an XML dialect, and all RSS files must comply with the [XML 1.0 specification](https://www.w3.org/TR/REC-xml/) from the World Wide Web Consortium (W3C). RSS feed files typically use the `.rss` or `.xml` extension, though the Web Content Integrator does not require specific file naming conventions.

* **[How to Handle Embedded Links](../wci/wci_ff_links.md)**
    Discover how to use the `link` tag in your feed to convert embedded links (to images, files, or other content) into links to Web Content Manager items during feed processing.

* **[Processing Images](../wci/wci_ff_images.md)**
    Understand the Web Content Integrator's image-processing feature, which creates image components from images referenced in HTML and rich text elements.

* **[RSS Namespace Extension for the Feed Service](../wci/rss_for_feed/index.md)**
    Explore how to use the RSS namespace extension to exchange control information between your feed producer and consumer applications.

* **[Web Content Feed Management](../wci/webcontentfeed_mgmt/index.md)**
    Learn how to create a feed configuration within HCL Digital Experience to access a feed you've created on your source server.