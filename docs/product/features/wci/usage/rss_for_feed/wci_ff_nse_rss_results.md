# Results Feeds

When feed processing is initiated by using a call to the feed service servlet, the Web Content Integrator responds with an output feed. The first entry in this feed contains status information for the feed as a whole. Each of the subsequent entries in the output feed corresponds to an item that was in the input feed. These latter entries contain status information about the results of processing each item. Feed producers might use this information to attempt to automatically recover from certain types of errors.

Each entry in the output feed has the following general format:

```
<item>
   <title>Results for: [INPUT_TITLE]</title>
   <link>[INPUT_LINK]</link>
   <pubDate>[CREATION_TIME_OF_OUTPUT_FEED_ENTRY]</pubDate>
   <guid permalink="false">[INPUT_GUID]</guid>
   <ibmfs:resultCode>[ OK | WARN | ERROR | FAIL ]</ibmfs:resultCode>
   <!-- 0 .. n resultMsg elements -->
   <ibmfs:resultMsg level="[ WARN | ERROR ]" code="[ERR_CODE]">[MESSAGE_TEXT]</ibmfs:resultMsg>
   <ibmfs:resultMsg level="[ WARN | ERROR ]" code="[ERR_CODE]">[MESSAGE_TEXT]</ibmfs:resultMsg>
   <ibmfs:documentId>[WCM_DOCUMENT_ID]</ibmfs:documentId>
   <description>[LIST_OF_PROGRESS_MESSAGES]</description>
</item>
```

**Parent topic:**[RSS Namespace Extension for the Feed Service](../wci/wci_ff_nse_rss.md)

