# How to retrieve the UUID of a WCM object by name using the command line

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can retrieve the Universally Unique Identifier (UUID) of an object in Web Content Manager (WCM) using a command line when only the name is available. Querying the WCM REST API with `curl`, `grep`, and `perl` is an alternative to using the WCM Support Tools when searching across libraries, content items, presentation templates, and site areas in HCL Digital Experience (DX). For more information on WCM Support Tools, refer to the [HCL Web Content Manager Support Tools](../../../deployment/manage/troubleshooting/wcm_support_tools.md). This article describes how to retrieve the UUID of a WCM object using the command line.

## Prerequisites

Before you begin, your environment should have `curl` and `perl` installed. To check if these tools are available, perform the following steps:

1. Open a terminal window.
2. Run the following command:

    ```bash
    command -v curl perl
    ```

3. If the command does not return paths for both binaries (for example, `/usr/bin/curl` and `/usr/bin/perl`), use your distribution's package manager (`yum`, `dnf`, or `apt`) to install the missing tools:

    - For modern RHEL, CentOS, or Fedora (RHEL 8+, Fedora 22+)

        ```bash
        sudo dnf install curl perl
        ```

    - For Legacy RHEL or CentOS (RHEL 7)

        ```bash
        sudo yum install curl perl
        ```

    - For Debian or Ubuntu

        ```bash
        sudo apt update && sudo apt install curl perl
        ```

## Instructions

To retrieve the UUID of a WCM object by name, perform the following steps:

1. Open a terminal window.
2. Define the following required environment variables in your terminal session according to your environment settings:

    ```bash
    OBJECT_NAME="Article"
    WPS_ADMIN_USR="wpsadmin"
    WPS_ADMIN_PWD="wpsadmin"
    WP_PROFILE_HOME="/opt/HCL/wp_profile"
    HOSTNAME=$(hostname -f)
    PORT=$(grep ^WpsHostPort $WP_PROFILE_HOME/ConfigEngine/properties/wkplc.properties | cut -d= -f2)
    ```
    - `OBJECT_NAME`: The name of the target WCM object for which you want to retrieve the UUID (for example, "Article").
    - `WPS_ADMIN_USR`: The administrator username.
    - `WPS_ADMIN_PWD`: The administrator password.
    - `WP_PROFILE_HOME`: The file path to your HCL DX profile directory.
    - `HOSTNAME`: The fully qualified domain name (FQDN) of your host server.
    - `PORT`: The host port number from your configuration properties file.

4. Run the `curl` command to query the WCM REST API and return the UUID, type, and path of the specified object:

    ```bash
    curl -L -u $WPS_ADMIN_USR:$WPS_ADMIN_PWD -G "http://$HOSTNAME:$PORT/wps/mycontenthandler/wcmrest/query?options=item-path" --data-urlencode "title=$OBJECT_NAME" 2>/dev/null | grep -v 'query?options' | egrep 'wcm:type|<id>|wcm:title xml' | perl -pe 's| xml:lang="en"||g ; s|        ||g' | sed 's|<id>|\n<id>|g' | perl -pe 's|</wcm:title>\R\z|/|g' | perl -pe 's|^<wcm:title>|Path: |g ; s|<wcm:title>||g ; s|/$|\n|g ; s|</[a-z:]*>||g ; s|<id>wcmrest:|UUID: |g ; s|<wcm:type>|Type: |g' 
    ```

    The command returns output similar to the following:

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