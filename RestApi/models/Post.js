const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
main:{
    type: String,
    required: true
}
})
module.exports = mongoose.model('Posts', PostSchema)