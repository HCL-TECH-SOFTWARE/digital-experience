# Get UUID and PATH of WCM Content Objects, by Text Content, using the Command Line

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

Sometimes, you need the UUID and/or the PATH  of a given Content Object in WCM.

You can use the "WCM Support Tools" portlet > "XPath Query Analyzer" to get them.

But on some occasions, it would be easy to get the UUID and/or the PATH through the Command Line (Linux bash), using REST and some linux tools, like CURL, GREP, PERL, etc.

## Instructions

First, be sure you have **"curl"** and **"perl"** installed.

If you don't have, you can install them using **"yum"**, **"dnf"** or **"apt"**, depending on your linux distribution.

Start by defining some environment variables.

**Change these variables, according to your environment.**

1) The name of the WCM object you want the UUID:

    WCM_CONTENT_STRING=**"ensure"**

2) Some other DX needed values:

    WPS_ADMIN_USR=**"wpsadmin"**  
    WPS_ADMIN_PWD=**"wpsadmin"**  
    WP_PROFILE_HOME=**"/opt/IBM/WebSphere/wp_profile"**  
    HOSTNAME=**hostname -f**  
    PORT=**grep ^WpsHostPort $WP_PROFILE_HOME/ConfigEngine/properties/wkplc.properties | cut -d= -f2**

3) Now that all needed variables have been set up, let's get the UUID of the WCM Object, as defined above, in "WCM_CONTENT_STRING ":

```text
    curl -L -u $WPS_ADMIN_USR:$WPS_ADMIN_PWD -G "http://$HOSTNAME:$PORT/wps/mycontenthandler/wcmrest/query?type=Content&options=item-path&textcontains=$WCM_CONTENT_STRING" 2>/dev/null | egrep -v 'query?options|CDATA' | egrep 'title xml|<id>|wcm:name xml' | perl -pe 's| xml:lang="en"||g ; s|        ||g' | sed 's|<id>|\n<id>|g' | perl -pe 's|</wcm:title>\R\z|/|g' | perl -pe 's|^<wcm:title>|Path: |g ; s|<wcm:title>||g ; s|/$|\n|g ; s|</[a-z:]*>||g ; s|<id>wcmrest:|UUID: |g ; s|<title>|Title: |g' | sed '1,1d'
```

**As a result, you will see something like:**

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
