# ReleaseBuilder command syntax

The ReleaseBuilder command file is in the wp\_profile\_root/PortalServer/bin directory and has the following syntax.

-   **NAME**

    releasebuilder - generate different configurations for a single staging server. The production server uses the configuration.


-   **SYNOPSIS**

    releasebuilder -inOld input file oldReleaseConfiguration -inNew input file newReleaseConfiguration -out output file -virtualPortalMode


-   **OPTIONS**

    The following options are supported:

    -   inOld input file oldReleaseConfiguration:

        Required. This option is used to specify the first of the two XML configuration files to compare. The input file oldReleaseConfiguration parameter must be an absolute or relative path of an accessible XML configuration file that is previously generated with the XML configuration interface command.

    -   inNew input file newReleaseConfiguration:

        Required. This option is used to specify the second of the two XML configuration files to compare. The input file newReleaseConfiguration parameter must be an absolute or relative path of an accessible XML configuration file that is previously generated with the XML configuration interface command.

    -   out output file:

        This option is used to specify the file in which the differential output is written. If not specified, the differential output is written to the System console. The output file parameter must be an absolute or relative path of an accessible XML configuration file. If it does not exist, it is created. If it does exist, the existing information in the file is overwritten.

    -   virtualPortalMode:

        Use this option to specify that only virtual portal scoped resources are included in the configuration. This option enables the processing of a specific virtual portal. If you do not specify this parameter, the differential output includes unscoped resources as well.

    -   disableLogFile:

        Use this option if you do not want ReleaseBuilder to create a log file.

    -   logFileLocation log output file:

        ReleaseBuilder writes the log file to the specified location.

    -   debug

        Use this option to help you debug any errors that occur.



