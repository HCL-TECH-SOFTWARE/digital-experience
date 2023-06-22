# PAC Warmup Service

In environments with either many pages or with a large amount of WCM content (especially with many
explicit role mappings) there can be a large amount of Portal Access Control (PAC) data required to display
pages to the user. When first started, Portal will not have any of this data cached and will have to retrieve it
from the database instead. As a result, the first several users who o hit the system may see longer response
times.

To improve initial response times, the PAC Warmup Service can be enabled to load data into caches at
Portal startup. The service will load the specified users or groups asynchronously from the database before
users access the site.

Note that syndication or authoring will potentially clear the caches so the warmup is typically useful only
for the first hits on the system, before any changes are made to the content.

## How to Set

In the WebSphere Integrated Solutions Console

Resources -> Resource Environment -> Resource Environment Providers -> WP AccessControlWarmUpService

Add the following properties:
    Name: enabled
    Value: true
    Name: numberOfMostRecentUsers
    Value: 10
    Name: numberOfGroups
    Value:1
    Name: group.1
    Value: all authenticated portal users
    Name: numberOfUsers
    Value: 1
    Name: user.1
    Value: anonymous portal user
    Name: fillResourceCachesDomains
    Value: rel,jcr
    Name: fillResourceCaches
    Value: 0

!!! note
    Multiple users and groups can be added by incrementing the user or group number (e.x. group.2) and the numberOfUsers or numberOfGroups property. Ideally all groups or user that have many roles should be loaded.

See https://help.hcltechsw.com/digital-experience/8.5/install/wp_pac_tool.html?query=PAC for more information on this service.