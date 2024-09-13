import Image from "next/image";
import { Banner } from "./components/banner";
import { CategoryList } from "./components/category-list";
import ProductSection from "./components/product-section";
import DbConnect from "@/utils/dbconnect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Category from "@/models/Category";

const page = async ()=> {
  DbConnect();
  let categories = await Category.find({});
  return (
    <div>
      <Banner/>
      <div className="flex  gap-5 flex-1 px-[10%] mt-2">
        <div className="w-3/12">
        <CategoryList data={categories}/>
        </div>
        <div className="9/12">
        <ProductSection/>
        
        </div>
      </div>
      </div>
   
  );
}
export default page
