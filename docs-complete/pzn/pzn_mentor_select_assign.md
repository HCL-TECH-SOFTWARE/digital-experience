# Mentor selection and assignment

Several factors determine the fitness of any user as a mentor.

Similarity to any other user is the final arbiter of any mentor's fitness to make recommendations for a specific user. Yet it is **coverage** \(the volume of number of items rated or transactions performed\) that is most important when forming the mentor pool. \(The mentor pool is a superset of the final mentors chosen to make the recommendations.\) Although a case could be made for using the extent of the unshared purchase space as another dimension of dissimilarity, the shared space is where we find the most data \(and the most predictive data\) for making the required similarity distinctions within the user population.

In a nutshell, while similarity to the user is important, it is the ability of a mentor to contribute items outside of any user's typical purchasing space into the final pool of possible recommendations that qualifies the user as a possible mentor.

For this purpose, the first step the `sifter` uses in mentor assignment is to periodically create a new mentor pool \(see `lps_rtg_pool` and `lps_trx_pool` \) in an effort to collect a representative sample of experienced users who will then be considered as potential mentors for any user who requires recommendations.

The second step in the mentor selection process is to assign mentors from the mentor pool to be mentors for specific users. The challenge is to create a fair balance between the similarity and the coverage of users being considered as mentors. You can configure the `sifter` to emphasize similarity, coverage, or to automatically determine which dynamic to emphasize for each user in the final assignment of mentors to users.

**Parent topic:**[How the mentor selection process works](../pzn/pzn_mentor_selection_process.md)

**Parent topic:**[How the mentor selection process works](../pzn/pzn_mentor_selection_process.md)

