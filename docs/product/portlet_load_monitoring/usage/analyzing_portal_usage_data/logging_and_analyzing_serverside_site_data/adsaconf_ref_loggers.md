# Analysis loggers reference

The following table lists and describes available loggers.

|HCL Digital Experience Server Analysis Logger|**Description and Activity Logged**|
|---------------------------------------------|-----------------------------------|
|SiteAnalyzerSessionLogger.isLogging|HTTP requests that include the URLs:/Command/Login/Command/Logout|
|SiteAnalyzerUserManagementLogger.isLogging|HTTP requests that include the URLs:/Command/UserManagement/CreateUser/Command/UserManagement/DeleteUser/Command/UserManagement/CreateGroup/Command/UserManagement/DeleteGroup|
|SiteAnalyzerPageLogger.isLogging|HTTP requests that include the URLs:/Page/\*/Command/Customizer/CreatePage/Command/Customizer/EditPage/Command/Customizer/DeletePage|
|SiteAnalyzerPortletLogger.isLogging|HTTP requests that include the URLs:/Portlet/\*|
|SiteAnalyzerPortletActionLogger.isLogging|HTTP requests that include the URLs:/PortletAction/\*|
|SiteAnalyzerErrorLogger.isLogging|HTTP requests that include the URLs:/Error/Portlet/Error/PageThe referrer field points to a portlet name or a page name. Examples of such referrer fields are:http://your.server.name/Portlet/1/PortletNamehttp://your.server.name/Page/1/PageName|
|SiteAnalyzerApplicationActionLogger.isLogging|HTTP requests that include the URLs:/ApplicationAction/\*|
|SiteAnalyzerJSRPortletLogger.isLogging|web content viewer|

**Parent topic:**[Logging and analyzing server side site data](../admin-system/adsaconf.md)

