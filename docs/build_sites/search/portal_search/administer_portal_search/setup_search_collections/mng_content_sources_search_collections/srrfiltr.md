# Applying filter rules

Portal Search provides a facility for applying filter rules to the crawler process. The crawler filters control the crawler progress and the type of documents that are indexed and cataloged.

You can define the filter rules when creating a content source of type **Web site** only. You define the filters under the **Filters** tab. You can combine any combination of the following filtering options for a filtering rule:

|Filter option|Possible settings| |
|-------------|-----------------|--|
|Apply rule while:|Collecting documents|Indexing documents|
|Rule type:|Exclude|Include|
|Rule basis:|URL text|File type|

Depending on your choices on the options, the filter rules result in the following behavior for selection of documents or pages:

|Option for applying the rule|Selected rule type option:   Exclude|Selected rule type option:   Include|
|----------------------------|------------------------------------|------------------------------------|
|Apply rule while **Collecting documents**|The page or document is excluded, and links on the page are **not** explored.|Only pages or documents that meet the criteria and that have a link on a parent page that meets the criteria, starting with the initial site.|
|Apply rule while **Adding documents to index**|The page or document is excluded, and links on the page are explored.|The entire site is searched, and pages or documents that meet the filtering criteria will be included.|

**Note:** When you use the option **Apply rule while Collecting documents** with **Rule type: Include**, make sure that the URL in the field **Collect documents linked from this URL:** fits the specified rule; otherwise no documents will be collected. For instance, crawling the URL http://www.ibm.com/products with the URL filter \*/products/\* will not give any results, because the rule has a trailing slash, but the URL does not. But either crawling http://www.ibm.com/products/ with the URL filter \*/products/\* \(both with trailing slash\) or crawling http://www.ibm.com/products with the URL filter \*/products\* \(no trailing slash\) will work.

For more details about filter rules and how to apply them refer to the **Manage Search** portlet and its help.


**Related information**  


[Crawling an external site using a seedlist provider](../admin-system/srtseedlistcreate.md)

