import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "redux/reducers/productSlice";
const ProductCard = ({ name, img, price, id }) => {
  const dispatch = useDispatch();

  const handleSelectedProduct = () => {
    dispatch(setSelectedProduct(id));
  };
  return (
    <Link to="/product-details/">
      <motion.div
        onClick={handleSelectedProduct}
        className="relative z-[0]"
        layout
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute bottom-3 left-3 text-white">
          <h2 className="text-sm">{price} ₺</h2>
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
