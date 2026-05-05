function setupAnimations() {
  const elements = document.querySelectorAll('.animate')
  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  elements.forEach((el) => observer.observe(el))
}

document.addEventListener('DOMContentLoaded', setupAnimations)
document.addEventListener('astro:after-swap', setupAnimations)
