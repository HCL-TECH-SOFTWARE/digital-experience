# How the mentor selection process works

In order to fully understand the sifter, it is important to have a clear idea of how the mentor selection process works, and how to set configuration parameters that increase the accuracy of your recommendations.

You should understand the following terms before proceeding:

-   **Collaborative Filtering** -- Collaborative filtering \(CF\) is a technology that calculates the similarity between users. It uses the behaviors of those who most closely resemble any given user as a functional basis for making predictions and recommendations for that user. Given that definition, the process by which "...the entire population of users is analyzed, their fitness as mentors is calculated, and they are assigned as mentors to individual users..." is critically important to the ultimate recommendations that come from the collaborative filtering approach. All of the LikeMinds server engines, except the Item Affinity Engine, use collaborative filtering.

    The data used to decide on the levels of similarity can come in a variety of forms. From a stream of self-supplied ratings made explicitly to get recommendations back, to clickstream events that comprise the sequence, duration, and outcome of a Web-surfer's session, to data from a company's legacy databases \(such as transactions, demographics, or credit events\)--all can form the necessary basis for making similarity calculations. From those similarity measures, this data can result in the measured recommendations from those users deemed most similar to any given user.

-   **Mentor** -- A like-minded user that is used as the basis for recommendations for new users. Every user is assigned mentors by the `sifter` program, whose stored preferences are judged to be like-minded to the new user.
-   **Mentor Pool** -- While the purpose of mentors is to form the basis for recommendations for those users deemed most similar to them, in its most basic form the mentor pool should reflect a representative sample of users in the transaction set for which the recommendations are required. And despite the clearly required emphasis on similarity, no recommendation process can make lucid suggestions without a concomitant space of dissimilarity. We might base our final recommendations on the similar, shared tastes discovered in our analysis of the users being considered for entry to the mentor pool, but it is truly the confluence of similarity in purchases with some difference in the items purchased that make the LikeMinds server collaborative filtering-based recommendations possible.
-   **Sifter** -- Creates mentors by analyzing stored user transactional data. The `sifter` runs in the background when you run the LikeMinds server.
-   **Coverage** -- The volume or number of items rated or transactions performed.

-   **[Mentor selection and assignment](../pzn/pzn_mentor_select_assign.md)**  
Several factors determine the fitness of any user as a mentor.
-   **[Number of sift priority users per batch](../pzn/pzn_number_sift_priority_users.md)**  
Learn how to specify how many users to sift during a single batch.
-   **[Pausing the sifter during heavy database](../pzn/pzn_pause_sifter_heavy_db.md)**  
Learn how to configure the sifter during heavy database.
-   **[Mentor selection and assignment](../pzn/pzn_mentor_select_assign.md)**  
Several factors determine the fitness of any user as a mentor.
-   **[Number of sift priority users per batch](../pzn/pzn_number_sift_priority_users.md)**  
Learn how to specify how many users to sift during a single batch.
-   **[Pausing the sifter during heavy database](../pzn/pzn_pause_sifter_heavy_db.md)**  
Learn how to configure the sifter during heavy database.


