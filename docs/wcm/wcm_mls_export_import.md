# How to export and import WCM library content using DXClient

The HCL Multilingual Solution \(MLS\) export and import capability allows you to support translation of the content of a library by exporting it into a format supported by a translation service and importing the translated content back into HCL Digital Experience using the DXClient tool.

## Prerequisites

-   The libraries for the other languages for translated are already existing and are filled with the content from the main language library, like with the MLS copy portlet.
-   The DXClient tool is used to manage the library export and import functions by providing an integrated solution to export and import CSV files for translation. The DXClient export and import process works on HCL Digital Experience 9.5 only. See the [DXClient Help Center](../containerization/dxclient.md) topic for more information.

## About this task

There are two separate command for handling bulk translations, `export` and `import`. These commands deal with the translation of all the WCM library contents. Note, however, that only the following WCM content elements are translated: **short text**, **rich text**, and **HTML**.

-   The `**export**` command exports the source contents from a library into a CSV file with an auto generated file name at the location specified by the user. This command creates a new CSV file every time the command is run.
-   The `**import**` command overwrites any existing translations in the content of the environment.
-   All the default command options in this section are configured inside the - dist/src/configuration/config.json file of the tool. The options passed through command line overrides these default values.

**Note:** Only the `ShortTextComponent` element type has an explicit maximum data length set at 250 characters. The `**import**` command validates the length of the data for this element type before importing. Errors due to custom configuration of limits are caught by the `**import**` and `**export**` during the cycle and are reported in an error log.

## Export command

The `**export**` command is used to export the content of a WCM library for translation into a CSV file at the location specified by the user.

**Export command**:

```
dxclient mls-export
```

**Export help command**:

```
dxclient mls-export -h
```

**Export command options**:

-   `-dxProtocol <value>` - use this attribute to specify the protocol to use to connect to the DX server.
-   `-hostname <value>` - use this attribute to specify the host name of the DX server.
-   `-dxPort <value>` - use this attribute to specify the port on which to connect to the DX server.
-   `-contenthandlerPath <value>` - use this attribute to specify the path to the contenthandler servlet on the DX server \(for example, /wps/mycontenthandler\).
-   `-dxUsername <value>` - use this attribute to specify the user name required for authenticating with the server.
-   `-dxPassword <value>` - use this attribute to specify the password required for authenticating with the server.
-   `-wcmLibraryId <value>` - the WCM library ID to export the contents of the library.
-   `-exportPath <value>` - the path to export the WCM contents of a library.
-   `-virtualPortalContext <value>` - the context of the virtual portal that contains the Script Application instance you want to create or update.

**Usage sample**:

```
dxclient mls-export -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> 
-contenthandlerPath <contenthandlerPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -wcmLibraryId <wcmLibraryId> -exportPath <exportPath> -virtualPortalContext <virtualPortalContext>
```

## Import command

The `**import**` command is used to import the translated content into DX and overwrites any existing translations in the content of the environment.

**Import command**:

```
dxclient mls-import
```

**Import help command**:

```
dxclient mls-import -h
```

**Export command options**:

-   `-dxProtocol <value>` - use this attribute to specify the protocol to use to connect to the DX server.
-   `-hostname <value>` - use this attribute to specify the host name of the DX server.
-   `-dxPort <value>` - use this attribute to specify the port on which to connect to the DX server.
-   `-contenthandlerPath <value>` - use this attribute to specify the path to the contenthandler servlet on the DX server \(for example, /wps/mycontenthandler\).
-   `-dxUsername <value>` - use this attribute to specify the user name required for authenticating with the server.
-   `-dxPassword <value>` - use this attribute to specify the password required for authenticating with the server.
-   `-importPath <value>` - the path to import the translated contents into DX.
-   `-virtualPortalContext <value>` - the context of the virtual portal that contains the Script Application instance you want to create or update.

**Usage sample**:

```
dxclient mls-import -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> 
-contenthandlerPath <contenthandlerPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -importPath <importPath> -virtualPortalContext <virtualPortalContext>
```

## Sample pipelines

You can use the sample pipelines in this section to run MLS export and import. The sample pipelines \(available under the samples folder in the DXClient root folder\) can be used by developers and administrators as a basis for Jenkins automation server jobs.

These samples show how to install the DXClient tool in a pipeline and then export and import the MLS. These are designed to run from a Jenkins job with the parameters indicated.

MLS Export

|Parameter|Value|Notes|
|---------|-----|-----|
|AGENT\_LABEL|Jenkins agent label|Determines the agents the pipeline can run|
|TOOL\_PACKAGE\_URL|URL to DXClient zip|Fetched via curl|
|TOOL\_CREDENTIALS\_ID|Credentials ID in Jenkins store|The user name and password needed to access the tool package URL|
|DX\_CREDENTIALS\_ID|Credentials ID in Jenkins store|The user name and password needed to access DX server|
|DX\_PROTOCOL|Protocol to connect to the DX server|HTTP or HTTPS|
|DX\_HOST|Host name or IP address of the DX server|Artifacts are deployed to this server|
|DX\_PORT|Port to connect to the DX server|Port for the DX main profile|
|CONTENT\_HANDLER\_PATH|Alternate path for the portal context root or the content handler servlet|Default path: /wps/mycontenthandler/|
|WCM\_LIBRARY\_ID|WCM library ID to export the contents of the library|Exports the available content from this library ID|
|EXPORT\_PATH|The path to export the WCM contents of a library|The path where the content is exported|

![](../images/wcm_mls_exim_export_pipeline.png "DXClient MLS export pipeline sample")

MLS Import

|Parameter|Value|Notes|
|---------|-----|-----|
|AGENT\_LABEL|Jenkins agent label|Determines the agents the pipeline can run|
|TOOL\_PACKAGE\_URL|URL to DXClient zip|Fetched via curl|
|TOOL\_CREDENTIALS\_ID|Credentials ID in Jenkins store|The user name and password needed to access the tool package URL|
|DX\_CREDENTIALS\_ID|Credentials ID in Jenkins store|The user name and password needed to access DX server|
|ARTIFACT\_CREDENTIALS\_ID|Credentials ID in Jenkins store|The user name and password needed to access artifact URLs|
|ARTIFACT\_PATH|URL \(except file names\) for artifacts to be deployed|Artifacts fetched via curl|
|DX\_PROTOCOL|Protocol to connect to the DX server|HTTP or HTTPS|
|DX\_HOST|Host name or IP address of the DX server|Artifacts are deployed to this server|
|DX\_PORT|Port to connect to the DX server|Port for the DX main profile|
|CONTENT\_HANDLER\_PATH|Alternate path for the portal context root or the content handler servlet|Default path: /wps/mycontenthandler/|
|IMPORT\_FILE\_NAME|File name to import the translated content into DX|Imports the content from this file|

![](../images/wcm_mls_exim_import_pipeline.png "DXClient MLS import pipeline sample")

