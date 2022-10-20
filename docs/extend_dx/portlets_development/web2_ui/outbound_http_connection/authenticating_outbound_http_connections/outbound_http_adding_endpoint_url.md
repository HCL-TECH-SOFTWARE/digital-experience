# Adding or changing endpoint URL settings

Sometimes a URL needs to include query parameters or POST forms data that isn’t known or cannot be known at the client site. For example, an API key for a REST service, or an application code such as a Google maps key. The URL transformation feature of the outbound connection services can handle this requirement.

The URL transformation feature is used to:

-   Add URL query parameters or POST body content.
-   Modify URL query parameters or POST body content.
-   Add or modify URL path settings.

URL transformation is enabled with a metadata setting.

## url\_transformation.add\_request\_query\_param

This setting adds a request parameter to the remote URL. The metadata value contains one or multiple query parameter definitions that are added to the query parameter URL.

For example

```

<policy url="http://mysite.com/test1*" >
     <actions><method>GET</method></actions>
     <!­­ Add a simple key­value pair to the query string ­­>
     <meta­data>
          <name>url_transformation.add_request_query_param</name>
          <value>k=123abc</value>
     </meta­data>
</policy>
```

This transformation setting adds the query parameter `?k=123abc` to the remote URL.

-   The URL `http://mysite.com/test1/` is changed to `http://mysite.com/test1/?k=123abc`
-   The URL `http://mysite.com/test1/?someKey=aValue` is changed to `http://mysite.com/test1/?someKey=aValue&k=123abc`

```

<policy url="http://mysite.com/test2*" >
     <actions><method>GET</method></actions>
     <!­­ Append a query string that contains credential vault secrets­­>
     <meta­data>
          <name>url_transformation.add_request_query_param</name>
          <value>key={**my_slot_id}</value>
     </meta­data>
</policy>
```

This transformation setting adds the query parameter `?k=the_secret` to the remote URL. This parameter represents the password that is stored in the credential vault with the slot ID `my_slot_id`.

-   The URL `http://mysite.com/test2/` is transformed to `http://mysite.com/test2/?key=some_secret_phrase`

## url\_transformation.add\_post\_body\_form

This parameter adds some data to the POST body. The metadata value contains extra content that is added to the existing body content.

```

<policy url="http://mysite.com/test3*" >
     <actions><method>POST</method></actions>
     <!­­ Add a simple key­value pair to the postdata section ­­>
     <meta­data>
          <name>url_transformation.add_request_query_param</name>
          <value>name=JohnDoe</value>
     </meta­data>
</policy>
```

The name-value pair `name=JohnDoe` is added to the POST content. It’s assumed that the post content is in the URL encoded format. The transformation of post content in a different format isn’t supported.

## url\_transformation.add\_url\_path

This parameter appends the path of the remote URL with the provided data. The metadata value contains one or multiple query path elements that are appended to the existing URL path.

```

<policy url="http://remoteportal.com/test4/portal*" >
     <actions><method>GET</method></actions>
     <!­­ Add a simple key­value pair to the path ­­>
     <meta­data>
          <name>url_transformation.add_url_path</name>
          <value>my_vp</value>
     </meta­data>
</policy>
```

-   The url path is appended with the path element `my_vp`
-   The URL `http://remoteportal.com/test4/portal/` is changed to `http://remoteportal.com/test4/portal/my_vp/`

## url\_transformation.modify\_request\_query\_param

This parameter modifies the request parameters of the remote URL. The value of the metadata setting contains a replace string that uses the format `s/regex/replacement/g`, where `regex` is for a regular expression, and `replacement` is the value to be replaced. If the replace string contains the suffix `/g`, the transformation replaces all matches of `regex` in the URL query parameter. Otherwise, the transformation replaces the first `regex` match only.

For example

```

<policy url="http://mysite.com/test5*" >
     <actions><method>GET</method></actions>
     <!­- Add a simple key­value pair to the query string ­­>
     <meta­data>
          <name>url_transformation.modify_request_query_param</name>
          <value>s/old/new/g</value>
     </meta­data>
</policy>

```

-   The URL `http://mysite.com/test5/something?key=the_old_old_man` is transformed to `http://mysite.com/test5/something?key=the_new_new_man`

```

<policy url="http://mysite.com/test6*" >
     <actions><method>GET</method></actions>
     <!­­ Add a simple key­value pair to the query string ­­>
     <meta­data>
          <name>url_transformation.modify_request_query_param</name>
          <value>s/old/new/</value>
     </meta­data>
</policy>
```

-   The URL `http://mysite.com/test6/something?key=the_old_old_man` is transformed to`http://mysite.com/test6/something?key=the_new_old_man`

## url\_transformation.modify\_post\_body\_form

This parameter modifies the POST data form of the remote URL. The metadata setting can be used to replace parts of the post body content. The metadata value uses the format `s/regex/replacement/g`, where `regex` is for a regular expression, and `replacement` is the value to be replaced. If the replace string contains the suffix `/g`, the transformation replaces all matches of `regex` in the URL query parameter. Otherwise, the transformation replaces the first regex match only.

```

<policy url="http://mysite.com/test7*" >
     <actions><method>POST</method></actions>
     <!­­ Add a simple key­value pair to the query string ­­>
     <meta­data>
          <name>url_transformation.modify_post_body_form</name>
          <value>s/old/new/g</value>
     </meta­data>
</policy>
```

## url\_transformation.modify\_url\_path

This parameter modifies the path of the remote URL. The metadata value contains a replacement expression for the URL path that should be transformed. The replacement value uses the format `s/regex/replacement/g`, where `regex` is for a regular expression, and `replacement` is the value to be replaced. If the replace string contains the suffix `/g`, the transformation replaces all matches of `regex` in the URL query parameter. Otherwise, the transformation replaces the first regex match only.

```

<policy url="http://mysite.com/test8/portal*" >
     <actions><method>GET</method></actions>
     <!­­ Add a simple key­value pair to the path ­­>
     <meta­data>
          <name>url_transformation.modify_url_path</name>
          <value>s/production/test/</value>
     </meta­data>
</policy>
```

-   The URL `http://mysite.com/test8/production/` is changed to `http://mysite.com/test8/test/`

!!!note
     The feature does not support the transformation of the parts of the URL, which are relevant for the cookie handling or URL pattern resolution. For example,

```

<policy url="http://mysite.com/invalid_example*" >
     <actions><method>GET</method></actions>
     <meta­data>
          <name>url_transformation.modify_url_path</name>
          <value>s/www.mysite.com/www.anothersite.com/</value>
     </meta­data>
</policy>

```


