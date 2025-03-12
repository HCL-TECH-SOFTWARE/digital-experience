# How to change cell and node names in a standalone HCL DX environment

## Applies to  

> HCL Digital Experience 8.5 and higher  

## Introduction  

HCL Digital Experience (DX) is based on IBM WebSphere Application Server. When the product is installed, a wp_profile is created with a cell name and a node name by default. In some scenarios, it is required to change the cell name and node name after installation. This document provides instructions on how to change these names.  

## Instructions  

To change the cell name and node name in a standalone DX environment, refer to the following steps:  

1. Open the command line window and go to the `<WAS_HOME>/profiles/<profile_name>/bin` directory.  

2. Run the `wsadmin` command in non-connected mode, as shown in the following example. Make sure to replace `<wsadmin>` and `<waspassword>` with the correct values.  

    ```text
     ./wsadmin.sh -lang jython -user <wasadmin> -password <waspassword> -CONNTYPE none  
    ```  

3. Change the cell or node name by using the following commands in `wsadmin` prompt:

    - To change the cell name, run: 

        ```text
        AdminTask.renameCell('[-newCellName <newName>]')  
        ```  

        Make sure to replace `<newName>` with new cell name value.

    - To change the node name, run:  

        ```text
        AdminTask.renameNode('[-nodeName <oldname> -newNodeName <newname>]')
        ``` 

        Make sure to replace `<oldname>` with old node name value and `<newname>` with new node name value.  

4. Save the changes by using the following command:  

    ```text
     AdminConfig.save()  
    ```

5. Exit the `wsadmin` prompt by using the command:  

    ```text
     exit
    ```

6. Create a backup copy of `setupCmdLine.sh` located in `WAS_HOME/profiles/<profile_name>/bin`.  

7. Edit `setupCmdLine.sh` file and change the `WAS_NODE` value to the new node name. Make sure that the `WAS_CELL` value is updated with new cell name.  

8. Restart the WebSphere_Portal server.

???+ info "Related information"
    - [Configuring a stand-alone server](../../../deployment/manage/config_standalone.md)
