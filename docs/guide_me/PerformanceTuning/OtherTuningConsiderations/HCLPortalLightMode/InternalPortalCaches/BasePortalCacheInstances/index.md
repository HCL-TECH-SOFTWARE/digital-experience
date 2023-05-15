# Base Portal Cache Instances

This section describes the caches in HCL Portal 8.5 along with hints to best configure those caches. As see in
previous sections, which detail the modifications made for performance benchmarks, the size and lifetime
properties are the most commonly modified properties when tuning Portal caches. You may wish to
increase the size of a cache if many values are used on a regular basis and there is sufficient space available
in the Java heap. You may wish to increase the lifetime of the entries of a cache if the cached data rarely
changes and it is not critical to your business to reflect changes immediately in your Portal. The changes
mentioned in this section are either set in the Resource Environment Provider section of the WebSphere
Integrated Solutions Console or are set in the file CacheManagersService.properties. For instructions on
configuration caches, see the Cache Manager Service section in base Portal tuning.

Each cache description includes the following attributes:
    - Default size, default lifetime and cache usage pattern
    - Cache content and scaling factor(s) (i.e. what causes the cache to grow)
    - Information on the read and write access to the cache
    - Approximate costs for re-creating cache entries and relative size of cached objects. Small objects range from 16 to 300 bytes and the largest cache entries are not larger than a few thousand bytes.
    - One exception is the access control caches in systems with many resources per user. These caches can hold entries that are 50KB or more since they contain information on all the resources which a user can access.
    - Some cache descriptions include a sample scenario with suggested property values.