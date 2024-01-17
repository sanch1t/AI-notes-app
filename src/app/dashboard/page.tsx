import CreateNoteDialog from '@/components/CreateNoteDialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import { Butterfly_Kids } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

type Props = {}

const DashboardPage = (props: Props) => {
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
            <div className='text-center'>
                <h2 className='text-xl font-mont text-gray-500'>No saved notes. Create a new one now!</h2>
            </div>

            {/* display notes */}
            <div className='grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3'>
                <CreateNoteDialog/>
            </div>
        </div>
    </div>
)
}
export default DashboardPage