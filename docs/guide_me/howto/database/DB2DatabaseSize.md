# How to determine portal database size when using DB2

## Applies to

> HCL Digital Experience 8.5 and later

## Introduction

A typical installation creates the following portal databases:

- Release database (`WPREL`)
- JCR database (`WPJCR`)

This article describes how to check the size of your portal databases on a Windows server when using DB2.

## Instructions

To check the size of your portal databases, refer to the following steps:

1. Open a DB2 command window.
2. Connect to the Release database (`WPREL`) using the following command:

    ```cmd
    db2 connect to WPREL user <yourUserid> using <yourPassword>
    ```

3. Retrieve the database size using the following command:

    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```

4. Review the output. For example:

    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.12.14.623000


    Parameter Name  : DATABASESIZE
    Parameter Value : 346398720


    Parameter Name  : DATABASECAPACITY
    Parameter Value : 118578155520


    Return Status = 0
    ```

5. Disconnect from the Release database using the following command:

    ```cmd
    db2 disconnect WPREL
    ```

6. Connect to the JCR database (`WPJCR`) using the following command:

    ```cmd
    db2 connect to WPJCR user <yourUserid> using <yourPassword>
    ```

7. Retrieve the database size using the following command:

    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```

8. Review the output. For example:

    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.07.43.052000


    Parameter Name  : DATABASESIZE
    Parameter Value : 3045539840


    Parameter Name  : DATABASECAPACITY
    Parameter Value : 121392439296


    Return Status = 0
    ```

9. Disconnect from the JCR database using the following command:

    ```cmd
    db2 disconnect WPJCR
    ```

!!! note
    - The `DATABASESIZE` value is reported in bytes. In this example:
      - The Release database size is approximately **346 MB**.
      - The JCR database size is approximately **3 GB**.
    - These values are from a test server with limited content. Production environments typically have much larger databases.
