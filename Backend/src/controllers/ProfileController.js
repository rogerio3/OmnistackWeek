const connection = require("../database/conection");

module.exports = {
  async ListOngCases(request, response) {
    const ong_id = request.headers.authorization;

    const cases = connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  }
};
