# How to use REST with versions

Item versions can be listed and read by using the REST service.

!!! note
    New with HCL Digital Experience 9.5 CF173 and CF18 higher releases: the Restore version API supports restoring content versions to a previous level. This option is available to 8.5 and 9.0 CF18 users.

## Retrieving a list of versions

To retrieve a list of versions, you use a GET request to the following URI:

```
/item/item-uuid/versions
```

A feed is returned containing the identifying information of each version, along with a relation "versioned-item" that links to the specified version.

-   **Version link relations**

    ```
    <entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
      ...
        <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/versions"/>
      ...
    </entry>
    ```

-   **Versions feed**

    ```
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
        <entry>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/version/2"/>
            <content>
                <wcm:versionContent>
                    <wcm:versionName>2</wcm:versionName>
                    <wcm:versionDate>2011-05-30T04:38:49.540Z</wcm:versionDate>
                </wcm:versionContent>
            </content>
        </entry>
        <entry>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a18/version/1"/>
            <content>
                <wcm:versionContent>
                    <wcm:versionName>1</wcm:versionName>
                    <wcm:versionDate>2011-05-30T04:33:40.677Z</wcm:versionDate>
                </wcm:versionContent>
            </content>
        </entry>
    </feed>
    ```


## Viewing the details of a version

To view the details of a specified version, you use a GET request in the following format:

```
/item/item-uuid/version/version-name
```

For example:

```
GET HTTP/1.0
/wps/mycontenthandler/wcmrest/item/8f055ba2-1bc3-4d21-8443-86274e14dd2c/version/1
Host: www.example.com
Accept: application/atom+xml


HTTP/1.0 200 OK

<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    <id>0d678334-69ae-4d3a-a525-91bb551e5a181</id>
    <title>SampleNumericComponentTitle</title>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a181"/>
    <link rel="edit-media" type="text/plain" href="/wps/mycontenthandler/!ut/p/wcmrest/LibraryNumericComponent/0d678334-69ae-4d3a-a525-91bb551e5a181"/>
    <link rel="library" href="/wps/mycontenthandler/!ut/p/wcmrest/item/c98d11e1-7f2a-480e-9aac-40eb1949cbda"/>
    <link rel="create-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a181/create-draft"/>
    <link rel="change-to-draft" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a181/change-to-draft"/>
    <link rel="versions" href="/wps/mycontenthandler/!ut/p/wcmrest/item/0d678334-69ae-4d3a-a525-91bb551e5a181/versions"/>
    <updated>2011-05-30T06:42:10.244Z</updated>
    <author>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </author>
    <wcm:owner>
        <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/digest!6GVkh5Ul75Ln7DdEgvHm_g/um/users/profiles/Z9eAeH1C2JG561RC6JM47H9E4MMG6PHO6JM4C5JD0JMOC6BEEJS464JDG3I56K1</uri>
        <email></email>
        <name>wpsadmin</name>
    </wcm:owner>
    <wcm:name>SampleNumericComponentNameUpdated</wcm:name>
    <wcm:description>SampleNumericComponentDescription</wcm:description>
    <wcm:type>LibraryNumericComponent</wcm:type>
    <wcm:state>PUBLISHED</wcm:state>
    <versionContent>
        <wcm:versionName>1</wcm:versionName>
        <wcm:versionDate>2011-05-30T04:33:40.677Z</wcm:versionDate>
    </versionContent>
</entry>
```

-   **Restore version API:**

    This new API supports capability to restore a version of content to a previous one.

    It is equivalent to the functionality and versions in the Web Content Manager user interface (example below):

    ![Restore_version_API_HCL_DX](../../../../../../assets/Restore_Version_API_HCL_DX.png)


## Using the Restore Version API

To restore a previous content version, you use a PUT request in the following format:

-   **Endpoint**

    PUT request to:

    ```
    http://host:port/wps/mycontenthandler/!ut/p/digest!KG7Oo8qSOni4fLuinAp3sA/
                            wcmrest/item/<UUID of the content>/versions?
                            setVersion=<versionName>&restoreAsPublished=<true|false>
    ```

    Sample URL:

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!
                            _lcmcV8jAD1wixCjFeNFyw/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/
                            versions?setVersion=1&restoreAsPublished=false
    ```


-   **Expected Body**

    The Body can have the basic WCM structure:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
                            <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
                            </feed>
                        
    ```


-   **Expected Headers**

    LTPA token of the user.


-   **Return body**

    The list of versions. Results are the same as when calling the wcmrest/item//versions/ structure.

    Sample:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <entry>
            <versionContent>
                <wcm:versionName>4</wcm:versionName>
                <wcm:versionDate>2020-03-09T19:45:11.735Z</wcm:versionDate>
            </versionContent>
            <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/4" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
        <versionContent>
                <wcm:versionName>3</wcm:versionName>
                <wcm:versionDate>2020-03-09T19:38:42.133Z</wcm:versionDate>
        </versionContent>
        <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/3" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
        <versionContent>
                <wcm:versionName>2</wcm:versionName>
                <wcm:versionDate>2020-02-26T14:33:19.793Z</wcm:versionDate>
        </versionContent>
        <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/2" xml:lang="en" label="Versioned Item"/>
        </entry>
        <entry>
        <versionContent>
                <wcm:versionName>1</wcm:versionName>
                <wcm:versionDate>2020-02-26T14:33:00.636Z</wcm:versionDate>
        </versionContent>
        <link rel="versioned-item" href="/wps/mycontenthandler/!ut/p/digest!SMx91r5Xh87lqsxXlMQqeQ/wcmrest/item/2436ab87-d823-41f3-9a37-64d531d4919b/version/1" xml:lang="en" label="Versioned Item"/>
        </entry>
    </feed>
    ```



