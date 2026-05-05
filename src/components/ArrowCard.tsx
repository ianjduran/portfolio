import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({entry, pill}: Props) {
    return (
      <a href={`/${entry.collection}/${entry.slug}`} class="group relative p-6 flex flex-col gap-3 border-[0.5px] border-white/10 bg-card-bg hover:bg-white/[0.04] hover:backdrop-blur-md transition-colors duration-300 overflow-hidden">
        <div class="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div class="w-full flex flex-col z-10 relative">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              {pill &&
                <div class="font-eyebrow-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-primary/30 text-primary bg-primary/10">
                  {entry.collection === "blog" ? "SYS_POST" : "SYS_PROJ"}
                </div>
              }
              <div class="font-eyebrow-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                {formatDate(entry.data.date)}
              </div>
            </div>
            <span class="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors text-sm">arrow_outward</span>
          </div>
          
          <div class="font-heading-section text-2xl text-on-surface group-hover:text-primary transition-colors">
            {entry.data.title}
          </div>

          <div class="font-body-main text-sm text-on-surface-variant mt-2 line-clamp-2">
            {entry.data.summary}
          </div>
          
          <ul class="flex flex-wrap mt-4 gap-2">
            {entry.data.tags.map((tag:string) => (
              <li class="font-eyebrow-mono text-[9px] uppercase py-0.5 px-2 bg-surface-container border-[0.5px] border-white/10 text-on-surface-variant">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
   )
}