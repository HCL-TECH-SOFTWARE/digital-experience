# Configuration

!!!warning
    Please ensure these configuration properties are in sync with the release version of People Service Helm chart.

## Image configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| image.pullPolicy | enum | `"IfNotPresent"` | People Service image pull policy. Accepts: `Always`, `Never`, `IfNotPresent` |
| image.imagePullSecrets | array | `[]` | People Service image pull secrets used for accessing the image registry |
| image.registry | string | `"quintana-docker.artifactory.cwp.pnp-hcl.com"` | People Service container image registry |
| image.repository | string | `"dx-build-output/people-service/people-service"` | People Service container image repository |
| image.tag | string | `"latest"` | People Service container image tag |

## Application configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| configuration.production | boolean | `true` | Running in production mode or not |
| configuration.authStrategy | string | `"none"` | Authentication strategy, possible values are `OIDC`, `DX` and `none` |
| configuration.uniqueUserIdentifier | string | `"guid"` | Identified that uniquely identifies the user |
| configuration.integration.dx | boolean | `false` | Indicates if DX integration is enabled |
| configuration.jwt.tokenExpiration | int | `3600000` | JWT token expiration time |
| configuration.jwt.secret | string | `""` | JWT secret |
| configuration.jwt.existingSecret | string | `""` | Existing secret for JWT secret |
| configuration.jwt.existingSecretJwtSecretKey | string | `""` | Existing secret key for jwtSecret, if not specified, defaults to "jwtSecret" |
| configuration.oidc.issuer | string | `""` | Issuer url |
| configuration.oidc.clientId | string | `""` | Client ID |
| configuration.oidc.clientSecret | string | `""` | Client secret |
| configuration.oidc.redirectURI | string | `""` | Redirect uri |
| configuration.oidc.scopes | string | `"openid profile email"` | OIDC scopes |
| configuration.oidc.existingSecret | string | `""` | Existing secret for OIDC configuration |
| configuration.oidc.existingSecretClientSecretKey | string | `""` | Existing secret key for clientSecret, if not specified, defaults to "clientSecret" |
| configuration.dx.sessionCookieName | string | `"JSESSIONID"` | Session cookie name |
| configuration.dx.userValidationEndpoint | string | `"/auth/validate"` | User validation endpoint, that identifies if the user is still authenticated |
| configuration.dx.currentUserAccessEndpoint | string | `"/dxmyrest/access/current-user?resourceId=wps.USERS"` | Current user access endpoint, that identifies the current user's access level information. This information is used to determine the user's role `Privileged`, `Authenticated` or `Unauthenticated` |
| configuration.dx.userAccessPrivilegedRoles | string | `"Administrator,Privileged User,Editor"` | Comma separated list of privileged roles |
| configuration.dx.cacheTTL | int | `3600000` | Cache time to live for current user access endpoints resopnse |
| configuration.dx.cacheMaxEntries | int | `1000` | Maximum number of entries in the cache that stores the user's role |
| configuration.dx.portletPageContextRoot | string | `"/wps/myportal/Practitioner/PeopleService"` | Context root for the People Service portlet page |
| extraEnvVars | array | `[]` | Additional environment variables for the container |

## Networking configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| networking.ssl.enabled | boolean | `false` | Indicates if the application is accessible on http or https. |
| networking.host | string | `""` | Public qualified host name. Example: "example.com". If `networking.ssl.enabled` is true, this will be prefixed with `https://` or `http://` otherwise. |
| networking.contextRoot.api | string | `"/people/api/v1"` | Context root for the API |
| networking.contextRoot.ui | string | `"/people/ui"` | Context root for the UI |
| networking.ingress.enabled | boolean | `false` | Enable ingress for the application |
| networking.ingress.ingressClassName | string | `""` | Class name for the ingress |
| networking.ingress.pathType | string | `"Prefix"` | Path type for the ingress |
| networking.ingress.autoGenerateSelfSignedCert | boolean | `false` | Enable auto generation of self signed certificate for the ingress |
| networking.ingress.existingSecret | string | `""` | Existing secret for TLS certificate |
| networking.ingress.annotations | object | `{"nginx.ingress.kubernetes.io/proxy-body-size":"50m"}` | Annotations for Ingress route |

