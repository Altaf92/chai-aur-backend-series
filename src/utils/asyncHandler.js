const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(req, res, next).catch((error)=> next(err))
    }
}




export {asyncHandler}



// using try catch block 

// const asyncHandler = () => {}
// const asyncHandler = (function) async => () =>{}

// const asyncHandler = (fn) => (req, res, next) => {
//     try {
//         await fn(req, res, next) {

//         }
//     } catch(error) {
//         res.status(err.code || 500).json({
//             success: false, 
//             message: err.message
//         })
//     }
// }