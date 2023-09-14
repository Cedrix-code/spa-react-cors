import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Dashboard = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
    <motion.h1
    initial="hidden"
    animate="show"
    variants={textVariant(0.3)}
    className={`${styles.sectionHeadText} text-white flex gap-4 mt-24 ml-4`}
>Profile</motion.h1>
    <div
      className={`absolute inset-0 justify-center items-center ${styles.paddingX} flex flex-row items-start gap-5 select-none`}
    >
        <>
        {!!user && (
            <motion.h2
                initial="hidden"
                animate="show"
                variants={textVariant(0.3)}
                className={`${styles.heroSubText} text-white flex items-center gap-4`}
            >
                Hi {user.name}!
            </motion.h2>
        )}
        </>
    </div>
    </div>
  )
}

export default Dashboard;
{/* <p>Welcome {user.username}</p>
<p>Email: {user.email}</p>
<p>Role: {user.role}</p>
<p>ID: {user.id}</p>
<p>Created At: {user.createdAt}</p>
<p>Updated At: {user.updatedAt}</p>
<p>Deleted At: {user.deletedAt}</p> */}