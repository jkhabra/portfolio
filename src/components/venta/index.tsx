import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyBirds = (props: { children: any }) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x2f2fb1,
                color1: 0x1717cf,
                color2: 0xd424d4,
                colorMode: "variance",
                birdSize: 1.10,
                wingSpan: 14.00,
                speedLimit: 8.00,
                separation: 11.00,
                alignment: 10.00,
                cohesion: 35.00,
                quantity: 4.00,
                backgroundAlpha: 0.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return <div className="" ref={myRef}>
        {props.children}
    </div>
}

export default MyBirds;