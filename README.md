# React-TimeSeries (reuseable dropdown component)
A simple React App which displays multiple performance projection time series in a table as well as in a chart. This app mainly demostrates reuseable dropdown component in React

## Installation 
Create clone of the repository and then use command 'npm install' followed by 'npm start' inside root folder to start the app.
The terminal will show both local and network URL (to test the app on mobile device).


## Features
- Inside menu.js, Navlink is used to highlight current active element using activeClassName
- table.js file includes state in constructor and then uses fetch function to request the data from API. The loaded data is assigned to state.
- data is being loaded using api call configured using webpack
- In chart.js file drawChart() function is called as callback of setState() to ensure data is assigned to state variable before it is used.
- Created a reusable generic component called Dropdown.js
- Imported Dropdown component in app.js and added 2 new components for “Initial investment” and “Monthly sum”. 
- Existing component “Risk level selector” is commented out in app.js as it can also be generated using Dropdown generic component.  
- 2 properties (initialSum, monthlySum) are included in state of app component and then replaced onChangeRiskLevel to the generic one onChangeDropdown
- 2 props (initialSum, monthlySum)  are passed down to Table and Chart components
- Added CSS classes to various elements for styling
- Created stylesheet app.css in public folder and added its reference in index.html 
