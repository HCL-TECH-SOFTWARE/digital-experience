# Configuring the wildcard support in directory search queries 

You can use the wildcard character \(\*\) in directory search queries.

1.  Log on to WebSphere® Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Find the **WP PeopleService** resource.

4.  Click the **WP PeopleService** resource link.

5.  Click **Custom properties**.

6.  Configure the value for the following property:

    -   **pickerWildCardSearchEnable**

        Controls whether to append the wildcard character \(\*\) to search query or not. The default value is true.

7.  Restart the HCL Digital Experience server to reflect the changes.


**Parent topic:**[Directory Search ](../collab/i_coll_r_por_dirs.md)

