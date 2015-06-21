/**
 * Allow any authenticated user.
 *
 */
module.exports = function(req, res, ok) {
    if (req.session.authenticated){
        return ok();
    } else {
        var requiresLoginError = [{name : 'requireLogin', message : 'You must be signed in.'}];
        req.session.flash = {
            err: requiresLoginError
        }
        res.redirect('/session/new');
        return;
    }
  
};
