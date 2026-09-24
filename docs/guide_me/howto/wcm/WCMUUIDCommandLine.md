# How to get the UUID of WCM object by name via the Command Line

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Sometimes, you need the UUID of a given object in WCM. When you have the whole path of the object, you can use the **WCM Support Tools** portlet to get it. But if you know only the name of the WCM object, using the command line would be easier as you can use a REST API and Linux tools like CURL, GREP, PERL, etc. The WCM object can be a "Library", a "Content", a "Presentation Template", a "Site Area", etc.

## Instructions

Before you begin, your environment should have `curl` and `perl` installed. If you don't, you can install them using `yum`, `dnf` or `apt`, depending on your linux distribution.

1. To begin you need to define some environment variables. Change these variables, according to your environment.

    **The name of the WCM object you want the UUID:**  

    ```bash
    OBJECT_NAME="Article"
    ```

    **Some other DX needed values:**  

    ```bash
    WPS_ADMIN_USR="wpsadmin"
    WPS_ADMIN_PWD="wpsadmin"
    WP_PROFILE_HOME="/opt/HCL/wp_profile"
    HOSTNAME=`hostname -f`
    PORT=`grep ^WpsHostPort $WP_PROFILE_HOME/ConfigEngine/properties/wkplc.properties | cut -d= -f2`
    ```

2. Now that all required variables have been set up, let's get the UUID of the WCM Object, as defined above, in `OBJECT_NAME`:

    ```bash
    curl -L -u $WPS_ADMIN_USR:$WPS_ADMIN_PWD -G "http://$HOSTNAME:$PORT/wps/mycontenthandler/wcmrest/query?options=item-path" --data-urlencode "title=$OBJECT_NAME" 2>/dev/null | grep -v 'query?options' | egrep 'wcm:type|<id>|wcm:title xml' | perl -pe 's| xml:lang="en"||g ; s|        ||g' | sed 's|<id>|\n<id>|g' | perl -pe 's|</wcm:title>\R\z|/|g' | perl -pe 's|^<wcm:title>|Path: |g ; s|<wcm:title>||g ; s|/$|\n|g ; s|</[a-z:]*>||g ; s|<id>wcmrest:|UUID: |g ; s|<wcm:type>|Type: |g' 
    ```

    You should see the command return something like including UUIDs:  

    ```bash
    UUID: 9f0826ff-9601-49c7-9411-7672e6adce33
    Type: ContentTemplate
    Path: Web Content

    UUID: 69be310d-86b3-45dc-8956-a77725b55db9
    Type: ContentTemplate
    Path: Web Content Templates 3.0

    UUID: 6a5ee875-9ab6-449c-8df3-c70b42d6fea8
    Type: PresentationTemplate
    Path: Web Content Templates 3.0

    UUID: d446124e-4f03-485c-899f-d486d6b65dc7
    Type: Content
    Path: Template Page Content 3.0/Articles

    UUID: 9c74e12c-59b3-45a6-a5fa-c521336a6f44
    Type: ContentLink
    Path: Template Page Content 3.0/Web Content

    UUID: f3b16bce-aa66-4a0e-884c-0ed5a90a8b55
    Type: ContentTemplate
    Path: Test Library 1 08.03.2022

    UUID: 965be413-bc63-4ed7-8a38-d13ed3c405f4
    Type: ContentTemplate
    Path: SearchLibrary08222022

    UUID: 73531caa-f8ae-4bc6-9e7a-c1ae67ef9a5b
    Type: ContentTemplate
    Path: Rafael Test

    UUID: c5f2914a-0997-4436-868a-d94d4b360bf8
    Type: ContentTemplate
    Path: Wes Library

    UUID: 88740cea-c541-4a1e-bf74-65b26d1d7acd
    Type: Content
    Path: Portal Site/Content Root/Home/Wes_Tab/RSS Test
    ```
