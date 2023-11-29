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

The affected application will not start without manual intervention. Be aware that enabling maintenance mode will impact application availability for end-users.

Please be aware that depending applications will be affected too, since they will not be able to communicate with the application in maintenance mode until you either manually start it or turn off maintenance mode again.

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
helm upgrade -n <namespace> <release-name> -f custom-values.yaml ./hcl-dx-deployment.tgz
```

After running the helm command, you will see an explicit mention of your maintenance mode changes in the command response:

```sh
# Using helm upgrade to apply the changes
# Adjust release name, reference to the helm charts and path to your custom-values.yaml accordingly
helm upgrade -n <namespace> <release-name> -f custom-values.yaml ./hcl-dx-deployment.tgz

# Release "dx-deployment" has been upgraded. Happy Helming!
# NAME: dx-deployment
# LAST DEPLOYED:
# NAMESPACE: dxns
# STATUS: deployed
# REVISION: 2
# TEST SUITE: None
# NOTES:
# Installation of HCL DX 95_CF217 done.

# See https://opensource.hcltechsw.com/digital-experience/latest/platform/kubernetes/overview/ for further information.
# ATTENTION: Maintenance mode is enabled for Pods: Core
```

If you check the logs of the affected application, you will also notice a message regarding the maintenance mode:

```sh
# Checking the logs of a Pod using kubectl
# Please adjust namespace and pod name to match your deployment
kubectl logs -n <namespace> <release-name>-core-0 -c core

# Deployment type is: helm
# Maintenance mode is: true
# Listening for SIGTERM
# Maintenance mode is enabled. This mode solely starts the container without any processes within it.
```

If you come from a state where the application that you want to set into maintenance mode is in a unhealthy state already, you may need to delete the corresponding Pod for the changes to take effect.  
This is due to the fact that Kubernetes will not apply a new configuration to Pods of a StatefulSet until the previous configuration has successfully started.

In case you need to delete a Pod that is still in a broken state, though you have enabled the maintenance mode, you can use the following command as reference:

```sh
# Delete the corresponding Pod using kubectl
# Please adjust namespace and pod name to match your deployment

kubectl delete pod -n <namespace> <release-name>-core-0
```

## Usage with DX Core

The DX Core application will perform certain actions during its regular startup routine, that will not be executed when maintenance mode is enabled.
In order to start the DX Core JVM in maintenance mode, you will need to perform the following actions:

!!!important
    Make sure you are selecting the right profile that matches your currently installed / active version

```sh
# Connect into the running container
# Please adjust namespace and pod name to match your deployment
kubectl exec -it -n <namespace> <release-name>-core-0 -c core -- /bin/bash

# Navigate to the profiles directory that is stored within the mounted persistent volume
cd /opt/HCL/profiles

# Display the existing volumes
ls -l
# total 8
# drwxr-xr-x. 22 dx_user dx_users 4096 Nov 28 06:45 cw_prof
# drwxr-xr-x. 30 dx_user dx_users 4096 Nov 28 08:26 prof_95_CF217

# Perform a symlink of your desired profile to the wp_profile directory
# Make sure you are selecting the right profile that matches your currently installed / active version
ln -s /opt/HCL/profiles/prof_95_CF217/ /opt/HCL/wp_profile

# You can now attempt to start the DX Core JVM
/opt/HCL/wp_profile/bin/startServer.sh WebSphere_Portal

# ADMU0116I: Tool information is being logged in file
#            /opt/HCL/wp_profile/logs/WebSphere_Portal/startServer.log
# ADMU0128I: Starting tool with the wp_profile profile
# ADMU3100I: Reading configuration for server: WebSphere_Portal
# ADMU3200I: Server launched. Waiting for initialization status.
# ADMU3000I: Server WebSphere_Portal open for e-business; process id is 2233
```

Please be aware that if the container is restarted by Kubernetes, this symlink will disappear.
