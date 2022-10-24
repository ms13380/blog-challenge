const user = require('./user');

const pot = require('./post');

const comment = require('./comment');


user.many(post, {
    foreignkey: 'userid
    
});

post.belongsTo(user, {

    foreignkey: 'userid',
    
});

comment.belongsTo(user, {

    foreignKey: 'user_id'
    
  });
  
comment.belongsTo(post, {
    foreignkey: 'postid'
    
});
  
user.hasMany(comment, {
    foreignkey: 'userid'
    
});
  
post.hasMany(comment, {
    foreignkey: 'postid'
    
});

module.exports = {user, post, comment};
