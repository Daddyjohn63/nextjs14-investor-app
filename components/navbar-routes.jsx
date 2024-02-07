'use client';

import { UserButton } from '@clerk/nextjs';
// import { usePathname } from 'next/navigation';
// import { LogOut } from 'lucide-react';
// import Link from 'next/link';

// import { Button } from '@/components/ui/button';
// import { isTeacher } from '@/lib/teacher';

// import { SearchInput } from './search-input';

export const NavbarRoutes = () => {
  // const { userId } = useAuth();
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.startsWith('/teacher');
  // const isCoursePage = pathname?.includes('/courses');
  // const isSearchPage = pathname === '/search';

  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton />
    </div>
  );
};
