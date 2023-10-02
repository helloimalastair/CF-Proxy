import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

const Brand = {
    "senderID": "JLTFX2EOIUFJTUE7XIUPEE4FSSVXNXOMLBRLTWRKWNWZIN4ROKKSHZX3UQ",
    "brandName": "woo",
    "slug": "woo",
    "description": "Description 2",
    "taxonomy": [21, 19, 13, 12, 6, 22, 8],
    "twitter": "shrinerp",
    "asaid": 1164218848,
    "asaName": "Collie",
    "logoCid": "bafybeibatfjnbrhlbqk5aqzwzicb6icqqmhzk2fwgndbg3v25xstlxpjue",
    "backgroundCid": "bafybeidkywjdx2pghnp42z7vd366zyiwlm67yuha6nkhililkui2tqvonq"
  }

export default class BrandFetch extends OpenAPIRoute {
    static schema = {
      tags: ['Brand'],
      summary: 'Get a single Brand by ID',
      parameters: {
        brandID: Path(Str, {
          description: 'brand id',
        }),
      },
      responses: {
        '200': {
          schema: {
            brand: {Brand}
          },
        },
      },
    }
  
    async handle(request: Request, env: any, context: any, data: any ) {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      };
  
      if (request.method === "OPTIONS") {
        return new Response("OK", {
          headers: corsHeaders
        });
      }
  
      
      //path
      let slug = request.params.brandID
  
      // Actually fetch a task using the brandSlug
      let id=env.BRAND.get(slug , { type: "json" })
  
      let json = JSON.stringify(await id, null, 2);
  
      return new Response( await json, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );  }
  }