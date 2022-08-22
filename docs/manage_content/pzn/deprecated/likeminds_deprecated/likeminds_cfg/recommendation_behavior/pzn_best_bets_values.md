# Best Bets values

The LikeMinds server generates recommendation vectors that include all recommendations for a given user in order from best quality to the least. You can configure the number of items to be returned as Best Bets and the maximum percentage of the total recommendation vector to include in the Best Bets list.

The LikeMinds server produces Best Bets by beginning with the highest-quality item in the recommendation vector and listing items in decreasing order of rating quality.

To specify how many items the LikeMinds server should return as Best Bets, set `db.applic.param.BestBets.Threshold`. The default value of this parameter is the number of rating levels \(specified by the `db.applic.param.NumberRatingValues` parameter\) divided by 2. For example, if `db.applic.param.NumberRatingValues` were set to 12, the default would be 6. You can specify a different value, for example:

```
db.applic.param.BestBets.Threshold = 7
```

Set `db.applic.param.BestBets.list.cutoff` to the maximum percentage of the total recommendation vector to include in the Best Bets list. For example:

```
db.applic.param.BestBets.list.cutoff = 50
```

**Parent topic:**[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)

