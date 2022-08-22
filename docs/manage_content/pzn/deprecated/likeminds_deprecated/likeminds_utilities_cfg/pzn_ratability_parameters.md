# Ratability parameters

The buildvisit background utility computes a ratability value for each item in the database. It is only used for the Preference Engine.

The LikeMinds server presents items for rating in decreasing order of ratability; items with the same ratability are presented in random order.

The ratability value is computed as

ratability = Ai+Bi+Ci

where Ai is the popularity of item i:

Ai=Kx\(log10\(num\_rating\)\)rpow

**num\_rating** is the number of ratings for the item.

To specify K, set `db.ratability.num_rating.coefficient` \(default is 1.0\):

```
db.ratability.num_rating.coefficient = 1.0
```

To specify rpow, the rating power, set `db.ratability.num_rating.power` \(default is 1.0\):

```
db.ratability.num_rating.power= 1.0
```

Bi is a measure of how controversial the item is:

```
Bi=Kx(rating_std_dev)sdpow
```

**rating\_std\_dev** is the standard deviation of the ratings for the item.

To specify K, set `db.ratability.stddev.coefficient` \(default is 1.0\):

```
db.ratability.stddev.coefficient = 1.0
```

To specify stdpow, the standard deviation power, set `db.ratability.stddev.power` \(default is 1.0\):

```
db.ratability.stddev.power= 1.0
```

Ciis a weight based on the age of the item:

```
Ci=Kxexp(-(current_year - release_year)) exp ^ apow
```

**release\_year** is the value of the year field in the `Lps_Item_Data` table for the item.

To specify K, set `db.ratability.age.coefficient`. You can set this to zero if you do not want to consider age in determining ratability \(default is 2.7\):

```
db.ratability.age.coefficient = 2.7
```

To specify apow, set `db.ratability.age.power` \(default is 0.5\):

```
db.ratability.age.power= 0.5
```

**Parent topic:**[Configuring LikeMinds utilities](../pzn/pzn_config_background_utilities.md)

