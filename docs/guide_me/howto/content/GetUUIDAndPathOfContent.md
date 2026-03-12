# How to get the UUID and Path of WCM content objects using a command line

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

There may be instances where you need the Universally Unique Identifier (UUID) or path of a given content object in the Web Content Manager (WCM). You can use the XPath Query Analyzer of WCM Support Tools portlet to get them.

However on some occasions, it may be easier to get the UUID or path through the Linux bash command line using REST and some linux tools such as **curl**, **grep**, and **Perl**. This article describes how you can get the UUID or path of a WCM content object using a command line.

## Instructions

Before you begin, ensure you have the **curl** and **Perl** command-line tools installed. You can install them using **yum**, **dnf**, or **apt**, depending on your linux distribution.

1. Define the following environment variables. Change these variables according to your environment.

    - The name of the WCM object you want the UUID:

        ```variables
        WCM_CONTENT_STRING="ensure"
        ```

    - Some other DX needed values:

        ```variables
        WPS_ADMIN_USR="wpsadmin"  
        WPS_ADMIN_PWD="wpsadmin"  
        WP_PROFILE_HOME="/opt/IBM/WebSphere/wp_profile"  
        HOSTNAME=hostname -f  
        PORT=grep ^WpsHostPort $WP_PROFILE_HOME/ConfigEngine/properties/wkplc.properties | cut -d= -f2
        ```

2. Run the following command to get the UUID of the WCM Object in **WCM_CONTENT_STRING**:

```shell
    curl -L -u $WPS_ADMIN_USR:$WPS_ADMIN_PWD -G "http://$HOSTNAME:$PORT/wps/mycontenthandler/wcmrest/query?type=Content&options=item-path&textcontains=$WCM_CONTENT_STRING" 2>/dev/null | egrep -v 'query?options|CDATA' | egrep 'title xml|<id>|wcm:name xml' | perl -pe 's| xml:lang="en"||g ; s|        ||g' | sed 's|<id>|\n<id>|g' | perl -pe 's|</wcm:title>\R\z|/|g' | perl -pe 's|^<wcm:title>|Path: |g ; s|<wcm:title>||g ; s|/$|\n|g ; s|</[a-z:]*>||g ; s|<id>wcmrest:|UUID: |g ; s|<title>|Title: |g' | sed '1,1d'
```

Refer to the following output of the command:

```text
    UUID: d446124e-4f03-485c-899f-d486d6b65dc7
    Title: Article
    Path: Template Page Content 3.0/Articles

    UUID: 5f065435-1bc6-4e3c-bac3-9ecc9726c492
    Title: Highlight 02
    Path: Woodburn Studio Content/About-Us/Highlights

    UUID: 88740cea-c541-4a1e-bf74-65b26d1d7acd
    Title: Article
    Path: Portal Site/Content Root/Home/Wes_Tab/RSS Test

    UUID: 47f7a5a6-8304-3702-bc7e-b35489c3e9bd
    Title: Article
    Path: Portal Site/Content Root/Hidden Pages/Page Templates/Articles
```
