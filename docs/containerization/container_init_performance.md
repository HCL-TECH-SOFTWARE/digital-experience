# HCL Digital Experience 9.5 Docker and Container initialization performance

Beginning with from [HCL Digital Experience 9.5 Container Update](../overview/container_update_releases.md) CF192 release, container DX applications initialization performance is improved. Review the following guidance for information, defaults, and options to manage container applications initialization performance when deployed to Docker, Red Hat OpenShift, and Kubernetes platforms.

## Introduction

When deployed on the supported Red Hat OpenShift and Kubernetes environments, the HCL Digital Experience core platform "Pod" must be started before it can start serving requests. Furthermore, once the Pod is started, HCL Digital Experience Portal and Web Content Manager core must be initialized before the OpenShift or Kubernetes “readiness” probes can determine that the Pod is able to serve requests.

The OpenShift or Kubernetes readiness probe functions to execute an HTTP request to the "/wps/portal" or "/ibm/console" page and ensures that it responds.The HCL DX core must be initialized by execution of the "startServer.sh WebSphere\_Portal" process before the readiness probes completes successfully. This starts the IBM WebSphere Application Server profile containing HCL DX Portal and Web Content Manager. This initialization process includes several IBM WebSphere and HCL DX applications including select portlets that must initialize before the HCL DX Core can respond to the readiness probe.

In DX 9.5 Container Update CF192 and higher, to support a faster initialization of DX core Portal and Web Content Manager in Docker, Red Hat OpenShift, and supported Kubernetes platforms, most DX portlets not required for initial operations will default to a "lazy load" initialization. Using this means of initialization, an HCL DX portlet application is not started by a user request, but by the first standard HTTP request that occurs and renders a DX portal page that contains the portlet application on the server. Direct access to the portlet, for example an Ajax request, does not start the portlet. In addition, some IBM WebSphere applications not required for initial operations will not be autostarted.

## ConfigEngine Tasks

Three ConfigEngine tasks are deployed to support improvements to HCL DX Core initialization times. They are:

-   stop-autostart-docker-applications
-   *default*-autostart-docker-applications
-   start-advanced-editor-applications

## stop-autostart-docker-applications

The stop-autostart-docker-applications task is executed during the Docker image build for DX Core when initialized on Docker, Red Hat OpenShift, or Kubernetes platforms. This task manages the following functions:

-   It will stop the [Advanced Rich Text Editor.ear \(Textbox.io\)](../wcm/wcm_config_ephox_custom.md) files from autostarting.
-   It will “lazy load” all DX portlets that do not require the Portal and WCM functions to operate.
-   Portlets required for DX operations that will be loaded and initialized include for example, theme modules that are loaded from Portlets. These portlets must be started in order for the theme modules to load. The "Login" and "WCM Local Rendering" portlets are in also this list as they are required to present the Woodburn Studio demonstration site entry page, and therefore the Kubernetes readiness probe. Note that the readiness probe defaults to the WebSphere Application Console via probe functions that execute an HTTP request to the "/wps/portal" or "/ibm/console" page and ensures that it responds. See**Figure: Configure Editor Options** the list of portlets that are needed for DX operations and will automatically load.

![](../images/config_editor_options.jpg "Configure Editor Options")

## default-autostart-docker-applications

The default-autostart-docker-applications task will restore the autostart status of all applications to their “out of the box” status \(and not apply “Lazy load” initialization functions\).

## start-advanced-editor-applications

The start-advanced-editor-applications task will start the [Advanced Rich Text Editor.ear \(Textbox.io\)](../wcm/wcm_config_ephox_custom.md) application, if required, and if the customer configures WCM to use the WCM Advanced Editor.

-   **Prerequisites:**

    Portal Administrators should run the start-advanced-editor-applications task to start the [Advanced Rich Text Editor.ear \(Textbox.io\)](../wcm/wcm_config_ephox_custom.md)application, then proceed to select the Advanced Editor in the Web Content Manager **Authoring** \> **Configure** \> **Editor Options** interface.


## Important Considerations and Limitations of the Container Initialization Improvements

As a result of not autostarting, these applications and portlets, initialization of DX Portal may be faster, but the initial access of most pages will initially be slower due to the fact that the application/portlet must now be initialized. Note this only affects the first access of that application/portlet \(as initialization is a once per system activity\). As new DX PODS are started, initialization of DX pages with non-required applications and portlets will be slower on first HTTP request.

## Using Advanced Editors for WCM

As noted above, beginning with Container Update CF192, and default settings for ‘lazy load’ of non-required portlets and applications, the [Advanced Rich Text Editor .ear](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_config_ephox_custom.md) Textbox.io for WCM is now NOT started. Since this is not a lazy load but rather a stop of the Advanced Rich Text Editor Textbox IO EAR containing the advanced editor, **they must also start the Advanced Rich Text Editor EAR** by running the**"start-advanced-editor-applications" task,**before configuring the Advanced Rich Text editor in the Web Content Manager configuration settings**,** to make the editor available for content authors. It is not necessary in addition to "commit” the new Docker images once this task completes, because these changes are in the profile which is persisted in an external volume and not in the Docker image.

