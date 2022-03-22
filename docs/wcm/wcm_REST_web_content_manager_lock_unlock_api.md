# Web Content Manager Lock/Unlock API

The Web Content Manager Lock/Unlock API lets you lock and unlock WCM content components, authoring templates, and item.

It also extends the [WCM Query API](../wcm/wcm_rest_query.md) to pass on the information if an item is locked and who locked it.

It is equivalent to the functionality in the user interface \(for WCM items\):

![](../assets/HCL_Web_Content_Manager_Lock_Unlock_API.png "Enable WCM Lock/Unlock API")

## Using the Web Content Manager Lock/Unlock API

-   **Endpoint**

    **POST request to:**

    http://host:port/wps/mycontenthandler/wcmrest/item/<UUID of WCM item\>/lock or

    http://host:port/wps/mycontenthandler/wcmrest/item/<UUID of WCM item\>/unlock

    **JSON:**

    For JSON add ?mime-type=application/json

    **Sample URL:**

    localhost:10039/wps/mycontenthandler/wcmrest/item/02d62efb-54ed-430d-9f67-01d8788cb6d6/lock


-   **Expected Body**

    The body can have the basic WCM structure:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    </feed>
    
    ```


-   **Expected Headers**

    LTPA token of the user.


-   **Query Parameters**

    None.


-   **Limitations**

    None.


-   **Return Body**

    The updated item.

    Sample:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:02d62efb-54ed-430d-9f67-01d8788cb6d6</id>
        <title xml:lang="en">test</title>
        <summary xml:lang="en"></summary>
        <wcm:name>test</wcm:name>
        <wcm:type>Content</wcm:type>
        <updated>2020-07-21T01:10:03.736Z</updated>
        <wcm:created>2020-07-04T18:26:26.956Z</wcm:created>
        <author>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/um/users/profiles/Z9eAe1RO8MROCP9PEJMG633CCMMG6JHP6JM07HHPEJMS6KPC4JGD6J9C63HLC13</uri>
            <name>wpsadmin</name>
        </author>
        <wcm:owner>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/um/users/profiles/Z9eAe1RO8MROCP9PEJMG633CCMMG6JHP6JM07HHPEJMS6KPC4JGD6J9C63HLC13</uri>
            <name>wpsadmin</name>
        </wcm:owner>
        <wcm:lastModifier>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/um/users/profiles/Z9eAe1RO8MROCP9PEJMG633CCMMG6JHP6JM07HHPEJMS6KPC4JGD6J9C63HLC13</uri>
            <name>wpsadmin</name>
        </wcm:lastModifier>
        <wcm:creator>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/um/users/profiles/Z9eAe1RO8MROCP9PEJMG633CCMMG6JHP6JM07HHPEJMS6KPC4JGD6J9C63HLC13</uri>
            <name>wpsadmin</name>
        </wcm:creator>
        <wcm:profile/>
        <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Content/02d62efb-54ed-430d-9f67-01d8788cb6d6" xml:lang="en" label="Read"/>
        <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Content/02d62efb-54ed-430d-9f67-01d8788cb6d6" xml:lang="en" label="Edit"/>
        <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Content/02d62efb-54ed-430d-9f67-01d8788cb6d6" xml:lang="en" label="Delete"/>
        <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/item/02d62efb-54ed-430d-9f67-01d8788cb6d6/change-to-draft" xml:lang="en" label="Change To Draft"/>
        <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/item/02d62efb-54ed-430d-9f67-01d8788cb6d6/create-draft" xml:lang="en" label="Create Draft"/>
        <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/ac/access:oid:Z6QReDeGHC86R865JP4MMK6K9P8MMG6J1C8MM476JDEJM06H1PGJR07OPO46RGCM1" xml:lang="en" label="Access Control"/>
        <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Library/08929add-f917-4da6-996b-c1b40e436666" xml:lang="en" label="Library"/>
        <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/SiteArea/c85aea10-bbb1-4433-be93-c92f2a8caeb1" xml:lang="en" label="Parent"/>
        <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/item/02d62efb-54ed-430d-9f67-01d8788cb6d6/versions" xml:lang="en" label="Versions"/>
        <link rel="preview" href="/wps/poc/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcm/oid:02d62efb-54ed-430d-9f67-01d8788cb6d6" xml:lang="en" label="Preview"/>
        <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Content/02d62efb-54ed-430d-9f67-01d8788cb6d6" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
        <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/ContentTemplate/e27baf4d-42be-4a03-8e75-20bfab6146e5" xml:lang="en" label="Content Template"/>
        <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/Content/02d62efb-54ed-430d-9f67-01d8788cb6d6/elements" xml:lang="en" label="Elements"/>
        <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
        <category scheme="wcmrest:locked" term="true" label="uid=wpsadmin,o=defaultWIMFileBasedRealm"/>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <elements xmlns:atom="http://www.w3.org/2005/Atom">
                    <element name="image">
                        <title xml:lang="en">image</title>
                        <type>ImageComponent</type>
                        <data type="application/vnd.ibm.wcm+xml">
                            <image>
                                <dimension height="" width="" border="0"/>
                                <altText></altText>
                                <tagName></tagName>
                                <fileName>IMG_0001.jpg</fileName>
                                <resourceUri type="image/jpeg">http://us-latest.team-q-dev.com:3000/dx/api/dam/v1/collections/6116616b-93e3-4de9-b316-f6e5c13a9621/items/b1489ff2-f466-4ee1-a6a5-aade5af64a2c/renditions/d6557d8b-c684-4f1c-973f-bf6d8a38a2ff?binary=true</resourceUri>
                            </image>
                        </data>
                    </element>
                </elements>
            </wcm:content>
        </content>
    </entry>
    
    ```


