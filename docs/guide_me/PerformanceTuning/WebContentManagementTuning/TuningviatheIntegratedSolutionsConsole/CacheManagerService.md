# Cache Manager Service


## How to Set
In the WebSphere Integrated Solutions Console

Resources -> Resource Environment -> Resource Environment Providers -> WP CacheManagerService -> Custom properties

|Parameter |Default Value|Value Used|
|----------|-------------|----------|
|cacheinstance.com.ibm.wps.ac.CommonRolesCache.size| 40000 |50000|
|cacheinstance.com.ibm.wps.ac.ProtectedResourceCache.size |5000 |20000|
|cacheinstance.com.ibm.wps.cp.models.ModelCache.CategoryModel.lifetime |3600 |28800|
|cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.lifetime |3600 |28800|
|cacheinstance.com.ibm.wps.cp.models.ModelCache.ResourceModel.size |10000 |2000|
|cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.lifetime |3600 |28800|
|cacheinstance.com.ibm.wps.cp.models.ModelCache.TagModel.size |200 |2000|
|cacheinstance.com.ibm.wps.pe.portletentitycounter.size |2000 |5000|
|cacheinstance.com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory.size |20 |100|