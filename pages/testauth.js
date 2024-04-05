import { getSession } from 'next-auth/react'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  // 檢查用戶是否登錄以及是否為管理員角色
  if (!session || session.user.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const AdminPage = () => {
  return <div>This is an admin page</div>
}

export default AdminPage