import { useSanityClient } from 'astro-sanity';

export async function getAllReviews() {
	const query = `*[_type == "review" && live == true]`;
	const reviews = await useSanityClient().fetch(query);
	
	return reviews;
}