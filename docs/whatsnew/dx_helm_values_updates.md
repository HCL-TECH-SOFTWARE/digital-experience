# DX Helm values updates

This page summarizes Helm values updates across DX releases. Each table below details changes introduced in a specific release, including added properties, removed properties, and properties with changed defaults. Use this as a reference when upgrading to ensure compatibility and to guide configuration updates.

### CF230

**Added Keys:**

| Key | Default Value |
|-----|---------------|
| networking.haproxy.customHeader | [] |
| networking.haproxy.deleteHeader | [] |
| incubator.configuration.searchMiddleware.version | v2 |
| incubator.configuration.searchMiddleware.contextRoot.api | /dx/api/search |
| incubator.configuration.searchMiddleware.contextRoot.pickerUI | /dx/ui/search/picker |

**Removed Keys:**

None

**Changed Values:**

None

### CF229

**Added Keys:**

| Key | Default Value |
|-----|---------------|
| configuration.persistence.ssl | false |
| incubator.configuration.persistence.dbInitByDam | true |
| incubator.configuration.digitalAssetManagement.newDbManagement | false |

**Removed Keys:**

| Key |
|-----|
| hclFlexnetID |
| hclFlexnetURL |
| networking.licenseCertSecret |
| security.licenseManager.licenseManagerUser |
| security.licenseManager.licenseManagerPassword |
| security.licenseManager.customLicenseManagerSecret |
| security.licenseManager.customFlexnetLicenseManagerPrivateKeySecret |
| configuration.licenseManager.licenseServerId |
| configuration.licenseManager.licenseFeatureNameWithVersion |

**Changed Values:**

| Key | Old Value | New Value |
|-----|-----------|-----------|
| incubator.configuration.digitalAssetManagement.enableRootCollectionSort | false | true |
| peopleservice.networking.contextRoot.api | dx/api/people/v1 | /dx/api/people/v1 |
| peopleservice.networking.contextRoot.ui | dx/ui/people | /dx/ui/people |

### CF228

**Added Keys:**

| Key | Default Value |
|-----|---------------|
| networking.haproxy.affinityCookieDomain | [] |
| configuration.digitalAssetManagement.maxBulkUploadWithoutWarning | 100 |
| configuration.runtimeController.leaderElection.leaseExpiryTime | 15 |
| configuration.runtimeController.leaderElection.leasePollingTime | 5 |
| configuration.webEngine.transientUserRegistry.enabled | false |
| configuration.webEngine.wabEnabled | false |
| incubator.configuration.digitalAssetManagement.enableRootCollectionSort | false |

**Removed Keys:**

None

**Changed Values:**

| Key | Old Value | New Value |
|-----|-----------|-----------|
| probes.remoteSearch.readinessProbe.failureThreshold | 120 | 2 |
| probes.remoteSearch.readinessProbe.periodSeconds | 60 | 30 |
| configuration.licenseManager.licenseServerUri | - | https://api.hcltechsw.com |

### CF227

**Added Keys:**

| Key   | Default Value  |
|-------|----------------|
|   scaling.replicas.runtimeController | 1 |
|   networking.haproxy.alwaysEnableSessionAffinity   | false |
|   configuration.digitalAssetManagement.aclCacheTtl | 10 |
|   configuration.digitalAssetManagement.authCacheTtl  | 600  |
|   configuration.digitalAssetManagement.nodeRequestTimeoutInMinutes  | 15 |
|   incubator.configuration.dxPicker.renderPickerSearch  | false |

**Removed Keys:**

None

**Changed Values:**

| Key   | Old Value  | New Value  |
|-------|------------|------------|
| configuration.webEngine.dbTypeProperties.db2.DbLibrary | /opt/openliberty/wlp/usr/svrcfg/bin/db2jcc4.jar  | /opt/openliberty/wlp/usr/svrcfg/templates/jars/db2/db2jcc4.jar |

### CF226

**Added Keys:**

| Key   | Default Value  |
|-------|----------------|
|   configuration.digitalAssetManagement.allowEditorToCreateCollections | true  |
|   configuration.persistence.host   | "" |
|   configuration.webEngine.customKeystoreSecrets | {} |
|   configuration.webEngine.customTruststoreSecrets  | {}  |
|   peopleservice.configuration.search.middleware.enabled   | false |
|   peopleservice.configuration.search.contentSourceId    | "" |

**Removed Keys:**

None

**Changed Values:**

