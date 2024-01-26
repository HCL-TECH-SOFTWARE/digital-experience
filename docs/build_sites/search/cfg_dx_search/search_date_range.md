# Searching by date and date ranges

You can search documents by date and date ranges. The used date formats can be changed by the Portal administrator. Dates can be specified using the format YYYY-MM-DD. You can also specify the time with the date by using the format YYYY-MM-DD,hh:mm. This format finds the following:

- Documents that were updated on the specified day, or
- Documents that were updated on the specified day and time

The following example shows which search terms are supported.

Date range: #update_date::>=2014-10-14<2014-10-19

This date range finds all documents that were updated between the two specified dates. Documents that were updated between and including October 14, 2014 and excluding October 19, 2014 are returned. Range queries support the following operators:

- '>' (greater)
- '>=' (greater equal)
- '<' (less than)
- '<=' (less or equal)

For example, if you want to find all status reports from 2014, the query must be "status reports" #creation_date::>=2014-01-01<2015-01-01.

The following parameters on the search service are used:

|Parameter|Description|Default|
|---------|-----------|-------|
|`dateFieldPattern`|Specifies a regular exp that is used to check if a field name is a date field|.*date$|
|`dateFormat`|A date format specified using the ICU SimpleDateFormat pattern|yyyy-MM-dd|
|`dateTimeFormat`|A date format with a time part specified using the ICU SimpleDateFormat pattern|yyyy-MM-dd,HH:mm|
|`dateFormatLocale`|The locale that should be used for the date parsing given as an ICU ULocale LocaleID.|Portal default locale for local search. For remote search, the default locale of the JVM.|