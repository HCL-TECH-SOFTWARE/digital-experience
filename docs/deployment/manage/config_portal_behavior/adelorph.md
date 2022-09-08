# Deleting orphaned data

You use the SLCheckerTool to delete orphaned data in the database.

When portal resources are deleted, dependent resources that are stored in a different database domain are not deleted at the same time. These remaining resources are still available for backup scenarios or other production lines that might share the database domain. For example, when an administrator deletes pages, the user customization to the deleted pages are not deleted. The SLCheckerTool enables the detection of orphaned data that is not needed any more by any of the production lines that share the domain. You can use the SLCheckerTool to prepare an XML script for later deletion of the orphaned data by the XML configuration interface.

The SLCheckerTool is included in the file `wp.db.slchecker.jar` in the following directory:

-   AIX® HP-UX Linux™ Solaris: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`
-   IBM® i: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`
-   Windows™: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\PortalServer\bin\slcheckertool.bat`
-   z/OS®: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`

You start the SLCheckerTool by using the following shell scripts:

-   AIX HP-UX Linux Solaris: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`
-   IBM i: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`
-   Windows: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\PortalServer\bin\slcheckertool.bat`
-   z/OS: `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/slcheckertool.sh`

To prepare and complete deleting orphaned data, you also complete some steps by using the XML configuration interface. For details about the XML configuration interface and how to use it refer to the appropriate topics. A sample XML script for exporting orphaned data that are listed enables the preparation of the orphaned data for work with the SLCheckerTool.

!!!note "Notes"
        1.  Before you delete the orphaned data by using the SLCheckerTool, secure your databases by making a backup.
    
        2.  To delete all orphaned data, you must include every production line that shares the database domain. Otherwise, resources that are still valid in a skipped production line might be unintentionally removed.

To delete the orphaned data, proceed by the following steps. For each step, use the target file from the previous step as the source file.

1.  Run the cleanup service to delete resources that are marked for delayed deletion. To run the cleanup service, use the XML configuration interface and the XML sample file Task.xml as the input.

2.  Create a full export that includes orphaned data of each production line that shares the particular domain. To complete this step, use the XML configuration interface and the XML sample file ExportIncludingOrphanedData.xml.

3.  Use the SLCheckerTool to create an XML script file to delete the orphaned data. Complete this step with the substeps given later.

    Observe the following rules:

    -   For each step, start the SLCheckerTool with the appropriate parameters as described under that step.
    -   Replace all file name variables (given in italics) by the complete directory path location and file name.
    -   For each step, use the target file or files from the previous step as the source file or files.
    Start the SLCheckerTool by using the following shell scripts:


    -   AIX HP-UX Linux Solaris: `wp_profile_root/PortalServer/bin/slcheckertool.sh`
    -   IBM i: `wp_profile_root/PortalServer/bin/slcheckertool.sh`
    -   Windows: `[wp_profile_root\PortalServer\bin\slcheckertool.bat`
    -   z/OS: `wp_profile_root/PortalServer/bin/slcheckertool.sh`
    
    1.  Find candidates for orphaned data in each production line. Repeat this step for each production line, but specify a different output file for each iteration. Otherwise, the results are overwritten. Use the following parameters:

        -   **--find-candidates -s xml_source_file -d cand_target_file -domain domain_identifier**

            Use these parameters to find the candidates for orphaned data within one production line. Replace the variables as follows:

            -   **xml_source_file**

                Specify a full XML export file that you created in step 2, the step for creating the XML export including orphaned data.

            -   **cand_target_file**

                Specify the target file. The orphaned data candidates are saved to that file.

            -   **domain_identifier**

                Specify the database domain in which you want candidates to be searched. Valid values are `comm` for the community database domain, `cust` for the customization database domain or `all` for both database domains.

    2.  Identify the orphaned data. Complete this step once, but with all the candidate files generated by previous step at the same time. This step determines the intersection of all result files, that is, the data that are orphaned in all production lines. Use the following parameters:

        -   **--identify-orphans -s cand_source_files_and_directories -dorph_target_file**

            Use these parameters to identify the orphaned data by matching the information from all the candidate files. Replace the variables as follows:

            -   **cand_source_files_and_directories**

                Specify all files that were generated as `cand_target_files` by the substep for finding the candidates. If you specify one or more directories with the files, make sure that these directories contain only candidate files and no other files.

            -   **orph_target_file**

                Specify the target file. The identified orphaned data is saved to that file.

    3.  Generate an XML script file. You can later use that script for deleting the orphaned data. Use the following parameters:

        -   **--delete-orphans -s orph_source_ file -d xml_target_file**

            Use these parameters to generate an XML script file for deleting the orphaned data. Replace the variables as follows:

            -   **orph_source_ file**

                Specify the file that was generated as the `orph_target_file` in the substep for identifying the orphaned data.

            -   **xml_target_file**

                Specify the target file. This file will be the XML script file that contains the information about the orphaned data. You can later use this file to delete the orphaned data.

4.  You can check whether all production lines were considered during the creation of the XML script file. To check, review the comment in the file header. The header contains information about all full exports that were used.

5.  Delete the orphaned data by starting the XML configuration interface with the XML script that you obtained as the `xml_target_file` with the orphaned data in the substep for generating the XML script. You must start the XML configuration interface with the XML script only on one production line that shares the database domain. This step deletes the orphaned data for all production lines that share that database domain.

You removed all orphaned data from your portal database.

**Related information**  
[Preparing the deletion of orphaned resources](../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/adxmltsk_del_orphan_res.md)<br>
[About the XML configuration interface](../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)<br>
[Hints and tips for developers and portal administrators](../../../build_sites/tagging_rating/hints_tips_tag_rate/tag_rate_ref_hintip_4admins.md)

