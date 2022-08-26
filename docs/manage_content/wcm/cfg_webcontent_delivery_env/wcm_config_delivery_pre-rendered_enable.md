# Pre-rendering options

You can enable pre-rendering so that content can be viewed either through an HCL Web Content Manager application or as a stand-alone site that is accessed through a web server.

You define and manage pre-rendering options in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

## Pre-rendering automatically

Although you can manually pre-render a website through the URL interface, you can also configure pre-rendering to run automatically when the server starts.

1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.
2.  Click **WCM WCMConfigService**.
3.  Under **Additional Properties**, click **Custom Properties**.
4.  Edit the connect.businesslogic.module property, and append cacher to the value. For example:

    ```
    web,mail,default,ajpe,federatedproxy,ajpecatselect,memberfixer,workflowenablement,
    itemdispatcher,plutouploadfile,plutodownloadfile,synd,subs,syndication,
    refreshallitems,unlocklibrary,custom,data,clearversions,clearhistory,
    reseteventlog,cacher
    ```

5.  Ensure that connect.businesslogic.module.cacher.autoload is set to true.
6.  Save your changes and restart the server.

## Enable pre-rendering for sites viewed by using Web Content Manager

This option is used when you are accessing the pre-rendered site through Web Content Manager. This increases performance as static content is accessed from the pre-rendered site, but dynamic content is still rendered through Web Content Manager.

To enable users to access the pre-rendered site through a Web Content Manager application, specify the connect.businesslogic.module.default.class property in the **WCM WCMConfigService** service by using the WebSphere Integrated Solutions Console.

-   Property name: connect.businesslogic.module.default.class
-   Value: com.aptrix.cacher.CacherModule

**Note:** You cannot use the local rendering portlet \(Web Content Viewer\) when pre-rendering is set as the default module.

## Enable pre-rendering for stand-alone sites

This option is used when you are using Web Content Manager to generate a pre-rendered site, but are not using Web Content Manager to view the pre-rendered site. You need to use a web server to view the pre-rendered site.

Specify the connect.businesslogic.module.cacher.class property in the **WCM WCMConfigService** service by using the WebSphere Integrated Solutions Console.

-   Property name: connect.businesslogic.module.cacher.class
-   Value: com.aptrix.cacher.CacherModule

Specify the following properties to configure caching. Default values are listed, although you can tailor these values as needed. Unless you explicitly set a value for a property, the default value is used.

-   **`connect.moduleconfig.cacher.destdir`**

    Value: `${USER_INSTALL_ROOT}/PortalServer/wcm/ilwwcm/cacher`

    Base directory under which each site cache is created. There is one sub-directory created for each site.

    **Important:** If the prerenderer is run with the connect.moduleconfig.cacher.overwritecache property set to true, any files in the connect.moduleconfig.cacher.destdir path that were not written in the last run of the pre-renderer is deleted. For this reason, ensure that the connect.moduleconfig.cacher.destdir path is only used for storing rendered content and that it does not contain any other data that cannot be re-created.

-   **`connect.moduleconfig.cacher.tempdir`**

    Value: `${USER_INSTALL_ROOT}/PortalServer/wcm/ilwwcm/cacher/temp`

    The temporary directory that is required to build the site cache before moving the data over to the base directory specified by the `connect.moduleconfig.cacher.destdir` property.

-   **`connect.moduleconfig.cacher.delay`**

    Example value: `1`

    This property is used to set the time, in seconds, between requesting a page while caching.

-   **`connect.moduleconfig.cacher.busydelay`**

    Example value: `5`

    This property is used to set the time, in seconds, of the busy delay setting. This is used if running within the busy start to busy end period. Otherwise the delay setting is used.

-   **`connect.moduleconfig.cacher.busystart/connect.moduleconfig.cacher.busyend`**

    Example value: `9:00 am`/`5:00 pm`

    These settings determine the times between which the busy delay setting is used. Enter an absolute time as shown.

-   **`connect.moduleconfig.cacher.overwritecache`**

    -   **`true`**

        The pre-renderer overwrites files in the `destdir` cache directory \(then delete unneeded files\). This results in a progressive change in site content as seen by the user. This is the default value.

    -   **`false`**

        The first time a site is pre-rendered, the cached site files are added to the destination directory. As changes are made to the site through the authoring portlet, the new version of the site is gradually cached in the temporary directory and the old site remains in the destination directory. After the cacher has finished caching the site completely, the contents of the temporary directory are moved to the destination directory that will then contain both old and new versions of the cached site.

        **Note:** A value of false should not be used if a web server is used to display the pre-rendered data because some web servers lock the data directories.

-   **`connect.moduleconfig.cacher.rendereruser`**

    Example value: `Anonymous`.

    This determines the user to be used to render the Web Content Manager content. Either type `Anonymous` or `Administrator` or a specific user or group name.

    The site is pre-rendered based on this user's security rights. If the user specified here does not have access to a particular component, it is not pre-rendered.

