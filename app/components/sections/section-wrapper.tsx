import type React from "react"


export const SectionWrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <section className="h-screen snap-start snap-always">{children}</section>
  )
}
