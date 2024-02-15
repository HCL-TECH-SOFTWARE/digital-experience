# Structure of list-rendering profiles

A list-rendering profile consists of a set of name-value pairs.

These name-value pairs define the following aspects:

-   The name of the profile in a format so that the profile can be referenced from the `[Plugin:ListRenderingContext]` tag.
-   The process of dividing a single XML document into a list of separate items.
-   The extraction of individual item attributes from data that is contained in those items. The resulting set of item attribute defines the set of attributes that you can access in your Digital Data Connector \(DDC\) for HCL Portal list designs by using the `[AttributeResource attributeName=""]` tag.
-   The extraction of list properties from the complete XML document. The resulting set of list properties defines the set of key values that you can use with the `[Plugin:ListRenderingContext action="getListProperty" key=""]` tag.
-   The translated item attribute titles that you want to be shown to your site designers when they use the **Insert a tag** dialog in the Web Content Manager authoring portlet. The list of attribute titles helps your site designers choose the correct `attributeName` parameter values for the `[AttributeResource]` tag.

HCL Portal Version 8.5 supports the following two types of list-rendering profiles:

-   An XPath centric type of profile. It uses XPath statements to define the data transformation. This data transformation contains the aspects of dividing the XML document and the extraction of item attributes and list properties as listed before.
-   A custom type of profile. It does not define a data transformation, but registers only the set of supported item attributes that are shown in the **Insert a tag** dialog. When you use a custom type profile, the corresponding bean list provider must provide the respective values for the attribute names that you want the custom profile to support.


