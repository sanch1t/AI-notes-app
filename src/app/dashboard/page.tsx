import CreateNoteDialog from '@/components/CreateNoteDialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/lib/db'
import { $notes } from '@/lib/db/schema'
import { UserButton, auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { ArrowLeft } from 'lucide-react'
import { Butterfly_Kids } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DashboardPage = async (props: Props) => {
const {userId} = auth()
const notes = await db.select().from($notes).where(eq($notes.userId, userId!))

return (

    <div className='grain min-h-screen'>
        <div className='max-w-7xl mx-auto p-10 '>
            <div className="h-14"></div>
            <div className='flex justify-between items-center md:flex-row flex-col'>
                <div className='flex items-center'>
                    <Link href='/'>
                        <Button className='bg-gradient' size="sm">
                            <ArrowLeft className='mr-1 w-4 h-4 font-mont'/>
                            Back
                        </Button>
                    </Link>
                    <div className="w-4"></div>
                    <h1 className='text-3xl font-mont font-500 text-gray-900'>Saved Notes</h1>
                    <div className="w-4"></div>
                    <UserButton/>
                </div>
            </div>
            <div className="h-8"></div>
            <Separator />
            <div className="h-8"></div>
            {/*list all notes here  */}
            {notes.length === 0 && (
            <div className='text-center'>
                <h2 className='text-xl font-mont text-gray-500'>No saved notes. Create a new one now!</h2>
            </div>
             )}

            {/* display notes */}
            <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3'>
                <CreateNoteDialog/>
                {notes.map(note => {
                    return (
                        <a href={`/notebook/${note.id}`} key={note.id}>
                            <div className='border border-stone-200  rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition hover:-translate-y-1 font-mont'>
                         {/* throws errors because of input stream */}
                                <Image
                                    width={400}
                                    height={200}
                                    alt={note.name}
                                    src={note.imageUrl || ""}
                                />
                                <div className='p-4'>
                                    <h3 className='text-xl font-mont font-semibold text-gray-900'>
                                        {note.name}
                                    </h3>
                                    <div className="h-1"></div>
                                    <p className='text-sm text-gray-500'>
                                        {new Date(note.createdAt).toLocaleDateString()}
                                    </p>

                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    </div>
)
}
export default DashboardPage
//no