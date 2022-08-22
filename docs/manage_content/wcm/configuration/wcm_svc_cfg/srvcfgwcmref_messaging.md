# Web Content Manager messaging service

The HCL Web Content Manager messaging service \(WCM MessagingService\) defines settings for enabling the Java messaging services for web content.

-   **topic.publishing.enabled**

    This must be set to true to enable message generation and delivery.

    Default value: `false`

-   **items.topic.publishing.enabled**

    Indicates whether item topics are published. This must be set to true to enable messages for item state changes.

    Default value: `true`

-   **syndication.topic.publishing.enabled**

    Indicates whether syndication topics are published. This must be set to true to enable messages for the status of syndication.

    Default value: `true`

-   **prerender.topic.publishing.enabled**

    Indicates whether pre-render topics are published. This must be set to true to enable messages for the status of pre-rendering.

    Default value: `true`

-   **items.topic.name**

    The JNDI name of the JMS topic for status changes.

    Format for item state changes: jms/IWKTopics/Items

    Format for syndication state changes: jms/IWKTopics/Syndication

    Format for pre-rendering state changes: jms/IWKTopics/PreRender

    Default value: None

-   **topic.connection.secure**

    Set to true to enable secure topic connections. You must also set username and password.

    Default value: `false`

-   **topic.connection.secure.username**

    Username for secure topic connections.

-   **topic.connection.secure.password**

    A clear text or encoded password for secure topic connections. The password can be encoded using the PropFilePasswordEncoder task.



