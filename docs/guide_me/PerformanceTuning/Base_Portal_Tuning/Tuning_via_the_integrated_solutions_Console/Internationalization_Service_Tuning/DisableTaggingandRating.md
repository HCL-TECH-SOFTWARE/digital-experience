# Disable Tagging and Rating

If you are not using the Tagging and Rating services they can be disabled. In our results, disabling this
improved capacity by 3%.

## How to Set

In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WP CPConfigurationService
-> Custom properties

Modify the following custom properties:

- Name: com.ibm.wps.cp.tagging.isTaggingEnabled
  Value: false

- Name: com.ibm.wps.cp.rating.isRatingEnabled
  Value: false

The module can also be removed from the theme profile. The module name is wp_tagging_rating; by
default it is in the deferred section of `profile_deferred.json`. For performance benchmarks, this module was
left enabled, but the deferred section of the profile was never loaded as part of the measured workload, so
the performance impact of removing it is unknown.