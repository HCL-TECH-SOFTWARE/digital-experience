# Transfer HCL Digital Experience 9.5 container default database to IBM DB2

HCL Digital Experience 9.5 installs a copy of Derby as the default database. Administrator users can follow these steps to transfer the default database configuration detail to IBM DB2, if preferred for use as the relational database for HCL Digital Experience 9.5 container deployment data.

The directions closely follow the [Digital Experience database transfer steps](../config/cw_db_transfer-db2.md) provided for deployments to supported "on-premises" platforms, such as Windows, Linux, and AIX. The unique steps that account for differences in these instructions for use with an HCL Digital Experience 9.5 Docker container deployment as opposed to an on-premises Digital Experience installation are highlighted.

The on-premises based HCL Digital Experience database transfer instructions can be viewed in this topic: [DB2 worksheet: Transfer to multiple databases](../config/cw_db_ws_db2_multidb.md).

These container deployment instructions cover the transfer of the default Derby database running on an HCL Digital Experience Container Update CF18 container image to an IBM DB2 Enterprise Version 11.1.0.0 database running on a CentOS Linux release 7.71908 server. The IBM DB2 11.5 Standard and Enterprise database is also supported for these procedures. In these instructions, the IBM DB2 database is installed to a supported on-premises platform \(see [IBM DB2 System Support requirements for a list of supported platforms](https://www.ibm.com/support/pages/system-requirements-ibm-db2-linux-unix-and-windows)\). The HCL Digital Experience 9.5 Docker container is deployed to a supported Docker or Kubernetes platform. The container version deployed in this example is Docker CE version 19.0.3.8.

**Video**: [HCL Digital Experience - Perform a Database Transfer on HCL Portal 9.5](https://www.youtube.com/watch?v=_OnxF4l5l7A&feature=youtu.be)

Prerequisites

1.  The HCL Digital Experience 9.5 container image is deployed, and loaded to your Docker repository using the following command:

    ```
    docker load < hcl-dx-core-image-v95_CF18_20200427-2055.tar.gz
    ```

    See the HCL Digital Experience 9.5 topic [Deployment](deployment.md) for instructions and latest list of HCL Digital Experience 9.5 Container image and file names.

2.  IBM DB2 is installed on an on-premises server with a DNS hostname that is available to the HCL Digital Experience 9.5 deployed container.

## Start the HCL Digital Experience 9.5 Container in Docker

Execute the following command to start the DX 9.5 container:

```
docker run -d --add-host {database DNS name}:{database IP address} -p 10025-10045:10025-10045 -p 
10200-10210:10200-10210 -v '{directory on the Docker host for DX container profile}':'/opt/HCL/wp_profile' {your repo name}:{your tag name} 
```

**Note:**

-   An `--add-host` entry needs to be made to insert the DNS name of the IBM DB2 database server into the /etc/hosts file in the container running the Digital Experience 9.5 container. If, and only if, the DNS name of the DB2 server is already in a named server available to the container, then the --add-host parameter would not be needed.
-   The ports for the Digital Experience 9.5 container \(100025-10045\) need to be mapped as well as the ports using by the Configuration Wizard. The Configuration Wizard is used to manage the transfer of the database. The Configuration Wizard uses ports in the range of 10200-10202.
-   The HCL Digital Experience 9.5 container persists the profile information across restarts. This is persisted on the Docker host as `{directory on docker host for DX container profile}` in the `run` command above. The container will map /opt/HCL/wp\_profile to this directory on the docker via the `-v` command.
-   You need to specify the Docker repository and tag name as the reader has loaded the HCL Digital Experience container image into their docker repository.

    When this docker `run` command is executed, ensure time is allocated to check the profile as well as initialize the HCL Digital Experience 9.5 container instance. One can ensure that the HCL Digital Experience 9.5 container deployment is ready by "tail"-ing the file in the container located at /opt/HCL/wp\_profile/logs/HCL Portal and HCL Web Content Manager/SystemOut.log. When the file displays the following message, the HCL Digital Experience 9.5 container instance is initialized:

    ```
    …open for e- business
    ```

    One can access this file \(as well as all others in the running container\) via the following command:

    ```
    docker exec -it {container name} bash
    ```


## Transferring the Database

First, ensure that your HCL Digital Experience 9.5 docker container can access the IBM DB2 on-premises platform server. Using the following command, one can simply "ping" the DNS name of the IBM DB2 database server and verify that it answers:

```
docker exec -it {container name} bash
```

If this is not successful, consult with your platform administrator for other methods to debug the network issues between a Docker container and Servers running external to Docker in your environment.

Next, once connectivity is established, follow the directions for using the Configuration Wizard from the traditional \(on-premises platform-based\) [Digital Experience database transfer steps](../config/cw_db_transfer-db2.md) to transfer the data from the default Derby database and configure the target IBM DB2 database server for use with the HCL Digital Experience 9.5 Docker container deployment.

One can access the Configuration Wizard from a browser on the HCL Digital Experience 9.5 container deployment via the URL http://\{docker host server\}:10200/hcl/wizard.

Proceed to the [Digital Experience database transfer steps](../config/cw_db_transfer-db2.md) topic section [Set Up a Stand-alone Server - Database Transfer](../config/cw_db_ws_db2_singledb.md).

Specify the fully qualified DNS name of the database server as set above in the `--add-host` directive in the `docker run` command.

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

