 
import Link from 'next/link'
import { DarkLayout } from '../component/layouts/DarkLayout'
import { MainLayout } from '../component/layouts/MainLayout'
 

export default function aboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
      <main className={ 'main'}>
        <h1 className={'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir al<Link href="/">Home new</Link>
        </h1>
      </main>
      </DarkLayout>
       
    </MainLayout>
  )
}
