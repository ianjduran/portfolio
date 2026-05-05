import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"

type Props = {
  data: (CollectionEntry<"blog"> | CollectionEntry<"projects">)[]
}

export default function Search({data}: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<(CollectionEntry<"blog"> | CollectionEntry<"projects">)[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    if (query().length < 2) {
      setResults([])
    } else {
      setResults(fuse.search(query()).map((result) => result.item))
    }
  })

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  return (
    <div class="flex flex-col">
      <div class="relative group">
        <input name="search" type="text" value={query()} onInput={onInput} autocomplete="off" spellcheck={false} placeholder="INPUT_QUERY..." aria-label="Search posts and projects" class="w-full px-6 py-4 pl-12 rounded-none outline-none font-eyebrow-mono text-on-surface bg-white/[0.04] backdrop-blur-md border-[0.5px] border-white/10 focus:border-primary transition-colors uppercase tracking-widest placeholder:text-on-surface/30"/>
        <span class="material-symbols-outlined absolute size-6 left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
        <div class="absolute top-0 right-0 w-3 h-3 border-t-[0.5px] border-r-[0.5px] border-primary opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
      {(query().length >= 2 && results().length >= 1) && (
        <div class="mt-12">
          <div class="font-eyebrow-mono text-[10px] text-primary uppercase mb-4 tracking-widest flex items-center gap-2">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            SYS_FOUND_{results().length}_RECORDS_MATCHING "{query()}"
          </div>
          <ul class="flex flex-col gap-4">
            {results().map(result => (
              <li>
                <ArrowCard entry={result} pill={true} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}