## LDAP configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| ldap.enabled | boolean | `false` | Indicates if LDAP is enabled. If enabled ensure that the values for required parameter `ldap.host` is provided. |
| ldap.host | string | `""` | LDAP server URL |
| ldap.bindDn | string | `"cn=admin,dc=dx,dc=com"` | LDAP Bind dn |
| ldap.bindPassword | string | `"password"` | LDAP Bind password |
| ldap.searchBase | string | `"ou=users,dc=dx,dc=com"` | LDAP search base |
| ldap.searchFilterAllUsers | string | `"(objectClass=inetOrgPerson)"` | LDAP search filter for all users |
| ldap.searchFilterUser | string | `"(&(objectClass=inetOrgPerson)(uid=*))"` | LDAP search filter for a specific user |
| ldap.searchScope | string | `"sub"` | LDAP search scope, possible values are `base`, `one`, `sub` |
| ldap.searchAttributes | array | `["dn","uid","givenName","sn","mail","manager","ou","displayName","telephoneNumber","street","l","st","postalCode","preferredLanguage","title","description","jpegPhoto"]` | LDAP search attributes |
| ldap.userImageAttribute | string | `"jpegPhoto"` | LDAP user image attribute |
| ldap.attributeMapping | object | `{"city":"l","displayName":"displayName","dn":"dn","email":"mail","firstName":"givenName","guid":"uid","language":"preferredLanguage","lastName":"sn","managerId":"manager","organization":"ou","phone":"telephoneNumber","professionalSummary":"description","role":"title","state":"st","streetAddress":"street","zipCode":"postalCode"}` | LDAP attribute mapping |
| ldap.existingSecret | string | `""` | Existing secret for LDAP configuration |
| ldap.existingSecretBindPasswordKey | string | `""` | Existing secret key for bindPassword, if not specified, defaults to "bindPassword" |

## User synchronization configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| userSynchronization.enabled | boolean | `false` | Indicates if user synchronization is enabled |
| userSynchronization.strategy | string | `"sync"` | User synchronization strategy, possible values are `sync`, `none` |
| userSynchronization.cronSchedule | string | `"0 */4 * * * *"` | Cron schedule for user synchronization |
| userSynchronization.preventConcurrentExecution | boolean | `true` | Indicates if user synchronization is run in mutual exlusive mode |

## External database configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| externalDatabase.host | string | `""` | PostgreSQL host |
| externalDatabase.port | int | `5432` | PostgreSQL port |
| externalDatabase.user | string | `""` | PostgreSQL user |
| externalDatabase.database | string | `""` | PostgreSQL database |
| externalDatabase.password | string | `""` | PostgreSQL password |
| externalDatabase.existingSecret | string | `""` | Existing secret for external PostgreSQL configuration |
| externalDatabase.existingSecretUserKey | string | `""` | Existing secret key for user, if not specified, defaults to "db-user" |
| externalDatabase.existingSecretPasswordKey | string | `""` | Existing secret key for password, if not specified, defaults to "db-password" |

## Container ports configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| containerPorts.http | int | `3000` | Port exposed by the container for HTTP traffic. |

## Service configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| service.type | string | `"ClusterIP"` | Service type, accepts: `ClusterIP`, `NodePort`, `LoadBalancer` |
| service.ports.http | int | `3000` | Port exposed by the service for HTTP traffic. |
| service.ports.nodePort | int | `30000` | Port exposed by the service when `service.type` is set to `NodePort`. |

## Node configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| nodeSelector | object | `{}` | Node labels for pod assignment. Evaluated as a template. |

## Logging configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| logging.level | string | `"DEBUG:people-service:*"` | Log level for the application |
| logging.path | string | `"/data/people/logs"` | Log path for the application |
| logging.sidecar.maintenanceModeEnabled | string | `"false"` | Enable or disable maintenance mode for the sidecar |
| logging.sidecar.audit | object | `{"enabled":false}` | Configuration for the audit logging |
| logging.sidecar.audit.enabled | boolean | `false` | Enable or disable audit logging |
| logging.sidecar.sync | object | `{"enabled":false}` | Configuration for the sync logging |
| logging.sidecar.sync.enabled | boolean | `false` | Enable or disable sync logging |
| logging.sidecar.image.pullPolicy | enum | `"IfNotPresent"` | logging sidecar image pull policy. Accepts: `Always`, `Never`, `IfNotPresent` |
| logging.sidecar.image.registry | string | `"quintana-docker.artifactory.cwp.pnp-hcl.com"` | logging sidecar container image registry |
| logging.sidecar.image.repository | string | `"dx-build-output/common/logging-sidecar"` | logging sidecar container image repository |
| logging.sidecar.image.tag | string | `"v1.0.0_20240506-1523_pjs_develop"` | logging sidecar container image tag |

## Resource configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| resources.requests.cpu | string | `"250m"` | CPU request for the pod |
| resources.requests.memory | string | `"256Mi"` | Memory request for the pod |
| resources.limits.cpu | string | `"1000m"` | CPU limit for the pod |
| resources.limits.memory | string | `"1024Mi"` | Memory limit for the pod |

## Labels and Annotations configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| annotations.service | array | `nil` | Service annotations |
| annotations.pod | array | `nil` | Pod annotations |
| labels.service | array | `nil` | Service labels |
| labels.pod | array | `nil` | Pod labels |

## Scaling configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| scaling.replicaCount | int | `1` | The default amount of replicas for the application |
| scaling.horizontalPodAutoScaler.enabled | boolean | `false` | Enable autoscaling for People Service deployment |
| scaling.horizontalPodAutoScaler.minReplicas | number | `1` | Minimum number of replicas to scale back |
| scaling.horizontalPodAutoScaler.maxReplicas | number | `3` | Maximum number of replicas to scale out |
| scaling.horizontalPodAutoScaler.targetCPUUtilizationPercentage | number | `75` | Target CPU utilization percentage |
| scaling.horizontalPodAutoScaler.targetMemoryUtilizationPercentage | number | `80` | Target Memory utilization percentage |