-   **`connect.moduleconfig.cacher.task.cacherurl`**

    Example value: `http://${WCM_HOST}:${WCM_PORT}${WCM_CONTEXT_ROOT_PATH}/connect/`

    The full URL to be used as the replacement for the connect servlet in pre-rendered pages. The URL ends with the string specified in connect.moduleconfig.cacher.task.servletpath property if it is not blank. The context of `cacherurl` is used when generating a URL with pre-rendering. This property is not used when a page belongs to a site that has not already been pre-rendered at a site level by the scheduled task or through a SRV=cacheSite request.

-   **`connect.moduleconfig.cacher.task.servletpath`**

    Example value: `/connect`

    The path of the substituted connect servlet that is defined in the connect.moduleconfig.cacher.task.cacherurl property. This property can remain blank if the `cacherurl` context should be used unchanged.

-   **`connect.moduleconfig.cacher.defaultcontentname`**

    Example value: `index.html`

    This sets the name of the default or home file that is used when accessing the pre-rendered site. This normally would be `index.html`.

-   **`connect.moduleconfig.cacher.task.siteareas`**

    Example value: `LibraryA/SiteAreaA,LibraryB/SiteAreaB,SiteAreaC`

    The site areas within a Web Content Manager environment to cache are entered here, separated by commas. This property provides the option of specifying the library in addition to the site area. If the library is specified, the pre-renderer looks for the site area in that library. If no library is specified, the default library is used, as specified in the `defaultLibrary` property.

    **Note:** If any of your site area names contain commas, you must create separate parameters for each site area using this format: `connect.moduleconfig.cacher.task.siteareas.N`

    N represents a different integer for each parameter. For example, if you want to pre-render a site area named "SiteArea,Red" and a site named "Site,Yellow", you would need to create the following parameters:

    ```
    connect.moduleconfig.cacher.task.siteareas.1=MyLib/SiteArea,Red
    connect.moduleconfig.cacher.task.siteareas.2=Site,Yellow
    ```

-   **`connect.moduleconfig.cacher.task.interval.recurrence``connect.moduleconfig.cacher.task.interval.startdelay`**

    The CacherModule can be set to run after a recurring number of minutes.

    -   **recurrence:**

        Example value: `10`.

        The recurring period in minutes for a recurring task.

    -   **startdelay:**

        Example value: `1`

        The delay in minutes prior to starting the first recurring task.

    **Note:** If you do not configure pre-rendering to start automatically when the server starts, pre-rendering at intervals does not work until you manually trigger the cacher module.

-   **`connect.moduleconfig.cacher.task.scheduled.times`**

    Example value: `3:00 am`

    Alternately, the CacherModule can be set to run at certain times. Enter a series of absolute times, separated by commas.

    **Important:** When specifying time values, be sure you conform to the format `H:MM am|pm`, including the use of the colon \(`:`\) character and the space. Incorrectly specified values prevent pre-rendering from functioning properly.

    **Note:** If you do not configure pre-rendering to start automatically when the server starts, pre-rendering at scheduled times does not work until you manually trigger the cacher module.


## Pre-rendering resources

-   **`connect.moduleconfig.cacher.useTieredResourceFolders`**

    Value: `false`

    All resources, such as images and file resources, are stored under the following folder:

    ```
    CACHER_DIR\LIBRARY\SITEAREA\resources
    ```

    By default, each individual resource is saved under its own folder. For example, a resource with the ID of "7961d78049717f29bc57fee5670e9d7b" will be stored under this folder:

    ```
    CACHER_DIR\LIBRARY\SITEAREA\resources\**7961d78049717f29bc57fee5670e9d7b**
    ```

    You can change this behavior so that resources are stored under a tiered set of sub-folders based on the first two characters of the resource ID by changing the value of connect.moduleconfig.cacher.useTieredResourceFolders to `true`. For example, a resource with the ID of "7961d78049717f29bc57fee5670e9d7b" will be stored under this folder:

    ```
    CACHER_DIR\LIBRARY\SITEAREA\resources\7\9\
    
    ```

    All other resources that whose IDs begin with "79" will also be stored under this folder. This is done to reduce the number of sub-folders under the "resources" folders.


## Minimum configuration settings

You can pre-render sites either manually, or to a schedule, or at intervals. These are the minimum settings required for each type of pre-rendering.

-   **Manual:**

    -   `connect.moduleconfig.cacher.rendereruser`
    -   `connect.businesslogic.module.cacher.class`
-   **Scheduled:**

    -   `connect.moduleconfig.cacher.rendereruser`
    -   `connect.businesslogic.module.cacher.class`
    -   `connect.businesslogic.module.cacher.autoload`
    -   `connect.moduleconfig.cacher.task.siteareas`
    -   `connect.moduleconfig.cacher.task.scheduled.times`
    -   `connect.businesslogic.module`
-   **At intervals:**

    -   `connect.moduleconfig.cacher.rendereruser`
    -   `connect.businesslogic.module.cacher.class`
    -   `connect.businesslogic.module.cacher.autoload`
    -   `connect.moduleconfig.cacher.task.siteareas`
    -   `connect.moduleconfig.cacher.task.interval.recurrence`
    -   `connect.businesslogic.module`


**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Pre-render methods](../wcm/wcm_config_delivery_pre-rendered_running.md)

