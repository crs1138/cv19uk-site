// @todo add details to the query
export const fetchAllQuery = `* [ _type == 'event' ] | order(date asc, heading) {
  _id,
  heading,
  date,
  details,
  source,
  "authorName":author->name
}`;

export const fetchSiteSettings = `* [ _type == 'siteSettings' ] {
	title,
	footer,
  description
}`;