// export view controller
module.exports = function(app){

    // define form page
    app.get('/form', function(req, res){
        res.render('form');
    });

    // define view data page
    app.get('/view', function(req, res){
        res.render('viewData');
    });

    // define update data page
    app.get('/update', function(req, res){
        res.render('updateData');
    });

    // define delete data page
    app.get('/delete', function(req, res){
        res.render('deleteData');
    });

}