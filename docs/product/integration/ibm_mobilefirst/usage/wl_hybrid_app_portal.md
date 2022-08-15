# Creating a MobileFirst hybrid application for your portal

You can create a hybrid application to add native device capabilities to your portal with IBM MobileFirst.

To test an iPhone and iPad hybrid application, you must use a Mac with Xcode installed. To test an Android hybrid application, you must have an Android Virtual Device created. To test a Windows Phone hybrid application, you must have Windows 8 and the Windows Phone SDK installed.

1.  Create your MobileFirst® Hybrid Application in the MobileFirst Eclipse development environment by selecting **New** \> **MobileFirst Project**.

2.  In the **Name** field, name your project. In this example, name your project MFPortal. In the **Project Templates** field, select **Hybrid Application**, which is the default, and click **Next**.

3.  In the **Application Name** field, name your application. In this example, name your application MFPortalApp. Check the JavaScript libraries that you want your application to use if any and click **Finish**.

    The project and application artifacts are created. You can see your project\_name\\apps\\app\_name folder in the Project Explorer. Your application descriptor, application-descriptor.xml, is in the Application Descriptor Editor.

4.  In application-descriptor.xml, you can change the basic settings of your application, such as your `application id`, `displayName`, `description`, and `author` details.

5.  In application-descriptor.xml, change `mainFile` to your HCL Portal URL with the uri=wl:id parameter appended to the end.

    For example, enter http://localhost:port/wps/portal?uri=wl:id:MFPortalApp. Replace **localhost** with your host name and `MFPortalApp` with your application name.

6.  In the common/images folder, replace the icon.png and thumbnail.png files with the custom images that you want for your application. The `thumbnailImage` shows that the icons used for your application are in the common/images folder.

7.  Save your changes.

8.  Create a MobileFirst environment to build the native part of the hybrid application. Right-click your project\_name\\apps\\app\_name folder and then select **New** \> **MobileFirst Environment**.

9.  In the New MobileFirst Environment dialog, select any native environments that you want your application to support, such as iPhone, iPad, Windows Phone, and Android phones and tablets. Click **Finish**.

    Your Project Explorer window is updated with a native application in a folder named project\_name\\app\_name\\platform. In this example, the folder for Android is MFPortal\\MFPortalApp\\Android. For iOS, it is MFPortal\\MFPortalApp\\iphone or MFPortal\\MFPortalApp\\ipad for iOS. For Windows Phone, it is MFPortal\\MFPortalApp\\windowsphone8. For Windows Phone applications, set the URI entered for the mainFile value of the application-descriptor.xml as the StartPageUri value in MainPage.xaml. MobileFirst manages the lifecycle of these folders. When the web application you initially created in the project is built and deployed, the native applications are overwritten with any application changes.

10. To test your application, right-click the project\_name\\apps\\app\_name folder and select **Run As** \> **Build All Environments**.

    1.  To test an Android hybrid application, you must have an Android Virtual Device created. Then, right-click on your native Android application folder, and select **Run As** \> **Android Application**. The native Android application is a peer to your project. In this example, a project that is named `MFPortalMFPortalAppAndroid` is in your MobileFirst project.

    2.  To test an iPhone and iPad hybrid application, you must use a Mac with Xcode installed. Right-click on your native iPhone or iPad application folder, which is project\_name\\apps\\app\_name\\iphoneor project\_name\\apps\\app\_name\\ipad, and select **Run As** \> **Xcode project**. Then, in Xcode, select your emulator and run the application.

    3.  To test a Windows Phone hybrid application, you must have Windows 8 with Windows Phone 8 SDK installed. Right-click your native Windows Phone application folder, which is project\_name\\apps\\app\_name\\windowsphone8, and select **Run As** \> **Visual Studio Project**. Then, in Visual Studio, select your emulator and run the application.


**Parent topic:**[Integrating with IBM MobileFirst](../integrate/wl_integrt.md)

