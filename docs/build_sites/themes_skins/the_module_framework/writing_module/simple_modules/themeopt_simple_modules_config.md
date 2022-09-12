# Config contribution

The CONFIG folder contains files that are served as config contribution through the resource aggregator framework. Those resources are usually before the closing body tag.

## Folder: /module-id/config

The following section provides a complete list of supported files within the config section.

-   **/module-id/config**

    Files that are stored in this directory are served in the config section of the resource aggregator.

    -   **/config/\*.js**

        JavaScript files are served in alphabetical order. They are grouped by file name and if they have the same name they belong to the same group. Within this group, the following extension variations exist. There are two sets of six resources. The sets cannot be mixed.

        -   **\*.js**

            Defines the main compressed JavaScript content.

        -   **\*.js.uncompressed.js**

            Defines the main debug JavaScript content.

        -   **\*.rtl.js**

            Defines the compressed JavaScript to be used for right-to-left languages.

        -   **\*.rtl.js.uncompressed.js**

            Defines the debug JavaScript to be used for right-to-left languages.

        -   **\*.locale.js**

            Defines the compressed JavaScript content for a specific language. Replace locale and with the local representing code for the location. For example, for the United States, use `en_us`.

        -   **\*.locale.js.uncompressed.js**

            Defines the debug JavaScript content for a specific language. Replace locale and with the local representing code for the location. For example, for the United States, use `en_us`.

        The following group is an alternative. You can use either of these variation group, but you cannot mix them.

        -   **\*.min.js**

            Defines the main compressed JavaScript content.

        -   **\*.js**

            Defines the main debug JavaScript content.

        -   **\*.rtl.min.js**

            Defines the compressed JavaScript to be used for right-to-left languages.

        -   **\*.rtl.js**

            Defines the debug JavaScript to be used for right-to-left languages.

        -   **\*.locale.min.js**

            Defines the compressed JavaScript content for a specific language. Replace locale and with the local representing code for the location. For example, for the United States, use `en_us`.

        -   **\*.locale.js**

            Defines the debug JavaScript content for a specific language. Replace locale and with the local representing code for the location. For example, for the United States, use `en_us`.

    -   **/config/\*.html**

        HTML files are served in alphabetical order. They are grouped by file name and if they have the same name they belong to the same group. Within a group, the following extension variations exist.

        -   **\*.html**

            Defines the main HTML content.

        -   **\*.rtl.html**

            Defines the HTML to be used for right-to-left languages.

        -   **\*.locale.html**

            Defines the HTML content for a specific language. Replace locale with the local representing code for the location. For example, for the United States, use en\_us.

    -   **/config/device-class-name**

        This optional directory scopes the resources by device class. You can use one individual device class, but it has no equation support for the directory or the files in it. You can scope the contribution to a particular device class when the incoming request is recognized as a device class name. This contribution can include JavaScript, HTML, or CSS. See the previous sections for more information.



