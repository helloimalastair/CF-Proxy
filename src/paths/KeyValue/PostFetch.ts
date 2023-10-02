import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

export default class PostFetch extends OpenAPIRoute {
    static schema = {
      tags: ["Post"],
      summary: 'Get a post based by postID',
      parameters: {
        postID: Path(Str, {
          description: 'post id',
        }),
      },
    responses: {
        '200': {
          schema: {
            post: {}
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
      
      let postID = request.params.postID
  
  
      //fetch a task using the brandSlug
      let id = env.POSTS.get(postID, { type: "text" })
  
      //let json = JSON.stringify(await id, null, 2);
  
      return new Response( await id, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );
    }
  }