# Web Content Manager Access Control Filter REST API

This API allows you to filter access control roles using the WCM Query API. All other parameters like parent or type still apply, so one can, for example, find all libraries the user has the Editor role on.

## Using the Web Content Manager Access Control Filter REST API

-   **Endpoint**

    It extends the existing search query API and adds a new parameter. See [REST Query service for web content](wcm_rest_query.md) and [REST Query parameters](wcm_rest_adhoc.md) for more information.

    **GET request to:**

    ```
    http://host:port/wps/mycontenthandler/wcmrest/query?filteraccess=...
    ```

    **Sample URL:**

    ```
    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!rQXplcJ7_Lmlz7rU8WOpbA/wcmrest/query?parentid=wcmrest%3a04b24105-2ea0-422f-be83-e009a7766c1b&filteraccess=Editor
    ```


-   **Expected Body**

    The body can have the basic WCM structure:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    </feed>
    ```


-   **Expected Headers**

    LTPA token of the user. Also work anonymously.


-   **Query Parameters**

    -   `filteraccess`: Role to be checked. Valid roles: User, Editor, Admin, Manager, Contributor, ...

-   **Return Body**

    The found results. Same as when calling existing query API

    Sample:

    ```
    <?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <id>wcmrest:query?filteraccess=Contributor<![CDATA[&parentid=wcmrest%3A04b24105-2ea0-422f-be83-e009a7766c1b]]></id>
        <title>wcmrest:query?filteraccess=Contributor<![CDATA[&parentid=wcmrest%3A04b24105-2ea0-422f-be83-e009a7766c1b]]></title>
        <updated>2020-12-16T21:36:14.787Z</updated>
        <total>5</total>
        <entry>
            <id>wcmrest:37ed6e5f-f7c3-40aa-a7b3-54c31f81e9ce</id>
            <title xml:lang="en">Sample Article</title>
            <wcm:displayTitle xml:lang="en">Sample Article</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-11-21T09:05:47.552Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/37ed6e5f-f7c3-40aa-a7b3-54c31f81e9ce" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/37ed6e5f-f7c3-40aa-a7b3-54c31f81e9ce" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Library/4bee8df4-0f62-427b-a40b-2b3a6ad0b415" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcm/oid:37ed6e5f-f7c3-40aa-a7b3-54c31f81e9ce" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:51473374-7593-4c9e-a0f8-3ce0fe5353a0</id>
            <title xml:lang="en">Sample Article 2</title>
            <wcm:displayTitle xml:lang="en">Sample Article 2</wcm:displayTitle>
            <summary xml:lang="en"></summary>
            <wcm:name>Sample Article 2</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-11-21T09:05:47.552Z</updated>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/51473374-7593-4c9e-a0f8-3ce0fe5353a0" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/51473374-7593-4c9e-a0f8-3ce0fe5353a0" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Library/4bee8df4-0f62-427b-a40b-2b3a6ad0b415" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcm/oid:51473374-7593-4c9e-a0f8-3ce0fe5353a0" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:0b5aa571-5224-4c31-b48f-6c77e50177c7</id>
            <title xml:lang="en">file</title>
            <summary xml:lang="en">xcvvbxv</summary>
            <wcm:name>file</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-12-09T21:50:10.601Z</updated>
            <author>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </author>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/0b5aa571-5224-4c31-b48f-6c77e50177c7" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/0b5aa571-5224-4c31-b48f-6c77e50177c7" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Library/4bee8df4-0f62-427b-a40b-2b3a6ad0b415" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcm/oid:0b5aa571-5224-4c31-b48f-6c77e50177c7" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:6fcdb516-f5ec-4390-b9f8-4d0f26086226</id>
            <title xml:lang="en">test</title>
            <summary xml:lang="en"></summary>
            <wcm:name>test</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-12-08T15:12:05.908Z</updated>
            <author>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </author>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/6fcdb516-f5ec-4390-b9f8-4d0f26086226" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/6fcdb516-f5ec-4390-b9f8-4d0f26086226" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Library/4bee8df4-0f62-427b-a40b-2b3a6ad0b415" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcm/oid:6fcdb516-f5ec-4390-b9f8-4d0f26086226" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="EXPIRED" label="Expired" xml:lang="en"/>
        </entry>
        <entry>
            <id>wcmrest:f04719c0-a9ba-49e0-92e2-5321f15ab2c8</id>
            <title xml:lang="en">image</title>
            <summary xml:lang="en"></summary>
            <wcm:name>image</wcm:name>
            <wcm:type>Content</wcm:type>
            <updated>2020-12-09T22:15:23.162Z</updated>
            <author>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </author>
            <wcm:lastModifier>
                <wcm:distinguishedName>uid=wpsadmin,o=defaultWIMFileBasedRealm</wcm:distinguishedName>
                <uri>/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/um/users/profiles/Z9eAeOHO8MQOCH1PCMMOCGHC0JMG6NHDCMM4C5BPCJM8C4RC6JOO63BPC6RK6M1</uri>
                <name>wpsadmin</name>
                <type>USER</type>
            </wcm:lastModifier>
            <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/f04719c0-a9ba-49e0-92e2-5321f15ab2c8" xml:lang="en" label="Edit"/>
            <link rel="alternate" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Content/f04719c0-a9ba-49e0-92e2-5321f15ab2c8" xml:lang="en" label="Read"/>
            <link rel="library" href="/wps/mycontenthandler/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcmrest/Library/4bee8df4-0f62-427b-a40b-2b3a6ad0b415" xml:lang="en" label="Library"/>
            <link rel="preview" href="/wps/poc/!ut/p/digest!9fMog84Jk6tJXg_WMEMrOA/wcm/oid:f04719c0-a9ba-49e0-92e2-5321f15ab2c8" xml:lang="en" label="Preview"/>
            <category scheme="wcmrest:workflowState" term="PUBLISHED" label="Published" xml:lang="en"/>
        </entry>
    </feed>
    ```


