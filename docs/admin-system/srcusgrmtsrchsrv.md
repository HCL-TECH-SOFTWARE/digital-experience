# Remote search service

You can configure the search portlets for local operation, or you can configure them for remote search service. Depending on your configuration, remote search service might have performance benefits by offloading and balancing system load.

You can provide the remote search service as an EJB. Also, separate HCL Portal environments cannot use the same remote search server. Only multiple HCL Portal servers in the same cell can use the same remote search server.

**Note:** SOAP support for remote search services was deprecated with HCL Digital Experience Version 8.0.

When you want to index and search portal sites, search results are filtered according to the user security credentials. This filtering occurs independently of whether security is enabled on the remote search server or not. However, if security is not enabled, an unauthorized user can connect to the remote server and obtain unfiltered search results. If you want to prevent this issue, you must use EJB and enable security on the remote server. For information about enabling security on the remote search server, read *Preparing security for remote search service in a single sign on domain*.

