# LMListener

The LMListener routes data of interest to the LikeMinds database layer.

The LMListener only processes ActionEvent and RatingEvent data. These events result in LikeMinds addTransaction calls. Only action names defined in the LikeMinds lpx\_trx\_type table are logged by this listener. All other actions are ignored.

An instance of the LMListener is active after LikeMinds configuration tasks are run.

**Parent topic:**[Listeners and persistence](../pzn/pzn_log_listeners.md)

**Parent topic:**[Listeners and persistence](../pzn/pzn_log_listeners.md)

