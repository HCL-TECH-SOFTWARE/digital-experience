# Migrating themes

When migrating themes that were developed in an earlier version, you must be aware of general guidelines, differences, and known issues.

With HCL Digital Experience 8.5, the new modularized theme provides a flexible framework that minimizes download size by giving you the control to specify just the capabilities that are needed for a certain scenario or use case and also minimizes the number of requests by combining necessary resources.

Previous themes required a monolithic design and that the same content was downloaded for every page. Theme optimization allows the theme to be highly adaptive to the content you are displaying on certain pages. For example, on pages where only simple content is displayed you can define a lightweight profile. A lightweight profile causes the system to download few static resources such as JavaScript™ and CSS files. However, on pages where more advanced scenarios are required you can choose to switch to a more powerful profile that causes more resources to download than on the other pages. This way you have only the capabilities you need on certain pages, but all other pages do not pay the penalty. As a result the overall system performance increases significantly.

When you migrate your themes, be aware of the following considerations:

-   Migration moves your existing themes to the new server. Migration does not upgrade themes from an earlier version to use new functionality that is introduced in more recent versions of the product.
-   You can update an existing Portal 7.0.0.2 theme to use Dojo 1.7, OneUI 3.0 and the status bar. An updated Portal 7.0.0.2 theme can use all of the new version 8 modularization features.


