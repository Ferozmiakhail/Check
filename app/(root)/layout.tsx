import React from "react";;
import { Footer } from "@/components/index"

const Layout = ({ children }: { children: React.ReactNode}) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default Layout
