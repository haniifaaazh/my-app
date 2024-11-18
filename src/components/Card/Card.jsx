import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/Button";

export default function Card({product}) {
  return (
    <div className="flex flex-col max-w-[270px] flex-wrap p-[14px] bg-[#C14E77]">
          <img src={product.imageUrl ?? 'no image'} alt={product.name ?? 'No name'} className="block max-h-[300px] mb-4 object-cover" />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-[18px] text-white">{product.name ?? 'No name'}</h4>
              <span className="block font-medium text-[14px] text-[#EAEAEA]">{product.category ?? 'Uncatagorized'}</span>
              <span className="block font-medium text-[20px] text-white">{formatToIDRCurrency(product.price) ?? 'Not for sale'}</span>
              <div>
                product.stock = 0 ? (
                    <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
                ) : (product.stock = 25 && product.stock !== 0) ? (
                  <>
                    <p className="text-xl font-semibold text-center text-yellow-500">Almost Out of Stock</p>
                        <Button type="button" className="inline-flex items-center justify-center gap-2
                        p-4 bg-[#F5EFEB] text-center hover:bg-[#FFFFFF] text-black active:bg-
                        [#F4EFE6]">
                        <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                        <span>Add to Cart</span>
                        </Button>
                  </>

                ) : (
                    <Button type="button" className="inline-flex items-center justify-center gap-2
                    p-4 bg-[#F5EFEB] text-center hover:bg-[#FFFFFF] text-black active:bg-
                    [#F4EFE6]">
                        <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                        <span>Add to Cart</span>
                    </Button>
                )
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    product: PropTypes.object
}
