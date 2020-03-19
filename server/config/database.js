//Here we have all the methods and one of them is the connections
const Sequeslize = require('sequeslize');
//Create a new connection into the database
/**
 * Windows:
 * const sequeslize = new Sequeslize('ravelagency', 'root', '' [,{options}])
 * Mac:
 * const sequeslize = new Sequeslize('ravelagency', 'root', 'root')
 * **Except you define the user name and password for the database
 */
const sequeslize = new Sequeslize('ravelagency', 'root', {
   