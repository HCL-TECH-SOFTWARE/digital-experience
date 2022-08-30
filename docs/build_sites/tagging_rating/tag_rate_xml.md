# Using the XML configuration interface to administer tags and ratings

You can use the XML configuration interface to manage tagging and rating in the portal. For example, you can move tagspaces and ratings between portal versions or for staging purposes.

The XML resources related to tagging and rating are `tag`, `rating`, and `custom-resource`. Portal resources and custom resources are tagged and rated by different ways:

-   To tag or rate **portal resources**, you use their object IDs directly.
-   To represent **custom resources**, for example books, you use the XML resource `custom-resource`. The object ID of the `custom-resource` resource is used as the `resourceref` attribute in the `tag` and `rating` tags.

The XML resource tags and their attributes are listed in the following.

**Notes:**

1.  When you create tags, ratings, or custom resources, you need to specify all attributes except the ones marked as optional.
2.  When you move tagspaces between portals, both the users who have applied the tags and the resources to which the tags have been applied must exist in the target portal.
3.  You can update existing ratings, but not existing tags by using the XML configuration interface. The XML configuration interface `action="update"` works only for implicitly creating a new tag.

-   **tag**

    Use the following attributes with the XML resource tag `tag`:

    -   **resourceref = "object\_ID"**

        This attribute specifies the reference to the resource that is being tagged.

    -   **domain = "comm \| cust"**

        This attribute specifies the database domain for the tagged resource. Possible values are:

        -   **cust**

            Specify this value for private tags.

        -   **comm**

            Specify this value for public tags.

    -   **locale**

        This attribute specifies the locale of the tag. This attribute is optional. The default is `null`.

    -   **owner = "user"**

        This attribute specifies the owner of the tag.

-   **rating**

    Use the following attributes with the XML resource tag `rating`:

    -   **resourceref = "object\_ID"**

        This attribute specifies the reference to the resource that is being rated.

    -   **domain = "comm \| cust"**

        This attribute specifies the database domain for the rated resource. Possible values are:

        -   **cust**

            Specify this value for private ratings.

        -   **comm**

            Specify this value for public ratings.

    -   **value = "integer"**

        This attribute specifies the rating value.

    -   **owner = "user"**

        This attribute specifies the owner of the rating.

-   **custom-resource**

    Use this tag to represent custom resources, for example books. Use the following attribute with the XML resource tag `custom-resource`:

    -   **uri = "string"**

        This attribute specifies a URI that identifies the custom resource.

    Use the following subtag with the XML resource tag `custom-resource`:

    -   **category-instance**

        Use the subtag `category-instance` to assign a category in the format of a string to a custom resource. You can assign several categories to a custom resource. Use the following attribute with the subtag `category-instance`:

        -   **name = "category\_instance\_name"**

            Use this attribute to specify a name for a category instance.


Refer to the following code samples.

Example: Exporting tags and ratings

```
<?xml version="1.0" encoding="UTF-8" ?> 
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="export">

    <!-- This sample exports all custom resources, ratings, and tags.        
         Related sample files:
             CreateTagsAndRatings.xml 
             DeleteTagsAndRatings.xml
     -->
    <portal action="locate">
    
        <custom-resource action="export" objectid="*"/>
        <rating action="export" objectid="*"/>
        <tag action="export" objectid="*"/>

        <!-- Export all tags with a specific locale in the system -->
        <!-- <tag action="export" objectid="*" locale="SPECIFIC_LOCALE"/> -->

    </portal>
</request>
```

Example: Creating tags and ratings

