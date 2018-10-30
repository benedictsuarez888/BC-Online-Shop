# BC-Online-Shop
An Online Shop application made from Node.js.

# Database
MySQL Server 
"bconlineshop.sql" is the SQL File that we used in the application. The file is located in the root directory of the project.

Update: 
Removed the MySQL Integration changed with a Simple JSON Store.

# How to Run the Application?
1. Go to your Terminal or Command Prompt.
2. Go to the specific folder where you want to save the project.
4. Run this command "git clone https://github.com/benedictsuarez888/BC-Online-Shop" without quotation marks.
5. Go inside the folder of the project.
6. Get the "bconlineshop.sql" file and "Data Import/Restore" it to your MySQL Workbench or to your PhpMyAdmin.
7. Take note the set-up of the MySQL Server. Like the host, user, password, port, and the db(name of the schema).
7. Go to the root directory of the project and look to the "config.js".
8. Open the "config.js" and enter the needed configuration of your MySQL Server under the 'database' key. Do not change anything to 'server' key the default configuration will do. 
9. Run this command "npm install --save body-parser express express-myconnection express-validator method-override morgan mysql path pug request". If you get an error, just install a package by 4 only using also the npm install.
10. Run "node index.js" to your terminal.
11. Go to your browser and go to "http://localhost:8000/".

Thank you.
