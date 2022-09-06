# Element Control Element

The element control element is used to populate elements that are stored in components, site areas, and content items.

## Element overview

The Web Content Integrator uses the following business logic to process each component element in the feed entry:

1.  It checks whether the component site area or content item contains a field whose name matches the value in the feed element's name attribute. This is a case-sensitive comparison so the names must match exactly.
2.  If a matching field is found, it checks whether the data type matches what was specified in the feed element's sub-element.
3.  If both the name and data type match, the element in the site area or content item is updated to match the data contained the feed element.
4.  If an element is found which matches the feed element's name, but not its data type, the Web Content Integrator removes the old field from the site area or content item and attempt to replace it with a new field that matches the data type specified in the feed.
5.  If no matching field can be found on the content, the Web Content Integrator attempts to create a new element.

!!!note
	When creating elements in Web Content Manager using an authoring portlet, it is possible to specify a number of field validation criteria such as the maximum size of a text field or the allowable range of a date field. These are validated during the save operation. If the data in the field does not meet the validation criteria the entire save operation fails, meaning that none of the changes in the feed entry is applied. The Web Content Integrator does not have the ability to check that the data in the feed element is valid before attempting the save operation. Therefore, if you elect to implement validations on your authoring templates, it is important for the feed producer to ensure that the content is valid during the generation of the feed.

## Text element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Site areas and content items|
|Required for item types|None.|
|Allowable Values|A text component must contain a plain text value.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing text element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "text". This value is not case-sensitive.<br>-   **value**<br>The value of this sub-element must be plain text.|
|Optional sub-elements|None|

## Short Text element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Site areas and content items|
|Required for item types|None.|
|Allowable Values|A short text component must contain a plain text value.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing short text element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "shorttext". This value is not case-sensitive.<br>-   **value**<br>The value of this sub-element must be plain text.|
|Optional sub-elements|None|

Example:

```
<ibmwcm:element name="Headline">
	<ibmwcm:type>shorttext</ibmwcm:type>
	<ibmwcm:value>New Product Released</ibmwcm:value>
</ibmwcm:element>
```

## HTML element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|HTML components, site areas, and content items|
|Required for item types|HTML components.|
|Allowable Values|The value of the value sub-element must be HTML that is stored in the corresponding HTML element. The HTML can either be entity-encoded or contained within a CDATA element. Alternatively, the feed producer can provide a URL to an HTML file whose contents are retrieved by the Web Content Integrator|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing HTML element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "html".<br>-   **value**<br>Used when adding HTML markup that is either entity-encoded or contained within a CDATA element.<br>-   **source**<br>Used with a fully qualified URL to an HTML file. When the Web Content Integrator processes the feed it retrieves the file and store its contents in the HTML element in the site area or content item.|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:element name="footer">
	<ibmwcm:type>html</ibmwcm:type>
	<ibmwcm:value>
		&lt;strong&gt;Copyright 2006&lt;/strong&gt;
	</ibmwcm:value>
</ibmwcm:element>


<ibmwcm:element name="footer">
	<ibmwcm:type>html</ibmwcm:type>
	<ibmwcm:value>
		<![CDATA[<strong>Copyright 2006</strong>]]>
	</ibmwcm:value>
</ibmwcm:element>


<ibmwcm:element name="footer">
	<ibmwcm:type>html</ibmwcm:type>
	<ibmwcm:source>
		http://sourcecms.cntserv_exmp.com/pages/footer.htm
	</ibmwcm:source>
</ibmwcm:element>

```

## Rich text element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Site areas and content items|
|Required for item types|None|
|Allowable Values|The value of the value sub-element must be HTML that is stored in the corresponding rich text element. The HTML can either be entity-encoded or contained within a CDATA element.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing rich text element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "rich text". These values are not case-sensitive.<br>-   **value**<br>The value of this sub-element must be HTML markup that is either entity-encoded or contained within a CDATA element.|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:element name="body">
	<ibmwcm:type>rich text</ibmwcm:type>
	<ibmwcm:value>
		&ltp&gt;This is the content&ltp/p&gt;
	</ibmwcm:value>
</ibmwcm:element>


<ibmwcm:element name="body">
	<ibmwcm:type>rich text</ibmwcm:type>
	<ibmwcm:value>
		<![CDATA[<p>This is the content</p>]]>
	</ibmwcm:value>
</ibmwcm:element>

```