```
<?xml version="1.0" encoding="UTF-8"?>
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="update">

    <!-- This sample creates ratings and tags.
    
         Related sample files:
             ExportTagsAndRatings.xml 
             DeleteTagsAndRatings.xml
             
    
         NOTE: This sample file needs to be modified before execution.
               Update the value of the 'owner' attributes of the 'access-control',
               'rating', and 'tag' tags, and specify an existing user. 
    -->
     
    <portal action="locate">

        <!-- Parent element under which a new page for this sample is inserted -->
        <content-node action="locate" objectid="parentPage" uniquename="ibm.portal.Home"/>

        <!-- A new empty page to which a tag and rating are assigned.-->
        <content-node action="update" objectid="samplePageOID" 
                      uniquename="ibm.portal.SamplePage.TagsAndRatings" 
                      ordinal="last" content-parentref="parentPage" 
                      active="true" create-type="explicit" type="page">
            <supported-markup markup="html" update="set"/>
            <localedata locale="en">
                <title>Sample page for tag and rating creation</title>
            </localedata>
        </content-node>


        <!-- A custom resource can be used to assign tags and ratings to resources 
             that are not managed by XMLAccess, but can be identified by an URI -->
        <custom-resource action="update" objectid="CH_B1L68B1A00DO80IG7PCV0I1000" 
                         uri="book:mySampleBookURI">
            <category-instance action="update" name="cookbook"/>
            <category-instance action="update" name="hardcover"/>
        </custom-resource>

        <!-- Assignment of a rating value of 5 by user wpsadmin to the sample page -->
        <rating action="update" objectid="CJ_B1L68B1A00DO80IG7PCV0I2000" 
                resourceref="samplePageOID" domain="comm" value="5" 
                owner="uid=wpsadmin,o=defaultwimfilebasedrealm" />
        <!-- Assignment of a rating value of 5 to the custom resource -->
        <rating action="update" objectid="CJ_B1L68B1A00DO80IG7PCV0I3000" 
                resourceref="CH_B1L68B1A00DO80IG7PCV0I1000" domain="comm" value="5" 
                owner="uid=wpsadmin,o=defaultwimfilebasedrealm"/>

        <!-- Assignment of the tag 'sample' to the sample page -->
        <tag action="update" objectid="CI_B1L68B1A00DO80IG7PCV0I4000" 
             resourceref="samplePageOID" domain="comm" 
             owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">sample</tag>
        <!-- Assignment of the tag 'sample' to the custom resource -->
        <tag action="update" objectid="CI_B1L68B1A00DO80IG7PCV0I5000" 
             resourceref="CH_B1L68B1A00DO80IG7PCV0I1000" domain="comm" 
             owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">sample</tag>

    </portal>
</request>
```

Example: Deleting tags and ratings

```
<?xml version="1.0" encoding="UTF-8"?>
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="update">

    <!-- This sample deletes ratings and tags.
        
         Related sample files:
             CreateTagsAndRatings.xml 
             ExportTagsAndRatings.xml
         
         NOTE: This sample assumes that the CreateTagsAndRatings.xml sample was 
         executed before.  
     -->
    <portal action="locate">

        <!-- Delete the custom resource created by sample CreateTagsAndRatings.xml -->
        <custom-resource action="delete" objectid="CH_B1L68B1A00DO80IG7PCV0I1000"/>

        <!-- Delete all custom resources in the system -->
        <!-- <custom-resource action="delete" objectid="*"/> -->

        <!-- Delete the ratings created by sample CreateTagsAndRatings.xml -->
        <rating action="delete" objectid="CJ_B1L68B1A00DO80IG7PCV0I2000"/>
        <rating action="delete" objectid="CJ_B1L68B1A00DO80IG7PCV0I3000"/>

        <!-- Delete all ratings in the system -->
        <!--  <rating action="delete" objectid="*"/> -->

        <!-- Delete the tags created by sample CreateTagsAndRatings.xml -->
        <tag action="delete" objectid="CI_B1L68B1A00DO80IG7PCV0I4000"/>
        <tag action="delete" objectid="CI_B1L68B1A00DO80IG7PCV0I5000"/>

        <!-- Delete all tags in the system -->
        <!-- <tag action="delete" objectid="*"/> -->

        <!-- Delete all tags with a specific locale in the system -->
        <!-- <tag action="delete" objectid="*" locale="SPECIFIC_LOCALE"/> -->

    </portal>
</request>
```

## Moving tags and ratings between portals by using the XML configuration interface

To move tags and ratings between portals, for example for staging purposes, proceed as follows:

1.  Make sure that all users who have applied tags and ratings on the source portal also exist on the target portal.
2.  Make sure that all tagged and rated resources on the source portal also exist on the target portal.
3.  Use the provided XML sample script to export all tags and ratings from the source portal.
4.  Import the result file from the previous export step to the target portal.


**Related information**  


[Configuring task to retrieve tags](../collab/i_coll_t_enable_lctags_task.md)

[Types of portal resources](../admin-system/adxmlref_resrc_types.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[Tagging and rating](../admin-system/tag_rate_mngadmin.md)

[Hints and tips for developers and portal administrators](../admin-system/tag_rate_ref_hintip_4admins.md)

