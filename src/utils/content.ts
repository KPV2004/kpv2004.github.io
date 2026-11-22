import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from './i18n';

type LocalizedCollection = 'projects' | 'competitions' | 'certificates';

const warned = new Set<string>();

/** "th/tiawpao" -> "tiawpao" */
export function entrySlug(entry: { id: string }) {
  return entry.id.replace(/^[a-z]{2}\//, '');
}

/**
 * Entries of a collection for one locale, keyed by the default-locale slugs.
 * A missing translation falls back to the English entry (with a build warning)
 * so EN and TH always expose the same set of pages.
 */
export async function getLocalizedCollection<C extends LocalizedCollection>(
  collection: C,
  lang: Lang,
): Promise<CollectionEntry<C>[]> {
  const entries = (await getCollection(collection)) as CollectionEntry<C>[];
  const inLang = (l: Lang) =>
    new Map(entries.filter((entry) => entry.id.startsWith(`${l}/`)).map((entry) => [entrySlug(entry), entry]));

  const base = inLang(defaultLang);
  const localized = inLang(lang);

  return [...base].map(([slug, entry]) => {
    const match = localized.get(slug);
    const key = `${lang}/${collection}/${slug}`;
    if (!match && !warned.has(key)) {
      warned.add(key);
      console.warn(`[i18n] Missing ${lang} translation for ${collection}/${slug}; using ${defaultLang}.`);
    }
    return match ?? entry;
  });
}

export async function getLocalizedPaths<C extends LocalizedCollection>(collection: C, lang: Lang) {
  const entries = await getLocalizedCollection(collection, lang);
  return entries.map((entry) => ({ params: { slug: entrySlug(entry) }, props: { entry } }));
}