| Key   | Old Value  | New Value  |
|-------|------------|------------|
| logging.damPluginGoogleVision.level.0  | api:server-v0:*=info  | api:server-v1:*=info |
| logging.damPluginKaltura.level.0  | api:server-v0:*=info  | api:server-v1:*=info |
| configuration.digitalAssetManagement.pluginsConfiguration.kaltura-plugin.url  | http://RELEASE_NAME-dam-plugin-kaltura:DAM_HTTP_PORT/dx/api/kaltura/v0/plugin  | http://RELEASE_NAME-dam-plugin-kaltura:DAM_HTTP_PORT/dx/api/kaltura/v1/plugin |
| configuration.digitalAssetManagement.pluginsConfiguration.google-vision.url | http://RELEASE_NAME-dam-plugin-google-vision:DAM_HTTP_PORT/dx/api/google-vision/v0/googleVisionAI  | http://RELEASE_NAME-dam-plugin-google-vision:DAM_HTTP_PORT/dx/api/google-vision/v1/googleVisionAI |

### CF225

**Added Keys:**

| Key   | Default Value  |
|-------|----------------|
|   volumes.webEngine.customPVCs    |       []         |
|   probes.core.livenessProbe.customProbeURL    | "" |
|   configuration.licenseManager.customMhsDeploymentKeySecret    | "" |
|   configuration.licenseManager.mhsDeploymentKey   | ""   |
|   global.serviceAccountName    | ""    |

**Removed Keys:**

None

**Changed Values:**

None

### CF224

**Added Keys:**

