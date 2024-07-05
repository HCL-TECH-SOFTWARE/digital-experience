# Updating references

Both Digital Asset Management and Web Content Manager references can be updated with the published APIs as documented here: [How to use REST with components](../wcm_rest/wcm_rest_mng_content/wcm_rest_crud_component.md).

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