## Retrieving locked/unlocked status

The Web Content Manager Item API as indicated above has the new category field for locked/unlocked status.

-   **Structure**

    Unlocked:

    ```
    <category scheme="wcmrest:locked" term="false" label=""/>
    ```

    Locked:

    ```
    <category scheme="wcmrest:locked" term="true" label="uid=wpsadmin,o=defaultWIMFileBasedRealm"/
    ```


When using search when specifying the options=details query parameter the category is also retrieved and added to the REST result feed.

-   **Delete**

    A content item can be deleted by sending a DELETE request to the following URI: /Content/item-uuid

    For example:

    **DELETE:**

    ```
    HTTP/1.1 DELETE
    http://host:port/wps/mycontenthandler/wcmrest/Content/fa2bfd32-7b2f-4394-a5ab-2e150c5ed8aa/
    ```

    **Response:**

    ```
    200 OK
    ```


## Asset Management asset or Web Content Manager item identified by its UUID

It is equivalent to the functionality in the user interface \(for finding Web Content Manager items\).

![](../assets/HCL_Web_Content_Manager_Reference_API_UI.png "WCM Reference API UI")

**Note:** Currently, the Web Content Manager Reference API only supports the GET operation for retrieving items. To update items, the document outlines how to use existing APIs to make updates.

## Using the Web Content Manager Reference GET API

-   **Endpoint**

    **GET**

    http://host:port/wps/mycontenthandler/wcmrest/references/wcm/<UUID of WCM item\>

    http://host:port/wps/mycontenthandler/wcmrest/references/wcm/<UUID of WCM item\>

    **JSON**

    For JSON, add ?mime-type=application/json

    Sample URL:

    http://samplehost.com:10039/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym\_KoW9OQbyw/wcmrest/references/wcm/3d464f55-d909-41dd-b760-57667ddd290c

    Sample URL JSON:

    http://samplehost.com:10039/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym\_KoW9OQbyw/wcmrest/references/wcm/3d464f55-d909-41dd-b760-57667ddd290c?mime-type=application/json


