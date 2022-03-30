# Syntax of the `BasicJSONSelection` 

A `BasicJSONSelection` defines the syntax that you can use to access data in a JSON object.

A `BasicJSONSelection` resembles a basic way for accessing data in JSON feeds. You can use this syntax in `BasicJSONSelection` based list-rendering profiles or directly in an `[AttributeResource]` tag in your HCL Web Content Manager designs.

A `BasicJSONSelection` is made up by a list of selectors that are separated by the period \(`.`\) character.

You can use the following types of selectors:

-   **Name selector**

    This selector returns the JSON member with the name from the JSON object. You can apply this selector only to JSON objects but not to JSON arrays.

    The format of this selector is `name1.name2`. For the sample JSON object provided later, the `BasicJSONSelection store.address.country` returns United States of America.

-   **Index selector**

    This selector returns a specific item from a JSON array. You can apply this selector only to JSON arrays. The format of this selector is `[n]` where `n` denotes the `n`th element in a JSON Array.

    For the sample JSON object provided later, the `BasicJSONSelection store.book.[0].author` returns Nigel Rees.

-   **Attribute selector**

    This selector returns the first item from a JSON array that has a member the value of which matches the value that is specified in brackets. The format of this selector is `[member=value]` where `member=value` denotes the name of the member that has the value `value`. For the sample JSON object provided later, the `BasicJSONSelection` `store.book.[category=fiction].author` returns Evelyn Waugh.


Here is a sample JSON object:

```
{ "store": {
    "address":{
      "street": "Your Co Avanue",
      "city": "Your City",
      "zipcode": "12345",
      "state": "CA",
      "country": "United States of America"
    },
    "book": [ 
      { "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "isbn": "0-553-22222-3"},
      { "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "isbn": "0-553-11111-3"},
      { "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8"}
    ]
    } 
}
```

**Parent topic:**[Integrating remote JSON data ](../social/plrf_intgrt_rmt_json.md)

