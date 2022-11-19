import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductCard = ({ name, img, price }) => {
  return (
    <Link to="/product-details">
      <motion.div
        className="relative z-[0]"
        layout
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute bottom-3 left-3 text-white">
          <h2 className="text-xs">{price} ₺</h2>
        </div>
        <img
          className="w-full object-cover aspect-square rounded-md"
          src={require("../../../assets/" + img)}
          alt=""
        />
      </motion.div>
    </Link>
  );
};

export default ProductCard;