-   **Expected Body**

    The body can just have the basic WCM structure:

    **BODY**

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    </feed>
    ```


-   **Expected Headers**

    LTPA token of the user. Also works anonymously.


-   **Query Parameters**

    None.


-   **Limitations**

    Currently, Digital Asset Management \(DAM\) UUID references for elements and components are found – but items are not retrieved from within Rich Text. Retrieval of UUID items in Rich Text will be supported in a later update.


-   **Return Body**

    The found/retrieved results.

    Sample:

    ```
    <?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:Project/3d464f55-d909-41dd-b760-57667ddd290c/project-items</id>
        <title>wcmrest:Project/3d464f55-d909-41dd-b760-57667ddd290c/project-items</title>
        <updated>2020-04-24T15:59:54.529Z</updated>
        <total>5</total>
        <entry>
            <id>wcmrest:10c4700e-b25d-4609-875a-62bfdb557c88</id>
            <title xml:lang="en">Articles</title>
            <wcm:displayTitle xml:lang="en">Articles</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Articles</wcm:name>
            <wcm:type>SiteArea</wcm:type>
            <updated>2020-04-23T19:18:35.462Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/um/users/profiles/Z9eAeO1E2MPKCIPC2MMK6HHOCJMG63BOAMM4CK9OAMMKCMPCAMPC61BOE3SC653</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/SiteArea/10c4700e-b25d-4609-875a-62bfdb557c88" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/SiteArea/10c4700e-b25d-4609-875a-62bfdb557c88" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Library/1c9bc3d5-9cb3-46ac-b489-85846a76c05b" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcm/oid:10c4700e-b25d-4609-875a-62bfdb557c88" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:fb6ea2bd-47e2-4b2c-8e16-48aeff35eb4e</id>
            <title xml:lang="en">Sample Article</title>
            <wcm:displayTitle xml:lang="en">Sample Article</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-04-23T19:18:35.462Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/um/users/profiles/Z9eAeO1E2MPKCIPC2MMK6HHOCJMG63BOAMM4CK9OAMMKCMPCAMPC61BOE3SC653</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Content/fb6ea2bd-47e2-4b2c-8e16-48aeff35eb4e" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Content/fb6ea2bd-47e2-4b2c-8e16-48aeff35eb4e" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Library/1c9bc3d5-9cb3-46ac-b489-85846a76c05b" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcm/oid:fb6ea2bd-47e2-4b2c-8e16-48aeff35eb4e" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:4039c2b7-3fa6-4026-a2ed-f6320ee1f6d9</id>
            <title xml:lang="en">Sample Article 2</title>
            <wcm:displayTitle xml:lang="en">Sample Article 2</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article 2</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-04-23T19:18:35.463Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/um/users/profiles/Z9eAeO1E2MPKCIPC2MMK6HHOCJMG63BOAMM4CK9OAMMKCMPCAMPC61BOE3SC653</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Content/4039c2b7-3fa6-4026-a2ed-f6320ee1f6d9" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Content/4039c2b7-3fa6-4026-a2ed-f6320ee1f6d9" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Library/1c9bc3d5-9cb3-46ac-b489-85846a76c05b" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcm/oid:4039c2b7-3fa6-4026-a2ed-f6320ee1f6d9" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:fa77c56b-6af7-4491-bc4e-7b464c3832a3</id>
            <title xml:lang="en">Articles List</title>
            <wcm:displayTitle xml:lang="en">Articles List</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Articles List</wcm:name>
            <wcm:type>LibraryMenuComponent</wcm:type>
            <updated>2020-04-23T19:18:35.462Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/um/users/profiles/Z9eAeO1E2MPKCIPC2MMK6HHOCJMG63BOAMM4CK9OAMMKCMPCAMPC61BOE3SC653</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/LibraryMenuComponent/fa77c56b-6af7-4491-bc4e-7b464c3832a3" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/LibraryMenuComponent/fa77c56b-6af7-4491-bc4e-7b464c3832a3" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Library/1c9bc3d5-9cb3-46ac-b489-85846a76c05b" xml:lang="en" label="Library"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:84efffc2-67fa-403c-b977-8ad74f81390a</id>
            <title xml:lang="en">Article Toolbar</title>
            <wcm:displayTitle xml:lang="en">Article Toolbar</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Article toolbar</wcm:name>
            <wcm:type>LibraryAuthoringToolsComponent</wcm:type>
            <updated>2020-04-23T19:18:35.462Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/um/users/profiles/Z9eAeO1E2MPKCIPC2MMK6HHOCJMG63BOAMM4CK9OAMMKCMPCAMPC61BOE3SC653</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/LibraryAuthoringToolsComponent/84efffc2-67fa-403c-b977-8ad74f81390a" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/LibraryAuthoringToolsComponent/84efffc2-67fa-403c-b977-8ad74f81390a" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!DEqoG-vlJYym_KoW9OQbyw/wcmrest/Library/1c9bc3d5-9cb3-46ac-b489-85846a76c05b" xml:lang="en" label="Library"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
    </feed>
    
    ```


## Updating references

Both Digital Asset Management and Web Content Manager references can be updated with the published APIs as documented here: [How to use REST with components](../wcm/wcm_rest_crud_component.md).

Example for Digital Asset Management, to retrieve references to UUID: 7e3cb713-251a-485c-a578-1aa219411b5e.

-   **Response:**

    ```
    <?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:Project/7e3cb713-251a-485c-a578-1aa219411b5e/project-items</id>
        <title>wcmrest:Project/7e3cb713-251a-485c-a578-1aa219411b5e/project-items</title>
        <updated>2020-05-11T15:59:18.639Z</updated>
        <total>1</total>
        <entry>
            <id>wcmrest:43174081-4f88-436a-a87b-16e6375c2e8f</id>
            <title xml:lang="en">testmeout</title>
            <summary xml:lang="en"></summary>
            <wcm:name>testmeout</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-05-11T15:52:39.290Z</updated>
            <author>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
                <name>wpsadmin</name>
            </author>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
                <name>wpsadmin</name>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Library/f7e965b1-c9e4-4c07-a0e0-de8efb5faf2a" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcm/oid:43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
    </feed>
    
    ```


Iterating over the results will use the edit link to fetch the item:

-   **GET:**

    ```
    /wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f
    <?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:43174081-4f88-436a-a87b-16e6375c2e8f</id>
        <title xml:lang="en">testmeout</title>
        <summary xml:lang="en"></summary>
        <wcm:name>testmeout</wcm:name>
        <wcm:type>Content</wcm:type>
        <updated>2020-05-11T15:52:39.290Z</updated>
        <wcm:created>2020-05-11T15:51:52.513Z</wcm:created>
        <author>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
            <name>wpsadmin</name>
        </author>
        <wcm:owner>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
            <name>wpsadmin</name>
        </wcm:owner>
        <wcm:lastModifier>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
            <name>wpsadmin</name>
        </wcm:lastModifier>
        <wcm:creator>
            <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
            <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
            <name>wpsadmin</name>
        </wcm:creator>
        <wcm:profile/>
        <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Read"/>
        <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Edit"/>
        <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Delete"/>
        <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/create-draft" xml:lang="en" label="Create Draft"/>
        <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/change-to-draft" xml:lang="en" label="Change To Draft"/>
        <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/ac/access:oid:Z6QReDeKPC2JRG6G1E2JMG663EGJMG6JHD2MM4COPD4MM46M9PCJPS6LPO4JI1763" xml:lang="en" label="Access Control"/>
        <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Library/f7e965b1-c9e4-4c07-a0e0-de8efb5faf2a" xml:lang="en" label="Library"/>
        <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/SiteArea/bf117c51-d2ab-4818-b2de-02e6988fe9ad" xml:lang="en" label="Parent"/>
        <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/versions" xml:lang="en" label="Versions"/>
        <link rel="preview" href="/wps/poc/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcm/oid:43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Preview"/>
        <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
        <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/ContentTemplate/c7abf2c0-7eff-4396-90e5-943a096c5ab3" xml:lang="en" label="Content Template"/>
        <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f/elements" xml:lang="en" label="Elements"/>
        <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <elements xmlns:atom="http://www.w3.org/2005/Atom">
                    <element name="test">
                        <title xml:lang="en">test</title>
                        <type>ImageComponent</type>
                        <data type="application/vnd.ibm.wcm+xml">
                            <image>
                                <dimension height="" width="" border="0"/>
                                <altText></altText>
                                <tagName></tagName>
                                <fileName>Screen Shot 2020-05-07 at 10.26.24 AM.png</fileName>
                                <resourceUri type="image/png">http://samplehost.com:3000/dx/api/dam/v0/collections/48839939-375e-4f07-a85d-56d13ddba3c8/items/7e3cb713-251a-485c-a578-1aa219411b5e?binary=true</resourceUri>
                            </image>
                        </data>
                    </element>
                </elements>
            </wcm:content>
        </content>
    </entry>
    
    ```


To send an update to the item to replace the resourceUri and add fileName and type:

```
<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:43174081-4f88-436a-a87b-16e6375c2e8f</id>
    <title xml:lang="en">testmeout</title>
    <summary xml:lang="en"></summary>
    <wcm:name>testmeout</wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2020-05-11T15:52:39.290Z</updated>
    <wcm:created>2020-05-11T15:51:52.513Z</wcm:created>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <wcm:creator>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/um/users/profiles/Z9eAeHPOG3SG6HHC2JMOCG1P8MMG6OPO4JM47JHDAJM076RDG3RGCN1C66SOC53</uri>
        <name>wpsadmin</name>
    </wcm:creator>
    <wcm:profile/>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Edit"/>
    <link rel="delete" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Delete"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/create-draft" xml:lang="en" label="Create Draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/change-to-draft" xml:lang="en" label="Change To Draft"/>
    <link rel="access-control" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/ac/access:oid:Z6QReDeKPC2JRG6G1E2JMG663EGJMG6JHD2MM4COPD4MM46M9PCJPS6LPO4JI1763" xml:lang="en" label="Access Control"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Library/f7e965b1-c9e4-4c07-a0e0-de8efb5faf2a" xml:lang="en" label="Library"/>
    <link rel="parent" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/SiteArea/bf117c51-d2ab-4818-b2de-02e6988fe9ad" xml:lang="en" label="Parent"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/item/43174081-4f88-436a-a87b-16e6375c2e8f/versions" xml:lang="en" label="Versions"/>
    <link rel="preview" href="/wps/poc/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcm/oid:43174081-4f88-436a-a87b-16e6375c2e8f" xml:lang="en" label="Preview"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
    <link rel="content-template" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/ContentTemplate/c7abf2c0-7eff-4396-90e5-943a096c5ab3" xml:lang="en" label="Content Template"/>
    <link rel="elements" href="/wps/mycontenthandler/!ut/p/digest!HttiyBvTxv1fgs63hc74Pw/wcmrest/Content/43174081-4f88-436a-a87b-16e6375c2e8f/elements" xml:lang="en" label="Elements"/>
    <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
    <category scheme="wcmrest:favorite" term="false" xml:lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:content xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom">
                <element name="test">
                    <title xml:lang="en">test</title>
                    <type>ImageComponent</type>
                    <data type="application/vnd.ibm.wcm+xml">
                        <image>
                            <dimension height="" width="" border="0"/>
                            <altText></altText>
                            <tagName></tagName>
                            <fileName>Screen Shot 2020-05-07 at 10.26.24 AM.png</fileName>
                            <resourceUri type="image/png">http://samplehost.com:3000/dx/api/dam/v0/collections/48839939-375e-4f07-a85d-56d13ddba3c8/items/7e3cb713-251a-485c-a578-1aa219411b5e?binary=true</resourceUri>
                        </image>
                    </data>
                </element>
            </elements>
        </wcm:content>
    </content>
