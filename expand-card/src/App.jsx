import { useState } from 'react'
import './style.scss'
import {motion} from 'framer-motion'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
      <motion.div 
        layout 
        className="card" 
        onClick={() => setIsOpen(!isOpen)}
        style={{borderRadius: '1rem'}}
        transition={{duration: .5}}
      >
        <motion.div 
          className="card-top" 
          layout="position"
        >
          <div className="card-top__header">       
            <h3>React + Framer motion 🚀</h3>
          </div>
        </motion.div>
        
        {isOpen && (
          <motion.div 
            className="card-content"
            initial={{clipPath: 'circle(0% at 0 0)'}}
            animate={{clipPath: 'circle(140.9% at 0 0)'}}
            transition={{duration: .5,delay: .25,type:'spring', damping:25,stiffness: 100}}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi, doloribus cum nesciunt alias harum molestias tempore,
            </p>
          </motion.div>
        )}
      </motion.div>
  )
}

export default App