# Channel-level Elements 

The following element must be a direct child of the feed's channel element since it applies to the feed as a whole rather than to an individual item in the feed.

## etag

Some producer applications are not able to manipulate the HTTP headers to set the handshake data. To support those applications, there is an alternative method that entails passing the same information directly in the feed by using the RSS `<lastBuildDate>` element and a custom namespace element, `<ibmfs:etag>`.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Allowable Values|A string value that represents some meaningful label for the specific instance of the feed.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmfs:etag>ABC0012</ibmfs:etag>
```

**Parent topic:**[RSS Namespace Extension for the Feed Service ](../wci/wci_ff_nse_rss.md)

