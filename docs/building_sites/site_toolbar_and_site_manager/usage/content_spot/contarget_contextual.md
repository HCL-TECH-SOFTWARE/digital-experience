---
id: contarget_contextual
title: Contextual content
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Contextual content allows you to leverage the content associations on the page to control the content that is displayed. If the page context changes, the content item that is displayed changes automatically.

The page context identifies a particular content item that is based on information from several sources. When a user accesses a page for the first time, the initial page context is typically defined by a content association on the page. This content association maps a portal page to the site structure in a web content library. The web content viewer checks the page for this content association and displays content from the site area that the association points to. The page context can also be affected by other conditions, including the link broadcasting settings of the portlet or parameters that reference content.

**Tip:** If you want to display a particular content item regardless of the page context, select **Specified Content** from the **Configure Spot** menu. This setting overrides the current page context.

## See an example of contextual content

-   **Content goal**

    You are responsible for managing the biographies of speakers at a conference. In the past, you created a new portal page for each speaker. With hundreds of speakers now attending this conference, you need to simplify how you manage the biographies and reduce the effort required in maintaining this area of your site. You do not want to create a page for each speaker.

-   **Audience for content:**

    This content applies to anyone that is attending the conference or is considering attending the conference.

-   **Configuration details:**

    In this example, you have a page listing summaries for 300 biographies. For more information about a speaker, you want a visitor to click on the biography summary to view the full biography. Rather than managing 301 pages \(1 page with your summary list of biographies plus 300 pages of biographies\), you only have to manage 2 pages \(1 page with your summary list of biographies and 1 details page that provides a view to your web content\). Contextual content allows you to use the content associations on the page to only display the biography information for the speaker that is clicked by your visitor on the biography list page.


![Image showing the contextual content that displays when the biography information for a speaker is clicked. The image shows "Speakers-hidden-detail" included at the end of the URL.](../images/contextual_example.jpg)

