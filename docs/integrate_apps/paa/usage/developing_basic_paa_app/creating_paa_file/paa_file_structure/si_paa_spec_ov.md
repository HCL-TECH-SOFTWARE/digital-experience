# PAA file structure overview

Each PAA file is a structured ZIP compression file. Because the Solution installer uses Ant tasks to expand or parse the PAA file, it needs to be a ZIP compression file that can be decoded by the java.util.zip class.

At the top level of a PAA file is the root directory. There are no restrictions on the name of this directory; however, use something that is unique and does not clash with other registered PAA files or assemblies. There must be only one root directory in a PAA file. The name of this directory is significant because it is the reference name for your PAA content. It is the same value as the `assemblyName` when you create the assembly level sdd.xml file. Read [The sdd.xml file](si_paa_spec_sdd.md) for information.

You can find a sample top-level directory in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/paa-samples/sample1.paa file. The root directory contains the documentation and components directories and an sdd.xml file.

The sdd.xml file has the following roles:

-   It informs the ConfigEngine about the assembly of components.
-   It provides the ConfigEngine with the list of components and their locations within the directory structure.
-   It points to each component sdd.xml file so that the installation function can process the installation of the individual components.

-   **[Documentation directory](../config/si_paa_spec_doc.md)**  
Place all documents and ID-related artifacts for the application in the documentation directory.
-   **[Components directory](../config/si_paa_spec_compdir.md)**  
The components directory and its sub-directories in the PAA file archive are where all deployable artifacts must be stored. If you examine the content of the components directory in the PortalServer\_root/doc/paa-samples/Sample1.paa file, you see one component, sample1. There is always at least one component that is contained in a PAA file. However, there is no limit on the number of extra components that you can include.


**Related information**  


[Exporting theme PAA files](../dev-theme/themeopt_themedev_export.md)

