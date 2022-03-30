# Portal Scripting Interface and content associations

With the Portal Scripting Interface, you can create scripts to automate the management of content associations. Using the ContentMapping bean with the Portal Scripting Interface, you can add, modify, and remove content associations.

**Note:** Before a script can work with the ContentMapping bean, you must establish a user session with the portal using the login command of the Portal bean. The user identity must have sufficient permissions to administer the web content pages and web content library folders referenced by the script.

## Retrieve content associations

To retrieve content association information, use the select method to specify the object ID of the web content page. You can often derive the object ID for a resource from another bean and use that as input for the select method. For example, you might have a web content page with the unique name `my.test.page`. Using the find method of the Content bean, you can determine the object ID of the `my.test.page` page.

-   **Jacl example:**

    ```
    $set the_page [$Content find page uniquename "my.test.page"]
    $ContentMapping select $the_page
    ```

-   **Jython example:**

    ```
    the_page = Content.find('page','uniquename','my.test.page')
    ContentMapping.select(the_page)
    ```


After you have the object ID of the web content page, you can use the list method and the get methods to access the content associations. The list method returns a list of content association IDs. The IDs can identify either the resource ID of a folder or the content path of the folder, depending on how the page is mapped. You can use the content association IDs returned by the list method as arguments for the get method.

-   **Jacl example:**

    ```
    $set the_page [$Content find page uniquename "my.test.page"]
    $ContentMapping select $the_page
    foreach mid [$ContentMapping list mappings] {
      puts "  Mapping $mid info:"
      puts "  content id: [$ContentMapping get content-id $mid]"
      puts "  default? [$ContentMapping get isdefault $mid]"
      puts "  scope: [$ContentMapping get scope $mid]"
    }
    ```

-   **Jython example:**

    ```
    var the_page = Content.find('page','uniquename','my.test.page')
    ContentMapping.select(the_page)
    for mid in ContentMapping.list('mappings').split():
      print "  Mapping "+mid+" info:"
      print "  content id: "+ContentMapping.get('content-id', mid)
      print "  default? "+ContentMapping.get('isdefault', mid)
      print "  scope: "+ContentMapping.get('scope', mid)
    
    ```


The get method can return the default association for the selected web content page. The list method can retrieve a list of scopes that are defined for the associations of the web content page.

-   **Jacl example:**

    ```
    $set the_page [$Content find page uniquename "my.test.page"]
    $ContentMapping select $the_page
    puts "available scopes: [$ContentMapping list scopes]"
    puts "default mapping: [$ContentMapping get defaultmapping]"
    puts "portal resource OID: [$ContentMapping get oid]"
    ```

-   **Jython example:**

    ```
    var the_page = Content.find('page','uniquename','my.test.page')
    ContentMapping.select(the_page)
    print "available scopes: "+ContentMapping.list('scopes')
    print "default mapping: "+ContentMapping.get('defaultmapping')
    print "portal resource OID: "+ContentMapping.get('oid')
    ```


## Add content associations

Use the add method to add new content associations to a web content page. You can assign a content association by specifying the content path of the folder or the ID of folder. If you identify the folder by content path, the association is internally transformed to actually point to the ID of the folder. As a result, if you rename the folder later, the association still points to the same folder.

-   **Jacl example:**

    ```
    $ContentMapping select [$ContentNode find page uniquename "my.sample.page"]
    $ContentMapping add content-path "/test1/mapping" 
    set the_content_id  .... ## obtain ID of content to be mapped 
    $ContentMapping add id $the_content_id
    ```

-   **Jython example:**

    ```
    ContentMapping.select(Content.find('all','un','my.sample.page'))
    ContentMapping.add('content-path','/test1/mapping') 
    var the_content_id = ... ## obtain ID of content to be mapped 
    ContentMapping.add('id',the_content_id) 
    ```


## Remove content associations

The ContentMapping bean provides two methods you can use to remove content associations from a web content page:

-   **remove**

    Removes an individual content association, as specified either by the resource ID of the folder or the content path of the folder.

-   **delete**

    Removes all content associations for the web content page.


The following examples demonstrate how to remove the content associations for two web content pages. The content associations of the first page are removed individually with the remove method, and the content associations of the second page are removed with the delete method.

-   **Jacl example:**

    ```
    $set the_first_page [$Content find page uniquename "my.test.page"]
    $ContentMapping select $the_first_page
    foreach mid [$ContentMapping list mappings] {
      $ContentMapping remove $mid
    }
    
    $set another_page [$Content find page uniquename "my.second.test.page"]
    $ContentMapping select $another_page
    $ContentMapping delete
    ```

-   **Jython example:**

    ```
    var the_page = Content.find('page','uniquename','my.test.page')
    ContentMapping.select(the_first_page)
    for mid in ContentMapping.list('mappings').split():
      ContentMapping.remove(mid)
    
    var another_page = Content.find('page','uniquename','my.second.test.page')
    ContentMapping.select(another_page)
    ContentMapping.delete()
    ```


## Modify content associations

To modify content associations, use the set method of the ContentMapping bean. You can change the following attributes:

-   Default flag
-   Delegation mode
-   Mapping scope

When calling the set method, pass in the ID of the content association that you want to update.

The following example updates two content associations for the web content page identified by the unique name `my.test.page`. Several settings are specified for the first content association:

-   The default flag is set to make this content association the default content association for the web content page.
-   The association scope is specified as `_scp_`.
-   Page-based access control is turned off by setting the delegation mode to false.

For the second content association, the association scope is removed by specifying an empty string.

-   **Jacl example:**

    ```
    $ContentMapping select [$ContentNode find page uniquename "my.sample.page"]
    set first_m_id [lindex [$ContentMapping list mappings] 0] 
    $ContentMapping set scope $first_m_id "_scp_"
    $ContentMapping set default $first_m_id true
    $ContentMapping set delegation $first_m_id false
    set second_m_id [lindex [$ContentMapping list mappings] 1] 
    $ContentMapping set scope $second_m_id ""
    ```

-   **Jython example:**

    ```
    ContentMapping.select(Content.find('all','un','my.sample.page'))
    var first_m_id = ContentMapping.list('mappings').split()[0]
    ContentMapping.set('scope',first_m_id,'_scp_')
    ContentMapping.set('default',first_m_id,'true')
    ContentMapping.set('delegation',first_m_id,'false')
    var second_m_id = ContentMapping.list('mappings').split()[1]
    ContentMapping.set('scope',second_m_id,'')
    ```


**Parent topic:**[Content associations reference ](../admin-system/mp_wcm_contentmap.md)

**Related information**  


[Web content associations ](../wcm/wcm_delivery_contentmap_about.md)

[Community associations and APIs ](../admin-system/commpages_access_apis.md)

