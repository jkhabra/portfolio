import { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

const Waves = (props: { children: any }) => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current
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

export default Waves;