import { motion } from "framer-motion";

const ProdcutCard = ({ name, img, price }) => {
  return (
    <motion.div
      className="relative"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* <div className="absolute bottom-3 left-3 text-white">
        <h2>{name}</h2>
        <h2>{price} ₺</h2>
      </div> */}
      <img
        className="w-full h-64 object-cover"
        src={require("../../../assets/" + img)}
        alt=""
      />
    </motion.div>
  );
};

export default ProdcutCard;
