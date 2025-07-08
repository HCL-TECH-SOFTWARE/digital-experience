# Web Content Integrator

The Web Content Integrator lets you integrate externally managed web content with HCL Digital Experience (DX).  
It uses standard content syndication feed technologies based on RSS 2.0 to transfer published content and metadata to the portal after approval in the source system.

Once the content and metadata are transferred, you can use Web Content Manager's built-in features to secure, personalize, and display the content to users.

To use the Web Content Integrator:

1. Create a feed on your source system by following the Web Content Integrator feed format specification.
2. Configure HCL DX to consume the feed.

## Feed format specification

RSS (Really Simple Syndication) is an XML-based format widely used to syndicate content from sources like websites and blogs to subscribers.  
The Web Content Integrator uses a content feed that complies with the RSS 2.0 format.

The core feed format is simple, with only a few required elements for each item.  
However, the RSS 2.0 specification supports extensions through XML namespaces to add extra functionality.

To give you more control over how items are created in Web Content Manager, an RSS extension is defined.  
This extension includes elements that map to many attributes of the Web Content Manager object model.

- **[Example feeds](../wci/wci_ff_examples.md)**  
  View example feeds that show how to represent different item types in a feed.

- **[Feed format overview](../wci/wci_ff_overview.md)**  
  RSS 2.0 is a dialect of XML. All RSS files must comply with the XML 1.0 specification from the World Wide Web Consortium (W3C).  
  RSS feed files typically use the `.rss` or `.xml` extension. The Web Content Integrator doesn’t require specific file naming conventions.

- **[How to handle embedded links](../wci/wci_ff_links.md)**  
  Sometimes, the content retrieved by the Web Content Integrator includes embedded links to images, files, or other content.  
  Use the link tag in your feed to convert them into links to Web Content Manager items created during feed processing.

- **[Processing images](../wci/wci_ff_images.md)**  
  The Web Content Integrator includes an image-processing feature that creates image components from images referenced in HTML and rich text elements.

- **[RSS namespace extension for the feed service](../wci/rss_for_feed/index.md)**  
  Use the RSS namespace extension to exchange control information between the feed producer and consumer applications.

- **[Web content feed management](../wci/webcontentfeed_mgmt/index.md)**  
  To access a feed you created on your source server, create a feed configuration.





