# Command references for Search \| Portal Scripting Interface

All beans with tree navigation support identical commands for searching, but the available search criteria are different for each bean.

The generic examples use the Content bean. Searches in trees are scoped. The search scope is the subtree under the selected node, including the selected node itself. If nothing is selected, the search scope is the full tree that starts at the root.

There are two different commands for searching:search and find.search returns a list of matches, whereas find succeeds only if there is a single, unique match for the search. It fails if there is more than one match, or no match at all. find is used in cases where a script must end if the search result is not a unique match. If the keyword select is passed to find, the search result becomes the selected node.

Jython example:

```
Content.search(type)
Content.search(type), "by", (value)

Content.find(type)
Content.find(type), "by", (value)

Content.find(type, "select")
Content.find(type, "by", (value, "select")
```

Jacl example:

```
$Content search type
$Content search type by value

$Content find type
$Content find type by value

$Content find type select
$Content find type by value select
```

The first argument for all searches is the type of the nodes to look for. The type is specified by a keyword, which is not case-sensitive. The available types and corresponding keywords depend on the bean. In all beans, the keywords all and any are used to search regardless of the type. There is a dedicated help topic for the search types.

Jython example:

```
# example: return all nodes in the search scope
Content.search all

# example: get help on the available type keywords
Content.help search-types

```

Jacl example:

```
# example: return all nodes in the search scope
$Content search all

# example: get help on the available type keywords
$Content help search-types

```

You can combine the type selection with an extra search criteria, which is specified by a keyword \(`by`\) and a value to match against \(`value`\). The available search criteria and corresponding keywords depend on the bean. There is a dedicated help topic for the search criteria.

Jython example:

```
# example: get help on the available by keywords
Content.help("search-criteria")
```

Jacl example:

```
# example: get help on the available by keywords
$Content help search-criteria
```

The following are common search criteria. Alternative, shorter keywords are described in the help text on search criteria of the respective bean.

|Value|Description|
|-----|-----------|
|id|The value is an ID. The search is for the object with that ID.|
|uniquename|The value is a string. The search is for the object with the string as its unique name.|
|commonnamehas|The value is a string. The search is for objects with the string as a substring in their common name. Comparison is not case-sensitive.|
|commonnameis|The value is a string. The search is for objects with the string as their common name. Comparison is case-sensitive.|

Jython example:

```
# example: find and select by unique name
Content.find("any", "uniquename", "ibm.portal.Portlets", "select")
```

Jacl example:

```
# example: find and select by unique name
$Content find any uniquename "ibm.portal.Portlets" select
```


