# How to change a cell name and node name in a standalone HCL Digital Experience environment?  

## Applies to  

> HCL Digital Experience 8.5 and higher  

## Introduction  

HCL Digital Experience is based on IBM WebSphere Application Server. When the product is installed, by default a "wp_profile" will be created with a cell- and node name. In some situations it is required to change the cell name and node name after installation. This document provides detailed instructions that can be used to change these names.  

## Instructions  

In order to change the cell name and node name in a standalone Digital Experience environment the following steps can be used:  

1) Open the command line window and go to `<WAS_HOME>/profiles/<profile_name>/bin` directory.  

2) Run wsadmin command in non connected mode as shown below.  

   `./wsadmin.sh -lang jython -user <wasadmin> -password <waspassword> -CONNTYPE none`  

3) Run below command in wsadmin prompt to change the cell name. Make sure to replace newname with new cell name value.  

   `AdminTask.renameCell('[-newCellName <newName>]')`  

4) Run below command in wsadmin prompt to change the node name. Make sure to replace oldname with old node name value and newname with new node name value.  

   `AdminTask.renameNode('[-nodeName <oldname> -newNodeName <newname>]')`  

5) Save the changes by using the command:  

   `AdminConfig.save()`  

6) Exit the wsadmin prompt by using the command:  

   `exit`  

7) Take a backup of `setupCmdLine.sh` located under `WAS_HOME/profiles/<profile_name>/bin`.  

8) Edit `setupCmdLine.sh` file, change `WAS_NODE` value to new node name. Also, make sure that the `WAS_CELL` value is updated with new cell name.  

9) Restart the WebSphere_Portal server  
