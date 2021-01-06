# blog-backend-images


    After doing the above steps run the application server by using the following command :-

    npm run dev

    Now open the Mongodb ( you can use mongodb compass ).

    For the installation you can refer this guide https://docs.mongodb.com/manual/installation/

    After installing create the database. Now get the connection string for your database and paste it in the config.env file.

    Then you need to open the POSTMAN, if you dont know what the POSTMAN is it is basically a S/W application which helps us to test the API's.

    For the installation and usage you can refer this guide https://www.postman.com/downloads/

    Click on Add request to make a request to the server.

    To test the blog application therse are several request you can perform.

 .To GET all the blogs [ GET REQUEST ]

       http://localhost:3000/blogs/

 . To GET the blog specify the id of the blog [ GET REQUEST ]

     http://localhost:3000/blogs/1

  . To create blog  [ POST REQUEST ]

     http://localhost:3000/blogs/createblog
     

Note:Select body with raw data and add  such as author,title,content and choose json file type

  . To create blog with image upload  [ POST REQUEST ]
      
     http://localhost:3000/blogs/imgupload
  Note:Select body with form-data and add author,title,content,image  and choose and image from local storage
     

   . To DELETE the blog specify the id of the task [ DELETE REQUEST ]

     http://localhost:3000/blogs/3

Technologies and tools used

    JavaScript
    Nodejs
    Express
    POSTMAN
    MongoDb
