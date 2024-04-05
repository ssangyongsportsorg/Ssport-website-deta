import { useSession } from "next-auth/react"

function AdminPage() {
  const { data: session } = useSession()

  if (!session) {
    return <div>Loading...</div>
  }

  if (session.user.role !== "admin") {
    return <div>Access Denied</div>
  }

  return (
    <div>
      <h1>Admin Page</h1>
      {/* 管理员页面内容 */}
    </div>
  )
}

export default AdminPage