# Getting Rid of Cache Invalidations

To reduce unnecessary cache invalidations set cache.dynamic.content.spot to false in WP ConfigService.

## How to Set

In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → WP ConfigService → Custom properties
    Name: cache.dynamic.content.spot
    Value: false
    
This setting increased throughput when using the Portal 8.5 theme, but might have a performance impact
with the Page Builder theme. If an installation is using the Page Builder theme as well as the Portal 8.5
theme, benchmarks should be run to determine if the net effect is positive before setting this value.