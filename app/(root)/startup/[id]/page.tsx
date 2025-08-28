// to expose our page on the url /start/1 or 2 or 3, so we can show a new dynamic startp details page for each different startup


import React from 'react'

const Page = async ({ params }: { params:Promise<{ id: string }> }) => {
    const searchId = (await params).id;
    
    return (
        <>
            <h1 className="text-3xl">This is the startup number {searchId}</h1>
        </>
    )
}

export default Page