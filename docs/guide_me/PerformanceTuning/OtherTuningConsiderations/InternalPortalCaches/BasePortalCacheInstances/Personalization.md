# Personalization

Personalization has several different types of data that is stored in the JCR. Each one of these caches is used
to store the corresponding nodetype:
    services/cache/pzn/applicationObjects
    services/cache/pzn/campaigns
    services/cache/pzn/general
    services/cache/pzn/jcrNodeTypes
    services/cache/pzn/resourceCollections
    services/cache/pzn/ruleMappings
    services/cache/pzn/uuidPathConversions

The pzn/general is used for nodes such as those involved in select action result sets, the result sets
themselves, etc; the other caches store individual types. These caches can be enabled/disabled, have their
expirations, etc set in
`<wp_profile_root>/PortalServer/config/config/services/PersonalizationService.properties`.

