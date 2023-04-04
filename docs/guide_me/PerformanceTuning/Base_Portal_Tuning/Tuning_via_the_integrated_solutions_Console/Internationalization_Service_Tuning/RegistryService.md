# Registry Service

HCL Portal maintains information about many resource types in its databases. Some of these resources are
replicated into memory for faster access; this is provided by the registry service. This replicated information
will be periodically reloaded from the database, thus picking up any changes which may have been made
on a peer node in a clustered environment.

The registry service allows configuring a reload time, in seconds, for each type of data which it is managing.
In a production environment, we expect this type of information changes very infrequently, so we used
very long reload times for the registry service. These values do not include a size parameter as they are a
full replication of the database.

## How to Set

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP RegistryService → Custom properties

Table: RegistryService.properties
|Parameter Default Value| Value|Used |Definition|
|--|----|--|-----|
|default.interval| 1800| 28800| Reload frequency for any object types not explicitly specified in the file.
|bucket.transformationapplication.interval|600| 28800| Reload frequency for transformation application definitions
|bucket.transformation.interval|600 |28800 |Reload frequency for transformation definitions|