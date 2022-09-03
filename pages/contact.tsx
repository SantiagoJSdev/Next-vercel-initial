 
import Link from 'next/link'
import { MainLayout } from '../component/layouts/MainLayout'
 

export default function contact() {
    return (
        <MainLayout>
             <h1>Contact</h1>
            <main className={ 'main'}>
                <h1 className={ 'title'}>
                    {/* Ir a <a href="/">Home</a> */}
                    Ir al <Link href="/">  Home.. New</Link>
                </h1>
                </main>
        </MainLayout>
    )
}
