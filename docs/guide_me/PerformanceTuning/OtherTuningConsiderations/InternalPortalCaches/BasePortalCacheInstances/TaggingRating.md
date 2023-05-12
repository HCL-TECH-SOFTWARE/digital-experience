# Tagging & Rating

com.ibm.wps.cp.tagging.TagCache
Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about tag instances. A tag instance is a single tag associated to a single
resource. For example, if a single resource R1 has been tagged (by different users) with the tags T1, T1, and
T3, three tag instances are being created, one that holds the information that R1 has been tagged with T1,
one that holds the information that R1 has been tagged with T1 again, and one that holds the information
that R1 has been tagged with T3. If another resource R2 has been tagged the same way (i.e. with the same
tag names) three additional tag instances are being created that hold the information about how R2 has
been tagged.

The cache scales with the number of tag instances in the system. The cache is accessed and a new entry is
added whenever tag instances (not to be mixed up with tag spaces; see the TagSpace cache) for a particular
resource are being queried. Thus, a reasonable size for this cache depends on the amount of tags being
assigned and queried.

Depending on the usage intensity of HCL Portal's tagging capabilities a large number of tag instances can be
quickly created. For instance, if a user invokes a custom tagging widget able to display all tag instances that
have been assigned to a particular resource the cache might fill up quickly. One should at least try to allow
for a quick reloading of such a widget when invoking it for a resource for which it has been invoked prior.
Thus, to achieve best performance in terms of cache hit rate, the size should be set to a value so that all tag
instances of a typical number of resources for which tags are being queried in the defined cache lifetime fit
into the cache.

It might also be worth noting that the TagCache is usually less important and thus used less often than the
TagSpaceCache because one is often, for the same tag (name), interested in its count only. The space cache
is exactly what a tag space does – provides information about how many times a particular tag (name) has
been assigned to a particular resource. For example, for a particular resource Rx it is usually only of interest
how many times a tag (name) T1, T2, or Tx has been assigned; it is usually not that interesting to retrieve
each single tag instance.

com.ibm.wps.cp.tagging.TagSpaceCache
Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about tag spaces. A tag space is the aggregation of tags with the same name
that have been associated to a single resource. For example, if a single resource R1 has been tagged (by
different users) with the tags T1, T1, and T3 two (not three as with tag instances) tag spaces are being
created, one that holds the information that R1 has been tagged with T1 two times, and one that holds the
information that R1 has been tagged with T3 once. If another resource R2 has been tagged the same way
(i.e. with the same tag names) two additional tag spaces are being created that hold the information about
how R2 has been tagged.

The cache scales with the number of tags in the system. The cache is accessed and a new entry is added
whenever tags for a particular resource are being queried - in a way that tags with the same tag name can
be aggregated as only their count is of interest. Thus, a reasonable size for this cache depends on the
amount of tags being assigned and queried. The standard tag widgets for example access this cache
frequently.

Depending on the usage intensity of HCL Portal's tagging capabilities a lot of tags can be quickly created.
For instance, if a user invokes the standard tag widget (in order to query tags for a particular resource) in a
short period of time and for a huge amount of different resources that all have been tagged a lot, the cache
might fill up quickly. Again, one should at least try to allow for a quick reloading of the standard tag widget
when invoking it for a resource for which it has been invoked prior. Thus, to achieve best performance in
terms of cache hit rate, the size should be set to a value so that all tag spaces of a typical number of
resources for which tags are being queried in the defined cache lifetime fit into the cache.

com.ibm.wps.cp.rating.RatingSpaceCache
Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about rating spaces. A rating space is the aggregation of ratings of the same
value that have been associated to a single resource. For example, if a single resource R1 has been rated
(by different users) with the values 5, 5, and 3, two (not three as with rating instances) rating spaces are
being created, one that holds the information that R1 has been rated two times with 5, and one that holds
the information that R1 has been rated with 3 once. If another resource R2 has been rated the same way
(i.e. with the same values) two additional rating spaces are being created that hold the information about
how R2 has been rated.

The cache scales with the number of ratings in the system. The cache is accessed and a new entry is added
whenever ratings for a particular resource are being queried - in a way that ratings with the same value can
be aggregated as only their count is of interest. Thus, a reasonable size for this cache depends on the
amount of ratings being assigned and queried. The standard rating widgets for example access this cache
frequently.

