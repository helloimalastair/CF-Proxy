import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'
import User from '../Durables/User'

export {User} from "../Durables/User"



export default class UserLookup extends OpenAPIRoute {
    static schema = {
      tags: ['User'],
      summary: 'Get a user object',
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
      
      let id = env.USER.idFromName("A");

      //fetch a task using the brandSlug
      let Obj=env.USER.get("count")

      let newCount = Obj.add(4,5)
  
      return new Response( await newCount, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );
    }
  }