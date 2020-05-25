# C19_simulation

## Technologies
  * JavaScript
  * HTML5
  * CSS3
  * Webpack
  * CanvasJS
  
## About

C19 Simulation is an interactive data visualization app put together with basic JavaScript and Canvas. 

![alt text](https://github.com/Arno-co/C19_simulation/blob/master/images/C19_full_screen.png "C19 Simulation")

This simple simulation shows the spread of an infection with 2 different factors: the population density and the social distancing.

The citizens applying the social distancing rules are fixed objects (in green) while the other are still moving at constant speed (in blue).

The virus starts spreading via the patient zero (in red) and the speed of the spread is vsualized by the infected citizens changing colors to red.
  
  [C19 Simulation Live Demo](https://arno-co.github.io/C19_simulation/)
  
## Features
* Users can interact with the 2 variables using slide bars, changing the density and / or the percentage of citizens applying social distancing.
* The simulation stops once 99% of the population has been infected.
* Users can stop the simulation and change the variables to start a new one with different data.

![alt text](https://github.com/Arno-co/C19_simulation/blob/master/images/C19.gif "C19 Simulation")

### Setting up
Please run the following command:
```
npm install
```

### Running the app
Please run the following command:

```
npm run webpack --watch --mode=development
```
Copy the path of the `index.html` file on the root folder and paste it in your browser.



