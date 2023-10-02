import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

const Slugs = {"woo":"JLTFX2EOIUFJTUE7XIUPEE4FSSVXNXOMLBRLTWRKWNWZIN4ROKKSHZX3UQ"}  

export default class SlugLookup extends OpenAPIRoute {
  static schema = {
    tags: ['Slugs'],
    summary: 'Get the ids based on slugs',
    parameters: {
      brandSlugLetter: Path(Str, {
        description: 'brand slug',
      }),
    },
  responses: {
      '200': {
        schema: {
          brandSlugLetter: {Slugs}
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
    
    let keyName = "slugs-" + request.params.brandSlugLetter

    //fetch a task using the brandSlug
    let id=env.SLUGS.get(keyName, { type: "text" })

    return new Response( await id, {
      headers: {
        'Content-type': 'application/json',
        ...corsHeaders //uses the spread operator to include the CORS headers.
      }
    } );
  }
}