| Key   | Default Value  |
|-------|----------------|
|   hostAliases.contentComposer   |       []         |
|   hostAliases.core   |       []         |
|   hostAliases.damPluginGoogleVision   |       []         |
|   hostAliases.digitalAssetManagement   |       []         |
|   hostAliases.imageProcessor   |       []         |
|   hostAliases.openLdap   |       []         |
|   hostAliases.persistenceNode   |       []         |
|   hostAliases.persistenceConnectionPool   |       []         |
|   hostAliases.remoteSearch   |       []         |
|   hostAliases.ringApi   |       []         |
|   hostAliases.runtimeController   |       []         |
|   hostAliases.haproxy   |       []         |
|   hostAliases.licenseManager   |       []         |
|   hostAliases.damPluginKaltura   |       []         |
|   hostAliases.webEngine   |       []         |
|   peopleservice.enabled   |  false  |
|   peopleservice.configuration.production   | true  |
|   peopleservice.configuration.authStrategy   |  "DX"   |
|   peopleservice.integration.dx   |  true   |
|   peopleservice.configuration.dx.sessionCookieName   | "JSESSIONID"  |
|   peopleservice.configuration.dx.userValidationEndpoint | "/auth/validate"  |
|   peopleservice.configuration.dx.currentUserAccessEndpoint   |  "/dxmyrest/access/current-user?resourceId=wps.USERS"  |
|   peopleservice.configuration.dx.userAccessPrivilegedRoles   |  "Administrator,Privileged User,Editor" |
|   peopleservice.configuration.dx.portletPageContextRoot   | "/wps/myportal/Practitioner/PeopleService" |
|   peopleservice.networking.ssl.enabled | true |
|   peopleservice.networking.host  | "" |
|   peopleservice.networking.contextRoot.api  | "dx/api/people/v1" |
|   peopleservice.networking.contextRoot.ui | "dx/ui/people" |
| images.tags.webEngine | "CF224_20241213-2134" |
| images.names.webEngine | "dx/webengine" |
| resources.webEngine.requests.cpu | "2000m" |
| resources.webEngine.requests.memory | "4096Mi" |
| resources.webEngine.limits.cpu | "4000m" |
| resources.webEngine.limits.memory | "6144Mi" |
| annotations.service.webEngine | [] |
| annotations.pod.webEngine | [] |
| labels.service.webEngine | [] |
| labels.pod.webEngine | [] |
| scaling.replicas.webEngine | 1 |
| scaling.horizontalPodAutoScaler.webEngine.enabled | false|
| scaling.horizontalPodAutoScaler.webEngine.minReplicas | 1|
| scaling.horizontalPodAutoScaler.webEngine.maxReplicas | 3|
| scaling.horizontalPodAutoScaler.webEngine.targetCPUUtilizationPercentage | 75|
|scaling.horizontalPodAutoScaler.webEngine.targetMemoryUtilizationPercentage | 80|
| nodeSelector.webEngine | "" |
| affinity.webEngine | "" |
| nodeName.webEngine | "" |
| tolerations.webEngine | "" |
| topologySpreadConstraints.webEngine | "" |
| volumes.webEngine.customization.storageClassName | manual |
| volumes.webEngine.customization.requests.storage | 500Mi |
| volumes.webEngine.customization.selector | "" |
| volumes.webEngine.customization.volumeName | "" |
| volumes.log.storageClassName | manual |
| volumes.log.requests.storage | 250Mi |
| volumes.log.selector | "" |
| volumes.log.volumeName | "" |
| applications.webEngine | false |
| networking.webEngine.host | "" |
| networking.webEngine.port | "" |
| networking.webEngine.ssl | true |
| networking.webEngine.contextRoot | wps |
| networking.webEngine.personalizedHome | myportal |
| networking.webEngine.home | portal |
| networking.webEngine.cookieSameSiteAttribute | "" |
| networking.webEngine.cspFrameAncestorsEnabled | false |
| networking.webEngine.cspFrameAncestorsAllowedSourceURLs | [] |
| security.webEngine.webEngineUser | wpsadmin |
| security.webEngine.webEnginePassword | "" |
| security.webEngine.customWebEngineSecret | "" |
| security.webEngine.webEngineContentAIProviderAPIKey | "" |
| security.webEngine.customWebEngineContentAISecret | "" |
| probes.webEngine.livenessProbe.failureThreshold | 6 |
| probes.webEngine.livenessProbe.initialDelaySeconds | 30 |
| probes.webEngine.livenessProbe.periodSeconds | 10 |
| probes.webEngine.livenessProbe.successThreshold | 1 |
| probes.webEngine.livenessProbe.timeoutSeconds | 10 |
| probes.webEngine.readinessProbe.failureThreshold | 1 |
| probes.webEngine.readinessProbe.initialDelaySeconds | 30 |
| probes.webEngine.readinessProbe.periodSeconds | 10 |
| probes.webEngine.readinessProbe.successThreshold | 1 |
| probes.webEngine.readinessProbe.timeoutSeconds | 30 |
| probes.webEngine.startupProbe.failureThreshold | 360 |
| probes.webEngine.startupProbe.initialDelaySeconds | 30 |
| probes.webEngine.startupProbe.periodSeconds | 20 |
| probes.webEngine.startupProbe.successThreshold | 1 |
| probes.webEngine.startupProbe.timeoutSeconds | 10 |
| logging.webEngine.level | "*=info" |
| logging.webEngine.level | "com.ibm.wps.logging.ExceptionLogger=all" |
| logging.customLogSidecarContainers | "" |
| metrics.webEngine.scrape | true |
| metrics.webEngine.prometheusDiscoveryType | annotation |
| configuration.webEngine.configOverrideFiles | {} |
| configuration.webEngine.debug | false |
| configuration.webEngine.propertiesFilesOverrides | {} |
| configuration.webEngine.propertiesDisable | {} |
| configuration.webEngine.useExternalDatabase | false |
| configuration.webEngine.dropDatabaseTables | false |
| configuration.webEngine.customDbDomainPropertiesSecret | "" |
| configuration.webEngine.dbDomainProperties.InitializeFeedbackDB | "true" |
| configuration.webEngine.dbDomainProperties.feedback.DbType | db2 |
| configuration.webEngine.dbDomainProperties.feedback.DbName | WPFDBK |
| configuration.webEngine.dbDomainProperties.feedback.DbSchema | feedback |
| configuration.webEngine.dbDomainProperties.feedback.DataSourceName | wpfdbkdbDS |
| configuration.webEngine.dbDomainProperties.feedback.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPFDBK:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.feedback.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.feedback.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.feedback.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.feedback.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.feedback.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.feedback.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.feedback.DbConfigRoleName | WP_PZN_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.feedback.DbRuntimeRoleName | WP_PZN_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.feedback.XDbName | WPFDBK |
| configuration.webEngine.dbDomainProperties.feedback.DbNode | pznNode |
| configuration.webEngine.dbDomainProperties.likeminds.DbType | db2 |
| configuration.webEngine.dbDomainProperties.likeminds.DbName | WPLM |
| configuration.webEngine.dbDomainProperties.likeminds.DbSchema | likeminds |
| configuration.webEngine.dbDomainProperties.likeminds.DataSourceName | wplmdbDS |
| configuration.webEngine.dbDomainProperties.likeminds.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPLM:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.likeminds.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.likeminds.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.likeminds.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.likeminds.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.likeminds.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.likeminds.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.likeminds.DbConfigRoleName | WP_PZN_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.likeminds.DbRuntimeRoleName | WP_PZN_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.likeminds.XDbName | WPLM |
| configuration.webEngine.dbDomainProperties.likeminds.DbNode | pznNode |
| configuration.webEngine.dbDomainProperties.release.DbType | db2 |
| configuration.webEngine.dbDomainProperties.release.DbName | WPREL |
| configuration.webEngine.dbDomainProperties.release.DbSchema | release |
| configuration.webEngine.dbDomainProperties.release.DataSourceName | wpreldbDS |
| configuration.webEngine.dbDomainProperties.release.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPREL:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.release.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.release.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.release.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.release.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.release.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.release.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.release.DbConfigRoleName | WP_BASE_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.release.DbRuntimeRoleName | WP_BASE_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.release.XDbName | WPREL |
| configuration.webEngine.dbDomainProperties.release.DbNode | wpsNode |
| configuration.webEngine.dbDomainProperties.community.DbType | db2 |
| configuration.webEngine.dbDomainProperties.community.DbName | WPCOMM |
| configuration.webEngine.dbDomainProperties.community.DbSchema | community |
| configuration.webEngine.dbDomainProperties.community.DataSourceName | wpcommdbDS |
| configuration.webEngine.dbDomainProperties.community.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPCOMM:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.community.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.community.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.community.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.community.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.community.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.community.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.community.DbConfigRoleName | WP_BASE_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.community.DbRuntimeRoleName | WP_BASE_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.community.XDbName | WPCOMM |
| configuration.webEngine.dbDomainProperties.community.DbNode | wpsNode |
| configuration.webEngine.dbDomainProperties.customization.DbType | db2 |
| configuration.webEngine.dbDomainProperties.customization.DbName | WPCUST |
| configuration.webEngine.dbDomainProperties.customization.DbSchema | customization |
| configuration.webEngine.dbDomainProperties.customization.DataSourceName | wpcustdbDS |
| configuration.webEngine.dbDomainProperties.customization.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPCUST:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.customization.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.customization.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.customization.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.customization.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.customization.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.customization.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.customization.DbConfigRoleName | WP_BASE_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.customization.DbRuntimeRoleName | WP_BASE_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.customization.XDbName | WPCUST |
| configuration.webEngine.dbDomainProperties.customization.DbNode | wpsNode |
| configuration.webEngine.dbDomainProperties.jcr.DbType | db2 |
| configuration.webEngine.dbDomainProperties.jcr.DbName | WPJCR |
| configuration.webEngine.dbDomainProperties.jcr.DbSchema | jcr |
| configuration.webEngine.dbDomainProperties.jcr.DataSourceName | wpjcrdbDS |
| configuration.webEngine.dbDomainProperties.jcr.DbUrl | "jdbc:db2://<replace-db-host\>:<replace-db-port\>/WPJCR:returnAlias=0;" |
| configuration.webEngine.dbDomainProperties.jcr.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.jcr.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.jcr.DbRuntimeUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.jcr.DbRuntimePassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.jcr.DBA.DbUser | <replace-db-user\> |
| configuration.webEngine.dbDomainProperties.jcr.DBA.DbPassword | <replace-db-password\> |
| configuration.webEngine.dbDomainProperties.jcr.DbConfigRoleName | WP_JCR_CONFIG_USERS |
| configuration.webEngine.dbDomainProperties.jcr.DbRuntimeRoleName | WP_JCR_RUNTIME_USERS |
| configuration.webEngine.dbDomainProperties.jcr.XDbName | WPJCR |
| configuration.webEngine.dbDomainProperties.jcr.DbNode | wpsNode |
| configuration.webEngine.customDbTypePropertiesSecret | "" |
| configuration.webEngine.dbTypeProperties.derby.DbDriver | org.apache.derby.jdbc.EmbeddedDriver |
| configuration.webEngine.dbTypeProperties.derby.DbLibrary | /opt/HCL/AppServer/derby/lib/derby.jar |
| configuration.webEngine.dbTypeProperties.derby.JdbcProviderName | wpdbJDBC_derby |
| configuration.webEngine.dbTypeProperties.db2.DbDriver | com.ibm.db2.jcc.DB2Driver |
| configuration.webEngine.dbTypeProperties.db2.DbLibrary | /opt/openliberty/wlp/usr/svrcfg/bin/db2jcc4.jar |
| configuration.webEngine.dbTypeProperties.db2.JdbcProviderName | wpdbJDBC_db2 |
| configuration.webEngine.ldap.type | none |
| configuration.webEngine.ldap.bindUser | "" |
| configuration.webEngine.ldap.bindPassword | "" |
| configuration.webEngine.ldap.customLdapSecret | "" |
| configuration.webEngine.ldap.suffix | "" |
| configuration.webEngine.ldap.host | "" |
| configuration.webEngine.ldap.port | "" |
| configuration.webEngine.ldap.serverType | Custom |
| configuration.webEngine.ldap.id | dx_ldap |
| configuration.webEngine.ldap.attributeMappingLdap | \["mail", "title", "userPassword"] |
| configuration.webEngine.ldap.attributeMappingPortal | \["ibm-primaryEmail", "ibm-jobTitle", "password"] |
| configuration.webEngine.ldap.attributeNonSupported | \["certificate", "members"] |
| configuration.webEngine.tuning.authoring | true |
| configuration.webEngine.ltpa.customLtpaSecret | "" |
| configuration.webEngine.exposeConfigurationConsole | true |
| configuration.webEngine.contentAI.enabled | false |
| configuration.webEngine.contentAI.provider | OPEN_AI |
| configuration.webEngine.contentAI.className | "" |
| configuration.webEngine.search.uiV2Enabled | true |
| configuration.webEngine.search.inputRedirectVersion | v2 |
| configuration.webEngine.search.wcmVersion | v2 |
| configuration.webEngine.customSecrets | {} |
| configuration.core.search.uiV2Enabled | false |
| configuration.core.search.inputRedirectVersion | v1 |
| configuration.core.search.wcmVersion | v1 |
| environment.pod.webEngine | [] |
| maintenanceMode.webEngine | false |

