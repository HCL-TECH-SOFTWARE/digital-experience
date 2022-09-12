# Configuring a cloned file system

A cloned file system does not require the profile directory to be read-only. Read-only profile directories can cause some limitations with portlets and other applications that try to write to the profile. A cloned file system alleviates this limitation. Nodes in a cloned system do not require that the host name be set to localhost. Therefore, there is no issue related to remote Enterprise Java Beans and other applications that require a real host name.

A cloned file system is a file system that is identical for the farm master and the farm nodes. When you configure a cloned file system, you must consider how to automate the sync between file system across all the servers in the farm. There are many techniques that you can use to sync the file system; however, the underlying requirement is the same. Except for the host name and the temp space area, all of the file systems in the farm are identical.

The following steps are a high-level look at what needs to be done when cloning the farm master:

1.  Install the farm master and set up the support server. Go to [Installing the Farm Master and setting up the support server](set_portal_farm_master.md#) for information.
2.  Create the base directory on the farm worker server.
3.  Copy the base directory files from the farm master to the base directory on the farm worker server.
4.  Create the database directory on the farm worker server.
5.  Copy the database directory files from the farm master to the database directory on the farm worker server.
6.  Clean the temporary space on the farm work server.
7.  Set the host name.

Typically, the cloned file system path is in the following directory:

-   AIX®: /usr/IBM/WebSphere
-   Linux™: /opt/IBM/WebSphere
-   IBM® i: /QIBM/IBM/WebSphere
-   Windows™: C:\\IBM\\WebSphere

The following steps use rsync as a cloning technique example:

1.  Install the farm master and set up the support server. Go to [Installing the Farm Master and setting up the support server](set_portal_farm_master.md#) for information.

    Before you set up a new Farm Worker, let's assume the following information:

    -   The Farm Master URL is master.example.com.
    -   The IBM WebSphere® Application Server, HCL Digital Experience, and portal profiles are in the /opt/IBM/WebSphere directory.
    -   The Farm Master is configured with a DB2® database. The database is in the /home/db2inst1/sqllib/java directory on the Farm Master.
    -   The host name is for the Farm Worker is worker1.example.com.
    -   The node name for the farm nodes is MYNODE.
2.  On the new Farm Worker server, run the following command to create the base directory:

    mkdir -p /opt/IBM/WebSphere

3.  Run the following commands to copy the base directory files from the Farm Master:

    ```
    rsync -az --delete --stats root@master.example.com:/opt/IBM/WebSphere/wp_profile/ /opt/IBM/WebSphere/wp_profile/
    rsync -az --delete --stats root@master.example.com:/opt/IBM/WebSphere/PortalServer/ /opt/IBM/WebSphere/PortalServer/
    rsync -az --delete --stats root@master.example.com:/opt/IBM/WebSphere/AppServer/ /opt/IBM/WebSphere/AppServer/
    rsync -az --delete --stats root@master.example.com:/opt/IBM/WebSphere/ConfigEngine/ /opt/IBM/WebSphere/ConfigEngine/
    ```

4.  On the Farm Worker server, run the following command to create the database directory:

    mkdir -p /home/db2inst1/sqllib/java

5.  Run the following command to copy the database files from the Farm Master:

    ```
    rsync -az --delete --stats root@master.example.com:/home/db2inst1/sqllib/java/ /home/db2inst1/sqllib/java/
    ```

6.  Run the following command to clean the temporary space on the farm work server:

    ```
    rm -rf /opt/IBM/WebSphere/wp_profile/tranlog/
    rm -rf /opt/IBM/WebSphere/wp_profile/temp/
    rm -rf /opt/IBM/WebSphere/wp_profile/wstemp/
    ```

7.  Run the following command to set the host name:

    ```
    /opt/IBM/WebSphere/wp_profile/bin/wsadmin.sh -conntype NONE -c "\$AdminTask changeHostName {-nodeName MYNODE -hostName worker1.example.com}"
    
    echo WasRemoteHostName=worker1.example.com > /var/wkplc.properties
    echo WpsHostName=worker1.example.com >> /var/wkplc.properties
    /opt/IBM/WebSphere/wp_profile/ConfigEngine/ConfigEngine.sh -DparentProperties=/var/wkplc.properties -DSaveParentProperties=true localize-clone action-clean-scheduled-tasks
    ```



