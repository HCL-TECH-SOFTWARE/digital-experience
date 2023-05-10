# Cache Manager Service

To accommodate the increased user volume we made the following changes to the Cache Manager Service
settings:

|Cache Name |Default Value| Value Used|
|-----------|-------------|-----------|
|cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.size |6000 |10000|
|cacheinstance.com.ibm.wps.model.factory.UserSpecificModelCache.size |6000 |10000|
|cacheinstance.com.ibm.wps.ac.CommonRolesCache.size |40000 |100000|
|cacheinstance.com.ibm.wps.puma.CommonPrincipalCache.size |10000 |100000|
|cacheinstance.com.ibm.wps.puma.CommonExplicitEntitlementsCache.size |10000 |100000|

## How to Set

See the Cache Manager Service tuning section for base Portal.