</entry>

```

## Create

A content item can be created by sending a POST request to the following URI with an Atom entry used to represent the content item:

```
/Content
```

-   A library or parent link relation must be used to define the location of the hierarchical item that is being created. 
-   An authoring template must be specified to set what authoring template to use when the item is created.

For example:

-   **POST:**

    ```
    HTTP/1.1 POST 
    http://host:port/wps/mycontenthandler/wcmrest/Content/
    Content-Type: application/atom+xml
    		<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    			<wcm:name>Content Name</wcm:name>
    			<atom:title>Content Title</atom:title>
    			<atom:link atom:rel="parent" atom:href="/wps/
                mycontenthandler/wcmrest/item/49f4ed95-a99f-434c-a415-77c341fa4893"/>
    			<atom:link atom:rel="workflow" atom:href="/wps/
                mycontenthandler/wcmrest/item/abae799b-4cca-47ae-aad8-b3d8204deefb"/>
    			<atom:link atom:rel="content-template" atom:href="/wps/
                mycontenthandler/wcmrest/item/588127d0-a4f8-44b5-87a4-5fe3f7bd3da7"/>
    		</atom:entry>
    
    ```


-   **Response:**

    ```
    201 Created
    ```


## Create from a skeleton

A "skeleton" representation of a content item that is created from a content template can be obtained to aid in the creation of content items. This can be obtained by using a GET request to the following URI. When the skeleton is obtained and completed a POST request can be made by using this data to create the item: /ContentTemplate/template-uuid/new-content.

For example:

```
HTTP/1.1 GET http://host:port/wps/mycontenthandler/wcmrest/ContentTemplate/b7b8b3fb-8fa1-4eb3-915e-ce7514f7067f/new-content

