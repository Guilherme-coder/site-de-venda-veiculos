class Image {

    async getBase64(file) {
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function() { resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async makeArray64(array) {
        var arrayResult = []
        for(var i = 0 ; i < array.length ; i++) {
            arrayResult.push(await this.getBase64(array[i]))
        }
        return arrayResult
    }

    async exec(array) {
        var arrayResolv = await this.makeArray64(array)
        return arrayResolv
    }
}

module.exports = new Image