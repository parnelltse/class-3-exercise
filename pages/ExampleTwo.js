import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ExampleTwo(){
    /**
     * The [] makes sure the use Effect ony runs once
     * 
     * code on pages will run two times
     * one to render what we want and another is to
     * render strict mode to find any common bugs
     */
        useEffect(() => {
            console.log("RUN")
        
        })
    return(
        <>
        <Header/>
        <main>
            Example 2
        </main>
        <Footer/>
        </>
    )
}