## File resource element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|File resource components, site areas, and content items|
|Required for item types|File resource components.|
|Allowable Values|The value must be a fully qualified URL that points to the binary file that is to be uploaded into file resource element.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing file resource element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "file". These values are not case-sensitive.<br>-   **source**<br>The value must be a fully qualified URL that points to the binary file that is to be uploaded into a file resource element.<br>
**Note:** If the URL contains non-ascii characters, the non-ascii characters must be encoded. For example: http://server:port/wps/wcm/%E4%B8%AD%E6%96%87/%E7%BB%84%E4%BB%B6.pdf|
|Optional sub-elements|-   **fileName**<br>The value of this sub-element must be the file name and extension to be applied to the file attachment when added to the file resource element. If this sub-element is present in the feed entry, then its value is used as the file name of the attachment in Web Content Manager regardless of what the name of the file was on the source server. This is useful if the URL to the binary file does not include the file name as is the case with some content management systems. If the fileName sub-element is not present in the feed, then the Web Content Integrator attempts to determine the file name from the URL in the value sub-element by taking all of the characters following the last forward slash in the URL.|

Examples:

```
<ibmwcm:element name="attachment">
	<ibmwcm:type>file</ibmwcm:type>
	<ibmwcm:source>
		http://sourcecms.cntserv_exmp.com/files/plan.doc
	</ibmwcm:source>
</ibmwcm:element>


<ibmwcm:element name="attachment">
	<ibmwcm:type>file</ibmwcm:type>
	<ibmwcm:source>
		http://sourcecms.cntserv_exmp.com/files/plan.doc
	</ibmwcm:source>
	<ibmwcm:fileName>MktgPlan.doc</ibmwcm:fileName>
</ibmwcm:element>

```

## Image element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Image components, site areas, and content items|
|Required for item types|Image components.|
|Allowable Values|The value must be a fully qualified URL that points to the binary file that is to be uploaded into image element.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing image element in a site area or content item.<br>|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "image". These values are not case-sensitive.<br>-   **source**<br>The value must be a fully qualified URL that points to the binary file that is to be uploaded into an image element.<br>
**Note:** If the URL contains non-ASCII characters, the non-ASCII characters must be encoded. For example: http://server:port/wps/wcm/%E4%B8%AD%E6%96%87/%E7%BB%84%E4%BB%B6.jpg|
|Optional sub-elements|-   **fileName**<br>The value of this sub-element must be the file name and extension to be applied to the file attachment when added to the image element. If this sub-element is present in the feed entry, then its value is used as the file name of the attachment in Web Content Manager regardless of what the name of the file was on the source server. This is useful if the URL to the binary file does not include the file name as is the case with some content management systems. If the fileName sub-element is not present in the feed, then the Web Content Integrator attempts to determine the file name from the URL in the value sub-element by taking all of the characters following the last forward slash in the URL.<br>-   **htmlName**<br>The HTML tag name for the image.<br>-   **altText**<br>The alternative text describing the image.<br>-   **height**<br>The height of the image. The value must be a number \(for pixels\) or a percentage.<br>-   **width**<br>The width of the image. The value must be a number \(for pixels\) or a percentage.<br>-   **border**<br>The width of a border around the image. The value must be a number \(for pixels\).|

Examples:

```
<ibmwcm:element name="image">
	<ibmwcm:type>image</ibmwcm:type>
	<ibmwcm:source>
		http://sourcecms.cntserv_exmp.com/images/logo.gif
	</ibmwcm:source>
</ibmwcm:element>


<ibmwcm:element name="image">
	<ibmwcm:type>image</ibmwcm:type>
	<ibmwcm:source>
		http://sourcecms.cntserv_exmp.com/images/logo.gif
	</ibmwcm:source>
	<ibmwcm:fileName>cntserv_exmp_logo.doc</ibmwcm:fileName>
</ibmwcm:element>

```

