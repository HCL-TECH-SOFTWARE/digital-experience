# People Finder configuration reference

The default fields of the People Finder portlet correspond to attributes defined by Member Manager, and enable the display of information about people in several views. As an administrator, you can determine the layout and content of portlet views by selecting and ordering the fields that appear in each view.

**Note:** If Member Manager is configured with Microsoft™ Active Directory, remove the fields carLicense, secretary, and pager from the People Finder configuration.

The configuration settings are stored in the file `apPDirConfig.xml`. You can return People Finder to its default configuration by selecting **Configure** from the portlet drop-down menu, and under XML Configuration, clicking **Reload Settings**.

For additional information on setting up the views of the People Finder portlet, while configuring People Finder, select Help from the drop-down menu on the portlet title bar.

## Business Card fields

The following table lists the Member Manager attributes that appear as fields in the unlabelled Business Card section of the Profile in People Finder. By default, the Business Card section displays the following fields as lines in descending order. Business Card fields do not display labels, and fields that contain no information are not displayed. For each attribute listed, the field label and display type are identified, except for Photograph, whose attribute you can select from a separate list and is jpegPhoto by default. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|jpegPhoto|Photo|N/A|
|cn|Name|Person Link|
|telephoneNumber|Phone number|N/A|
|ibm-primaryEmail|Email address|Email Address|
|ibm-jobTitle|Job title|N/A|
|localityName|City|N/A|

## Contact Information fields

The following table lists the Member Manager attributes that appear as fields in the **Contact Information** section of the Profile. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|ibm-personalTitle|Title|N/A|
|cn|Name|Person Link|
|uid|User ID|N/A|
|employeeNumber|Employee number|N/A|
|ibm-primaryEmail|Email address|Email Address|
|telephoneNumber|Phone number|N/A|
|mobile|Mobile phone number|N/A|
|pager|Pager Number|N/A|
|postalAddress|Address|N/A|
|roomNumber|Room number|N/A|
|street|Street|N/A|
|localityName|City|N/A|
|stateOrProvinceName|State or province|N/A|
|postalCode|Postal Code|N/A|
|countryName|Country|N/A|

## Current Job fields

The following table lists the Member Manager attributes that appear as fields in the **Current Job** section of the Profile. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|ibm-jobTitle|Job title|N/A|
|departmentNumber|Department Number|N/A|
|businessCategory|Business|N/A|
|employeeType|Employee Type|Member Link|

## Background fields

The following table lists the Member Manager attributes that appear as fields in the **Background** section of the Profile. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|preferredLanguage|Preferred language|N/A|
|labeledURI|Personal web page|Web Page Link|

## Advanced Search Queries

Advanced Search criteria, by default, include most of the same fields that are available for the Profile. In general, only fields corresponding to attributes of data type String are available as search criteria. Attributes of data type Numeric, Object, or MemberLink are not available for search.

The following fields are not available for selection as Advanced Search criteria in the People Finder. Users cannot search for people using these fields because the attributes are not type String.

manager \(data type = MemberLink\)

seeAlso \(data type = MemberLink\)

secretary \(data type = MemberLink\)

## Advanced Search Results fields

The following table lists the Member Manager attributes that appear as fields in the Advanced Search Results in People Finder. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|cn|Name|Person Link|
|telephoneNumber|Phone number|N/A|
|ibm-jobTitle|Job title|N/A|

## Quick Search Queries

The following table lists the Member Manager attributes that appear by default in the **Search By** list in Quick Search. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|byName|Name|N/A|
|uid|User ID|N/A|
|ibm-primaryEmail|Email address|N/A|
|telephoneNumber|Phone number|N/A|
|ibm-jobTitle|Job title|N/A|

## Quick Search Results fields

The following table lists the Member Manager attributes that appear as fields in the Quick Search Results. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|cn|Name|Person Link|
|telephoneNumber|Phone number|N/A|

## Organization View fields

The following table lists the Member Manager attributes that appear as fields in the Organization View. For each attribute listed, the field label and display type are identified. Unless noted, the default display type of an attribute is a text string.

|Member Manager attribute|Field label|Display type|
|------------------------|-----------|------------|
|cn|Name|Person Link|
|telephoneNumber|Phone number|N/A|
|ibm-jobTitle|Job title|N/A|

**Parent topic:**[People Finder](../collab/i_coll_r_porcc_pfnd.md)

