import {motion} from 'framer-motion'
import {useState} from 'react'
import './SimpleLayoutAnimation.css'

export default function SimpleLayoutAnimation() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleSize = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="container">
            <button onClick={toggleSize}>Toggle Size</button>
            <motion.div
                className="box"
                animate={{
                    width: isExpanded ? 300 : 150,
                    height: isExpanded ? 300 : 150
                }}
            />
            </div>
    )
}