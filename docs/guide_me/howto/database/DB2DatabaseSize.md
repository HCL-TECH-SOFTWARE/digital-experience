# Determine Portal database size when using DB2


## Applies to


> HCL Digital Experience 8.5 and later


## Introduction


Use this article to learn how to determine the size of your portal databases when running on DB2.


## Overview


A typical installation creates two portal databases:


- Release database (`WPREL`)
- JCR database (`WPJCR`)

The instructions below show how to check the size of these databases on a Windows server.

## Steps

1. Open a DB2 command window.

2. Connect to the Release database (`WPREL`):

    ```cmd
    db2 connect to WPREL user <yourUserid> using <yourPassword>
    ```
3. Run the following command to get the database size:

    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```
4. Example output:

    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.12.14.623000

    Parameter Name  : DATABASESIZE
    Parameter Value : 346398720

    Parameter Name  : DATABASECAPACITY
    Parameter Value : 118578155520

    Return Status = 0
    ```
5. Disconnect from the database:

    ```cmd
    db2 disconnect WPREL
    ```

6. Connect to the JCR database (`WPJCR`):

    ```cmd
    db2 connect to WPJCR user <yourUserid> using <yourPassword>
    ```

7. Run the same command:

    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```

8. Example output:

    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.07.43.052000

    Parameter Name  : DATABASESIZE
    Parameter Value : 3045539840

    Parameter Name  : DATABASECAPACITY
    Parameter Value : 121392439296

    Return Status = 0
    ```

9. Disconnect from the database:

    ```cmd
    db2 disconnect WPJCR
    ```

!!! note
    - The `DATABASESIZE` value is in bytes.
    - In this example, the Release database size is about **346 MB**, and the JCR database size is about **3 GB**.
    - These values are from a test server with limited content.The production environments may have significantly larger databases.