**Removed Keys:**

| Key   | Default Value  |
|-------|----------------|
| incubator.resources.webEngine.requests.cpu | 2000m |
| incubator.resources.webEngine.requests.memory | 4096Mi |
| incubator.resources.webEngine.limits.cpu | 4000m |
| incubator.resources.webEngine.limits.memory | 6144Mi |
| incubator.logging.webEngine.level | [] |
| incubator.logging.webEngine.customLogSidecarContainers | [] |
| incubator.annotations.service.webEngine | [] |
| incubator.annotations.pod.webEngine | [] |
| incubator.labels.service.webEngine | [] |
| incubator.labels.pod.webEngine | [] |
| incubator.environment.pod.webEngine | [] |
| incubator.topologySpreadConstraints.webEngine | "" |
| incubator.nodeSelector.webEngine | "" |
| incubator.nodeName.webEngine | "" |
| incubator.tolerations.webEngine | "" |
| incubator.affinity.webEngine | "" |
| incubator.maintenanceMode.webEngine | false |
| incubator.applications.webEngine | false |
| incubator.images.tags.webEngine | v95_CF199_20240610-0714_rohan_develop |
| incubator.images.names.webEngine | dx-build-output/core-liberty/hcldx-core-liberty |
| incubator.security.webEngine.adminUser | wpsadmin |
| incubator.security.webEngine.adminPassword | "" |
| incubator.security.webEngine.customWebEngineAdminUserSecret | "" |
| incubator.security.webEngine.webEngineUser | wpsadmin |
| incubator.security.webEngine.webEnginePassword | "" |
| incubator.security.webEngine.customWebEngineSecret | "" |
| incubator.security.webEngine.webEngineContentAIProviderAPIKey | "" |
| incubator.security.webEngine.customWebEngineContentAISecret | "" |
| incubator.networking.webEngine.host | "" |
| incubator.networking.webEngine.port | "" |
| incubator.networking.webEngine.ssl | true |
| incubator.networking.webEngine.contextRoot | wps |
| incubator.networking.webEngine.personalizedHome | myportal |
| incubator.networking.webEngine.home | portal |
| incubator.networking.webEngine.cookieSameSiteAttribute | "" |
| incubator.networking.webEngine.cspFrameAncestorsEnabled | false |
| incubator.networking.webEngine.cspFrameAncestorsAllowedSourceURLs | [] |
| incubator.metrics.webEngine.scrape | true |
| incubator.metrics.webEngine.prometheusDiscoveryType | annotation |
| incubator.probes.webEngine.livenessProbe.failureThreshold | 6 |
| incubator.probes.webEngine.livenessProbe.initialDelaySeconds | 30 |
| incubator.probes.webEngine.livenessProbe.periodSeconds | 10 |
| incubator.probes.webEngine.livenessProbe.successThreshold | 1 |
| incubator.probes.webEngine.livenessProbe.timeoutSeconds | 10 |
| incubator.probes.webEngine.readinessProbe.failureThreshold | 1 |
| incubator.probes.webEngine.readinessProbe.initialDelaySeconds | 30 |
| incubator.probes.webEngine.readinessProbe.periodSeconds | 10 |
| incubator.probes.webEngine.readinessProbe.successThreshold | 1 |
| incubator.probes.webEngine.readinessProbe.timeoutSeconds | 30 |
| incubator.probes.webEngine.startupProbe.failureThreshold | 4320 |
| incubator.probes.webEngine.startupProbe.initialDelaySeconds | 0 |
| incubator.probes.webEngine.startupProbe.periodSeconds | 10 |
| incubator.probes.webEngine.startupProbe.successThreshold | 1 |
| incubator.probes.webEngine.startupProbe.timeoutSeconds | 10 |
| incubator.scaling.replicas.webEngine | 1 |
| incubator.scaling.horizontalPodAutoScaler.webEngine.enabled | false |
| incubator.scaling.horizontalPodAutoScaler.webEngine.minReplicas | 1 |
| incubator.scaling.horizontalPodAutoScaler.webEngine.maxReplicas | 3 |
| incubator.scaling.horizontalPodAutoScaler.webEngine.targetCPUUtilizationPercentage | 75 |
| incubator.scaling.horizontalPodAutoScaler.webEngine.targetMemoryUtilizationPercentage | 80 |
| incubator.volumes.webEngine.customization.storageClassName | manual |
| incubator.volumes.webEngine.customization.requests.storage | 500Mi |
| incubator.volumes.webEngine.customization.selector | "" |
| incubator.volumes.webEngine.customization.volumeName | "" |
| incubator.volumes.webEngine.log.storageClassName | manual |
| incubator.volumes.webEngine.log.requests.storage | 250Mi |
| incubator.volumes.webEngine.log.selector | "" |
| incubator.volumes.webEngine.log.volumeName | "" |
| incubator.configuration.webEngine.configOverrideFiles | {} |
| incubator.configuration.webEngine.propertiesFilesOverrides | {} |
| incubator.configuration.webEngine.propertiesDisable | {} |
| incubator.configuration.webEngine.ldap.type | none |
| incubator.configuration.webEngine.ldap.bindUser | "" |
| incubator.configuration.webEngine.ldap.bindPassword | "" |
| incubator.configuration.webEngine.ldap.customLdapSecret | "" |
| incubator.configuration.webEngine.ldap.suffix | "" |
| incubator.configuration.webEngine.ldap.host | "" |
| incubator.configuration.webEngine.ldap.port | "" |
| incubator.configuration.webEngine.ldap.serverType | CUSTOM |
| incubator.configuration.webEngine.ldap.id | dx_ldap |
| incubator.configuration.webEngine.ldap.attributeMappingLdap | \["mail", "title", "userPassword"] |
| incubator.configuration.webEngine.ldap.attributeMappingPortal | \["ibm-primaryEmail", "ibm-jobTitle", "password"] |
| incubator.configuration.webEngine.ldap.attributeNonSupported | \["certificate", "members"] |
| incubator.configuration.webEngine.tuning.authoring | true |
| incubator.configuration.webEngine.ltpa.version | "" |
| incubator.configuration.webEngine.ltpa.enabled | false |
| incubator.configuration.webEngine.ltpa.password | "" |
| incubator.configuration.webEngine.ltpa.realm | "" |
| incubator.configuration.webEngine.ltpa.desKey | "" |
| incubator.configuration.webEngine.ltpa.privateKey | "" |
| incubator.configuration.webEngine.ltpa.publicKey | "" |
| incubator.configuration.webEngine.ltpa.customLtpaSecret | "" |
| incubator.configuration.webEngine.exposeConfigurationConsole | true |
| incubator.configuration.webEngine.contentAI.enabled | false |
| incubator.configuration.webEngine.contentAI.provider | OPEN_AI |
| incubator.configuration.webEngine.contentAI.className | "" |
| incubator.configuration.core.presentationDesigner.enabled | false |

**Changed Values:**

| Key   | Old Value  | New Value  |
|-------|------------|------------|
| configuration.searchMiddleware.pushAdminUser | pushAdmin | pushadmin |
| configuration.searchMiddleware.pushAdminPassword | adminPush | adminpush |
| incubator.configuration.digitalAssetManagement.renderNewUI | false | true |
