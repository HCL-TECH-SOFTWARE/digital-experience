# Conditionally disable dynamic content spots

You can control whether a dynamic content spot is rendered into the page or not based on the fact whether a certain module exists on the page or not.

When a particular module is turned on, you can choose to have a dynamic content spot display. You can use the mc schema as part of the dynamic content spot URI. The schema is defined in the following example, `mc:module-id@delegate-uri`.

The module-id is the module this URI is tested for. If the module is enabled, the dynamic content spot is rendered. The delegate-uri represents the dynamic content spot URI.

In the Portal 8.5 theme, the status bar component renders error, warning, or informational messages.

In the theme HTML template, the status bar component is rendered with the following dynamic content spot.

```
<a rel="dynamic-content" href="dyn-cs:id:85theme_status"></a>
```

This dynamic content spot maps to the following URI through the system module for the Portal 8.5 theme:

```
'wp_dynamicContentSpots_85': mc:wp_status_bar@res:{war:context-root}/themes/html/dynamicSpots/status.jsp.
```

The wp\_status\_bar module contains the JavaScript resources necessary to display the messages. The markup renders when the module is active.


