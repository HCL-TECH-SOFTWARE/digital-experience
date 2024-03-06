# Integrating your own search engine

Even if you do not need DX Search for site visitors, the DX Search Service is still required if your content authors want to search in the HCL Web Content Management Authoring Portlet. 

If you are using the WCM Authoring search functionality, you can delete the **Portal Default Collection**. However, **JCRCollection1** is still required and, as a result, the out-of-the-box DX Search Service is also required.

If the Portal is clustered, it is mandatory to install, configure, and use a remote search service. After setting up the remote search service, you can move the default JCR search collection by exporting the JCRCollection1 configuration from the local search service as an XML document. You can then safely delete the JCRCollection1 search collection under the Default Search Service.

Next, create the JCRCollection1 under the remote search service and then import the configuration using the export XML document.

For more details on how to set up JCR crawler, refer to [Setting up the JCR crawler required for WCM Authoring search](recreate_standard_crawlers.md#setting-up-the-jcr-crawler-required-for-wcm-authoring-search).