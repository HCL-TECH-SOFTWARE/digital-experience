# Using media queries to target mobile devices

The default social list CSS styles use CSS3 media queries to target specific mobile devices and implement responsive web design. Learn more about media queries.

The media query that social rendering uses has the following format:

```
@media screen and (max-width: $valuepx) {
   ....
}

```

where `$value` is an integer value that defines the maximum screen width in pixels. The rules within this query block do not apply to screens with larger screen widths than specified. To define responsive styles, you can use multiple queries of this type with decreasing maximum screen widths. For example, you can start hiding elements within your markup on a tablet in portrait mode. You can then continue hiding even more elements on a smartphone in landscape mode, and show only a minimum data volume on smartphones in portrait mode.

The default social list markup defines a social bar for each entry type, which takes up vertical space. To save vertical space on mobile devices, you can hide either the social bar View link or the complete social bar. In the following sample, you want to set up the following space arrangements for display on smartphones:

-   In smartphone landscape mode, you want to hide the View link in the social bar of the social object.
-   In smartphone portrait mode, you want to hide the social bar. This way, you reserve the complete vertical space for showing only the title and summary of the social object.

To achieve this reduction, you can use CSS3 media queries as shown herein the following code sample:

```
   @media screen and (max-width: 480px) {
       .lotusui30 .srComponent .srViewSocialObject {
           display: none;
           width: 0px;
       }
   }

   @media screen and (max-width: 320px) {
       .lotusui30 .srComponent div.srSocialBar {
           display: none;  
       }
   }
```

The media queries in this sample work as follows:

1.  The first media query makes sure that the View link in the social bar is hidden on displays that are 480 pixels or narrower.
2.  The second media query makes sure that the social object social bar is hidden completely on displays that are 320 pixels wide or narrower.

For displays that are 321 to 480 pixels wide, only the first query applies. For screens that are 320 pixels wide or narrower, both queries apply.


