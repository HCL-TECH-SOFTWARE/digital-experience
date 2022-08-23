# Sharing page components in a branch

The basic case for sharing a page component configuration is across an index and details page. All of the page templates are set up this way – with page components often being reused across the two pages. You can do the same thing by creating a page component configuration first on an index page, and then referencing it on a details page.

In many instances, you might want to share a page component configuration more broadly than just over an index and details page. You might want to share a page component across a whole branch of the site, as you would if you shared a whole set of index pages under the same landing page.

This is easily implemented by creating the components on a landing page that covers the areas you want to share across, and then referencing the page component configurations that get created on all the index and details pages under that landing area. You could also include child landing pages if there are hierarchical landing pages in this branch of the site.

If there are page component configurations on the child pages that you no longer want to use, because they are getting replaced by the shared page components, then note down the names and locations of each of these page component configurations and remove them using the HCL Web Content Manager authoring portlet.


