# Multilingual design content

To support multiple languages for the users of your website, it is necessary to use the Multilingual Solution. This solution requires separate CTC Content libraries for each language in your site.

The content of a website varies between the different languages in your site. The CTC Design and CTC Process library are translated, since these assets can be shared between multiple locales. To achieve this, the title and descriptions of the libraries, and all of the items in the libraries, store translated text as text providers. These text providers point to external Java property bundle files that are translated into each language. For more information on text providers, see the Web Content Manager documentation.

In addition, the content of the design items is also translated. Here, the CTC Design Translations plug-in is used to point from the item to the key in the Java bundle file that contains the translation. For more information, see [CTC Design Translations plug-in](ctc_arch_plugins_trans.md). In this way, content authors see the design content in their own language. This pattern can be copied for creating your own custom design content.

When you use the Multilingual Solution to translate your site content, both the site content and site design content are presented in the correct language to your site visitors.

**Parent topic:**[Development processes](../ctc/ctc_deploy_dev.md)

