# Example: Simple select content action

View an example for a simple select content action.

The select content action shown here, `Get Bank News By Role`, queries all records within a content resource entitled News and returns those marked as being for the current user's role.

The content resource YourCoNews represents news articles in the data store. Each record has several different fields \(for example, Title, Abstract, Author, Body\), including a field entitled `Role`. In the data store, this field is marked to indicate the role of the visitor to whom it applies.

## Simple select content action

```
Select NewsArticle
  	    whose Role is current User.Role
  	     order as is
```


