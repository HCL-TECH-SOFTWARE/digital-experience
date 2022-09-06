---
id: wcm_reference-dates
title: Set Parameters to Format Dates
---

# Set Parameters to Format Dates

These parameters are used to set the format of dates.

|Symbol|Meaning|Presentation|Example|
|------|-------|------------|-------|
|`G`|era designator|\(Text\)|AD|
|`y`|year|\(Number\)|1996|
|`M`|month in year|\(Text and Number\)|July and 07|
|`d`|day in month|\(Number\)|10|
|`h`|hour in am/pm \(1-12\)|\(Number\)|12|
|`H`|hour in day \(0-23\)|\(Number\)|0|
|`m`|minute in hour|\(Number\)|30|
|`s`|second in minute|\(Number\)|55|
|`S`|millisecond|\(Number\)|978|
|`E`|day in week|\(Text\)|Tuesday|
|`D`|day in year|\(Number\)|189|
|`F`|day of week in month|\(Number\)|2 \(2nd Wed in July\)|
|`w`|week in year|\(Number\)|27|
|`W`|week in month|\(Number\)|2|
|`a`|am/pm marker|\(Text\)|PM|
|`k`|hour in day \(1-24\)|\(Number\)|24|
|`K`|hour in am/pm \(0-11\)|\(Number\)|0|
|`z`|time zone|\(Text\)|Pacific Standard Time|
|`'`|escape for text|\(Delimiter\)| |
|`''`|single quotation mark|\(Literal\)| |

**The number of letters determines format:**

-   **Text**

    -   Four or more pattern letters, use full form.
    -   Less than four, use short or abbreviated form if one exists.
    -   **Example: Day/Month/Year**

        -   d,M,y = 3,3,3.
        -   dd,MM,yy = 03,03,03.
        -   dd,MMM,yy = 03,Mar,03.
        -   dd,MMMM,yyyy = 03,March,2003.

**Lowercase and uppercase:**

-   The case of letters that are used in date and time code is not consistent. For example, "M" for month but "d" for day and "y" for year.
-   Uppercase and lowercase letters can mean different things. For example, "s" for second and "S" for millisecond.

**Incorrect format:**

If a date or time code is entered incorrectly, nothing is returned.

**Other characters:**

Any characters in the pattern that are not in the ranges of \['a'..'z'\] and \['A'..'Z'\] is treated as quoted text. For example, characters like ':', '.', ' ', '\#' and '@' appear in the resulting time text even if they are not embraced within single quotation marks.

## Examples Using the US locale:

|Format Pattern|Result|
|--------------|------|
|`"yyyy.MM.dd G 'at' hh:mm:ss z"`|1996.07.10 AD at 15:08:56 PDT|
|`"EEE, MMM d, ''yy"`|Wed, July 10, '96|
|`"h:mm a"`|12:08 PM|
|`"hh 'o''clock' a, zzzz"`|12 o'clock PM, Pacific Standard Time|
|`"K:mm a, z"`|0:00 PM, PST|
|`"yyyyy.MMMMM.dd GGG hh:mm aaa"`|1996.July.10 AD 12:08 PM|

