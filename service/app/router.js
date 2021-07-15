'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
   const {router, controller} = app;
   var adminauth = app.middleware.adminauth()
   router.get('/', controller.home.index);
   router.get('/default/getArticleList', controller.home.getArticleList);
   router.get('/default/getTypeInfo', controller.home.getTypeInfo);
   router.get('/default/getArticleById/:id', controller.home.getArticleById);
   router.get('/default/getListById', controller.home.getListById);
   router.post('/admin/checkLogin', controller.admin.main.checkLogin)
   router.get('/admin/getTypeInfo', controller.admin.main.getTypeInfo)
   router.post('/admin/addArticle', controller.admin.main.addArticle)
   router.post('/admin/updateArticle', controller.admin.main.updateArticle)
   router.get('/admin/getArticleList',controller.admin.main.getArticleList)
   router.get('/admin/delArticle/:id',controller.admin.main.delArticle)
   router.get('/admin/getArticleById/:id',controller.admin.main.getArticleById)

};
