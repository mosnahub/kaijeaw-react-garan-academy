import React from 'react';
import FoodCard from '../components/foodCrad'

const foodMenu = [
    {name: "เซ็ต ซูชิ", price: "89",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/240/sushi-1.jpg" ,},
{ name: "ราเมน", price: "69",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/241/ramen.jpg" ,},
{name: "อูนางิ", price: "99",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/242/unagi.png" ,},
{ name: "เทมปุระ", price: "79",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/243/tempura.jpg" ,},
{ name: "ไคเซกิ", price: "109",  pictrueURL: "https://d4ulp9jtgcw4i.cloudfront.net/uploads/ckeditor/pictures/1133/content_01_kaiseki2_w740z__Custom_.jpg" ,},
{ name: "โซบะ", price: "89",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/245/soba.jpg" ,},
{ name: "ชาบู", price: "169",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/246/shabu.jpg" ,},
{ name: "โอโคโนมิยากิ", price: "79",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/247/okonomiyaki.jpg" ,},
{ name: "ทงคัตสึ", price: "69",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/248/tonkatsu.jpg" ,},
{ name: "ยากิโทริ", price: "69",  pictrueURL: "https://tourdoc.s3.amazonaws.com/uploads/blog_post_image/image/249/yakitori.jpg" ,},
];

const Mcca = () => {
    return (
    <div>

        <h1>ปลาอะไรหิวตอนดึก</h1>
        <FoodCard />
    </div>
    );
}

export default Mcca;