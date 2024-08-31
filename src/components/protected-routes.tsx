"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/app/utils/routes";

export const ProtectedRoutes = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const isAllowedRoute = Object.values(routes).includes(pathname);

    if (!isAllowedRoute) {
      router.push(routes.home);
    } else {
      setIsAllowed(true);
    }
  }, [router, pathname]);

  if (isAllowed === null) {
    return (
      <div className="fixed inset-0 flex justify-center items-center space-x-1 text-sm bg-primary">
        <svg
          fill="none"
          className="w-6 h-6 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <div>Loading...</div>
      </div>
    );
  }
  return <>{children}</>;
};
