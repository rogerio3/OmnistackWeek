const connection = require("../database/conection");

module.exports = {
    async create(request, response){
        var { id }  = request.body;
        console.log(request.body);

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({error: 'No ONG found with this ID'});

        }
        return response.json(ong);
    }
}