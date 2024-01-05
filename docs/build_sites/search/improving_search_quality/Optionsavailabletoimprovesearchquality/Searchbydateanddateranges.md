# Search by date and date ranges

You can search documents by date and date ranges. The used date formats can be changed by the HCL DX administrator. Dates can be specified by using the format **yyyy-MM-dd**. You can also specify the time as well as the date by using the format **yyyy-MM-dd,hh:mm**. The following examples show which search terms are supported:

Date: update_date: "yyyy-MM-dd" or update_date:"yyyy-MM-dd,hh:mm"

- Finds all documents that were updated on the specified day, or

- Finds all documents that were updated on the specified day and time

Date range: #update_date::>=2014-10-14<2014-10-19

- Finds all documents that were updated between the two specified dates: documents that were updated between and including October 14, 2014 and October 19, 2014(excluded) would be returned. Range queries support the following operators:

    - '>' (greater)
    - '>=' (greater equal)
    - '<' (less than)
    - '<=' (less or equal)

Example: “find all status reports from 2014”
query: "status reports" #creation_date::>=2014-01-01<2015-01-01

The following parameters on the search service are used:

    - dateFieldPattern
    - specifies a regular exp that is used to check if a field name is a date field
    - default: .*date$
    - dateFormat

- A date format specified using the ICU SimpleDateFormat pattern

    - default: yyyy-MM-dd

    - dateTimeFormat

- A date format with a time part specified using the ICU SimpleDateFormat pattern.

    - default: yyyy-MM-dd,HH:mm

    - dateFormatLocale

The locale that should be used for the date parsing given as a `ICU ULocale LocaleID`.
Portal default locale for local search. For remote search the default is locale of the JVM.