# Security issues

Storing authenticated pages in a shared cache introduces security holes. If a malicious user discovered the URL for an authenticated page, that user could read pages containing private information.

By default, HCL Portal does not permit shared caching for authenticated pages. You can use the Properties portlet or the XML configuration interface to override these default settings using the com.ibm.portal.IgnoreAccessControlInCaches parameter, but in most cases this is not recommended.

!!!note
    In some rare circumstances, it might be useful to store authenticated pages in a shared cache. For example, if all authenticated users receive identical content, then storing authenticated pages in a shared cache might be acceptable.


