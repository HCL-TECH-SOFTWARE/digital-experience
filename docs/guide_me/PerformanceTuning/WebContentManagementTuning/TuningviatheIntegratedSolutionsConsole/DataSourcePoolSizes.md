# Data Source Pool Sizes


|  |Rendering Value <br>(min/max)|Authoring Value<br>(min/max)|
|---|-----------------|---------|
|RELEASE| 10/100 |10/50 (default)|
|COMMUNITY<br>JCR |10/100<br>10/150| 10/50 (default)<br>10/150|


See the [Connection Pool Size](../../Base_Portal_Tuning/Tuning_via_the_integrated_solutions_Console/DataSourceTuning.md#connection-pool-size) tuning section for base Portal.

!!! note 
    The JCR data pool size should be set to 2.5 times the size of the Web Container Thread pool.