Depending on the usage intensity of HCL Portal's rating capabilities a lot of ratings can be quickly created.
For instance, if a user invokes the standard rating widget (in order to query ratings for a particular resource)
in a short period of time and for a huge amount of different resources that all have been rated a lot, the
cache might fill up quickly. Again, one should at least try to allow for a quick reloading of the standard
rating widget when invoking it for a resources for which it has been invoked prior. Thus, to achieve best
performance, in terms of cache hit rate, the size should be set to a value so that all rating spaces of a typical
number of resources for which ratings are being queried in the defined cache lifetime fit into the cache.

com.ibm.wps.cp.tagging.ResourceModelCache
Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about resources (pages, portlets, WCM content, etc.) registered with the
tagging and rating engine. We refer to these registered resources as collaborative resources. A resource is
being registered with the T&R engine once it is tagged or rated. This means that, at this point in time, the
information which tags and/or ratings have been assigned to which resource by which user is being stored.

The cache scales with the number of collaborative resources in the system. The cache is accessed and a
new entry is added whenever a resource is tagged or rated, or when particular resources are being queried, e.g. by tag names or rating values. Typical queries include queries like "Find all resources tagged with the tag T1" or "Find all resources rated with a value greater than 3". Thus, a reasonable size for this cache depends on the amount of collaborative resources being worked with. Thus, to achieve best performance, in terms of cache hit rate, the size should be set to a value so that a typical amount of collaborative resources being worked with – within the defined cache lifetime – fit into the cache.

com.ibm.wps.cp.tagging.TagNameMissCache
Default size: 10000, default lifetime: infinite, usage pattern: regular.

This cache stores information about all the tag names that have been searched for without success. It
avoids costly queries for certain tag names to be carried out over and over again. This means that, in case a
query for a particular tag T1 returns no results, the next query for this particular tag T1 is not being carried
out again (as long as no new tags have been added as adding new tags can invalidate this cache); rather
than that the result is directly served from the cache.

The cache scales with the number of distinct tags (actually tag names) that users have been searched for
without success before. The cache is accessed and a new entry is added whenever a new tag is being
searched for without success. Thus, a reasonable size for this cache depends on the amount of distinct tag
names users have been searched for. To achieve best performance in terms of cache hit rate, the size
should be set to a value so that a typical amount of tag names being searched for fit into the cache.

com.ibm.wps.cp.tagging.TypeAheadCache
Default size: 10000, default lifetime: 3600, usage pattern: regular.

This cache stores information about all the tag names that have already been used to tag resources. The set
of tags being maintained as part of this cache is independent from any resource information.

The cache is primarily being used by WebSphere Portal's tagging and rating type-ahead feature. As the user
starts typing a tag name, one or more possible matches for the entered text fragment are being searched
for and immediately shown to the user. This immediate feedback allows users to select one of the listed
options rather having to type the entire word or phrase they were looking for. A user can also choose a
closely related option from the presented list. Thus, the type-ahead feature allows users to explore the tag
space as they type. This can make it easier to find the correct term they want to use as the tag.

Another advantage of the type-ahead feature is that it reduces tag space littering (refer to the knowledge
center for more detailed information). The cache scales with the number of distinct tags (actually tag
names) in the system. The cache is accessed and a new entry is added whenever a new tag is brought into
the system, or when available tags are being queried (by text fragments). hus, a reasonable size for this
cache depends on the amount of distinct tag names available. To achieve best performance in terms of
cache hit rate, the size should be set to a value so that all distinct tag names fit into the cache.

com.ibm.wps.cp.models.ModelCache.* (TagModel, RatingModel, ResourceModel, CategoryModel)
Default size: 200, default lifetime: 3600, usage pattern: regular.

These caches store information about the models HCL Portal's tagging and rating capabilities provide you
with. There is one distinct cache for each model being provided (refer to the Knowledge Center for more
information on these models):

The cache for the TagModel which is primarily used for querying tags, e.g. tags by tag names. The cache for
the RatingModel which is primarily used for querying ratings, e.g. ratings by rating values. The cache for the
ResourceModel which is primarily used for querying collaborative resources, e.g. resources by tag names or
by rating values. The cache for the CategoryModel which is primarily used for querying categories, for
example category names.

These caches scale with the number of models usually being requested . Requestors are usually
components exploiting these models to implement specific functionalities. The cache is accessed and a new
entry is added whenever a new model object is being requested. Thus, a reasonable size for this cache
depends on the amount of components usually exploiting these models. To achieve best performance, in
terms of cache hit rate, the size should be set to a value so that a typical amount of models required by
exploiting components fit into the cache.