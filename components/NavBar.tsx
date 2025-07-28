import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { auth, signOut, signIn } from "@/auth"

const signInFunction = async () => {
  "use server";
  await signIn('github');
}

const signOutFunction = async () => {
  "use server";
  await signOut({ redirectTo: '/'} );
}

const Navbar = async () => {
    const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={144} height={30} />
            </Link>

            <div className="flex items-center gap-5 text text-black">
              {
                session && session?.user ? (
                  <>
                    <Link href="/startup/create">
                      <span>Create</span>
                    </Link>

                    <form action={signOutFunction}>
                      <button type="submit">
                        LogOut
                      </button>
                    </form>

                    <Link href={`/user/$(session?.id)`}>
                      {session?.user?.name}
                    </Link>
                  </>
                ) : (
                  <form action={signInFunction}>
                    <button type="submit">
                      Login
                    </button>
                  </form>
                )
              }
            </div>
        </nav>
    </header>
  )
}

export default Navbar