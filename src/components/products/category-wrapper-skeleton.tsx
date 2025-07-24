export default function CategoryWrapperSkeleton() {
  return (
    <section className="my-8 py-6 space-y-12 px-6">
      {
        [1, 2, 3, 4, 5].map(_ => (
          <div key={`category-skeleton-${_}`}>
            <div className="animate-pulse w-48 h-6 bg-neutral-200 mb-4 rounded-sm"></div>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-2">
              {
                [1, 2, 3, 4].map(p => (
                  <div key={`category-skeleton-${_}-prod-${p}`}>
                    <div className="flex h-20 px-2 py-4 space-x-4 shadow-sm rounded-sm animate-pulse bg-neutral-200"></div>
                  </div>
                ))
              }
            </section>
          </div>
        ))
      }
    </section>
  )
}