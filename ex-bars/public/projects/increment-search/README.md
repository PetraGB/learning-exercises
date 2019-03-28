1. input (text field)

    - get the value that is in the text field
    - if the value in the text field is an empty string, empty/hide the results
    - loop through all of the countries and build a list of countries that start with the value that is in the text field
    - if there are no matches, show the "no results" message
    - if there are matches, loop through them and generate html for them. after generating html for them, put the html in your results element and show it.

2. mouseover (individual result elements)

    - remove the highlight from the result element that has it
    - add the highlight to the event target

3. mousedown (individual result elements)

    - put the text contained by the event target (the element that has the highlight) into the text field
    - empty/hide the results

4. keydown (text field)

    - if the key is the down arrow

        - if no result elements have the highlight, add the highlight to the first result
        - if any result element other than the last one has the highlight, remove the highlight from the result that has it and add it to the next one
        - if the last result has the highlight, do nothing

    - if the key is the up arrow

        - if no result elements have the highlight, add the highlight to the last result
        - if any result element other than the first one has the highlight, remove the highlight from the result that has it and add it to the previous one
        - if the first result has the highlight, do nothing

    - if the key is enter
        - put the text contained by the element that has the highlight into the text field
        - hide/empty the results

5. focus (text field)

    - show appropriate results
        - if your results element is not empty, you can just show it
        - alternatively, you can do exactly what you do when an input event occurs

6. blur (text field)
    - hide/empty the results
