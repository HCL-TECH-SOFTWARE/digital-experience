# Configure Timezone

## Helm Chart Value

You can configure the container time zone in the `values.yaml` file. Before applying the changes make sure you understand the implication of updating the timezone in all the applications. 
!!! important

If you are using **DAM Staging** and/or **WCM Syndication** all deployments must have the same timezone, to prevent issues during synchronization.

Example:

```yaml
incubator:
  configuration:
  # To change the timezone of all the containers. This value should be a valid timezone format (i.e. Australia/Melbourne, Europe/London, America/Phoenix).
  # WARNING: If you are using DAM Staging and/or WCM syndication, then all the deployments must be in same timezone, to prevent issues during synchronisation.
  containerTimezone: "Europe/London"
```

Apply Changes  
`helm upgrade -n <your namespace> apply -f <>`

See [supported input types](#supported-input-types) for examples of valid timezone formats.

## Containers

Changing the `containerTimezone` value in `values.yaml` would change the timezone for the following
application containers:
- Content Composer
- Core 
- DAM Plugins
- DAM
- Design Studio
- Haproxy
- Image Processor
- License Manager
- Open LDAP
- Persistence
- Remote Search
- Ring API
- Runtime Controller

## Supported Input Types

You can use any timezone that are in the Timezone DB database. For the comprehensive list please see: [List of Time Zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

Some Examples:

- `Europe/London`
- `Australia/Melbourne`
- `America/Phoenix`

## Important Note

