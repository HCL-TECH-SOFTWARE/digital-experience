# Update Sorting Page by Title

To update sorting of Page by Title, we need to do some of the prerequisite

## Prerequisite

1. Add new variable "enable.page.title.sync" in DX WebSphere Application Server under **Resources** -> **Resources Environment Providers** -> **WCM_WCMConfigService** -> **Custom properties**. Set the value to "true".
2. After adding the new variable, restart the JVM.
3. Export all the pages (**Home** -> **Administration** -> **Sites** -> **Pages** -> **Export Content Root**).
4. Import the exported pages. Importing will trigger re-save of pages and the toggle feature would save the title on the title field and not the object id.
5. Go to Web Contents (**Home** -> **Web Content** -> **Authoring** -> **Portal Site** -> **Content** -> **Content Root**) and click Title Column. Table entries should be sorted by title on an ascending order. The capital letter will go first to sort followed by the small letter.

## Limitations

- Sorting using different language
- Content with Localization