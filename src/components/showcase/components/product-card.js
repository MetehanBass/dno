import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "redux/reducers/productSlice";
import { BsArrowRight } from "react-icons/bs";

const ProductCard = ({ name, img, price, id }) => {
  const dispatch = useDispatch();
  const splittedPrice = price.toString().split(".");
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
        <img
          className="w-full object-cover aspect-square"
          src={require("../../../assets/" + img)}
          alt=""
        />
        <div className="flex text-black justify-between px-4 items-center w-full h-auto  bg-[#EFEFEF]">
          <div className="flex items-baseline text-black">
            <p className="text-base font-medium">{splittedPrice[0]}.</p>
            <p className="text-xs">{splittedPrice[1]} ₺</p>
          </div>
          <p>
            <BsArrowRight />
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
