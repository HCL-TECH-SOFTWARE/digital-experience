# Default Content on Site Areas

There can be a performance impact when accessing site areas without default content set. The impact
becomes larger as the number of content items under the site area grows. WCM has to parse all of the
content items to see which should be the first by title. It is a best practice to set this on every site area even
if site areas are not being referenced directly.
[Site Area Properties](../../../../images/SiteAreaProperties.png)

## How to Set

In the Web Content Authoring Page:
- Navigate in the **Library Explorer** to the site area to be modified
- Select the site area and click the **Edit** button
- Click on **Select Default Content** and choose the content item to be used as the default
- Click **Ok**
- Click **Save** and **Close**