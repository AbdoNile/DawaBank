"use strict"

var error_handler = {
    register_error_handlers : function(app){

        app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.json(err);
        });
    } ,

    register_not_found : function(app){
        app.use(function(req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }
}

module.exports = error_handler;
