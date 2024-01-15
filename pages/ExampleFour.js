import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function () {
    const [number, setNumber] = useState(false);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useState(false);
    const HandleChange = () => {
        if (number > 2) {
            setColor("orange");
        }
        console.log(number);
    };
    useEffect(() => {
        var interval;

        if (trigger) {
            interval = setInterval(() => {
                HandleChange()
                setTrigger(false);
            }, 3000) // after 3 seconds the it will do the console log below
        }
        console.log(number);
        console.log(trigger);
        // clearing interval so it doesn't get stuck in a loop
        return () => clearInterval(interval);
    }, [trigger])
    return (
        <>
            <Header />
            <main>
                <button onClick={() => {
                    setNumber(number + 1);
                    setTrigger(true);

                }}> Add number

                </button>
                <h1 style={{ color: color }}>Change the text color</h1>
                {number > 1 && (
                    <div
                        style={{
                            background: `${color}`,
                            lineHeight: 10,
                            padding: 20
                        }}
                    >
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}