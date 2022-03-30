# Allowable rating values

Learn about the parameters that govern the allowable range of ratings.

Specify the allowable range of ratings by setting `db.applic.param.lowestrating` \(default is 0\) to the lowest allowable rating and `db.applic.param.numberratingvalues`\(default is 13\) to the number of possible ratings. This setting also determines the recommendation value. This example specifies a rating scale of zero to twelve:

```
db.applic.param.lowestrating = 0
db.applic.param.numberratingvalues = 13
```

The parameters `db.applic.param.wontrate` \(default is -1\) and `db.applic.param.unrated` \(default is -2\) set special allowable rating values that are not part of the normal rating scale. Setting an item to unrated marks the rating for deletion. `wontrate` means that a user has specifically indicated that he or she does not plan to rate the item.

```
db.applic.param.wontrate = -3
db.applic.param.unrated = -2
```

The LikeMinds server ignores ratings which are neither in the specified range of rating values nor equal to `db.applic.param.wontrate` or `db.applic.param.unrated`.

**Note:** You can use these parameters for all of the Recommendation engines except for the Item Affinity Engine.

**Parent topic:**[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)

**Parent topic:**[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)