## Date element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Date and time components, site areas, and content items|
|Required for item types|Date and time components.|
|Allowable Values|A date or time value to be stored in a date and time element.|
|Required Attributes|-   **name**<br>he value of this attribute must match the name of an existing date and time element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "date". This value is not case-sensitive.<br>-   **value**<br>The value of this sub-element must be a date and time value in the RFC 822 format.|
|Optional sub-elements|-   **format**<br>This allows the feed producer to specify the format of the date or time. A value of "date" causes the date and time element to be set to display only the date portion of the data. Likewise, a value of "time" displays only the time portion of the data. Any other value, or the absence of this sub-element, results in both portions of the data being displayed. The values for this sub-element are not case-sensitive.|

Example:

```
<ibmwcm:element name="StartDate">
	<ibmwcm:type>date</ibmwcm:type>
	<ibmwcm:value>
		Thu, 14 Apr 1966 15:15:00 EDT
	</ibmwcm:value>
	<ibmwcm:format>date</ibmwcm:format>
</ibmwcm:element>
```

## Link element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Link components, site areas, and content items|
|Required for item types|Link components.|
|Allowable Values|This component contains the information that is required to configure a link element. There are a number of optional sub-elements that can be used to set the various parameters of the Link field.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing link element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "link". This value is not case-sensitive.<br>-   **format**<br>
    -   ExternalLink: creates a link to a URL external to your Web Content Manager system.<br>
    -   ManagedContent: creates a link to another Web Content Manager item.<br>
    -   ExistingLink: creates a link to a preexisting link component<br>
-   **value**<br>The value of this sub-element depends on what was specified in the "format" sub-element:<br>
    -   ExternalLink: a URL.<br>
    -   ManagedContent: the GUID of an existing Web Content Manager item.<br>
    -   ExistingLink: the GUID of an existing link component.<br>|
|Optional sub-elements|-   **linkText**

This sub-element allows the feed producer to specify what is rendered between the `<a href="">` and `</a>` portions of the anchor tag. Possible values include:

    -   A plain text string
    -   A string of HTML markup that is either entity-encoded or enclosed in a CDATA tag
    -   The GUID of a feed entry that describes an image component
A required type attribute indicates which of the previous value types to use. It can be set to "text", "html", or "imageGuid".

If the linkText sub-element is not included in the feed, the link text default to the value set in either "ExternalLink", "ManagedContent" or "ExistingLink".

-   **linkDescription**

This sub-element provides a mechanism to specify a description for the link element. If this sub-element is not present, the description on the link element defaults to the value of the description of the site area or content item.

-   **linkTarget**

The sub-element is used to set the target browser window where the link is displayed when it is clicked. Allowable values are: "none", "\_blank", "\_top", "\_self", "\_parent", and "\{NEW\_WINDOW\_NAME\}". If this element is not present in the feed the link target defaults to "none" meaning that the link will open in the same browser window as the page containing it.

-   **queryString**

If present, the value of this sub-element is appended to the generated HREF of the link. This value must be encapsulated in a CDATA tag to prevent parsing problems.

-   **additionalAttributes**

The value of this sub-element is inserted into the `<a>` tag as extra HTML attributes.

-   **allowClear**

This sub-element controls whether the value in the link element can be deleted. It must be set to either "true" or "false". It defaults to "true" if this element is not present in the feed.


|

-   **Simple Link to external URL for IBM.com**

    ```
    <ibmwcm:element name="Link">
    	<ibmwcm:type>link</ibmwcm:type>
    	<ibmwcm:value>http://www.ibm.com</ibmwcm:value>
    	<ibmwcm:format>ExternalLink</ibmwcm:format>
    	<ibmwcm:linkText type="text">IBM</ibmwcm:linkText>
    </ibmwcm:element>
    ```

