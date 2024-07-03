import { ReactNode } from "react"

interface DashBoardLayoutProps {
  children: ReactNode
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default DashBoardLayout