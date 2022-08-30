---
id: plugin_logic
title: Logic plug-ins
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Logic plug-ins are used for programming logic. This topic contains additional information for some of these plug-ins.

## Comment rendering plug-in

Use the `Comment` rendering plug-in to insert comments that you want only content authors to view. All text that is written between the plug-in start and end tags is treated as comment. This text is not processed, but is omitted when the web content is rendered. Example:

```
[Plugin:Comment] This is a comment [/Plugin:Comment]
```

## ifEmpty and ifNotEmpty plug-ins

These plug-ins are used render the enclosed text if a value parameter is either empty or not empty.

```
[Plugin:ifEmpty value=" "]

[Plugin:ifNotEmpty value=" "]
```

## Equals rendering plug-in

Use the `Equals` plug-in to insert markup into your web content only if the values of two text attributes match. The plug-in provides the two attributes text1 and text2. All markup between the start and end tags is rendered as part of your web content only if the values of these two attributes match.

The following sample renders the markup between the plug-in start and end tags only if the rendered content is in a workflow stage named Review.

```
[Plugin:Equals text1="Review" text2="[Property type='content' 
               context='current' field='currentstage']"] 
Document in review
[/Plugin:Equals]
```

## Not equals rendering plug-in

Use the `NotEquals` rendering plug-in to insert markup into your web content only if the values of two text attributes do not match. The plug-in provides the two attributes text1 and text2. All markup between the start and end tags is rendered with your web content only if the values of these two attributes do not match.

The following sample renders the markup between the start and end tags only if thetype element of the rendered content does not have the value Internal:

```
[Plugin:NotEquals text1="Internal" text2="[Element type='content' 
                  context='current' key='type']"] 
Public document
[/Plugin:NotEquals]
```

## Matches rendering plug-in

Use the `Matches` rendering plug-in to conditionally insert markup into your web content by evaluating a regular expression against a passed text value. The plug-in provides two attributes: text and pattern. All markup between the plug-in start and end tags is rendered only if the value of the text attribute matches the regular expression in the pattern attribute.

You can also have negative pattern matching. In this case, the markup of the body of the plug-in tag is rendered only if the text does not match the regular expression. To use negative pattern matching, set the negative-match attribute to true.

**Note:** The regular expression dialect that is used by the plug-in is defined by the Java language class `java.util.regex.Pattern`.

Examples:

-   The following sample renders the markup between the start and end tags only if the rendered content is in a workflow stage whose name contains the word Review.

    ```
    [Plugin:Matches text="[Property type='content' context='current' 
                    field='currentstage']" pattern=".*Review.*"] 
    Document in review
    [/Plugin:Matches]
    
    ```

    To ignore the case of the character that is used for matching, prefix the control sequence \(?i\) to the regular expression. The following sample also matches workflow stage names such as review:

    ```
    [Plugin:Matches text="[Property type='content' context='current' 
                    field='currentstage']" pattern="(?i).*review.*"] 
    Document in review
    [/Plugin:Matches]
    
    ```

-   The following sample renders the markup between the start and end tags only if the rendered content is in a workflow stage whose name does not contain the word Review:

    ```
    [Plugin:Matches text="[Property type='content' context='current' 
         field='currentstage']" negative-match="true" pattern=".*Review.*"] 
    Document not in review
    [/Plugin:Matches]
    
    ```

-   You can also use capture groups for regular expressions. To access the value of a group, use the `MatchedGroup` plug-in. You can use this plug-in only between the start and end tags of the `Matches` rendering plug-in. It provides the attribute group to retrieve a capture group by its index. For example, to access the first word in a list of comma-separated words, use the plug-in as follows:

    ```
    [Plugin:Matches pattern="(.*)(,)(.*)" text="key1,key2"] 
    First key is: [Plugin:MatchedGroup group="1"]
    [/Plugin:Matches]
    ```


## Otherwise rendering plug-in

Use the `Otherwise` rendering plug-in to conditionally insert markup into your web content if any of the following render plug-ins evaluate as false before the `Otherwise` plug-in is evaluated:

-   `Equals` rendering plug-in
-   `NotEquals` rendering plug-in
-   `Matches` rendering plug-in

Examples:

-   The following sample renders the markup between the start and end tag of the `Otherwise` rendering plug-in \(`Document not in review`\) only if the rendered content is not in a workflow stage that is named Review.

    ```
    [Plugin:Equals text1="Review" text2=" [Property type='content'
                   context='current' field='currentstage']"] 
      Document in review.
    [/Plugin:Equals]
    [Plugin:Otherwise]
      Document in not review.
    [/Plugin:Otherwise]
    
    
    ```

-   The following sample renders the markup between the start and end tag of the `Otherwise` rendering plug-in \(`Internal document`\) only if the type element of the rendered content has the value `Internal`.

    ```
    [Plugin:NotEquals text1="Internal" text2=" [Element type='content'
                      context='current' key='type']"]
      Public document
    [/Plugin:NotEquals]
    [Plugin:Otherwise]
      Internal document
    [/Plugin:Otherwise]
    
    ```

-   The following sample renders the markup between the start and end tag of the `Otherwise` rendering plug-in \(`Document not in review`\) only if the rendered content is in a workflow stage whose name does not contain the word `Review`.

    ```
    [Plugin:Matches text=" [Property type='content' context='current'
                    field='currentstage']" pattern=".*Review.*"]
      Document in review
    [/Plugin:Matches]
    [Plugin:Otherwise]
      Document not in review
    [/Plugin:Otherwise]
    
    ```


You can also nest the `Equals`, `NotEquals`, and `Matches` rendering plug-ins when conditionally adding markup. When you use these plug-ins together in this way, you might want to have different `Otherwise` plug-ins that are associated with each conditional rendering plug-in. To associate a plug-in with a specific `Otherwise` plug-in, add a scope attribute with the same value to the conditional rendering plug-in and to the `Otherwise` plug-in. If no scope attribute is specified for the `Otherwise` plug-in, it is applied to the conditional plug-in that was last evaluated.

Examples:

-   The following sample uses multiple nested rendering plug-ins to conditionally render markup. The `Otherwise` plug-in with the scope attribute set to 1 refers to the `Equals` plug-in. The `Otherwise` plug-in with the scope attribute set to 2 refers to the `Matches` rendering plug-in.

    ```
    [Plugin:Equals text1="Review" text2=" [Property type='content'
                   context='current' field='currentstage']" scope="1"]
      Document in review.
      [Plugin:Matches text=" [Property type='content' context='current'
         field='authors']" pattern="(.*)(,)(.*)" scope="2"]
        Multiple authors
      [/Plugin:Matches]
      [Plugin:Otherwise scope="2"]
        Only one author
      [/Plugin:Otherwise]
    [/Plugin:Equals]
    [Plugin:Otherwise scope="1"]
      Document in not review.
    [/Plugin:Otherwise]
    
    ```


