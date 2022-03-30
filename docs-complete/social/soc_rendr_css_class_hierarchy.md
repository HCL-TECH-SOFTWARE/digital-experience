# CSS class hierarchy for social lists 

To define its visual appearance, the default markup for social lists uses several CSS classes. They are defined in the wp\_social\_rendering\_85 theme module. Learn about the purpose of the most important CSS classes.

|CSS class|Purpose|
|---------|-------|
|`srComponent`|This class is a top-level wrapper class that is set around the whole list.|
|`srSimple`|This class is a wrapper class that is set around the whole list in simple design within an `srComponent` container.|
|`srComprehensive`|This class is a wrapper class that is set around the whole list in comprehensive design within an `srComponent` container.|
|`srTable`|This class is set on the table that contains the list entries as row elements.|
|`srLeftColumn`|This class is set on the table cell that contains the entry icon.|
|`srMainColumn`|This class is set on the table cell that contains the entry title and metadata.|
|`srCountIcons`|This class is set on list items for the Likes and Comments icon.|
|`srLikeIcon`|This class is set on list item for the number of Likes.|
|`srCommentIcon`|This class is set on list item for the number of Comments.|
|`srShareIcon`|This class is set on list item for access control status.|
|`srMetaData`|This class is a wrapper class that is set on container for date and tags metadata.|
|`srMetaDate`|This class is set on the date container of the entry.|
|`srMetaTags`|This class is set on the tags container of the entry.|
|`srSummary`|This class is set on the summary container of the entry.|
|`srSocialBar`|This class is set on the Social Bar component in each entry.|
|`srRepliesList`|This class is set on the outside container of the list of replies.|
|`srViewSocialObject`|This class is set on the part of a Social Bar that contains the View link.|
|`srReply*`|All classes that are used for styling replies in the forum topic details view are prefixed with `srReply`.|

By using the CSS classes shown in this table, you can build specific rules to style every aspect of a social list entry individually. In the sr\_wptheme.css style file, you can find a number of CSS rules that are used as overrides for basic CSS definitions on narrow and thin columns. To identify a narrow or thin column in the HCL Portal default Portal 8.5 theme, use CSS rules like the following one:

```
   .wpthemeThin   .lotusui30 .srComponent .srSimple .srEntryTitle,
   .wpthemeNarrow .lotusui30 .srComponent .srSimple .srEntryTitle {
       font-size: 0.63em;
   }

```

Columns with the `wpthemeThin` CSS rule assigned to them are even smaller than columns with `wpthemeNarrow` assigned to them. If you want to define separate styles for narrow and thin columns, you can use the following CSS rules. The following code sample sets a smaller font size for the entry title on narrow columns and an even smaller font size for thin columns:

```
   .wpthemeNarrow .lotusui30 .srComponent .srSimple .srEntryTitle {
       font-size: 0.63em;
   }

   .wpthemeThin .lotusui30 .srComponent .srSimple .srEntryTitle {
       font-size: 0.58em;
   }

```

**Parent topic:**[Customizing the CSS styles of social lists ](../social/soc_rendr_custom_css_styles.md)

