# Using the XML configuration interface to administer analytics tags

You can use the XML configuration interface to manage analytics tags and site promotions in the portal.

The XML resource related to analytics tags is `tag` . The attributes are listed in the following.

**Notes:**

1.  When you create tags, you need to specify all attributes except the attribute `locale` marked as optional in the attributes list.
2.  When you export tags, the export result file will contain all the tags that exist in your portal system, including the tags created for tagging and rating.
3.  Tag names of analytics tags must start with `com.ibm.portal.asa.` and must match the following pattern: `com.ibm.portal.asa.tag\_name#tag\_value` .
4.  The tag name for site promotions must be `com.ibm.portal.asa.SitePromotion` .
5.  You must escape all special characters. This includes the blank space.

-   **tag**

    This is the XML resource tag for analytics tags. Use the following attributes with this tag:

    -   **resourceref = "object\_ID"**

        Use this attribute to specify the reference to the resource that is being tagged.

    -   **domain = "comm"**

        For analytics tags, specify a value of `"comm"` for this attribute. For tagging and rating this attribute is used to specify the database domain for the tagged resource. The only accepted value for analytics tags is `"comm"` .

    -   **owner = "user"**

        Use this attribute to specify the owner of the tag.

    -   **locale = "locale"**

        Use this attribute to specify the locale of the tag. This attribute is optional. If you do not specify this attribute, it defaults to `null` .


For examples refer to the following code samples:

Example: Exporting analytics tags

```
<?xml version="1.0" encoding="UTF-8"?>
<request    
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"    
   type="export">    
   <!-- This sample exports all tags.         
        In addition to all analytics tags (starting with 'com.ibm.portal.asa.'),
        all tags (see tagging and rating) are exported.             
   -->    
   <portal action="locate">            
      <tag action="export" objectid="*"/>        
      <!-- Export all tags with a specific locale in the system -->        
      <!-- <tag action="export" objectid="*" locale="SPECIFIC_LOCALE"/> -->    
   </portal>
</request>
```

Example: Creating analytics tags

```
<?xml version="1.0" encoding="UTF-8"?>
<request    
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"    
   type="update">    
   <!-- This sample creates analytics tags and site compositions.             
        NOTE: This sample file needs to be modified before execution.      
        Update the value of the 'owner' attributes of the 'access-control', 
        and 'tag' tags, and specify an existing user.     
   -->      
   <portal action="locate">   
      <!-- Locate the page. -->        
      <content-node action="locate" objectid="gettingStartedPage" 
                    uniquename="ibm.portal.Home.Getting Started"/>                              
      <!--  NOTE:
            Pattern:  <tag-name>#<tag-value>   
            Special characters (including 'blank space') must be escaped!
            All tag names must start with 'com.ibm.portal.asa.'          
            Tag name for site promotions must be 'com.ibm.portal.asa.SitePromotion'         
      -->       
      <!-- Assignment of the site promotion "Christmas 2011" to the gettingStartedPage -->  
      <tag action="update" objectid="ZCI_B1L68B1A00DO80IG7PCV0I6000" 
           resourceref="gettingStartedPage" domain="comm" 
           owner="uid=wpsadmin,o=defaultwimfilebasedrealm" 
           locale="en">com.ibm.portal.asa.SitePromotion#Christmas%202011</tag>              
      <!-- Assignment of the analytics tag 'Target Audience#Young Professionals' 
           to the gettingStartedPage -->   
      <tag action="update" objectid="ZCI_B1L68B1A00DO80IG7PCV0I7000" 
           resourceref="gettingStartedPage" domain="comm" 
           owner="uid=wpsadmin,o=defaultwimfilebasedrealm" 
           locale="en">com.ibm.portal.asa.Target%20Audience#Young%20Professionals</tag>                   
   </portal>
</request>
```

Example: Deleting analytics tags

```
<?xml version="1.0" encoding="UTF-8"?>
<request    
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
   xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"    
   type="update"> 
   <!-- This sample deletes analytics tags.   
        NOTE: This sample assumes that the CreateAnalyticsTags.xml 
        sample was executed before.       
   -->    
   <portal action="locate">        
      <!-- Delete the analytics tags created by sample CreateAnalyticsTags.xml -->        
      <tag action="delete" objectid="ZCI_B1L68B1A00DO80IG7PCV0I6000"/>        
      <tag action="delete" objectid="ZCI_B1L68B1A00DO80IG7PCV0I7000"/>        
      <!-- Delete all tags with a specific locale in the system -->        
      <!-- <tag action="delete" objectid="*" locale="SPECIFIC_LOCALE"/> -->
  </portal>
</request>

```

**Parent topic:**[Analytics tags and site promotions](../admin-system/sa_asa_anal_tags_site_prom.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

