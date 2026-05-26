import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const notes = await getCollection('notes');
  return rss({
    title: `${site.name} — notes`,
    description: 'A quiet, durable notes archive from Faria Innovations.',
    site: context.site ?? site.url,
    items: notes
      .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
      .map((note) => ({
        title: note.data.title,
        pubDate: new Date(note.data.date),
        description: note.data.description ?? '',
        link: `/notes/${note.id.replace(/\.mdx?$/, '')}/`,
      })),
  });
}
