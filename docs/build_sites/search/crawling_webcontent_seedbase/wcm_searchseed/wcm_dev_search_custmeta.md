# Customizing metadata field search support

With the search seedlist 1.0 support, custom metadata fields that are specified on content items are added to the search seedlist as metadata information without requiring the metadata to appear in the HTML source for the content items. By default, HCL Digital Experience can use the following metadata fields in documents:

- `name`
- `author`
- `owner`
- `meta_`
- `modifier`
- `category`
- `keywords`
- `authoringtemplate`
- `contentpath`
- `friendlyurl`
- `description`
- `summary`

Follow these steps to add custom metadata fields to the search seedlist.

1. Log in to the WebSphere® Integrated Solutions Console.

2. Click **Resources** > **Resource Environment** > **Resource Environment Providers**.

3. Click **WP ConfigService**.

4. Under **Additional Properties**, click **Custom Properties**.

5. Click **New**.

6. Enter the property name `wcm.config.seedlist.metakeys`.

7. Set the string value to a comma-delimited list of your own metadata (for example, <metakey1, metakey2>).

8. Add the names of the text element from your content to include in the search results to the `wcm.config.seedlist.metakeys` property. 

    If you want to add more than one text element, separate them with commas. The name of the text element on your content item included in the search seedlist must match the name that is configured for this configuration key.

    For example, set `wcm.config.seedlist.metakeys=language,region` in the WP ConfigService resource environment provider and add a HCL Web Content Manager text component as an element with the name `language` to a content item or authoring template.

    In your content item, you can enter the value `german` into the text component for the language. After you save the content item, the search crawler will add the value `german` into a metadata field that is called `language` within the search seedlist. Then, you can filter the search results based on your metadata information.

9. Click **OK**.

10. Save the changes to the master configuration.

11. Restart the portal.
