// pages/admin/dashboard.js

import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const DashboardPage = ({ user }) => {
  const router = useRouter();

  // 在頁面載入時檢查權限
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/unauthorized');
    }
  }, [user]);

  // 頁面內容
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* 其他內容 */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      user: session?.user || null,
    },
  };
}

export default DashboardPage;
