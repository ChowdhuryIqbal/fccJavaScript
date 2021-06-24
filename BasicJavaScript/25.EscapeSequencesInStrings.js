/*
    we can use backslash ('\') to escape other sequences in Strings as well

    \'  single quote
    \"  double quote
    \\  backslash (backslash is requited to output the backslash character itself)
    \n  newline
    \r  carriage return
    \t  tab
    \b  word boundary
    \f  form feed
*/

/*
    make a string output like this:
        FirstLine
            \SecondLine
        ThirdLine
    note: there should be no space in your string, only escape sequences can do the task
*/
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine' // Change this line