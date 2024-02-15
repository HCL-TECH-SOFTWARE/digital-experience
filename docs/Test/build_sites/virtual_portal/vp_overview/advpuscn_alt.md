# Alternative concepts for virtual portals on HCL Portal

Besides virtual portals, another possible configuration may be an alternative for you, depending on your business needs. This setup is referred to as true portals.

This setup allows the re-use of a single hardware, with multiple complete portal installations, that is, one dedicated software profile for each portal. Each portal installation requires its own complete WebSphere® Application Server installation. These are the main advantages of true portals:

-   The strong isolation of the configuration data due to separate configuration databases
-   The full isolation of applications, due to a separate JVM for each true portal. This allows better quality of service.

If you want to implement this solution, be aware of the following limitations:

-   You can run only a limited number of true portals on a single hardware machine. This is due to the memory volume required by the JVM.
-   You cannot share applications or data between true portals.
