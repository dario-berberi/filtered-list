# A website that takes selections from the user and returns the best matches

The user has to choose one or more options from the drop down lists which contains different countries and areas.
After selecting the user has to click show results and the section under will display the top 2 matches based on the selections
also a full list of companies that operate in the selected countries  

## Used libraies

 ### `react-select`
 Start by installing react-select

    yarn add react-select
    
    or

    npm i --save react-select

Import the default export and render in your component:

    import React from 'react'
    import Select from 'react-select'

    const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
    ]

    const MyComponent = () => (
        <Select options={options} />
    )

check out [full documentation](https://react-select.com/home)\ 

## Possible upgrades and optimization
    Access area names directly from the state
    Expand the top companies to gain more detailed information 
