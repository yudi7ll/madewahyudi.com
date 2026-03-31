import React from 'react'
import { SkillIcon } from '../../../components/common'
import { MyToolsIllustration } from '../../../components/svg'
import { motion } from 'framer-motion'

const MyTools = () => (
  <div className="mt-40" id="tools">
    <div className="container max-w-screen-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-lg-7"
        >
          <MyToolsIllustration className="w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 lg:mt-0 mx-auto"
        >
          <h2 className="text-header uppercase text-center">
            <span>the</span>
            <span className="text-y-accent"> tools</span>
            <span> that i use</span>
          </h2>
          <SkillIcon className="text-center max-w-md" />
        </motion.div>
      </div>
    </div>
  </div>
)

export default MyTools
