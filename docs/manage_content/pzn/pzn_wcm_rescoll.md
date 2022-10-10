# The Web Content resource collection

The Web Content resource collection allows you to write rules that select lists of content from the HCL Web Content Manager.

The Personalization component is similar to a menu component in that its content is decided by a rule. The Personalization component specifies how the content returned from the rule is presented and points to a rule to decide what content to display. That rule may make use of the Web Content resource collection to select a list of Web content.

Personalization rules that you create using the Personalization editor are not managed in Web Content Manager and so are not available for versioning or included in syndication. These rules must be published using pznload or by publishing with Personalization.

The Web Content resource collection allows rules based on the following attributes:

|Attribute|Description|
|---------|-----------|
|Author|The author of the content as set in Web Content Manager. This attribute value is stored as a Distinguished name; for example, `uid=wpsadmin,o=defaultWimFileBasedRealm`.|
|Authoring template|The authoring template used to create the Web content. The value may be selected using an authoring template picker.|
|Authoring Template Properties|All authoring template properties that are available to be used within rules.|
|Category|The categories to which the piece of Web content belongs. If you are matching this attribute to a value from another resource collection or application object, the format for the value should be /parentcategory/childcategory.|
|Creation date|The date the piece of Web content was created.|
|Creator|The person who first created this piece of Web content. This attribute value is stored as a Distinguished name; for example, `uid=wpsadmin,o=defaultWimFileBasedRealm`.|
|Description|The description provided for the piece of Web content.|
|Expiration date|The date the content is set to expire in Web Content Manager.|
|Full text|Use this attribute to search the full text of a piece of Web content. It should be used sparingly. This attribute may not perform as quickly as other attributes when used in rules, especially when used in conjunction with other attributes.|
|Keywords|The keywords stored on the piece of Web content.|
|Last modified date|The date a modification last occurred on the piece of content.|
|Last modifier|The last person to modify the piece of content. This attribute value is stored as a Distinguished name; for example, `uid=wpsadmin,o=defaultWimFileBasedRealm`.|
|Name|The name of the piece of Web content as specified in Web Content Manager.This property uses case-insensitive matching. For example, a piece of content with a name of "SampleContent" matches "SampleContent," "samplecontent," "SAMPLECONTENT," and other variations.

|
|Position|The zero-based numeric position of the piece of content among its siblings in the nodes of the content hierarchy. Web Content resource collections use absolute positioning and relative positioning to support the ordering of content items. The algorithm used to generate position numbers results in fractional and negative values that control the display order of a set of child content items under a given area of a site.

For more information, refer to the description of the position attribute in the *Command reference for the Portal Scripting Interface*.

|
|Publish date|The publish date as specified in Web Content Manager.|
|Location|The document library or site area from which to select content. If specified as a string, it should be in the format /Library/Site/SiteArea. You can also specify */Site/SiteArea to search by site area in all document libraries.

Rules from previous versions with the Site Area attribute will automatically reference Location. If the site area was specified as a string, ensure the string starts with /Library or an asterisk (*).

|
|Title|The display title as specified in Web Content Manager.|
|Unique Identifier|Use this attribute to select pieces of Web Content.|

When a text, short text, numeric, or date component is added to an authoring template in Web Content Manager, that component will appear as an attribute on the resource collection under the Authoring Template Properties menu item. For example, if an authoring template is created for "Benefit Announcement" which includes an "enrollment begin" date component, you will have an "Enrollment begin" attribute on the Web Content resource collection. This new attribute would appear under a submenu for "Benefit Announcement". This will allow you to write rules based on custom metadata you attach to Web content. The performance of the standard metadata will do better compared to the performance of rules using attributes added to authoring templates. The use of keywords and categories should be considered since these are part of the standard metadata of Web content. If you are running a rule that uses the Name property as a sort by attribute, you might experience processing delays of up to 10 minutes. For best processing performance, sort by the Title property instead.

If too many authoring template properties have been designed, the Authoring Template Properties menu may become to large to be easily used. Once there are more than 15 authoring template properties, they are replaced with a chooser to select properties. This threshold can be adjusted by changing the value of wcm.authoringTemplate.menu.threshold in wp_profile_root/PortalServer/config/config/services/PersonalizationService.properties.

Personalization rules querying on short text run faster than those querying on text. Short text components can only store 254 characters. Text components can store an unlimited number of characters, but personalization rules will only see the first 254 characters. Anything after that is ignored when the rule runs.

!!!note
    All attributes which store a reference to a person are stored as distinguished names. This format will match against the value of the Distinguish Name attribute on the Portal User resource collection. For instance, to select all documents authored by the user viewing the portlet, you would write, "Author is current Portal Users.Distinguished Name."



