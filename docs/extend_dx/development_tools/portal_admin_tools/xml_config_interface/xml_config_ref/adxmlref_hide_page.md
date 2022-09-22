# Marking pages as hidden under the content root

By default, pages that you create under the content root display in the main menu. If you do not want a page that you create to appear in the main menu, you can hide the page.

You do this by setting the hidden flag for the page parameter for the content-node tag in XML. Use the following XML snippet:

!!!note
  You can still view and work with pages that are marked as hidden in Administration portlets. You can also create a direct URL to the hidden page so that the page can be accessed from other areas of the site, such as the page menu.

```
<content-node action="update" ...>
  ....
<parameter name="com.ibm.portal.Hidden" type="string" update="set"><![CDATA[true]]></parameter>
 ...
</content-node>

```

???+ info "Related information"  
  - [Hiding and displaying pages in the navigation](../../../../../build_sites/create_sites/building_website/site_navigation/show_hidden_page.md)

