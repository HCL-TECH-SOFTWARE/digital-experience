# Indenting element designs

You use an indent tag to format element designs that require results to be indented.

This is an example of the format of an IndentCmpnt tag:

```
[indentcmpnt repeat=" " offset=" " start=" " end=" " ]
```

To create a IndentCmpnt tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **Indent** as the tag type.

3.  Select an offset level. The offset is used to determine how many times the repeat string is used for each indent. The offsets that are used are based on the number of nodes of the hierarchical content that is displayed. For example, A current node depth of 5 and an offset value of -2 would render the repeat string three times. If the sum of the offset and the node depth is negative or 0, the repeat string is not rendered.

4.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameter|Description|
|-------------|-----------|
|`repeat=" "`|Enter the text to repeat at the beginning of the indent.|
|`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

**Double-byte character sets:**

Not all double-byte character sets support extended ASCII. To use tags, such as "`&nbsp;`", you need to replace "`&`" with "`&amp;`".

For example:

```
[indentcmpnt offset="0" repeat="&amp;nbsp;&amp;nbsp;"]
```


**Related information**  


[Creating web content tags](../panel_help/wcm_dev_referencing_tags.md)

