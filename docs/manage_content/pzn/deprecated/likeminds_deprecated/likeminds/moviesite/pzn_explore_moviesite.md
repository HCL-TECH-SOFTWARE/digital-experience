# Exploring Movie Site

Movie Site demonstrates the LikeMinds Recommendation Engine, guiding you through a Personalization scenario that is based on factual data from a site on the internet. The website uses a personalization solution to analyze visitor behavior and to recommend individualized content information and services while the visitor is actively engaged on the site.

!!!note "Notes"
    -   The provided Resource Collections are for IBM® DB2 Universal Database™ Enterprise Server Edition and DB2® for z/OS® only. If you want to use the sample on other database types, you can regenerate them using Rational Application Developer. For information about Resource Collections, see the topic *Resources, resource instances, and resource collections*.
    -   It is assumed that you are the Movie Site user, `likeminds`. This user previously rated some movies and registered preferences as configured in the installation.

To set up the Movie Site sample, choose the appropriate option:

-   AIX® and Linux™: `./ConfigEngine.sh cfg-likeminds-samples -DWasPassword=password -DLikemindsDbPassword=password`
-   Windows™: `ConfigEngine.bat cfg-likeminds-samples -DWasPassword=password -DLikemindsDbPassword=password`


!!!note
    Check the output for any error messages before you proceed with the next task. If any of the configuration tasks fail, verify the values in the wkplc.properties file.

Complete the following steps to start the application:

1.  Open the WebSphere® Integrated Solutions Console.
2.  Go to http://machine:port_number/ibm/console where port_number is the port number for HCL Portal.
3.  Click **Applications > Application Types > WebSphere enterprise applications**.
4.  Select **Movie Site Application**, and click **Start**.
5.  Rate movies by using the Movie Site home page.

|Step number|Description|Action to be taken|
|-----------|-----------|------------------|
|1|Navigate to the Movie Site Home Page. For this demo, we concentrate on the recommendation engine, which uses mathematical algorithms to provide collaborative filtering.
|Open a separate browser window to the Movie Site home page. The URL is `http://hostname:port/MovieSite` where port is the port number for HCL Portal|
|2|Log in as the LikeMinds user. Log on as the user, `likeminds`. This login name is the default user who registered to the site and rated some movies.|1.  Type `likeminds` in the login field. <br> 2.  Type `likeminds` in the password field <br>3.  Click **Enter**.|
|3|Sample previous ratings. Look at the movie ratings by selecting **Sample Previous Ratings**. This section of the site contains a few sample movie ratings the user `likeminds` previously placed.|1.  Click **Sample Previous Ratings**. <br> 2.  Select **Get more movies** from the menu.<br> 3.  Click the **To Lobby** icon.<br><br> You can show all of the movies or certain rated movies by selecting one of the ratings. You can look at the ratings of other movies by clicking **Get More Movies**. This demonstration allows you to rate movies. For more movies, type the name of a movie into the search panel to see whether specific movies are stored in the database.|
|4|Use the SuperRater to rate a movie.In Super-Rater mode, clicking the drop-down menu that is associated with each movie of the movie reveals a rating choice.<br>You can rate any movies on the list and click **Submit** to log your rating choice. <br>If you click the movie title, it links you to information about the movie by using the imdb.com site. <br>Notice the prediction of the recommendation engine of how much you, as the LikeMinds login user, would like this movie. |1.  Click **To Lobby**. <br> 2.  Click **Rate more movies**. <br> 3.  Click **Turn on Superrater**.<br> 4.  Click the dropdown menu that is associated with the rating to see the options. <br> 5.  Click **Movie title**. <br>**Note:** This action opens a new window.|
|5|End demonstration.|Click **To Lobby**.|

The LikeMinds collaborative filtering technology considers each user to be the center of their own preference cluster, instead of trying to find the best preordained preference category for every user, which is typical of profile-based approaches. LikeMinds recommendations can adapt to these changes much more quickly than aggregated, profile based techniques.

Choose the appropriate task to remove the application:

-   AIX and Linux: `./ConfigEngine.sh remove-likeminds-samples -DWasPassword=password -DLikemindsDbPassword=password`
-   Windows: `ConfigEngine.bat remove-likeminds-samples -DWasPassword=password -DLikemindsDbPassword=password`

!!!note
    Check the output for any error messages before you proceed with the next task. If any of the configuration tasks fail, verify the values in the wkplc.properties, wkplc_dbdomain.properties, and wkplc_dbtype.properties files.


