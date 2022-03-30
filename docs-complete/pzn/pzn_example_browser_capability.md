# Example: Browser capability 

The browser capability stock object allows you to profile the browser the current Web visitor is using to view your site.

When using the browser capability stock object, there is a finite list of attributes available, but you must type the values for one side of the evaluation. The browser capability script files and the SinglePixel.gif image must be properly configured in the Web application.

The following example profiler checks the browser version to determine whether it is supported. Other possible checks include available plug-ins, whether Java is enabled, and whether cookies are enabled.

```
Check Browser is
  	     supported when
  	        (
  	          (
  	           current Browser Capability.BrowserType is Netscape and
  	           current Browser Capability.FullVersion is greater than or equal to 6.2
  	          ) or
  	          (
  	           current Browser Capability.BrowserType is Internet Explorer and
  	           current Browser Capability.FullVersion is greater than or equal to 6.0
  	          )
  	        )
  	    Otherwise unsupported
```

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

**Parent topic:**[Profilers ](../pzn/pzn_profilers.md)

