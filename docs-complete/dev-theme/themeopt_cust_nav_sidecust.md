# Customizing side navigation 

You can customize your side navigation by scoping styles specifically to the side navigation template or changing the width of the side navigation area or main content area.

## Scoping styles to the side navigation template

You can scope styles specifically to the side navigation template so you do not need to include different styles between templates. By default, the template applies the CSS class wpthemeSplitView to the HTML body element. This class can be used in the CSS to scope styles and is demonstrated in the sideNav.css.

Example:

```
.wpthemeSplitView .someStyle { color: #000; }
```

This style demonstrates that it applies only to the element with someStyle class when the side navigation template is applied.

## Change the width of the navigation and main content

You can change the width of the side navigation area or main content area by modifying the styles. The applicable styles are:

```
.wpthemeSplitView .wpthemeFrame { 
min-width: 1225px;
}
	 
.wpthemeSplitView .wpthemeMainContent > div {
width: 1135px;
}
	 
.wpthemeSplitView .wpthemeLayoutContainers {
width: 850px;
}
	 
.wpthemeSideNavigation {
width: 275px; 
margin: 10px 10px 10px 0;
}
```

## Change the layout container width

The ready-to-use layout templates have specific side navigation styles applied. If you change the width of the main content, you need to adapt the layouts. These styles are also in the sideNav.css file. The applicable styles are:

```
.wpthemeSplitView .wptheme1Col .wpthemeCol {width:850px;}
.wpthemeSplitView .wptheme2Col .wpthemeCol {width:400px;}
.wpthemeSplitView .wptheme3Col .wpthemeCol {width:260px;}
.wpthemeSplitView .wptheme2Col.wpthemeUnequal .wpthemePrimaryContainer {width:545px;}
.wpthemeSplitView .wptheme2Col.wpthemeUnequal .wpthemeSecondaryContainer {width:260px;}
.wpthemeSplitView .wptheme3Col.wpthemeUnequal .wpthemePrimaryContainer {width:434px;}
.wpthemeSplitView .wptheme3Col.wpthemeUnequal .wpthemeSecondaryContainer,
.wpthemeSplitView .wptheme3Col.wpthemeUnequal .wpthemeTertiaryContainer {width:175px;}
.wpthemeSplitView .wpthemeTopCol .wpthemeHeadlineContainer {width: 830px; margin-right: 15px; margin-bottom: 20px;}
.wpthemeSplitView .wpthemeRow {margin: 0 0 20px 20px;}
.wpthemeSplitView #layoutContainers .layoutRow .layoutColumn .component-control { width: 850px; }
```

**Parent topic:**[Side navigation ](../dev-theme/themeopt_cust_nav_side.md)

