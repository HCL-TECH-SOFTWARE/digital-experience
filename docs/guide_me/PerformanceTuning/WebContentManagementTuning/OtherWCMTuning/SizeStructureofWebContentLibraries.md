# Size & Structure of Web Content Libraries

In our performance benchmarks, we have tested web content library sizes up to 100,000 content items in
rendering and 50,000 content items in authoring with acceptable performance. These items were equally
distributed between 10 libraries; every library was of equal size. Larger library sizes were not tested due to
the time limitations of setting up and working with such large populations.

Library structure can play an important role in WCM performance. A flat library structure with many
children items under one parent can have a negative impact on performance and should be avoided if
possible. For the internal benchmarks, content was spread over 500 site areas in a 5-10-10 tree structure
with no more than 200 content items under one site area.

For WCM items such as components, templates, workflows and categories, folders or multiple libraries
should be used to minimize the number of children under a parent to avoid a flat library structure. In
general libraries should be limited to about 20,000 items total.