-   **Expanded link to external URL for IBM.com**

    ```
    <ibmwcm:element name="Link">
    	<ibmwcm:type>link</ibmwcm:type>
    	<ibmwcm:value>http://www.ibm.com/search</ibmwcm:value>
    	<ibmwcm:format>ExternalLink</ibmwcm:format>
    	<ibmwcm:linkText type="text">RSS Feed Format Resources</ibmwcm:linkText>
    	<ibmwcm:linkDescription>Search for RSS Feed Format</ibmwcm:linkDescription>
    	<ibmwcm:queryString><![CDATA[?q=rss+feed+format]]></ibmwcm:queryString>]]>
    	<ibmwcm:linkTarget>_blank</ibmwcm:linkTarget>
    	<ibmwcm:additionalAttributes>class="extLink"</ibmwcm:additionalAttributes>
    </ibmwcm:element>
    ```

-   **Simple link to a file resource component**

    ```
    <ibmwcm:element name="Link">
    	<ibmwcm:type>link</ibmwcm:type>
    	<ibmwcm:value>63000001</ibmwcm:value>
    	<ibmwcm:format>ManagedContent</ibmwcm:format>
    	<ibmwcm:linkText type="imageGuid">290df293e20a</ibmwcm:linkText>
    	<ibmwcm:allowClear>true</ibmwcm:allowClear>
    </ibmwcm:element>
    ```

-   **Simple Link to another content item**

    ```
    <ibmwcm:element name="Link">
    	<ibmwcm:type>link</ibmwcm:type>
    	<ibmwcm:value>80220102</ibmwcm:value>
    	<ibmwcm:format>ManagedContent</ibmwcm:format>
    	<ibmwcm:linkText type="html"><![CDATA[<b>Marketing Plan</b></ibmwcm:linkText>]]>
    
    </ibmwcm:element>
    ```


## Number element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Number components, site areas, and content items|
|Required for item types|Number components.|
|Allowable Values|A numerical value to be stored in a number element.|
|Required Attributes|-   **name**

The value of this attribute must match the name of an existing number element in a site area or content item.


|
|Optional Attributes|None|
|Required sub-elements|-   **type**

The value of this sub-element must be "number". This value is not case-sensitive.

-   **value**

A numerical value to be stored in a number element.


|
|Optional sub-elements|-   **format**

This allows the feed producer to specify the format for the number element. For example, if a value of "integer" is specified, then only data in the format of whole numbers are imported.


|

Example:

```
<ibmwcm:element name="FileSize">
	<ibmwcm:type>number</ibmwcm:type>
	<ibmwcm:value>34082</ibmwcm:value>
	<ibmwcm:format>integer</ibmwcm:format>
</ibmwcm:element>
```

## Option selection element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Site areas and content items|
|Required for item types|None|
|Allowable Values|This component contains a list of values that are set as the selected options in an option selection element.|
|Required Attributes|-   **name**<br>The value of this attribute must match the name of an existing option selection element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>The value of this sub-element must be "option". This value is not case-sensitive.|
|Optional sub-elements|-   **optionType**<br>
This is used to define the type of option selection element.

    -   Specify `user` when referencing from a list of user-defined options.
    -   Specify `taxonomy` when referencing options from an existing taxonomy.
You can only specify 1 option type per option selection element. If no option type is defined, "user" will be used by default.<br>-   **selectedCategory**<br>

This is used with the option type of "taxonomy" and is used to specify the path to a category you want to use in the option selection element. You can use as many selectedCategory elements as you require.<br>

If the taxonomy exists in a different library from the option selection element, you can also specify the library name. For example:<br>

    ```
<ibmwcm:selectedCategory library="shared">
Days/Monday</ibmwcm:selectedCategory>
    ```
<br>
You must specify the name of each category and taxonomy you want to reference. If they do not exist, they are created when the feed is processed.<br>
-   **selectedOption**<br>
This is used with the option type of "user" and is used to specify a list of user-defined options. You can use as many selectedOption elements as you require.|

-   **Example 1:**

    Selecting a single category where the category is in the same library as the item. In this example "Days" is the name of a taxonomy and "Monday" is the name of a category.

    ```
    <ibmwcm:element name="DayOfTheWeek">
    	<ibmwcm:type>option</ibmwcm:type >
        <ibmwcm:optionType>taxonomy</ibmwcm:optionType>
        <ibmwcm:selectedCategory>Days/Monday</ibmwcm:selectedCategory>
    < /ibmwcm:element>
    ```

