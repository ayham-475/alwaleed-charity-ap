import NewsHeader from "./NewsHeader"

import FeaturedNewsCard from "./FeaturedNewsCard"
import NewsGrid from "./NewsGrid"
export default function News(){
    return (
        <>
        <NewsHeader/>
        <FeaturedNewsCard/>
         <NewsGrid/>        
         {/* <NewsGrid/>        
         <NewsGrid/>         */}
        </>
    )
}