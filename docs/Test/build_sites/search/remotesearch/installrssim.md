# Installing remote search service by using IBM Installation Manager

View the steps to install remote search service by using IBM Installation Manager.

-   WebSphere® Application Server v8.5 must be installed.
-   HCL Portal and HCL Web Content Manager must not be installed.

Use the HCL Portal V8.5 Remote Search and Document Conversion Services Multiplatform Multilingual installation package to install remote search service by using Installation Manager.

1.  Enter the installation directory of the remote search service in the installation directory field.

2.  Select a language.

3.  Select a package to install. You can select either remote search service, remote document conversion service (DCS), or both.

4.  Enter the location of the target WebSphere Application Server root directory.

5.  Specify which user is able to access and use remote search service from the portal server by entering their user name and password.

    !!! note
        -   It is possible to manually install remote search service without using Installation Manager. For more information about how to perform the manual installation of remote search service, see [Installing remote search service by using manual steps](../remotesearch/install_manual/index.md).
        -   Additional installation and configuration of remote DCS is no longer required with HCL Portal Version 8.5.
        -   Installing remote search service by using Installation Manager will create a new WebSphere Application Server profile for remote search service.


