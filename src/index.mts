import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'

import PostFetch from "./paths/KeyValue/PostFetch";
import SlugLookup from "./paths/KeyValue/SlugLookup";
import WordsFetch from "./paths/KeyValue/WordsFetch";
import TaxonomyFetch from "./paths/KeyValue/TaxonomyFetch";
import FeedsFetch from "./paths/KeyValue/FeedsFetch";
import BrandFetch from "./paths/KeyValue/BrandFetch";

import UserLookup from "./paths/DOGetters/UserLookup";

export { default as User } from "./paths/Durables/User";


const router = OpenAPIRouter()

//KV
router.get('/api/config/taxonomy', TaxonomyFetch)
router.get('/api/config/words', WordsFetch)
router.get('/api/brands/:brandID/', BrandFetch)
router.get('/api/brands/:brandID/feed', FeedsFetch)
router.get('/api/posts/:postID', PostFetch)
router.get('/api/slugs/:brandSlugLetter', SlugLookup)

router.get('/api/user/:brandSlugLetter', UserLookup)



// 404 for everything else
router.all('*', () => new Response('{}', { status: 404 }))

export default {
  fetch: router.handle,
}
