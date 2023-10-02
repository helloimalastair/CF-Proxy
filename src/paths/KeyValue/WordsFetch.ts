import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

export default class WordsFetch extends OpenAPIRoute {
    static schema = {
      tags: ['Config'],
      summary: 'Get a list of words for the rewordle post type',
      parameters: {
      },
      responses: {
        '200': {
          schema: {
            brand: {}
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
      
      //fetch a task using the brandSlug
      let id=env.CONFIG.get("words", { type: "text" })
  
      return new Response( await id, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );
    }
  }