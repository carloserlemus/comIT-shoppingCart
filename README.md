# This is a shopping cart site example.

With that boilerplate you should run a simple e-commerce platform.

We'll be using node JS, express, mongodb, pug, mongoose.

Feel Free to submit any pull requests.

------------------------------------------------

Steps to Create Project.

1. Initiate Git Hub Repo
2. Add Readme file describing the project.
3. Install dependencies: express, pug, mongoose.
4. Generate a package.json
5. Edit the package.json such that the start script refers to nodemon.
6. Add a .gitignore file to ignore the node_modules folder.
7. Create the first end point so that we can display the API.
8. Use express to create a server listening to port 3000.
    HINT: Requires GET and LISTEN methods.
9. Create a module for the root directory.
    HINT: requires importing and exporting.
10. Introduce Pug 
    HINT: requires middleware and 'views' folder.
11. Create a file to which all pug files refer to
    HINT: layout.pug and extends
12. Refer to a CSS file in PUG.
    HINT: express method, public folder and a use method...

    OPTIONAL: ADDING BOOTSTRAP.
        1. Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS. [Link provided by bootstrap website.]
        
        NOTE: use HTML TO PUG converter to make this process faster.

        2. You can install bootstrap examples into the pug file.

13. Create a new page: routes, views, and updating the index.js
14. Reduce duplication with layout.pug.
15. Add a gallery in the home view.
    HINT: Use bootstrap or other resources!

16. Evaluating our data structure...
    What information do we offer and can be used?
        Name, Description, Price, and Rating.

        Create an object in the home page that holds all the pertinent
        information and send it via the res.render method.

        res.render(views, optional param)
        It accepts an optional parameter that is an object containing local variables for the view

        example res.render ('home', {object})

        note: {object} is the same as {objectX: objectY}
        Where objectX is passed to the view with the property of the object we defined.
17. Convert the product object into an array of objects.
18. Create some logic in pug that iterates over all the objects in the array such that we can use it to reference data.
19. Creating A New End Point of ADMIN
    HINT: ROUTE AND VIEW
20. Create a New End Point.. Admin/index and admin/create.
    HINT: When restructuring and adding separate folders, be aware that extends will require some logic to navigate to the 
        layout.pug
21. Update and Delete
    HINT: 1. ROUTES. 2. VIEWS.

22. Introducing the DataBase
    Login to Mongodb Atlas and get the information required

    example: mongodb://carloslemus:<password>@cerl-shard-00-00-newbx.mongodb.net:27017,cerl-shard-00-01-newbx.mongodb.net:27017,cerl-shard-00-02-newbx.mongodb.net:27017/test?ssl=true&replicaSet=CERL-shard-0&authSource=admin&retryWrites=true&w=majority

    Go to the admin.js

    bind a const url to const url = "mongodb://carloslemus:<password>@cerl-shard-00-00-newbx.mongodb.net:27017,cerl-shard-00-01-newbx.mongodb.net:27017,cerl-shard-00-02-newbx.mongodb.net:27017/test?ssl=true&replicaSet=CERL-shard-0&authSource=admin&retryWrites=true&w=majority"

    replace test with app name.. in this case shoppingcart (printshop)

    make sure mongoose dependancy is installed.

    IMPLEMENTATION OF MONGOOSE

    first require it
    then declare the url

    then
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    NEXT
    We must create a MODEL
            const printModel = mongoose.model('Print', {
                name: String,
                desc: String,
                price: Number,
                rating: Number,
                image: String
            })
    NEXT
    We need to query it? We need to remember async.
    ...

    Install Body Parser





    





