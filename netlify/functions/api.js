const data = require('../../db.json');

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }

    const { path } = event;
    const [, resource, id] = path.split('/');

    if (resource === 'produtos') {
      if (id) {
        const produto = data.produtos.find(item => item.titulo.toLowerCase().replace(/\s/g, '-') === id);
        if (!produto) {
          return {
            statusCode: 404,
            body: 'Produto not found',
          };
        }
        return {
          statusCode: 200,
          body: JSON.stringify(produto),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(data.produtos),
        };
      }
    }

    return {
      statusCode: 404,
      body: 'Not Found',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
