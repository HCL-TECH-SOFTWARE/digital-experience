# Staging Personalization rules to production

Use the steps in this file to move Personalization rules from a staging system to a production system. There are a number of methods for moving rules between servers, each suitable for different situations.

Choose one of the following methods to move rules:

## Method: Export from source then import into destination

|Steps|Advantages|Disadvantages|Users|
|-----|----------|-------------|-----|
|1.  Use **Export** in the Personalization Navigator portlet on the source to export a nodes file. <br>2.  Use **Import** in the Personalization Navigator portlet on the target to import that file.|-   This method is the easiest way to move rules. <br> -   Uses a familiar export and import paradigm.|-   Cannot be scripted. <br>-   Requires Personalization Navigator portlet to be installed on the target server.|-   Development teams. <br>-   Quick, ad-hoc changes in small deployments and test environments.|

## Method: Publish using the Personalization Navigator portlet

|Steps|Advantages|Disadvantages|Users|
|-----|----------|-------------|-----|
|Use the Publish menu options in the Personalization Navigator portlet to publish the entire workspace or to selectively publish|-   Easy and quick to use. Once a publish server is configured, you can publish rules in two clicks. <br>-   This method does not require rules to be saved on the file system. <br>-   If publishing the entire workspace with smart delete, you can ensure two work spaces are the same.|-   No intermediate file is produced by the process, so there is no record of what was published other than log files. <br>-   This approach is driven from a graphical user interface, so it is not scriptable.|Business users with rule authoring responsibilities.|

## Method: Export from the source and then publish into the destination

|Steps|Advantages|Disadvantages|Users|
|-----|----------|-------------|-----|
|1.  Use **Export** in the Personalization Navigator portlet on the source to export a nodes file. <br>2.  Use the pznload command line utility \(pznload.sh and pznload.bat\) to publish the nodes file that you exported to the target.|-   This method can an be scripted. <br>-   Allows your changes to be tracked, controlled, and the earlier versions to be reverted by maintaining copying of the nodes files and rerunning a script.|Requires use of a command line interface.|-   Administrators <br>-   Moving between staging and production environments|

## Rules

!!! note
    -   If the rules are referenced by Personalization components, ensure the Personalization components are published and syndicated in Web Content Manager.
    -   If the rules are referenced in pages or portlets, move the page and portlet definitions with XML Access or Release Builder. This is related to attribute based administration.


???+ info "Related information"
    - [Creating the initial release](../../deployment/manage/staging_to_production/creating_deploying_initial_release/dep_cir.md)
    - [Staging to production list](../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_stage_check.md)

