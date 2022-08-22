# Allowable confidence levels

The LikeMinds server assigns a confidence level to each recommendation based on how many users have rated the recommended item and how similar the ratings are to each other. "Confidence" refers to the accuracy of the prediction. Learn how to set allowable confidence levels.

You can specify the range of confidence values by setting `db.applic.param.lowestconfidence` \(default is 1\) to the lowest confidence level and `db.applic.param.numberconfidenceLevels` \(default is 4\) to the number of confidence levels. You can set confidence levels for all of the Recommendation engines.

```
db.applic.param.lowestconfidence = 1
db.applic.param.numberconfidencelevels = 4
```

**Parent topic:**[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)

