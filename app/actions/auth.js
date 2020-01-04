
// --------------------Sample code for auth file for signup action--------------------

// const {
//     findUserByUserName,
//     findUserByID,
//     getUserProjects
// } = require('./users');

// function signup(data) {
//     return validateSignupData(data).then((err) => {
//         return err ? (
//             Promise.reject(err)
//         ) : (
//         findUserByUserName(data.username).then(async (user) => user ? (
//             customErrorShape({username: 'User with this username already exists'})
//         ) : (
//             table('users').insert({
//                 username: data.username,
//                 password: await new Promise((resolve) => bcrypt.hash(data.password, 10, (_, hash) => resolve(hash)))
//                 })
//             ))
//         );
//     });
// }