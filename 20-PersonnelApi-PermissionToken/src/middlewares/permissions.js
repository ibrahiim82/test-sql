"use strict"

module.exports = {
isLogin : (req, res, next) => {
    if(req.user && req.user.isActive) {
        next()
    }else{
        res.errorStatusCode = 403
        throw new Error("NoPermission : You must login.")
    }
},
isAdmin : (req,res,next)=>{
    if(req.user && req.user.isActive && req.user.isAdmin){
        next()
    }else{
        throw new Error("NoPermission : You must login adn to be Admin")
    }
},
isAdminorLead : (req,res,next)=> {
    if(
        req.user && req.user.isActive &&  (req.user.isAdmin || (req.user.isLead && req.user.departmentId === departmentId))
    ){
        next()
    }else{
        req.errorStatusCode = 403;
        throw new Error("NoPermission: You must login to be Admin or DepartmentLead")
    }
}




}