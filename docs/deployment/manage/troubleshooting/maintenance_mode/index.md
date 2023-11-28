# Maintenance Mode

The HCL Digital Experience Helm Charts provide the capability to start application containers in a maintenance mode.

This can be useful to debug issues that occur during the containers lifecycle, especially during the startup phase.

## Effects

The applications that have maintenance mode enabled will see the following effects:

- The application containers of the Pods will remain `ready` and `live` at all time, independently of the actual application status
- The startup routine of the application is skipped, the container will not execute its main entrypoint routines
- The application itself is not started, resulting in the container to be basically idle until manual intervention

These effects ensure that:

- Kubernetes will always allow for traffic routing into the affected application containers, since the `ready` probe is always true
- Kubernetes will not restart Pods due to containers not being `live`

!!! warning
    The affected application will not start without manual intervention. Be aware that enabling maintenance mode will impact application availability for end-users.

## Configuration

In your `custom-values.yaml` you can define the state of the maintenance mode on a per application basis. This allows you to limit the scope of your actions.

Adjust the `maintenanceMode` section accordingly.

Sample configuration:

```yaml
# Allows to start a Pod and its containers in maintenance mode.
# Pods will not perform a regular execute of the application but will remain idle
# This allows for debugging inside the containers if required, e.g. if configuration fixes are required
maintenanceMode:
    contentComposer: false
    # Enabling maintenance mode for DX Core
    core: true
    damPluginGoogleVision: false
    digitalAssetManagement: false
    imageProcessor: false
    openLdap: false
    persistenceConnectionPool: false
    persistenceNode: false
    remoteSearch: false
    ringApi: false
    runtimeController: false
    haproxy: false
    licenseManager: false
    damPluginKaltura: false
```

You then need to apply the changes by using `helm upgrade`:

```sh
# Using helm upgrade to apply the changes
# Adjust release name, reference to the helm charts and path to your custom-values.yaml accordingly
helm upgrade -n NAMESPACE dx-deployment -f custom-values.yaml ./hcl-dx-deployment.tgz
```

## Usage with DX Core

The DX Core application will perform certain actions during its regular startup routine, that will not be executed when maintenance mode is enabled.
In order to start the DX Core JVM in maintenance mode, you will need to perform the following actions:

```sh
# Connect into the running container
# Please adjust namespace and pod name to match your deployment
kubectl exec -it -n NAMESPACE dx-deployment-core-0 -c core -- /bin/bash

# Navigate to the profiles directory that is stored within the mounted persistent volume
cd /opt/HCL/profiles

# Display the existing volumes
ls -l
# total 8
# drwxr-xr-x. 22 dx_user dx_users 4096 Nov 28 06:45 cw_prof
# drwxr-xr-x. 30 dx_user dx_users 4096 Nov 28 08:26 prof_95_CF217

# Perform a symlink of your desired profile to the wp_profile directory
# Make sure you are selecting the right profile that matches your currently installed / active version
ln -s /opt/HCL/profiles/prof_95_CF217 /opt/HCL/wp_profile

# You can now attempt to start the DX Core JVM
/opt/HCL/wp_profile/bin/startServer.sh WebSphere_Portal
```

Please be aware that if the container is restarted by Kubernetes, this symlink will disappear.
