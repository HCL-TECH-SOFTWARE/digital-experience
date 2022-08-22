# Prediction quality values

The "quality" value refers to the degree a user will like an item. The LikeMinds server presents predictions in decreasing order of quality.

Recommendation quality is calculated using this equation:

quality = confidencempowx \(pred rating —mean pred rating\) + K x confidencepow

where:

-   **confidence** is the confidence value for the recommended item.
-   **pred rating** is the predicted rating for the item.
-   **mean pred rating** is the mean recommended rating for all items for the user.

To specify mpow, set `db.applic.param.BestBets.MultPower`:

```
db.applic.param.BestBets.MultPower = 0.5
```

To specify K, set `db.applic.param.BestBests.Coefficient`:

```
db.applic.param.BestBets.Coefficient = 0
```

To specify pow, set `db.applic.param.BestBets.Power`:

```
db.applic.param.BestBets.Power = 1.0
```

**Note:** You can use these parameters for all of the Recommendation engines except for the Item Affinity Engine.

**Parent topic:**[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)