## Source File listing of HCL DX required portlets and applications that will autostart:

These configuration tasks use four files to obtain the list of HCL DX portlet/applications to autostart. All the files are located in the same directory:

```
configuration root}/PortalServer/installer/wp.config/config/includes
```

For example, a list on this reference system is are located at:

```
/opt/HCL/PortalServer/installer/wp.config/config/includes
```

The four import files are:

```
advancedEditorEAR - Enable the Advanced Editors
defaultListOfEnabledApps - The out of the box autostart parameters
listOfAppsDockerDisable - List of all portlets and applications who autostart is initially disabled
listOfAppsDockerEnable - List of portlets and applications to autostart after having disabled the one in listOfAppsDockerDisable

```

-   ****List of portlets and applications that are automatically initialized by default****

    \(Container Update CF192 release and later\):

    PA\_Login\_Portlet\_App

    PA\_Site\_Builder

    PA\_WCMLRingPortJSR286

    PA\_WCM\_Authoring\_UI

    PA\_Pingpageproperties

    PA\_Styles

    PA\_Wiring

    PA\_wp.pzn.ui.actions

    PA\_Orphaned

    PA\_VanityUrl

    PA\_New\_Page

    PA\_Create\_Content

    PA\_Applications

    PA\_Toolbar\_Content

    PA\_Toolbar\_SiteMap

    PA\_Impersonation

    PA\_WebScanner

    PA\_Theme\_Creator


-   ****List of portlets and applications initialized via “lazy load”****

    \(Container Update CF192 release and later\):

    AJAX Proxy Configuration

    Default\_Theme\_85

    Dojo\_Resources

    EphoxEditLive

    ibmasyncrsp

    isclite

    JavaContentRepository

    jQuery\_Resources

    Live\_Object\_Framework

    lwp.addtosametimelist\_war

    lwp\_groupsViewer\_war

    lwp\_peoplefinder\_war

    lwp\_peoplePicker\_war

    MashupCommonComponent

    Mobile\_Preview

    PA\_Applications

    PA\_AtiveSiteAnalytics

    PA\_Banner\_Ad

    PA\_Blurb\_1

    PA\_CM\_Picker

    PA\_ContactList

    PA\_Create\_Content

    PA\_CredVaultDialog

    PA\_Dialog\_Stack

    PA\_Dialog\_State

    PA\_DynamicUIApp

    PA\_EitThemeProperties

    PA\_FedDocumentsPicker

    PA\_Feed\_Service\_Admin

    PA\_FS\_Disambiguation

    PA\_Impersonation

    PA\_IWidget\_Wrapper

    PA\_Login\_Portlet\_App

    PA\_MosoftExchange2010

    PA\_New\_Page

    PA\_Orphaned

    PA\_Page\_Picker

    PA\_Pingpageproperties

    PA\_Pmizationframework

    PA\_PortalWSRPProxy

    PA\_PTransformationApp

    PA\_Search\_Center

    PA\_SearchSitemapPort

    PA\_Selfcare\_Port\_App

    PA\_Site\_Builder

    PA\_spa

    PA\_Styles

    PA\_Tag\_Cloud

    PA\_Theme\_Creator

    PA\_Theme\_Manager

    PA\_Toolbar\_Content

    PA\_Toolbar\_SiteMap

    PA\_VanityUrl

    PA\_WCM\_Authoring\_UI

    PA\_WCMLRingPortJSR286

    PA\_WCMSupportTools

    PA\_WebDockPortServlet

    PA\_WebScanner

    PA\_Wiring

    PA\_WPF

    PA\_wp.feedspace

    PA\_wp.pzn.ui.actions

    PA\_wp.vwat.manager

    Personalization\_Lists

    Personalization\_Workspace

    Practitioner\_Studio\_Theme\_95

    PSESearchAdapter

    pznpublish

    pznscheduler

    PZN\_Utilities

    Quickr\_Document\_Picker

    RESTAPIDocs

    Seedlist\_Servlet

    Simple\_Theme

    SpellChecker

    StartupCheck

    SwaggerUI

    Theme\_Dev\_Assets

    ThemeDevSite

    Theme\_Modules

    TinyEditorsServices

    TinyEditorsTextboxio

    Toolbar\_Modules

    Toolbar\_Theme\_85

    UserProfileRESTServlet

    wci

    wcm

    WCM\_EXTENSION

    wcm-remote-admin-ejb

    Woodburn\_Studio\_Theme\_95

    worklight\_extension

    wp.scriptportlet.editor

    wp.scriptportlet.importexport

    wps

    wps\_scheduler

    wp.theme.ckeditor.ear

    wp.theme.toolbar.xslt

    wp.vwat.servlet.ear

    WSPolicyManager


**Parent topic:**[Container administration 9.5](../containerization/maintenance.md)

