# Example: Category Count

Get an overview of implementing category counts from a profiler that will contain profile definitions for movies, cooking, and sports \(implicit profiling\).

For the Category Count example, assume a repository of articles on sports, movies, and cooking is available for the user to view. Each time the user views an article, a record is logged to show his or her preference for that topic. For this to occur, each article must be a JSP that implements category beans. For example, the following code would appear on a sports article:

```
<jsp:useBean class="com.ibm.wcp.analysis.beans.Category" id="category" 
scope="session">
</jsp:useBean>
<% category.log(request, "Articles/Sports"); %>
```

These values were typed into the Attribute text field during the creation of this profiler after selecting current Category Count.

**Note:** A complete version of this profiler will contain profile definitions for movies and cooking for the cases where those category counts are greater than sports and each other.

## Category count

```
ArticlePreference is
  	     Sports when
  	         current Category Count.Articles.Sports is greater than current Category Count.Articles.Cooking and
  	         current Category Count.Articles.Sports is greater than current Category Count.Articles.Movies
```

**Parent topic:**[Profilers](../pzn/pzn_profilers.md)

**Parent topic:**[Profilers](../pzn/pzn_profilers.md)

