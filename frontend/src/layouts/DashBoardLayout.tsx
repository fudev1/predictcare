import { ReactNode } from "react"

interface DashBoardLayoutProps {
  children: ReactNode
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}

export default DashBoardLayout