-   **Example 2:**

    Selecting multiple categories where the categories are in the same library as the item.

    ```
    <ibmwcm:element name="DayOfTheWeek">
      <ibmwcm:type>option</ibmwcm:type >
        <ibmwcm:optionType>taxonomy</ibmwcm:optionType>
        <ibmwcm:selectedCategory>Days/Monday</ibmwcm:selectedCategory>
    		<ibmwcm:selectedCategory>Days/Tuesday</ibmwcm:selectedCategory>
    < ;/ibmwcm:element>
    ```

-   **Example 3:**

    Selecting a single category where the category is in a different library to the item.

    ```
    <ibmwcm:element name="DayOfTheWeek">
      <ibmwcm:type>option</ibmwcm:type >
        <ibmwcm:optionType>taxonomy</ibmwcm:optionType>
        <ibmwcm:selectedCategory library="shared">Days/Monday</ibmwcm:selectedCategory>
    </ibmwcm:element>
    ```

-   **Example 4:**

    Selecting a user-defined option. In this example "False" is an option that is defined by a user on the Authoring Template for an item.

    ```
    <ibmwcm:element name="Enable">
        <ibmwcm:type>option</ibmwcm:type >
        <ibmwcm:optionType>user</ibmwcm:optionType>
        <ibmwcm:selectedOption>False</ibmwcm:selectedOption>
    </ibmwcm:element>
    ```


## Component reference element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Site areas and content items|
|Required for item types|None|
|Allowable Values|This component contains the GUID of a component.|
|Required Attributes|-   **name**<br>
The value of this attribute must match the name of an existing component reference element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>
The value of this sub-element must be "reference". This value is not case-sensitive.<br>
-   **value**<br>
This component contains the GUID of a component.|
|Optional sub-elements|None|

Example:

```
<ibmwcm:element name="Footer">
	<ibmwcm:type>reference</ibmwcm:type>
	<ibmwcm:value>29bc2daf3289</ibmwcm:value>
</ibmwcm:element>
```

## User selection element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|User selection components, site areas, and content items|
|Required for item types|User selection components.|
|Allowable Values|A list of names of users to be selected in a user selection element.|
|Required Attributes|-   **name**<br>
The value of this attribute must match the name of an existing user selection element in a site area or content item.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>
The value of this sub-element must be "userSelect". This value is not case-sensitive.<br>
-   **value**<br>
The value of this sub-element must be a comma-separated list of user names. When processed the Web Content Integrator attempts to resolve each name to a valid portal user. If a name cannot be resolved, it is skipped.|
|Optional sub-elements|None|

Example:

```
<ibmwcm:element name="Users">
	<ibmwcm:type>userSelect</ibmwcm:type>
	<ibmwcm:value>wpsadmin,John Smith</ibmwcm:value>
</ibmwcm:element>
```

## Style sheet element

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Stylesheet components|
|Required for item types|Stylesheet components|
|Allowable Values|A URL that points to a CSS file that is uploaded into a stylesheet component.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>
The value of this sub-element must be "styleSheet". This value is not case-sensitive.<br>
-   **source**<br>
A URL that points to a CSS file that is uploaded into the stylesheet component.
|
|Optional sub-elements|-   **format**<br>
This sub-element is used to specify the type of the stylesheet. Valid options are: "preferred", "alternate", and "persistent". If this sub-element is not present in the feed, or if any value other than the previous values is specified, the type will default to "preferred".<br>
-   **mediaType**<br>
This sub-element specifies the media type of the stylesheet. Valid values are: "all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", and "unspecified". If the mediaType sub-element is not present in the feed, or if any value other than the previous values is specified, the media type defaults to "unspecified".<br>
-   **cssTitle**<br>
The value of this sub-element must be a string that is set as the value of the title attribute when the link to the CSS file is rendered.|

Example:

```
<ibmwcm:element name="cssFile">
	<ibmwcm:type>styleSheet</ibmwcm:type>
	<ibmwcm:source>http://www.cntserv_exmp.com/styles/news.css</ibmwcm:source>
	<ibmwcm:format>alternate</ibmwcm:format>
	<ibmwcm:mediaType>print</ibmwcm:mediaType>
</ibmwcm:element>
```


