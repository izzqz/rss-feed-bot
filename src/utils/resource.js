const Resource = new mongoose.Schema({
    url: String,
    subscribers: [String]
})

Resource.method.getAll = function() {
    this.find({}).map(r => r.url)
}

module.exports = Resource