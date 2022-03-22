# Configure the OpenLDAP container image 

Read more about configuring the OpenLDAP container image to the 9.5 container deployment, which is available with HCL Digital Experience 9.5 Container Update release CF181 and later.

OpenLDAP Software is an open-source implementation of the Lightweight Directory Access Protocol. For more information on OpenLDAP, visit [https://www.openldap.org/](https://www.openldap.org/).

The HCL Digital Experience 9.5 Container Update release CF181 and higher includes an OpenLDAP container, and a customization of the operator to deploy the LDAP container and configure the HCL Digital Experience 9.5 Container deployment to use it.

Consult the HCL Digital Experience 9.5 [Container deployment](../install/rm_container_deployment.md) topic for the latest list of HCL Digital Experience 9.5 container deployments available with your HCL Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

**Note:** The OpenLDAP port is not accessible externally on non-OpenShift Kubernetes platforms. This feature is considered for future releases.

## Usage

Deployment of the OpenLDAP container in a production environment is not supported. This optional process of deploying OpenLDAP is solely intended for non-production environments to help one get started with HCL Digital Experience 9.5 container environment deployment. For production environments, use a production-quality LDAP \(e.g. one with security hardening, firewall protection, etc\). For production use, Administrators can choose to deploy their organization's LDAP \(and possibly mirror the contents of that enterprise LDAP back to this newly deployed LDAP\) or connect to an already defined LDAP server or database or custom user registry.

**Note:** To use the OpenLDAP container in a Docker \(non-Kubernetes\) environment, include the following statement in the Docker run command for this image.

Example:

```
docker run -e LOCAL=true -p 1389:1389 -p 1636:1636 -p 1666:1666 -v dx-openldap-certs:/var/dx-openldap/certs -v 
dx-openldap-slapd.d:/var/dx-openldap/etc/openldap/slapd.d -v dx-openldap-ldap:/var/dx-openldap/ldap 
--name dx_openldap hcl/dx/openldap:v1.0.0-release_20200622_1592846796
```

Deployment of the HCL OpenLDAP container with custom parameters using `dxctl` does not configure the OpenLDAP container with custom values. Instead, dxctl deploys and configures OpenLDAP to DX with the default out-of-the-box values.

To work around this limitation, and configure OpenLDAP to DX with custom values, do the following steps:

1.  Deploy DX without OpenLDAP \(set `openldap.enabled:false` in the deployment.properties file\). Ensure the image name, tag, and \(if needed\) the repository values for the your deployment are correct. These can be updated in the next step.
2.  Edit the dx-deployment configmap to add the customization parameters:

    For example:

    ```
    dx.deploy.openldap.country: US
    dx.deploy.openldap.org: HCL
    dx.deploy.openldap.pwd: mycoolnewpwd
    dx.deploy.openldap.suffix: 'dc=dx,dc=hcl,dc=com'
    ```

3.  Set `openldap.enabled: true` in the deployment.properties file.
4.  Save the configmap changes.

Once these steps are completed, the DX container is recreated to run the OpenLDAP configuration task.

For more information on `dxctl`, see the [dxctl](dxtools_dxctl.md) topic.

Video: [Using OpenLDAP with HCL DX 9.5 on Red Hat OpenShift](https://www.youtube.com/watch?v=JLAahtJI_Y4)

## Deployment

To deploy the OpenLDAP image container for use with an HCL Digital Experience 9.5 container deployment, first create or update the dx-deployment config map.

**Note:** The config map MUST be named the same as the deployment. By default, the deployment name is dx-deployment, however if you have modified the name in the git\_v1\_dxdeployment\_cr.yaml, your config map name value must match your DxDeployment name value. For example, use my-custom-deployment for the config map name if your git\_v1\_dxdeployment\_cr.yaml was modified as in the sample below:

```
kind: DxDeployment
metadata:
name: my-custom-deployment
```

The following sample file yaml file deploys the OpenLDAP container with default data and ten \(10\) sample users with the password passw0rd. The LDAP administrator user name is dx\_user with password p0rtal4u. DX is the organization, dc=dx,dc=com is the basedn and US is the country.

```
**kind**: ConfigMap
**apiVersion**: v1
**metadata**:
  **name**: dx-deployment
  **namespace**: your-namespace
**apiVersion**: v1
**data**:
   dx.deploy.openldap.**enabled**: 'true'
   dx.deploy.openldap.**image**: dx-openldap
   dx.deploy.openldap.**tag**: v1.0.0_20200428_1588034443
```

The following sample yaml file deploys an OpenLDAP container using your custom organization, basedn, country and LDAP administrator password. LDAP administrator user name is dx\_user, which cannot be customized at this time.

```
kind: ConfigMap
apiVersion: v1
metadata:
  name: dx-deployment
  namespace: your-namespace
apiVersion: v1
data:
  dx.deploy.openldap.country: US
  dx.deploy.openldap.enabled: 'true'
  dx.deploy.openldap.image: dx-openldap
  dx.deploy.openldap.org: DX
  dx.deploy.openldap.pwd: mycoolnewpwd
  dx.deploy.openldap.suffix: 'dc=dx,dc=hcl,dc=com'
  dx.deploy.openldap.tag: v1.0.0_20200428_1588034443
```

Once the OpenLDAP container is fully deployed, the password entry can be removed from the config map.

Sample users have a password of passw0rd. Additional users can be added or changes made to the data using ldapadd, ldapdelete and ldapmodify commands according to instructions in the [OpenLDAP Administrator Guide](https://www.openldap.org/doc/admin24/guide.md).

Sample ldif file format for adding users:

```
**dn**: cn=my_new_user_group,ou=groups,dc=dx,dc=hcl,dc=com
**objectClass**: groupOfUniqueNames
**cn**: my_new_user_group
**uniqueMember**: uid=newuser1
**uniqueMember**: uid=newuser2

**dn**: uid=newuser1,ou=users,dc=dx,dc=hcl,dc=com
**objectClass**: inetOrgPerson
**objectclass**: top
**objectclass**: person
**objectclass**: organizationalPerson
**cn**: my newuser1
**sn**: newuser1
**uid**: newuser1
**userPassword**: passw0rd
**givenName**: my
**mail**: mynewuser1@dx.hcl.com
**preferredLanguage**: en_us
**title**: engineer
**telephoneNumber**: 9999999999

**dn**: uid=newuser2,ou=users,dc=dx,dc=hcl,dc=com
**objectClass**: inetOrgPerson
**objectclass**: top
**objectclass**: person
**objectclass**: organizationalPerson
**cn**: my newuser2
**sn**: newuser2
**uid**: newuser2
**userPassword**: passw0rd
**givenName**: my
**mail**: mynewuser2@dx.hcl.com
**preferredLanguage**: en_us
**title**: engineer
**telephoneNumber**: 9999999999
```

Copy the ldif file into the OpenLDAP container:

```
kubectl cp ./myldiffile.ldif dx-deployment-openldap-0:/tmp/
```

Execute into the OpenLDAP container and add the users:

```
kubectl exec -it dx-deployment-openldap-0 /bin/bash
```

```
cd /var/dx-openldap/bin
```

```
./ldapadd -h $HOSTNAME -p 1389 -f /tmp/myldiffile.ldif -x -D cn=dx_user,dc=dx,dc=hcl,dc=com -w p0rtal4u -v
```

The dx.deploy.openldap.enabled config map entry tells the HCL Digital Experience 9.5 container operator to deploy the OpenLDAP container and configure the HCL Digital Experience 9.5 deployed container to it.

**Note:** There are three \(3\) volumes self-provisioned for the OpenLDAP environment:

1.  dx-slapd which maps to the /var/dx-openldap/etc/openldap/slapd.d directory within the container and holds the configuration data;
2.  dx-lapd which maps to the /var/dx-openldap/ldap directory within the container and holds the db; and
3.  dx-certs which maps to the /var/dx-openldap/certs directory within the container and holds the OpenLDAP TLS certificates.

If these volumes are not present, the OpenLDAP data is lost once the container is restarted.

Additional configuration options are not currently supported.

If you are adding the OpenLDAP container to an existing HCL Digital Experience 9.5 container deployment, you must stop the deployment and restart it with one \(1\) replica using the removeDx and deployDX scripts. Once fully started, you can safely scale it to N instances.

**Note:** TLS is 'allowed' out of the box with the HCL Digital Experience 9.5 container deployment, but the certificates created with the OpenLDAP container are not imported for use by HCL Digital Experience 9.5 containers.

## Maintenance and Support

HCL Digital Experience will periodically provide updated OpenLDAP container images in the HCL Digital Experience entitlements available for customers from the [HCL Software License Portal](https://www.hcltech.com/software/support/release). HCL Product Support may be contacted with questions regarding this installation procedure. For additional information and support for OpenLDAP topics, please reference [https://www.openldap.org/](https://www.openldap.org/).

Consult the HCL Digital Experience 9.5 [Container deployment](../install/rm_container_deployment.md) page for the latest list of Digital Experience 9.5 container components available with your Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