Response 
200 OK

```

```
<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm">
    <id>wcmrest:6bab48c6-1f24-454e-9bab-ae1be4cf3a0a</id>
    <title lang="en"></title>
    <summary lang="en"></summary>
    <wcm:name></wcm:name>
    <wcm:type>Content</wcm:type>
    <updated>2012-01-31T03:28:08.118Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</
    wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/
    users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!7K1PhYjxBw0jzCDqHCwg2w/um/
    users/profiles/Z9eAeHPCAJG963RD2MMG6P9O6MMG66BD6MM47IHP4MMS6M1DAJQ4C1BCAMID653</uri>
        <name>wpsadmin</name>
    </wcm:owner>
    <link label="Library" rel="library" href="/wps/mycontenthandler/!ut/p/
digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/item/a423287f-b0ce-4ee3-9c95-aa0939382228" lang="en"/>
    <link label="Content Template" rel="content-template" href="/wps/
mycontenthandler/!ut/p/digest!PQo5Yhy68oeppWcEz2sddA/wcmrest/Content/b7b8b3fb-8fa1-4eb3-915e-ce7514f7067f" lang="en"/>
    <content type="application/vnd.ibm.wcm+xml">
        <content xmlns="http://www.ibm.com/xmlns/wcm">
            <elements>
                <element name="Body">
                    <title lang="en">Body</title>
                    <type>RichTextComponent</type>

```

