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
    // console.log(session);

  return (
    <header className='w-full z-50 backdrop-blur-2xl rounded-bl-2xl rounded-br-2xl md:px-10 px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={144}
                height={30}
                className='object-cover'/>
            </Link>

            {
              session && (
                <Link href="/startup/create" className='mx-auto'>
                  <span className='uppercase text-xl'>Create</span>
                </Link>
              )
            }

            <div className="flex items-center gap-5 text text-black">
              {
                session && session?.user ? (
                  <>
                    <form action={signOutFunction}>
                      <button type="submit">
                        LogOut
                      </button>
                    </form>

                    <Link href={`/user/$(session?.id)`} className="flex group flex-row gap-2 items-center group hover:scale-105 justify-center bg-primary/50 rounded-lg p-1 transition duration-300 ease-in-out">
                      <div className='flex flex-col flex-wrap'>
                        <p className='font-bold text-xl text-black leading-1 group-hover:scale-105 transition duration-300 ease-in-out hidden md:flex'>{session?.user?.name}</p>
                      </div>

                      <Image
                        src={session?.user?.image as string}
                        alt="Github image"
                        width={35}
                        height={35}
                        className='rounded-full shadow-200 group-hover:scale-105 transition duration-300 ease-in-out items-center justify-center flex'
                      />
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