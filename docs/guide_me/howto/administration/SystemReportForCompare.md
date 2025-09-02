# How to generate a system report to compare different DX environments

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article describes how to run the [WebSphere Application Server Configuration Comparison Tool (WCCT)](https://www.ibm.com/support/pages/node/711615){target="_blank"} to create a `.cfg` dump which you can use to generate reports for IBM WebSphere Application Server (WAS) settings. This `.cfg` file can be consumed to render a report that can also be sent to the support team to aid in their analysis.

## Instructions

The following instructions can be used to generate such a configuration report.

### Generating a `.cfg` file for WCCT

Refer to the following steps to generate the `.cfg` file to be be used as input in generating the IBM WAS report. On a clustered environment, this only needs to be done on the Deployment Manager (`Dmgr`).

!!!note
    Repeat these steps on additional servers if you wish to compare their settings.

1. Download latest release of the [WebSphere Application Server Configuration Comparison Tool](https://github.com/IBM/websphere-cct/releases){target="_blank"} (for example, `cct-YYYYMMDD.tar.gz`).

2. Unzip the package to your temp directory:

    **On Windows:**  
    ![WCCT Download Windows](./images/SystemReportForCompare/WCCT_download_windows.png)  

    **On Unix:**  
    ![WCCT Download Linux](./images/SystemReportForCompare/WCCT_download_linux.png)  

3. Navigate to your `<wp_profile_root>/bin` directory using a command prompt (Windows) or terminal window (Unix) and execute the following command:

    ```cmd
    wsadmin.(sh/bat) -conntype NONE -f <cct folder>/ConfigDump.py
    ```

    **On Windows:**  

    ![WCCT Config Dump on Windows](./images/SystemReportForCompare/Windows_ConfigDump.png)  

    **On Unix:**  

    ![WCCT Config Dump on Unix](./images/SystemReportForCompare/Unix_Config_Dump.png)

    This will create the `.cfg` file in the bin directory (for example, `PortalCell-21-03-18-09-01-56.cfg`).

4. Send the file to support or use it to create a report.

For more detailed instructions on how to generate a `.cfg` file for the WCCT reporting, refer to the [HCL Digital Experience - Generating a .cfg File for WCCT Reporting](https://www.youtube.com/watch?v=jeH9Lgh-Iak){target="_blank"} video.

### Generating a WCCT report from a `.cfg` file

Refer to the following steps to generate the WCCT report using the `.cfg` file you generated in the previous section.

1. Download the [Microsoft Windows Installer (MSI)](https://www.python.org/ftp/python/2.7/python-2.7.amd64.msi){target="_blank"}.  

2. Install Python 2.7 on the machine that will create the report. The IBM WCCT tool is specific to this version of Python.  

    !!!note
        Python should not be installed on machines where HCL products (for example, DX) are installed. Use a different machine to generate the report

3. Extract the WCCT `.zip` file to the same directory where Python is installed. For example, if Python is installed in directory `C:\Python27`, copy the WCCT `.zip` that is acquired from [Generating a .cfg file for WCCT](#generating-a-cfg-file-for-wcct) into the same directory and extract it there:  

    ![Python 2.7 Download](./images/SystemReportForCompare/Python27_download.png)  

4. Copy the `.cfg` files from the DX server to the same directory where Python is installed.

5. Open a command prompt, navigate to the Python install directory, and run the following command:

    ```cmd
    python ConfigReport.py
    ```  

    ![Config Report.py Windows](./images/SystemReportForCompare/ConfigReport_py_Windows.png)  

    This command generates a number of HTML files which you can use to review the IBM WAS settings. If multiple `.cfg` files are added in the Python or WCCT directory, the report will generate HTML files comparing the servers. You can use that report to find fundamental differences between two or more servers (for example, compare a test and development environment). If an application is working on one environment, but not on another, you can use the report for troubleshooting purposes.  

    **Single server report:**

    ![Single Server Report](./images/SystemReportForCompare/Single_Server_report.png)  

    **Multiple servers report**:  

    ![Compare Servers](./images/SystemReportForCompare/CompareServers.png)  

For more detailed instructions on how to generating a WCCT report from a `.cfg` file, refer to the [HCL Digital Experience - Generating a WCCT Report from a .cfg File](https://www.youtube.com/watch?v=IZMdP_cuK3c){target="_blank"} video.
