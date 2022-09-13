# Determining the URL of the CMIS service document

HCL Connections Files offers a set of CMIS service documents that provide specific views of the content that is stored in files. Determine which CMIS API service document URL you need before starting the configuration.

The set of CMIS service documents includes service documents that define the following things:

-   User-specific view for the currently logged in user
-   Views for individual specific communities

1.  Determine the service document URL.

    The CMIS service document location can be determined based on the following pattern: base URL of files service/basic/cmis/CMIS Service Doc identifier, where:

    -   The base URL of files service denotes the entry URL to your HCL Connections files service. The files service URL is typically the HCL Connections base URL concatenated with the files service context root. The default context root is /files.
    -   The CMIS Service Doc identifier identifies a specific CMIS service document. Information about individual HCL Connections CMIS service document identifiers is available in the file CMIS API documentation.
    For an HCL Connections server with the URL www.example.com:9444 and that uses the default context root, the CMIS service document location is https://www.example.com:9444/files/basic/cmis/my/servicedoc.



???+ info "Related information:"
    - [Files CMIS API: Retrieving the Files CMIS API service document](https://ds_infolib.hcltechsw.com/ldd/appdevwiki.nsf/xpDocViewer.xsp?lookupName=CMIS%3A+Files#action=openDocument&res_title=Retrieving_the_Files_CMIS_API_service_document&content=pdcontent)

