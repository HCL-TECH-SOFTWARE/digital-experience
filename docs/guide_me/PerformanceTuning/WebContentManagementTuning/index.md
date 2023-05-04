# Web Content Management Tuning

In general, the same tuning that was used for the base Portal scenario was used for the WCM scenarios. The main differences are in the cache tuning settings: WCM increases demands on the Portal access control (PAC) component which requires a different set of cache tunings. WCM has an internal set of tunable object caches as well.

On top of cache tunings, WCM can require more Web Container threads and JCR data source connections than the base Portal Scenario, especially for heavy authoring workloads. The differences in tuning are mentioned below.

!!! note 
    These tunings are to be made in addition to the base Portal tunings unless otherwise specified. Apply the base Portal tunings first.