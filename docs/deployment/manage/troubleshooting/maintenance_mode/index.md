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

## Configuration

In your `custom-values.yaml` you can define the state of the maintenance mode on a per application basis. This allows you to limit the scope of your actions.

Adjust the `maintenanceMode` section accordingly and apply the new configuration using the `helm upgrade` command.

## Usage with DX Core

Since 