## Persistence Volume configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| volumes.data.storageClassName | string | `"manual"` | PVC Storage Class for People Service data volume |
| volumes.data.requests.storage | string | `"1Gi"` | PVC Storage Request for People Service data volume |
| volumes.data.selector | object | `{}` | Selector to match an existing Persistent Volume (this value is evaluated as a template) |
| volumes.data.volumeName | string | `""` | Name of the volume to bind to the PVC |
| volumes.customPVCs | object | `[]` | List of optional additional PVCs for customer applications Each list element must include a unique "name", one or more "accessModes" from the options ReadWriteOnce, ReadOnlyMany or ReadWriteMany, a "mountPath" specifying where in the core container it should be mounted, a "storageClassName" and a size in "requests/storage". It may also optionally include a "selector" section to select specific PVs based on their labels. It may also optionally include a "volumeName" to select a specific PV. |

## Probes configuration

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| probes.livenessProbe.enabled | boolean | `true` | Enable livenessProbe on containers |
| probes.livenessProbe.failureThreshold | int | `10` | Number of times the probe should be retried before marking the container as unhealthy |
| probes.livenessProbe.initialDelaySeconds | int | `30` | Number of seconds after the container has started before liveness probes are initiated |
| probes.livenessProbe.periodSeconds | int | `30` | How often (in seconds) to perform the probe |
| probes.livenessProbe.successThreshold | int | `1` | Minimum consecutive successes for the probe to be considered successful after having failed |
| probes.livenessProbe.timeoutSeconds | int | `15` | Number of seconds after which the probe times out |
| probes.readinessProbe.enabled | boolean | `true` | Enable readinessProbe on containers |
| probes.readinessProbe.failureThreshold | number | `3` | Number of times the probe should be retried before marking the container as unhealthy |
| probes.readinessProbe.initialDelaySeconds | number | `30` | Number of seconds after the container has started before readiness probes are initiated |
| probes.readinessProbe.periodSeconds | number | `15` | How often (in seconds) to perform the probe |
| probes.readinessProbe.successThreshold | number | `1` | Minimum consecutive successes for the probe to be considered successful after having failed |
| probes.readinessProbe.timeoutSeconds | number | `10` | Number of seconds after which the probe times out |

## Environment variables

The environment variables are used to configure the internal behavior of the people service. They are not exposed via the helm chart and are set in the `custom-values.yaml` file via the [`extraEnvVars`](#application-configuration) property.

### General settings

| Key | Default | Description |
|-----|---------|-------------|
| NLS_DIRECTORY | `/data/people/nls` | Directory for NLS files that extend the base language strings. This usually is a directory that is mounted as a volume. |
| DX_INTEGRATION | `true` | Indicates if DX integration is enabled |

### User mapping and provisioning settings

| Key | Default | Description |
|-----|---------|-------------|
| USER_OIDC_CLAIMS_MAPPING | `""` | OIDC claims mapping for user data. This expects a list of comma separated key-value pairs, where the key is the attribute identified in the OIDC claim and the value is the corresponding user data attribute. |
| USER_DIRECTORIES | `""` | Comma separated list of user directories to use. This relates specifically to additional user directories that are used for user data aggregation in addition to the primary LDAP-based user directory. |
| USER_AGGREGATION_STRATEGY | `none` | User aggregation strategy, possible values are `sync`, `none` |
| USER_SYNCHRONIZATION_CRON_SCHEDULE | `""` | Cron schedule for user synchronization job |

#### User directory settings

The user directories relate to the additional user directories that are used for user data aggregation in addition to the primary LDAP-based user directory. For more information, see the section about [custom RESTful directories](../administration/user-provisioning/custom-restful-directories.md).

They are declared by their ID via the `USER_DIRECTORIES` environment variable. For each provided directory, the base URL and API key are set via the `USER_DIRECTORY_<ID>_BASE_URL` and `USER_DIRECTORY_<ID>_API_KEY` environment variables.

| Key | Default | Description |
|-----|---------|-------------|
| USER_DIRECTORY_<ID>_BASE_URL | `""` | Base URL for the custom user directory with the ID `<ID>`. |
| USER_DIRECTORY_<ID>_API_KEY | `""` | API key for the custom user directory with the ID `<ID>`. |

### User attribute settings

| Key | Default | Description |
|-----|---------|-------------|
| PROFILE_READONLY_FIELDS | `""` | Comma separated list of fields that are read-only for the user. |
| CUSTOM_FIELDS_LIMIT | `2` | Limit for the number of custom fields that can be added to the user profile. |
| CUSTOM_FIELDS_BASE | `""` | Base custom fields for the user profile. This is a comma separated list of custom fields that are added to the user profile. |
