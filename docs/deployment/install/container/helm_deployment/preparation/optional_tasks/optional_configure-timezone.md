# Configure Timezone

## Helm Chart Value

By default, time zone of all containers in the Helm-based DX deployment is in **UTC**. 

You can configure this by updating the `containerTimezone` field in the `deploy-values.yaml` file.

Before applying the changes make sure you understand the implication of updating the timezone in all the applications. 

!!! important
    If you are using **DAM Staging** and/or **WCM Syndication** all deployments must have the same timezone, to prevent issues during synchronization.

See [supported input types](#supported-input-types) for examples of valid timezone formats.

For example to use **GMT/BST** you need to set the `containerTimezone` to `Europe/London`
```yaml
incubator:
  containerTimezone: "Europe/London"
```

And then apply the changes using the following command:

`helm upgrade -n <namespace> -f <custom-values.yaml> <prefix> <chart>`


If you wish to go back to the **UTC**, you can just pass an empty string to the `containerTimezone` field.

!!! note
    If you passed an invalid time zone, the time zone would default back to **UTC**.

## Effects

Changing the `containerTimezone` value in `values.yaml` would change the time zone for **all** containers.

This also means that application running inside the containers would also be affected by this change.

Effects of changing the time zone would be dependent on the application, but some examples are:

- Timestamps of the logs
- Timestamps of when was data created/updated
- CRON Jobs would follow the new time zone.

## Supported Input Types

Some Examples:

- `Europe/London`
- `Australia/Melbourne`
- `America/Phoenix`

You can use any timezone that are in the Timezone DB database. For the comprehensive list please see [this list of time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) you can use values from the **TZ database name** column.
