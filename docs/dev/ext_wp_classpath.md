# Extending HCL Portal class path

There are several options to add the general code that is not part of an EAR or WAR files.

1.  Add the custom code to a shared library.

    1.  Use the administrative console to define a shared library, by creating and associating the shared library with an application, module, or server. For more information, see *Managing shared libraries*.

        Documentation resource: [Managing shared libraries](https://www.ibm.com/docs/en/was-zos/8.5.5?topic=servers-managing-shared-libraries).

    2.  Add the shared library to the custom applications or to the entire HCL Portal Server.

        -   Adding the shared library to the custom application.

            You can associate a shared library with an application or module. Classes that are represented by the shared library are then loaded in the application's class loader, making the classes available to the application. For more information, see *Associating shared libraries with applications or modules*

            Documentation Resource: [Adding the shared library to the custom application](https://www.ibm.com/docs/en/was-zos/9.0.5?topic=libraries-associating-shared-applications-modules)

        -   Adding the shared library to the entire HCL Portal.

            You can associate shared libraries with the class loader of a server. Classes that are represented by the shared library are then loaded in a server-wide class loader, making the classes available to all applications deployed on the server. For more information, see *Associating shared libraries with servers.*

            Documentation Resource: [Add the shared library to the entire HCL Portal](https://www.ibm.com/docs/en/was/8.5.5?topic=libraries-associating-shared-servers)

2.  If you are developing a PAA, include the compressed files in the PAA components/COMPONENTNAME/shared/app or components/COMPONENTNAME/shared/ext directories. The solution installer handles creating the shared libraries for these files.

3.  If you are creating a custom Trust Association Interceptor \(TAI\) or a custom Java Authentication and Authorization Service \(JAAS\) module, place a copy of your jar file\(s\) in the <wp\_profile\>/classes directory, for example, /opt/HCL/wp\_profile/classes/MyCustomTAI.jar.


