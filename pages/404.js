import Link from "next/link";

const PageNotFound = () => {
   return(
       <div>
           <h1>404 | not found</h1>
           <h3>check the spelling </h3>
           <Link href = "/">
               Go to Home page
           </Link>
       </div>
   )
}
export default PageNotFound