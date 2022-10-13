
import dynamic from "next/dynamic";
export default dynamic(()=>
    import('bootstrap/js/dist/carousel').then((res)=>{
        new Carousel('#myCarousel')
    }),{ssr:false}
)

export const Collapse=dynamic(()=>(
    import ('bootstrap/js/dist/collapse').then((res)=>{
        const collapseElementList = document.querySelectorAll('.collapse')
    })
),{ssr:false})