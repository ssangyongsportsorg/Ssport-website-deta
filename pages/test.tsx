import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  // 檢查使用者角色
  const checkUserRole = async () => {
    const session = await getSession();

    if (!session || session.user.role !== 'admin') {
      // 若使用者不是 admin，導向其他頁面
      router.push('/thanks');
    }
  };


  return (
    <div>
      sksk,s
    </div>
  );
}
