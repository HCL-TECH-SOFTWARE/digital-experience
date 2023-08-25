# Configure Timezone

## Helm Chart Value

By default, the timezone of all containers in the Helm-based DX deployment is **UTC**. 

You can configure this by updating the `configuration.containerTimezone` field in the custom values file.

Before applying the changes make sure you understand the implication of updating the timezone in all the applications. 

!!! important
    If you are using **DAM Staging** and/or **WCM Syndication** all deployments must have the same timezone, to prevent issues during synchronization.

See [supported input types](#supported-input-types) for examples of valid timezone formats.

For example, to use **GMT/BST** you need to set the `configuration.containerTimezone` to `Europe/London`
```yaml
configuration:
  containerTimezone: "Europe/London"
```

And then apply the changes using the following command:

`helm upgrade -n <namespace> -f <custom-values.yaml> <prefix> <chart>`


If you want to go back to the **UTC**, you can pass an empty string to the `configuration.containerTimezone` field.

!!! note
    If you passed an invalid timezone, the timezone would default back to **UTC**.

## Effects

Changing the `configuration.containerTimezone` value in the custom values file changes the timezone for **all** containers.

This also means that the application running inside the containers is also affected by this change.
The effects of changing the timezone depend on the application, but some examples are:

- [`TZ` environment variable](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html) is set for all containers. 
- Timestamps of files inside the container reflect the set timezone.
- CRON Jobs of Prereqs Checker follow the new timezone.
  For more information, see the [Prereqs Checker Documentation](../optional-core-prereqs-checker/?h=prereqs#automatic-running-of-checks).
- Timestamps of the logs are currently partially affected depending on each application's logging framework. Some of the logs adapt to the timezone of the container, while others always log UTC timestamps.

## Uniform log timestamps

Currently, depending on the logging solution used inside each container, the logs do not reflect the timezone uniformly. To get uniform log timestamps with `kubectl`, the [`--timestamps` flag](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs) can be passed to `kubectl logs`. This prepends all log outputs with a UTC timestamp.

## Supported Input Types

Some Examples:

- `Europe/London`
- `Australia/Melbourne`
- `America/Phoenix`

You can use any timezone that are in the Timezone DB database. For the comprehensive list please see [this list of time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) you can use values from the **TZ database name** column.
