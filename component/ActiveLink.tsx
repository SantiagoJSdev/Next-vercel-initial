import { CSSProperties, FC, PropsWithChildren } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

 const styles: CSSProperties = {
    color: 'blue',
    textDecoration: 'underline'
 }

 interface Props {
  text: string;
  href: string;
 }

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const {asPath} = useRouter()
    
    
  return (
    <Link href= {href} >

        <a style={ asPath === href ? styles : undefined }>{text}</a>
    </Link>
  )
}
